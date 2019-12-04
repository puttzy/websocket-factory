package com.putt.passport.demo.dao.extractors;

import com.putt.passport.demo.models.response.FactoryResponse;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public class FactoryResponseExtractor implements ResultSetExtractor<List<FactoryResponse>> {


    @Override
    public List<FactoryResponse> extractData(ResultSet rs) throws SQLException, DataAccessException {

        Map<Long, FactoryResponse> factories = new HashMap<>();
        FactoryRowMapper factoryRowMapper = new FactoryRowMapper();
        FactoryNodeRowMapper factoryNodeRowMapper = new FactoryNodeRowMapper();

        while(rs.next()){
            Long factoryId = rs.getLong("factory_id");

            FactoryResponse factoryResponse = factories.get(factoryId);

            if (factoryResponse == null){
                factoryResponse = factoryRowMapper.mapRow(rs, factories.size());
                factoryResponse.setNodes(new HashSet<>());
            }

            FactoryResponse.FactoryNode factoryNode = factoryNodeRowMapper.mapRow(rs, factoryResponse.getNodes().size());

            factoryResponse.getNodes().add(factoryNode);
            factoryResponse.setNumber(factoryResponse.getNodes().size());
            factories.put(factoryId, factoryResponse);

        }
        return new ArrayList<>(factories.values());
    }
}
