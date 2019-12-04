package com.putt.passport.demo.models.request;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UpdateFactoryRequest extends CreateFactoryRequest {

    long id;
}
