package com.example.demo.pservice;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.ppassenger.Passenger;
import com.example.demo.prepository.PassengerRepository;


@Service
public class PassengerService {
	@Autowired
	PassengerRepository repository;
	public String addPassenger(Passenger passenger) {
		repository.save(passenger);
		return "Admitted";
	}
	public String deletePassengerById(int id) {
		repository.deleteById(id);
		return "Deleted";
	}
	public Passenger updatePassengerById(Passenger passenger) {
		return repository.save(passenger);
	}
	public List<Passenger> getPassenger(){
		return repository.findAll();
	}
	public Optional<Passenger> getPassengerById(int id){
		return repository.findById(id);
	}
	
	public List<Passenger> getSortedPassenger(String field){
		return repository.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	
	public List<Passenger> getPassengerWithPagination(int offset,int pagesize){
		Page<Passenger> passenger=repository.findAll(PageRequest.of(offset, pagesize));
		return passenger.getContent();
	}
	public List<Passenger> getPassengerWithSortedPagination(int offset,int pagesize,String field){
		Page<Passenger> passenger=repository.findAll(PageRequest.of(offset, pagesize,Sort.by(field)));
		return passenger.getContent();
	}
}