# 20)text = ”I am learning ruby2”
# •	Check “am” is there using match method
# •	Check number is there using scan method

text = "I am learning ruby2"
search = "am"
text.match(/am/)
text.scan(/d+/)
text.match(search) {|m| if m then puts m else puts "Not found" end}
text.scan(search) {|m| if m then puts m else puts "Not found" end}

# 17) Write a Ruby code that will add two integer numbers. If we enter any string in the input it should handle the exception.
# Expected Output
# a= 10, b = 20
# •	a+ b = 30
# a = 10 +  b=”25”
# •	a+b =0 =>Error

def sum(a=0, b=0)
    begin
        ans = a + b
    rescue Exception => e
        msg = "Error: #{e} (#{e.class})"
    else
        msg = "Output: #{a} + #{b} = #{ans}"
    end
    return msg
end
puts sum(10,"2")



# 6)  a)Write a ruby code for Fibonacci Series
#     b)Take a input and check the value is “string” ,”float” or “integer” using case statement
def fibonacci(n)
    fib = Array.new(n)
    fib[0]=0; fib[1]=1
    
    for i in 2...n
        fib[i] = fib[i-1] + fib[i-2]
    end
    return fib
end
n=10; puts fibonacci(n)  #finding first-n numbers

def checkClass(input)
    case (input)
    when String
        puts "It is a string."
    when Float
        puts "It is a float."
    when Integer
        puts "It is an integer."
    else
        puts "None of the above"
    end
end
checkClass("text"); checkClass(2.0); checkClass(0)

    # 7) Write a program for getting your name,age,mark1,mark2 and mark3(use if)
# Display the result as
# Name
# Age
# Mark 1
# Mark 2
# Mark 3
# Total
# Result : Pass / Fail(if any mark below 40 is fail)

class Student
    @@strength=0
    def initialize(name, age, m1, m2, m3)
        @@strength += 1
        @name = name
        @age = age
        @m1 = m1
        @m2 = m2
        @m3 = m3
        puts "Total strength now: #{@@strength}"
    end
    def getName
        return @name
    end
    def getAge
        return @age
    end
    def getMarks
        return [@m1, @m2, @m3]
    end
    def getResult
        if @m1 < 40 || @m2 < 40 || @m3 < 40
            return "Fail"
        else
            return "Pass"
        end
    end
end
student1 = Student.new("name1", 21, 30, 40, 50)
puts student1.getName,student1.getAge, student1.getMarks, student1.getResult
student2 = Student.new("name2", 22, 41, 42, 43)
puts student2.getResult
student3 = Student.new("name3", 20, 45, 45, 39)
puts student3.getResult

# 9) Work out array
# a = [2,4,3,"ruby",9.99]
# reverse the above array
# sort the above array
a = [2,4,3,"ruby",9.9999999]
print a,"\n"
print a.reverse, "\n"
print a.sort_by {|x| x.to_s}, "\n"

# 10) Try the following methods of Hash
# keys
# values
# clone
# each
# delete
hash = {"a"=>1, "b"=>2, "c"=>3, "d"=>4, "e"=>5}
print hash.keys, "\n"
print hash.values, "\n"
h2 = hash.clone
print h2.each{|x,y| puts "#{x},#{y}"}, "\n"
h2.delete("a")
print h2, "\n"
# 8) the_count = [1, 2, 3, 4, 5]
# fruits = ['apples', 'oranges', 'pears', 'apricots']
# change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

# Expected output
# This is count 1
# This is count 2
# This is count 3
# This is count 4
# This is count 5
# A fruit of type: apples
# A fruit of type: oranges
# A fruit of type: pears
# A fruit of type: apricots
# I got 1
# I got pennies
# I got 2
# I got dimes
# I got 3
# I got quarters

# the_count = [1, 2, 3, 4, 5]
# fruits = ['apples', 'oranges', 'pears', 'apricots']
# change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

# the_count.each{|k| puts("This is count #{k}")}
# fruits.each{|k| puts("A fruit of type: #{k}")}
# change.each{|k| puts("I got #{k}")}


