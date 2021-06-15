require 'socket'   
hostname = 'localhost'   
$port = 8082 

# Ad-hoc client
UDPSocket.open.send("ad hoc", 0, hostname, $port)

# Connection based client
sock = UDPSocket.open
sock.connect(hostname, $port)
sock.send("connection-based", 0)
sock.close











# meta programming
# 	method_misssing
# 	Defining Methods Using “class_eval” and “instance_eval” - Jeyanth
# 	define_method
# 	garbage collection - 
# 	Harsheet

# thread - concurrency

# ?	Threads & Exceptions
# ?	Thread Variables - Sayali
# ?	Thread Priorities
# ?	Thread Exclusion - Sachin
# ?	Handling Deadlock
# ?	Thread States  - Kashish
# ?	Thread Class Methods
# ?	Thread Instance Methods - Sujit

# networking

# ?	Understanding Sockets
# ?	Client - Manish
# ?	Server
# ?	Multiple Client TCP/UDP Servers -  Anil

# Ruby Algorithms

# ?	Introduction to sorting algorithms
# ?	Bubble sort
#     Implementing the bubble sort algorithm - gitansh

# ?	Quick sort
#     Implementing the quick sort algorithm - Tushar
# ?	

#     Merge sort
# ?
# ?	Implementing the merge sort algorithm - Vansh mittal

# ?	Implementing a prime number counting algorithm
# ?	Implementing a factorial algorithm - Yash

# ?	Implementing the least common multiple - LCM - Akash