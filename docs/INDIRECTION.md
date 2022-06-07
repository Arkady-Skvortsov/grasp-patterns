## Indirection

# Problem
How to redistribute the responsibilities of objects to ensure that there is no direct binding?

# Solution
Assign responsibilities for providing communication between services or components to an intermediate object

# Pros
Everything

# Cons
No

# When to use (Example) ?
I think, that we need to use it everytime, when we are programming/creating some system, it's doesn't - big/small, not care about it, just use)
So, I have a real example of usage of this pattern - We have a repository that works with 2 different cache implementations: Redis/Memcached, but there may be more, such as InfinityDB and others; But it doesn’t matter to us what it will be in the end, because we have a common interface with them for communication, we can cut out Redis at any time and replace it with Memcached