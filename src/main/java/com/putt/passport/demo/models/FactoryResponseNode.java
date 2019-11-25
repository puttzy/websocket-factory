package com.putt.passport.demo.models;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class FactoryResponseNode {

    Long id;
    Long value;
    Long factoryId;

    public FactoryResponseNode(Long id, long value, long factoryId){
        this.id = id;
        this.value = value;
        this.factoryId = factoryId;
    }

}
