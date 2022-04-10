package com.example.budget101.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.budget101.model.Employee;
import com.example.budget101.service.EmployeeService;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    /**
     * Read - Get all employees
     * @return - An Iterable object of Employee full filled
     */

    @GetMapping("/employees")
    public Iterable<Employee> getEmployees() {
        return employeeService.getEmployees();
    }

    /**
     * Create - Add a new employee
     * @param employee An object employee
     * @return The employee object saved
     */
    @PostMapping("/employee")
    public Employee addEmployee(Employee employee) {
        return employeeService.saveEmployee(employee);
    }

}