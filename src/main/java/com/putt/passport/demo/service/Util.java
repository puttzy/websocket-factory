package com.putt.passport.demo.service;

import com.putt.passport.demo.models.response.FactoryNodeResponse;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Util {

    public static double getRandomIntegerBetweenRange(double min, double max){
        return (int)(Math.random()*((max-min)+1))+min;

    }

    public  static Set<FactoryNodeResponse> generateNodes(int numberOfNodes, int min, int max, long factoryId){
        List<FactoryNodeResponse> nodes = new ArrayList<>();
        for (int i = 0 ; i < numberOfNodes ; i++){
            FactoryNodeResponse node = new FactoryNodeResponse((long)i, (long)Util.getRandomIntegerBetweenRange(min, max), factoryId);

            nodes.add(node);
        }
        return new HashSet<>(nodes);
    }



}
