## Pure Fabrication

# Problem
Which class should provide the implementation of the "High Cohesion" and "Low Cohesion" patterns ?

# Solution
Assign a group of responsibilities with a high degree of engagement to a class that does not represent a specific concept from the domain (synthesize an artificial entity to provide high engagement and weak coupling)

# Pros
The Persistent Storage class will have a low degree of binding and a high degree of engagement

# Cons
This pattern should not be abused otherwise all system functions will turn into objects

# When to use (EXAMPLE) ?
1. Which class should store instances of the "Sale" class in a relational database?
2. If we assign this responsibility to the "Sale" class, then we will have a low degree of engagement and a high degree of binding (Because the "Sale" class must be associated with a relational database interface)
3. Storing objects in a relational database is a common task that will have to be solved for many classes.
4. The solution to this problem is to create a new class "PermanentStorage", responsible for saving objects of some kind in the database

**Gregg Lehrman wrote about "PermanentStorage", but I decided to make a real example that corresponds to today: the "Repository" pattern, which solves this problem** or like an example of "Pure Fabrication" can be Facade of the