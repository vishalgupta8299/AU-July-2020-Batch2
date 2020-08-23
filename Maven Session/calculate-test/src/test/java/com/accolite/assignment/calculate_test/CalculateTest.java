package com.accolite.assignment.calculate_test;

import calculate_service.CalculateService;

public class CalculateTest {
	public static void main(String[] args) {
		CalculateService calcService = new CalculateService();
		//Addition using CalculateService object
		System.out.println("10+15="+calcService.add(10, 15));
		//Subtraction using CalculateService object
		System.out.println("10-15="+calcService.subtract(10, 15));
		//Multiply Using CalculateService Object
		System.out.println("10*15="+calcService.multiply(10, 15));
		//Divide using CalculateService object
		System.out.println("150/15="+calcService.divide(150, 15));				
	}
}
