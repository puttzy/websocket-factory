package com.putt.passport.demo.dao.extractors;

import com.putt.passport.demo.models.response.FactoryResponse;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

class FactoryNodeRowMapper implements RowMapper<FactoryResponse.FactoryNode> {


    @Override
    public FactoryResponse.FactoryNode mapRow(ResultSet rs, int rowNum) throws SQLException {
        FactoryResponse.FactoryNode factoryNode = new FactoryResponse.FactoryNode();
        factoryNode.setId(rs.getLong("node_id"));
        factoryNode.setValue(rs.getLong("value"));
        factoryNode.setFactoryId(rs.getLong("factory_id"));
        return factoryNode;
    }
}
