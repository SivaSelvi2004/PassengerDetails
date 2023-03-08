package com.example.demo.prepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.ppassenger.Passenger;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger,Integer>{

}
