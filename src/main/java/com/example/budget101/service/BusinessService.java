package com.example.budget101.service;

import org.springframework.stereotype.Component;

import com.example.budget101.model.HelloWorld;

@Component
public class BusinessService {
	
	public BusinessService() {
		
	}
	
	public HelloWorld getHelloWorld() {
		return new HelloWorld();
	}
}
