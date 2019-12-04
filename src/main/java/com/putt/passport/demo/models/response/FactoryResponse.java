package com.putt.passport.demo.models.response;

import com.putt.passport.demo.models.request.CreateFactoryRequest;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.Set;

@Data
@EqualsAndHashCode
public class FactoryResponse extends CreateFactoryRequest {
    Long id;
    Set<FactoryNode> nodes;


    @Data
    @NoArgsConstructor
    public static class FactoryNode {

        Long id;
        Long value;
        Long factoryId;

        public FactoryNode(Long id, long value, long factoryId){
            this.id = id;
            this.value = value;
            this.factoryId = factoryId;
        }

        public FactoryNode(long factoryId, long value){
            this.value = value;
            this.factoryId = factoryId;
        }

    }
}
