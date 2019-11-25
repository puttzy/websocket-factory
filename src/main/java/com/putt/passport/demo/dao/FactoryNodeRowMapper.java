package com.putt.passport.demo.dao;

import com.putt.passport.demo.models.FactoryResponse;
import com.putt.passport.demo.models.FactoryResponseNode;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class FactoryNodeRowMapper implements RowMapper<FactoryResponseNode> {


    @Override
    public FactoryResponseNode mapRow(ResultSet rs, int rowNum) throws SQLException {
        FactoryResponseNode factoryResponseNode = new FactoryResponseNode();
        factoryResponseNode.setId(rs.getLong("node_id"));
        factoryResponseNode.setValue(rs.getLong("value"));
        factoryResponseNode.setFactoryId(rs.getLong("factory_id"));
        return factoryResponseNode;
    }
}
