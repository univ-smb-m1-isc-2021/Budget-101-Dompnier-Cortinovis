package com.example.budget101;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.budget101.service.BusinessService;

@SpringBootTest
class Budget101ApplicationTests {
	
	@Autowired
    private BusinessService bs;

	@Test
	void contextLoads() {
	}
	
	 @Test
	    public void testGetBudget101() {

	        String expected = "Hello world";

	        String result = bs.getHelloWorld().toString();

	        assertEquals(expected, result);
	    }

}
