package com.putt.passport.demo.service;

import com.putt.passport.demo.dao.FactoryDao;
import com.putt.passport.demo.models.response.FactoryResponse;
import com.putt.passport.demo.models.request.CreateFactoryRequest;
import com.putt.passport.demo.models.request.UpdateFactoryRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Factory {

    private FactoryDao factoryDao;


    public Factory(FactoryDao factoryDao){
        this.factoryDao = factoryDao;
    }

    public long deleteFactory(Long factoryId){
        return factoryDao.deleteFactory(factoryId);
    }

    public List<FactoryResponse> getAllFactories(){

        return factoryDao.getAllFactoriesAndNodes();
    }

    public FactoryResponse insertFactory(CreateFactoryRequest requestFactory){
        FactoryResponse factoryResponse = createFactory(requestFactory);
        Long factoryId = factoryDao.insertFactory(factoryResponse);
        factoryDao.insertFactoryNodes(factoryResponse.getNodes(), factoryId);
        return factoryDao.getFactoriesAndNodesByFactoryId(factoryId).get(0);
    }

    public FactoryResponse updateFactory(UpdateFactoryRequest updateFactoryRequest){
        factoryDao.deleteFactoryNodes(updateFactoryRequest.getId());
        factoryDao.updateFactory(updateFactoryRequest);
        factoryDao.insertFactoryNodes(Util.generateNodes(updateFactoryRequest.getNumber(), updateFactoryRequest.getMin(), updateFactoryRequest.getMax(), updateFactoryRequest.getId()), updateFactoryRequest.getId());
        return factoryDao.getFactoriesAndNodesByFactoryId(updateFactoryRequest.getId()).get(0);

    }

    private FactoryResponse createFactory(CreateFactoryRequest requestFactory){
        FactoryResponse factoryResponse = new FactoryResponse();
        factoryResponse.setMax(requestFactory.getMax());
        factoryResponse.setMin(requestFactory.getMin());
        factoryResponse.setName(requestFactory.getName());
        factoryResponse.setNumber(requestFactory.getNumber());
        factoryResponse.setNodes(Util.generateNodes(requestFactory.getNumber(), requestFactory.getMin(), requestFactory.getMax(), 1));
        return factoryResponse;
    }



}
