## GRASP

# About
GRASP - General Responsibility Assignment Software Patterns

1) [Information Expert](docs/INFORMATION-EXPERT.md)
2) [Creator](docs/CREATOR.md)
3) [Controller](docs/CONTROLLER.md)
4) [Low Coupling](docs/LOW-COUPLING.md)
5) [High Cohesion](docs/HIGH-COHESION.md)
6) [Polymorphism](docs/POLYMORPHISM.md)
7) [Pure Fabrication](docs/PURE-FABRICATION.md)
8) [Indirections](docs/INDIRECTIONS.md)
9) [Protected Variations](docs/PROTECTED-VARIATIONS.md)

# Basics
(Wikipedia): https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)
(Grasp patterns): https://www.pearsonhighered.com/assets/samplechapter/0/1/3/0/0130925691.pdf

# Motivation
I'm undone already, even programmer reading that, thinking - I'm crazy, like this poor fellow that reading your code at work every day too, my feelings are hurt;

GRASP patterns, unlike SOLID principles, look more realistic to use (P.S. at least they can be quickly entered into); They will help you write cleaner and more maintainable code in the OOP paradigm, don't thank Lerman for that)

So, like SOLID - that's going from OOP principles: 1) Incapsulation, 2) Inheritance, 3) Polymorphism

(The author also gives real examples of use and tries to use them where necessary to strengthen this in practice, like SOLID)

**The main idea that you need to remember is that when you become an architect and start building a class diagram in UML or build it in your free time - that all these GRASP, SOLID and GoF along with the basic 3 principles of OOP 100% fall on architecture, because it may not be a class, but it may be a component or a file**

# Recomendation (⚠)
I believe that every programmer should use these patterns to make the code cleaner and more maintainable, since they are PRACTICALLY 100% applicable, but with caution and according to the situation, because 1) The system can be so overcomplicated that you'll be in a state of frenzy and remember your 💩-code in tears of joy, 2) you must strictly look at the situation; I can say my recommendation, as my team and I - there is a "rule of the boy scout" (Any code rots sooner or later. To avoid this, you must follow the "rule of the boy scout": "leave the parking lot cleaner than it was before you arrived." Cleaning does not have to be global, it is enough to clean at least a small fragment of code, fragments of the eyes); If you enter the code 1 time, remember this place for yourself, if you enter 2 times, indicate a note to yourself, if the third time - REFACTORY THIS TO THE FUCK and use it