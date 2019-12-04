package com.putt.passport.demo;

import lombok.extern.log4j.Log4j2;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

@Component
@SpringBootApplication
@EnableWebSocket
@Log4j2
public class FactoryCreatorApp {


	public static void main(String[] args) {

		SpringApplication.run(FactoryCreatorApp.class, args);
	}


}
