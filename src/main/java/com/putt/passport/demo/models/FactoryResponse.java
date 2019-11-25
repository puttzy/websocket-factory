package com.putt.passport.demo.models;

import com.putt.passport.demo.models.request.CreateFactoryRequest;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@EqualsAndHashCode(callSuper=false)
public class FactoryResponse extends CreateFactoryRequest {


    Long id;
    Set<FactoryResponseNode> nodes;






}
