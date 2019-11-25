package com.putt.passport.demo.models.request;

import lombok.Data;

@Data
public class CreateFactoryRequest {


    String name;
    int number;
    int min;
    int max;

}
