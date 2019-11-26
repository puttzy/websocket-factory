package com.putt.passport.demo.service;

import com.putt.passport.demo.models.request.CreateFactoryRequest;
import com.putt.passport.demo.models.request.UpdateFactoryRequest;
import com.putt.passport.demo.models.response.FactoryResponse;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Util {

    public static double getRandomIntegerBetweenRange(double min, double max){
        return (int)(Math.random()*((max-min)+1))+min;

    }

    public  static Set<FactoryResponse.FactoryNode> generateNodes(CreateFactoryRequest updateFactoryRequest){
        List<FactoryResponse.FactoryNode> nodes = new ArrayList<>();
        for (int i = 0 ; i < updateFactoryRequest.getNumber() ; i++){
            FactoryResponse.FactoryNode  node = new FactoryResponse().new FactoryNode((long)i, (long)Util.getRandomIntegerBetweenRange(updateFactoryRequest.getMin(), updateFactoryRequest.getMax()));

            nodes.add(node);
        }
        return new HashSet<>(nodes);
    }



}
