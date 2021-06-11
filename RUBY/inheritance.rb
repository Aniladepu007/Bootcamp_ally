class Parent
    def initialize
        puts "This is parent class !"
    end

    def display
        puts "Base Class !"
    end
end

class Child < Parent
    def initialize
        puts "This is child class !"
    end

    def display
        # super
        puts "Derived Class ! (Function over-riding)"
    end
end

Parent.new

childObj = Child.new
childObj.display