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