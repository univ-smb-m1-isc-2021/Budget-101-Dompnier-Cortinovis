package com.example.budget101.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.budget101.model.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}