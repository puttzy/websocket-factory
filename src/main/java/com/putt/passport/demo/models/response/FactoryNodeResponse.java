package com.putt.passport.demo.models.response;

import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class FactoryNodeResponse {

    Long id;
    Long value;
    Long factoryId;

    public FactoryNodeResponse(Long id, long value, long factoryId){
        this.id = id;
        this.value = value;
        this.factoryId = factoryId;
    }

}
