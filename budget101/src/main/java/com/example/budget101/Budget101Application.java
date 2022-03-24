package com.example.budget101;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.budget101.model.HelloWorld;
import com.example.budget101.service.BusinessService;

@SpringBootApplication
public class Budget101Application implements CommandLineRunner {
	
	@Autowired
	private BusinessService bs;

	public static void main(String[] args) {
		SpringApplication.run(Budget101Application.class, args);
	}
	
	@Override
    public void run(String... args) throws Exception {
		HelloWorld hw = bs.getHelloWorld();

		System.out.println(hw);
    }

}
