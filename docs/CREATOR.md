## Creator 
It's just like Information Expert, but he says that calling a class constructor = calling a method

# Problem
"Who" should call for create class instance ?

# Solution
Assign class B the responsibility of creating other objects of class A

# Recomendations
It is logical to use the pattern if class B uses, aggregates class A

# Pros
Using this pattern does not increase cohesion, since the created class is usually only visible to the creator class.

# Cons
If the procedure for creating an object is quite complicated (for example: it is performed on the basis of some external condition), it is logical to use the pattern: "Abstract Factory", that is, to delegate the responsibility of creating objects to special classes

# How it works ?
So, if Check create a Product, than he call for him; If Calculator create a Check, then he call for him; Sounds easy, but you must training in production / building entities for business with that