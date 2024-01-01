
This is my blog.

## What if a year always started at the first day of the week?

1. In what type of calendar would it be guaranteed that the first day of the year is the first day of the week (e.g. Monday) as well? For that to happen, we need the length of the year to be a multiple of 7, obviously. Closest multiple of 7 to 365 is 364.

2. 364 has the extra benefit of being a multiple of 28. It means a 364-day year can be divided into 13 months of equal (28) days. This makes a lot of things easier, e.g. in project planning, sprint lengths, and vacations among others. It is probably also more OCD-friendly.

3. A year is more precisely 365.2422 days. We round it to 365 days and account for the fraction with the help of leap days. In a 364-day year, we need to calculate leap years differently.

4. Every 364-day year has 1.2422 days of excess that has to be accounted for later. In order to preserve the _year-week harmony_ of our calendar, we need to have not a leap day, but a leap week. This leap week will happen every six years, with a fraction of _0.4532_ days (_6×1.2422=7.4532_).

5. We, however, take things one step further and aim to preserve not just year-week harmony, but also a year-month harmony: We _reset_ the excess fractions not with a leap week, but with a leap month. Every 23 years (_23×1.2422=28.5706_), there will be a leap 14th month in the calendar. A deviation of _0.5706_ days is still being accumulated every 23 years from the solar cycle. 

6. We still need to account for the accumulating fractions from the leap month calculations, or seasons will (slowly) start to shift. We still want to preserve the year-month harmony. Hence we should wait until the accumulated deviation exceeds 28 days. This happens after 50 leap years, or 1150 years in total: _50×23=1150_. Therefore, every 1150 years of the 364-day calendar, there will be two leap months instead of one. 

7. The calculation in the previous step still leaves a residual of _0.53_ days (_50×0.5706=28.53_). If we want to account for this as well and still keep the year-month harmony, we need to add a third leap month for every 53 occurrences of the second leap month: _53×0.53=28.09_. This means every 60950 (_23*50*53_) years, there will be three leap months and a total of sixteen 28-day months in this hypothetical calendar year.

8. The precision we have so far should be enough for ~~all~~most practical purposes. However, going one step further we can have a four-leap-months year every 19,016,400 years: _312×0.09=28.08_ and _23×50×53×312=19016400_.

9. In summary, a 364-day year is perfectly divided into 13 equal-length months of 28 days, with each month comprising exactly 4 weeks. Every 23 years there will be a leap year which has one extra month, every 1150 years a leap year with two extra months, and every 60950 years a leap year with three extra months.




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

8. To me, such a change could be strong encouragement and motivator for following best practices and writing more robust Java code.

## First Post

This is my first post