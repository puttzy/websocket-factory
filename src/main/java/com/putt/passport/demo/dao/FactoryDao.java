package com.putt.passport.demo.dao;

import com.putt.passport.demo.dao.extractors.FactoryResponseExtractor;
import com.putt.passport.demo.models.request.RenameFactoryRequest;
import com.putt.passport.demo.models.request.UpdateFactoryRequest;
import com.putt.passport.demo.models.response.FactoryNodeResponse;
import com.putt.passport.demo.models.response.FactoryResponse;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Repository
public class FactoryDao {

    JdbcTemplate jdbcTemplate;

    public FactoryDao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

    private static final String GET_ALL = "Select f.factory_id\n" +
            ", f.name\n" +
            ", f.minRange\n" +
            ", f.maxRange\n" +
            ", fn.node_id\n" +
            ", fn.factory_id\n" +
            ", fn.value\n" +
            "from factory f \n" +
            "join factory_nodes fn on f.factory_id = fn.factory_id";

    private static final String WHERE = " where f.factory_id = ?     ";

    private static final String ORDER_BY = " order by f.factory_id asc, fn.node_id asc" ;

    private static final String INSERT_FACTORY = "insert into factory " +
            " (name, minRange, maxRange) values (?, ?, ?)";

    private static final String INSERT_FACTORY_NODES = "insert into factory_nodes " +
            " (factory_id, value) values (?, ?)";

    private static final String RENAME_FACTORY = "update factory set name = ? where factory_id = ? ";
    private static final String UPDATE_FACTORY = "update factory set name = ?, minRange = ? , maxRange = ? where factory_id = ?";
    private static final String DELETE_FACTORY = "delete from factory where factory_id = ? ";
    private static final String DELETE_FACTORY_NODES = "delete from factory_nodes where factory_id = ? ";

    private PreparedStatement singleParamQuery(Connection connection, String query, Long factoryId) throws SQLException {
        PreparedStatement ps = connection
                .prepareStatement(query);
        ps.setLong(1, factoryId);
        return ps;
    }

    public FactoryResponse getFactoryAndNodesByFactoryId(Long factoryId){
        return Objects.requireNonNull(jdbcTemplate.query(
                connection -> singleParamQuery(connection, GET_ALL + WHERE + ORDER_BY, factoryId), new FactoryResponseExtractor())).get(0);
    }

    public List<FactoryResponse> getAllFactoriesAndNodes(){
        return jdbcTemplate.query(GET_ALL+ ORDER_BY, new FactoryResponseExtractor());
    }

    public void deleteFactoryNodes(Long factoryId){
        jdbcTemplate.update(
                connection ->
                        singleParamQuery(connection, DELETE_FACTORY_NODES, factoryId));

    }

    public long deleteFactory(Long factoryId){
        jdbcTemplate.update(
                connection ->
                        singleParamQuery(connection, DELETE_FACTORY, factoryId));
        return factoryId;
    }

    public void updateFactory(UpdateFactoryRequest updateFactoryRequest){
        deleteFactoryNodes(updateFactoryRequest.getId());
        jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps = connection
                            .prepareStatement(UPDATE_FACTORY);
                    ps.setString(1, updateFactoryRequest.getName());
                    ps.setInt(2, updateFactoryRequest.getMin());
                    ps.setInt(3, updateFactoryRequest.getMax());
                    ps.setLong(4, updateFactoryRequest.getId());
                    return ps;
                }
        );

    }

    public void renameFactory(RenameFactoryRequest renameFactoryRequest){
        jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps = connection
                            .prepareStatement(RENAME_FACTORY);
                    ps.setString(1, renameFactoryRequest.getName());
                    ps.setLong(2, renameFactoryRequest.getId());
                    return ps;
                }
        );

    }

    public Long insertFactory(FactoryResponse factoryResponse){
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps = connection
                            .prepareStatement(INSERT_FACTORY, Statement.RETURN_GENERATED_KEYS);
                    ps.setString(1, factoryResponse.getName());
                    ps.setInt(2, factoryResponse.getMin());
                    ps.setInt(3, factoryResponse.getMax());
                    return ps;
                }, keyHolder
        );


        return keyHolder.getKey().longValue();
    }

    public void insertFactoryNodes(Set<FactoryNodeResponse> factoryNodeResponses, long factoryId){
        factoryNodeResponses.forEach(factoryNode -> jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps = connection
                            .prepareStatement(INSERT_FACTORY_NODES);
                    ps.setLong(1, factoryId);
                    ps.setLong(2, factoryNode.getValue());

                    return ps;
                }
            ));
    }



}
