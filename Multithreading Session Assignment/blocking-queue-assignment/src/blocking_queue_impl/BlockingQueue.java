package blocking_queue_impl;

public class BlockingQueue {
	
	private Node front;
	private Node rear;
	private int size;
	private int length = 0;
	
	public BlockingQueue(int size)
	{
		this.size = size;
	}
	
	public synchronized void put(int data) throws InterruptedException {
		System.out.println("Inside Put Method");
		if(this.length>size)
		{
			System.out.println("Queue is full. No task is already taken by any of the consumer.");
			wait();
		}
		Node node = new Node(data);
		if(length==0){
            front = node;
        }else {
            rear.setNextNode(node);
        }
        rear = node;
        length++;
        System.out.println("Data added in the queue. Notifying the observers.");
        notifyAll();
	}

	 public synchronized int take() throws InterruptedException {
	        System.out.println("take() method called");
	        int data;
	        if(length==0){
	            System.out.println("Queue is empty. There is no task present in the Queue");
	            wait();
	        }
	        System.out.println("Data became available. take() method resumed.");
	        data = front.getData();
	        front = front.getNextNode();
	        length--;
	        return data;
	    }
}