## Low Coupling

# Problem
Provide low coupling when creating an instance of a class and linking it to another class

# Solution
Divide responsibilities between objects so that the degree of coupling remains low

# How it works ?
That pattern going from Information Expert, Creator patterns;

We need to resolve a problem about "many dependencies" in the system/classes; So, we have a simple way to understood how it can be simply detected: 1) Many imports in you'r file; Yes, when you have a many imports in one file - you already violated that pattern, 2) Classes have too many connections between themselves and slowly turn into a dependency graph - and this is 💩

This pattern is paired with High Cohesion