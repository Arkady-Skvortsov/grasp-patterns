## Controller

# Problem
"Who" should call for processing input system events ?

# Solution
Responsibilities for handling system messages are delegated to a special class. A controller is an object that is responsible for handling system events and is not part of the user interface; The controller defines methods for performing system operations

# Recomendation
It is logical to use different controllers for different use cases - controllers should not be overloaded; An external controller represents the whole system, it can be used if it is not too overloaded (that is, if there are only a few system events)

# Pros
1. It is convenient to accumulate information about system events (in case system operations are performed in a certain sequence)
2. Сonditions for component reuse are improved (system events are processed by the controller and not by interface elements)

# Cons
1. Controller maybe overload

# How it works ?
So, you are using controller every day even don't know about it); I mean - really, every day); An EXCELENT example of controller is [NestJS Controller](https://docs.nestjs.com/controllers) - yes, it's realisation of controller pattern; Maybe you do it wrong, but... Author created an example for UI controller too; It's so easy pattern; (/)(\)(/)(@^@)(\)(/)(\) Let's flex about it!