package com.putt.passport.demo.controllers;


import com.putt.passport.demo.models.FactoryResponse;
import com.putt.passport.demo.models.request.CreateFactoryRequest;
import com.putt.passport.demo.models.request.DeleteFactoryRequest;
import com.putt.passport.demo.models.request.UpdateFactoryRequest;
import com.putt.passport.demo.service.Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import javax.websocket.EncodeException;
import java.io.IOException;
import java.util.List;

@Controller
public class NodeFactoryController {

    private Factory factory;

    @Autowired
    public NodeFactoryController(Factory factory) {
        this.factory = factory;
    }

    @MessageMapping("/add-factory")
    @SendTo("/topic/factory-added")
    public FactoryResponse addFactory(CreateFactoryRequest createFactoryRequest) throws IOException, EncodeException {
        return factory.insertFactory(createFactoryRequest);
    }

    @MessageMapping("/delete-factory")
    @SendTo("/topic/factory-deleted")
    public long removeFactory(DeleteFactoryRequest deleteFactoryRequest) throws IOException, EncodeException {
        return factory.deleteFactory(deleteFactoryRequest.getFactoryId());
    }

    @MessageMapping("/update-factory")
    @SendTo("/topic/factory-updated")
    public FactoryResponse updateFactory(UpdateFactoryRequest updateFactoryRequest) throws IOException, EncodeException {
        return factory.updateFactory(updateFactoryRequest);
    }

    @MessageMapping("/load/{sessionId}")
    @SendTo("/topic/load/{sessionId}")
    public List<FactoryResponse> connect(@DestinationVariable String sessionId) throws Exception {
        return factory.getAllFactories();
    }

}
