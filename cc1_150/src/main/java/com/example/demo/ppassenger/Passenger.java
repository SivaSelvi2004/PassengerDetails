package com.example.demo.ppassenger;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Passenger {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int passengerId;
	private String passengerName;
	private int passengerAge;
	private String passengerGender;
	private String passengerClass;
	private String arrivalpoint;
	private String depaturePoint;
	private String date;
	public int getPassengerId() {
		return passengerId;
	}
	public void setPassengerId(int passengerId) {
		this.passengerId = passengerId;
	}
	public String getPassengerName() {
		return passengerName;
	}
	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}
	public int getPassengerAge() {
		return passengerAge;
	}
	public void setPassengerAge(int passengerAge) {
		this.passengerAge = passengerAge;
	}
	public String getPassengerGender() {
		return passengerGender;
	}
	public void setPassengerGender(String passengerGender) {
		this.passengerGender = passengerGender;
	}
	public String getPassengerClass() {
		return passengerClass;
	}
	public void setPassengerClass(String passengerClass) {
		this.passengerClass = passengerClass;
	}
	public String getArrivalpoint() {
		return arrivalpoint;
	}
	public void setArrivalpoint(String arrivalpoint) {
		this.arrivalpoint = arrivalpoint;
	}
	public String getDepaturePoint() {
		return depaturePoint;
	}
	public void setDepaturePoint(String depaturePoint) {
		this.depaturePoint = depaturePoint;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
}