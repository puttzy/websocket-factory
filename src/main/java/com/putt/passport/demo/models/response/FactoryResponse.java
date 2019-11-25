package com.putt.passport.demo.models.response;

import com.putt.passport.demo.models.request.CreateFactoryRequest;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@EqualsAndHashCode()
public class FactoryResponse extends CreateFactoryRequest {
    Long id;
    Set<FactoryNodeResponse> nodes;
}
