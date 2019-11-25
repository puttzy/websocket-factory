package com.putt.passport.demo.service;

import com.putt.passport.demo.models.FactoryResponseNode;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Util {

    public static double getRandomIntegerBetweenRange(double min, double max){
        return (int)(Math.random()*((max-min)+1))+min;

    }

    public  static Set<FactoryResponseNode> generateNodes(int numberOfNodes, int min, int max, long factoryId){
        List<FactoryResponseNode> nodes = new ArrayList<>();
        for (int i = 0 ; i < numberOfNodes ; i++){
            FactoryResponseNode node = new FactoryResponseNode((long)i, (long)Util.getRandomIntegerBetweenRange(min, max), factoryId);

            nodes.add(node);
        }
        return new HashSet<FactoryResponseNode>(nodes);
    }



}
