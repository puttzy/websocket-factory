package com.putt.passport.demo.dao.extractors;

import com.putt.passport.demo.models.response.FactoryResponse;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;

public class FactoryRowMapper  implements RowMapper<FactoryResponse> {


    @Override
    public FactoryResponse mapRow(ResultSet rs, int rowNum) throws SQLException {
        FactoryResponse factoryResponse = new FactoryResponse();
        factoryResponse.setId(rs.getLong("factory_id"));
        factoryResponse.setMin(rs.getInt("minRange"));
        factoryResponse.setMin(rs.getInt("maxRange"));
        factoryResponse.setName(rs.getString("name"));
        factoryResponse.setNodes(new HashSet<>());
        return factoryResponse;
    }
}
