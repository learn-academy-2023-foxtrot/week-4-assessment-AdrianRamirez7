# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

 reposts1 = 7
# Expected output: '7 is odd'

reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def check_even_or_odd int
    if (int % 2 == 0)
        "#{int} is even"
    else
        "#{int} is odd"
    end
end

 p check_even_or_odd reposts1
 p check_even_or_odd reposts2
 p check_even_or_odd reposts3

# Pseudo code:
=begin
beginning: snake cased method check_even_or_odd 
input: variable with an integer as a value
output: Determine if the number variable passed into the method will output a string displaying if the integer is even or odd.
process: A conditional statement This condition checks if the remainder of int divided by 2 is equal to 0 using a modulo operator. If the remainder is 0, it means that the integer is even.
If the condition in the if statement is true, it executes inside the first code block that the current line returns a string that includes the value of int and the text " is even." And
ff the condition in the if statement is false the condition will execute the else block: (int) is odd.
=end
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels str
    str.delete("aeiouAEIOU")
end

p remove_vowels beatles_album1
p remove_vowels beatles_album2
p remove_vowels beatles_album3
# Pseudo code:
=begin
beginning: snake cased method name remove_values
input: variable containing a string value that will pass into the method by an invocation
output: The string that was passed into the method will instantly have its vowels removed.
process: The variable that is passed into the method will instantly be chained to a built in string method that instantly removes values from the string. This 
is executed by adding the vowels that need to be removed from the string inside of the delete() methods arguments.
=end

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

p palindrome_test_case3.reverse.capitalize
p palindrome_test_case3
  
def palindrome_checker str
    if (str.reverse.capitalize == str)
        "#{str} is a palindrome"
    else 
        "#{str} is not a palindrome"
    end
end
p palindrome_checker palindrome_test_case1 
p palindrome_checker palindrome_test_case2
p palindrome_checker palindrome_test_case3

# Pseudo code:
=begin
function name: palindrome_checker
input: variables that hold string values
output: The palindrome_checker function is defined to check whether a given string is a palindrome or not. 
It compares the reversed and capitalized version of the input string to the original string and returns an appropriate message.
process: The function will use a relational operator and a conditional to check of both words equal
each other, the catch to making this work however is the first condition will reverse the string and capitalize the first letter using built in string methods,
if the first string does not equal to the original, the code will run to the else block and print the string is not a successful palindrome.
=end