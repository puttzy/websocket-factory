package com.putt.passport.demo.dao.extractors;

import com.putt.passport.demo.models.response.FactoryNodeResponse;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FactoryNodeRowMapper implements RowMapper<FactoryNodeResponse> {


    @Override
    public FactoryNodeResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
        FactoryNodeResponse factoryNodeResponse = new FactoryNodeResponse();
        factoryNodeResponse.setId(rs.getLong("node_id"));
        factoryNodeResponse.setValue(rs.getLong("value"));
        factoryNodeResponse.setFactoryId(rs.getLong("factory_id"));
        return factoryNodeResponse;
    }
}
