package com.putt.passport.demo.controllers;


import com.putt.passport.demo.models.request.CreateFactoryRequest;
import com.putt.passport.demo.models.request.DeleteFactoryRequest;
import com.putt.passport.demo.models.request.RenameFactoryRequest;
import com.putt.passport.demo.models.request.UpdateFactoryRequest;
import com.putt.passport.demo.models.response.FactoryResponse;
import com.putt.passport.demo.service.Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class FactoryController {

    private final Factory factory;

    @Autowired
    public FactoryController(Factory factory) {
        this.factory = factory;
    }

    @MessageMapping("/add-factory")
    @SendTo("/topic/factory-added")
    public FactoryResponse addFactory(CreateFactoryRequest createFactoryRequest) {
        return factory.insertFactory(createFactoryRequest);
    }

    @MessageMapping("/rename-factory")
    @SendTo("/topic/factory-updated")
    public FactoryResponse renameFactory(RenameFactoryRequest renameFactoryRequest) {
        return factory.renameFactory(renameFactoryRequest);
    }

    @MessageMapping("/delete-factory")
    @SendTo("/topic/factory-deleted")
    public long removeFactory(DeleteFactoryRequest deleteFactoryRequest) {
        return factory.deleteFactory(deleteFactoryRequest.getFactoryId());
    }

    @MessageMapping("/update-factory")
    @SendTo("/topic/factory-updated")
    public FactoryResponse updateFactory(UpdateFactoryRequest updateFactoryRequest) {
        return factory.updateFactory(updateFactoryRequest);
    }

    @MessageMapping("/load/{sessionId}")
    @SendTo("/topic/load/{sessionId}")
    public List<FactoryResponse> connect(@DestinationVariable String sessionId) {
        return factory.getAllFactories();
    }

}
