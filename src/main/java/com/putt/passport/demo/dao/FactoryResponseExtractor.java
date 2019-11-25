package com.putt.passport.demo.dao;

import com.putt.passport.demo.models.FactoryResponse;
import com.putt.passport.demo.models.FactoryResponseNode;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
            }

            FactoryResponseNode factoryResponseNode = factoryNodeRowMapper.mapRow(rs, factoryResponse.getNodes().size());

            factoryResponse.getNodes().add(factoryResponseNode);
            factories.put(factoryId, factoryResponse);

        }
        return new ArrayList<>(factories.values());
    }
}
