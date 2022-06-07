## Polymorphism
The name of this pattern is the same as the name of the OOP principle, so if you don't mind, I'll call it: **GRASPhism** :)

# Problem
1. How to handle alternatives based on type ?
2. How to replace the connected components of the system ?

# Solution
1. Responsibilities are allocated to different behaviors using polymorphic operations for that class
2. Each external system has its own interface

# Pros
Subsequently, it is easy to expand and upgrade the system

# Cons
You should not abuse the addition of interfaces using the principle of polymorphism in order to ensure the viability of the system in new situations unknown in advance.

# When to use ?
When you feel that multiple **if** in you'r project - it's a really hard place and it would be becoming bigger than now, than yes - use it; But you don't need But you should not abuse polymorphism, because sometimes it is better to do with two **if**;