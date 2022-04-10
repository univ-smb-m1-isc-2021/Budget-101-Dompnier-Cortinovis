package com.example.budget101;

import com.example.budget101.model.Employee;
import com.example.budget101.model.User;
import com.example.budget101.repository.UserRepository;
import com.example.budget101.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class Budget101Application implements CommandLineRunner {

	@Autowired
	private EmployeeService es;

	@Autowired
	private UserRepository ur;


	public static void main(String[] args) {
		SpringApplication.run(Budget101Application.class, args);
	}
	
	@Override
    public void run(String... args) throws Exception {


//		User u = new User();
//		u.setEmail("admin@gmail.com");
//		u.setPassword(new BCryptPasswordEncoder().encode("123"));
//
//		ur.save(u);
//		Employee e = new Employee();
//		e.setFirstName("John");
//		e.setLastName("Doe");
//
//		es.saveEmployee(e);
//		es.saveEmployee(new Employee("John", "Doe"));
    }

}
