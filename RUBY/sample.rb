# class PrintDetails
#     def initialize(name, author, price)
#         @name = name
#         @author = author
#         @@price = price
#         @@getPrice = "class variable this is !"

#     end
#     def self.getPrice
#         puts "Rs.1000/-", @@getPrice
#     end
    
#     def getName
#         puts @name
#     end

#     def getAuthor
#         puts @author
#     end

#     def getPrice
#         puts @@price
#     end
    
# end

# obj = PrintDetails.new("dummy1", "dummy2", "dummy3")

# obj.getName
# obj.getAuthor
# obj.getPrice
# PrintDetails.getPrice

# c) Score = 100(if else)
# Check the score is greater than 50 – then half century
# Check the score is greater than 100 – then century using comparison operators

score = 101
if(score==100)
    puts "Score is 100 !"
else
    puts "Score isn't 100!"
end

if(score>=100)
    puts "Century !"
else
    puts "Half-century !"
end

# b)word = "Determination"
# check how many characters word have?
# word is having "tion"?
# word is having "tic
# clear the word..check is that empty?

word = "Determination"
puts "#of chars = #{word.length}"
puts word.include? "tion"
puts word.include? "tic"
word.clear
puts word.length  == 0 ? "empty" : "non-empty"



# 5)Use IRB to work out few numeric methods
# age=27
# 1. My age : 27
# 2. Next year my age would be 28.
# 3. Verify the age is in between 20 to 30
# 4. Verify the age is exactly 27 or not
# 5. Print 5 times age with the help of "times" methods

age = 27

if(age == 27)
    puts "Next year my age would be 28 !"
end

if(age >= 20 and age <= 30)
    puts "age is in between 20 and 30 !"
else
    5.times {puts age}
end




# def checkDay(day)
#     if day == "Sunday" || day == "Saturday"
#         puts "It's a weekend !"
#     else
#         puts "Not a weekend."
#     end
# end

# puts checkDay("Sunday")    
# puts checkDay("Monday")



# a=20
# b=10
# puts a + b
# puts a - b
# puts a * b
# puts a / b

# # # 3.times {puts "ruby"}

# # def fun(a,b=10)
# #     puts a + b
# # end

