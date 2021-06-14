require 'socket'
hostname = 'localhost'   
$port = 8082

puts "Listening on #$port. Press CTRL+C to cancel."
sThread = Thread.start do     # run server in a thread
  server = UDPSocket.open
  server.bind(hostname, $port)
  2.times { p server.recvfrom(64) }
  server.close
end

sThread.join

