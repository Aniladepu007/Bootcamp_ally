require 'httparty'
require 'json'

response = HTTParty.get('https://jsonplaceholder.typicode.com/users')

result = JSON.parse(response.body)

puts result[0].each{|k,v| print k+"\t"}
puts("\n")
puts result[0].each{|k,v| puts v}