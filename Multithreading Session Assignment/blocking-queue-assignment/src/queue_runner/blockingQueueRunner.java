package queue_runner;

import java.util.Scanner;

import blocking_queue_impl.BlockingQueue;

public class blockingQueueRunner {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter Queue Size: ");
		int size = sc.nextInt();
		BlockingQueue blockingQueue = new BlockingQueue(size);
		System.out.print("Enter No of Producers: ");
		int producers = sc.nextInt();
		System.out.print("Enter No of Consumers: ");
		int consumers = sc.nextInt();
		sc.close();
		

		System.out.println("<----- Started Execution ----->");
		for(int i=0; i<consumers; i++)
		{
			new Thread(()->{
				try {
					blockingQueue.take();
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
			}).start();
		}
		
		for(int i=0; i<producers; i++)
		{
			new Thread(()->{
				try {
					blockingQueue.put(1);
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
			}).start();
		}
		
		System.out.println("<----- Finished Execution ----->");
	}
}
