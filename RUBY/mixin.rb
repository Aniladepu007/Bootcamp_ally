module Oddeven
    def checkOddEven(n)
        if (n & 1==1)
            return "Odd"
        else
            return "Even"
        end
    end
end

class OddEven
    include Oddeven    
end

n=14
obj = OddEven.new
puts obj.checkOddEven(n)