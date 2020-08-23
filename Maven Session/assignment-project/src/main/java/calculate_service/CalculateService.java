package calculate_service;

import interfaces.CalculateInterface;

public class CalculateService implements CalculateInterface {
	public int add(int a, int b)
	{
		return a+b;
	}
	public int multiply(int a, int b)
	{
		return a*b;
	}
	public int subtract(int a, int b)
	{
		return a-b;
	}
	public int divide(int a, int b) throws ArithmeticException
	{
		if(b==0)
			throw new ArithmeticException("Division by Zero is not Allowed");
		return a/b;
	}
}
