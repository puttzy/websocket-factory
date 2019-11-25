package com.putt.passport.demo.models.request;

import lombok.Data;

@Data
public class UpdateFactoryRequest {

    long id;
    String name;
    int number;
    int min;
    int max;

}
