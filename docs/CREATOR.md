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
So, if a Check creates a Product, then it calls it; If the Calculator creates a Check, then it calls it; Sounds simple, but you have to learn how to produce/construct objects for business with this, i.e. what we saw in "Information Expert" when everything is called through new, and this pattern teaches that a constructor call is the same as a method call, because you will agree, it will not be nice to see this piece somewhere at the other end of the system?:

```ts
    new Calculator([new Check(new Product("hamburger", 200), 2)])
```
How about shortening it to this: 

```ts
    new Calculator().getProductSumm("hamburger", 200, 2);
```

Is that better, yeah ?