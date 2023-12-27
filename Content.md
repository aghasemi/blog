
This is the home page of my blog

## Proposal for an Alternative Syntax for Local Variable Type Inference in Java

1. Since Java 10 and [JEP 286](https://openjdk.org/jeps/286), Java has had local variable type inference with the ~~keyword~~reserved type name `var`:
```java
var x  = new MyClass()
```
Local variable type inference has helped in reducing verbosity and unnecessary typing and making Java code more readable. 

2. _Sister_ JVM languages such as Scala and Kotlin offered type inference before Java. In the case of Scala, it is done via two keywords: `val` and `var`. `val` creates an immutable variable, while `var` has similar semantics to that of Java. 

3. In Scala, a language with strong focus on functional paradigms, it is heavily preferred to define variables immutable (final in Java terminology), unless mutability is absolutely necessary. Therefore, `val` is very common, "the norm", and prevalent, while `var` is frowned upon and rare. Indeed, as my former manger who mentored me while learning Scala once said: 
> If you have `var` in your code, think again. And again and again. And again, until you find a way to do it with `val`.

4. Java only has `var`, hence immutability is not "default". Of course, one can define immutable type-inferred variables using `final var`, but that's two keywords instead of one, naturally reducing its usage and definitely not "the norm".

5. Java has not added a second keyword for local variable type inference (so far). A strong counter-argument is that learning semantics of two keywords for type inference is unnecessary cognitive load when one cas simply add `final` as modifier: Every Java programmer should know what `final var` does, but they would have to learn what `val` does, if there is such a keyword.  

6. However, there may be a way to do immutable variable type inference without introducing a new keyword: What if we could use `final` as both the type name (i.e. in lieu of `var`) and modifier, to define an immutable variable? It means a declaration such as 
```java
final x = new MyClass()
```
is no longer syntactically wrong, but simply a contraction of `final var x = new MyClass()`. This is purely a syntactic sugar, resolved at compile-time by the compiler or even some "pre-processor".

7. I cannot think of any scenario where this change breaks compatibility with existing codebases. I may be wrong, but it seems to me that `final` is never followed by a variable name in valid Java code. Does it? 

To me, such a change could be strong encouragement and motivator for following best practices and writing more robust Java code.

## Post #1

This is my first post