package com.putt.passport.demo.controllers;

import com.putt.passport.demo.models.FactoryResponse;
import com.putt.passport.demo.models.Greeting;
import com.putt.passport.demo.models.Message;
import com.putt.passport.demo.service.Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import java.util.List;

@Controller
public class WebSocketController {
/*

    private Factory factory;

    @Autowired
    public WebSocketController(Factory factory) {
        this.factory = factory;
    }

    @MessageMapping("/load/{sessionId}")
    @SendTo("/topic/load/{sessionId}")
    public List<FactoryResponse> connect(@DestinationVariable String sessionId) throws Exception {
        return factory.getAllFactories();
    }
*/

}


