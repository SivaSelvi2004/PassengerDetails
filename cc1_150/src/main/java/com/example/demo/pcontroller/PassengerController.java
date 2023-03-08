package com.example.demo.pcontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.ppassenger.Passenger;
import com.example.demo.pservice.PassengerService;


@RestController
@RequestMapping("/passenger")
@CrossOrigin(origins="http://localhost:3000/")

public class PassengerController {
	@Autowired
	PassengerService service;
	
	@PostMapping("")
	public String add(@RequestBody Passenger passenger) {
		return service.addPassenger(passenger);
	}
	
	@PutMapping("/put")
	public Passenger updateById(@RequestBody Passenger passenger) {
		return service.updatePassengerById(passenger);
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteById(@PathVariable int id) {
		return service.deletePassengerById(id);
	}
	
	@GetMapping("")
	public List<Passenger> get(){
		return service.getPassenger();
	}
	
	@GetMapping("/{id}")
	public Optional<Passenger> getById(@PathVariable int id){
		return service.getPassengerById(id);
	}
	
	@GetMapping("/sort/{field}")
	public List<Passenger> getSorted(@PathVariable String field){
		return service.getSortedPassenger(field);
	}
	
	@GetMapping("/{offset}/{pagesize}")
	public List<Passenger> getWithPagination(@PathVariable int offset,@PathVariable int pagesize){
		return service.getPassengerWithPagination(offset,pagesize);
	}
	
	@GetMapping("/{offset}/{pagesize}/{field}")
	public List<Passenger> getWithSortedPagination(@PathVariable int offset,@PathVariable int pagesize,@PathVariable String field){
		return service.getPassengerWithSortedPagination(offset,pagesize,field);
	}
}