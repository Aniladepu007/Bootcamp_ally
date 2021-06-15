require 'socket'

PORT   = 8081
socket = TCPServer.new('127.0.0.1', PORT)

def handle_connection(client)
    puts "New client! #{client}"
    # sleep(10)
    client.write("Hello from server!\n")
    client.write("Sending message...\n")
    client.write("Time is:  ", Time.now)
    client.close
end



puts "Listening on #{PORT}. Press CTRL+C to cancel."

loop do
  client = socket.accept

  t = Thread.new { handle_connection(client) }
  t.join
end








## Single-threaded

# require 'socket'   
# server = TCPServer.open(8081)   

# loop {
# client = server.accept
# client.write("Hello from server!\n")
# client.write("Sending message...\n")
# client.write("Time is:  ", Time.now)
# client.close
# }
