require 'socket'   
hostname = 'localhost'   
port = 8081  

socket = TCPSocket.open(hostname, port)   

while ln = socket.gets
	puts ln.chomp
end

socket.close  
