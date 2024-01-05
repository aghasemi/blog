
This is my blog.

## First Post

This is my first post


## An Alternative Syntax for Type Inference in Java

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

## What If Every Year Started on the First Day of the Week?

1. In what type of calendar would it be guaranteed that the first day of the year is the first day of the week (e.g. Monday) as well? For that to happen, we need the length of the year to be a multiple of 7, obviously. Closest multiple of 7 to 365 is 364.

2. 364 has the extra benefit of being a multiple of 28. It means a 364-day year can be divided into 13 months of equal (28) days. This makes a lot of things easier, e.g. in project planning, sprint lengths, and vacations among others. It is probably also more OCD-friendly.

3. A year is more precisely 365.2422 days. We round it to 365 days and account for the fraction with the help of leap days. In a 364-day year, we need to calculate leap years differently.

4. Every 364-day year has 1.2422 days of excess that has to be accounted for later. In order to preserve the _year-week harmony_ of our calendar, we need to have not a leap day, but a leap week. This leap week will happen every six years, with a fraction of _0.4532_ days (_6×1.2422=7.4532_).

5. We, however, take things one step further and aim to preserve not just year-week harmony, but also a year-month harmony: We _reset_ the excess fractions not with a leap week, but with a leap month. Every 23 years (_23×1.2422=28.5706_), there will be a leap 14th month in the calendar. A deviation of _0.5706_ days is still being accumulated every 23 years from the solar cycle. 

6. We still need to account for the accumulating fractions from the leap month calculations, or seasons will (slowly) start to shift. We still want to preserve the year-month harmony. Hence we should wait until the accumulated deviation exceeds 28 days. This happens after 50 leap years, or 1150 years in total: _50×23=1150_. Therefore, every 1150 years of the 364-day calendar, there will be two leap months instead of one. 

7. The calculation in the previous step still leaves a residual of _0.53_ days (_50×0.5706=28.53_). If we want to account for this as well and still keep the year-month harmony, we need to add a third leap month for every 53 occurrences of the second leap month: _53×0.53=28.09_. This means every 60950 (_23*50*53_) years, there will be three leap months and a total of sixteen 28-day months in this hypothetical calendar year.

8. The precision we have so far should be enough for ~~all~~most practical purposes. However, going one step further we can have a four-leap-months year every 19,016,400 years: _312×0.09=28.08_ and _23×50×53×312=19016400_.

9. In summary, a 364-day year is perfectly divided into 13 equal-length months of 28 days, with each month comprising exactly 4 weeks. Every 23 years there will be a leap year which has one extra month, every 1150 years a leap year with two extra months, and every 60950 years a leap year with three extra months.

## Bunt is My Favourite German Word

1. Internet has an abundance of lame jokes about the German language. They mostly make fun of the length and pronunciation of German words, some times going the extra miles of bending the reality.
2. I have been learning German for almost a decade, and have obviously had may fair share of headaches, but around grammar mostly: Those random Ns suffixing masculine nouns, the arbitrary order of parts of a sentence, or the 16 words for definitive article. 
3. Regarding the vocabulary, although the words are mostly more difficult in memorisation, there are some nice surprises as well. An example that I always mention in word-length discussions is _oft_ for Often. It's also shorter than French _Parfois_, and maybe also from some other translations. 
4. My _"favourite"_ German word is however _bunt_, meaning colourful. I like it for some reasons:
   1. It is short, shorter than English colourful or French coloré, or probably many other _"neighbouring"_ translations.
   2. It does not look like having been derived from the word for colour (_Farb_). It is a dedicated word. I haven't seen this in other languages I have a clue about: In all of them the word for colourful is derived from the word for colour.
5. Looking into the [Etymological roots of the word](https://en.wiktionary.org/wiki/bunt#German) makes it even more interesting:
   1.  It is derived from Latin _punctus_, which is also the root of the English word point. 
   2.  The original (now obsolete) meaning also seems to have been closer to the English relative: [spotted; speckled](https://en.wiktionary.org/wiki/bunt#Adjective).
6. Therefore, it seems the meaning of _"bunt"_ in German has over time evolved and generalised, from original _"full of spots"_ to the more general _full of colours_.
7. Another very interesting German word/expression is _"bitte"_, mostly for the diversity of the situations in which it is used. It reminds me of [خواهش می‌کنم
/xâheš mi-konam](https://en.wiktionary.org/wiki/%D8%AE%D9%88%D8%A7%D9%87%D8%B4_%D9%85%DB%8C%E2%80%8C%DA%A9%D9%86%D9%85) in my native Persian. 


## In Memory of Late Niklaus Wirth

1. I have a bizarre aptitude in memorising isolated, seemingly non-important pieces of information from a bigger event or body of knowledge, and that for a long time, usually decades.
2. When I started to get interested in programming in late 90s, I didn't have a computer yet. It was all books and I consumed their content with the enthusiasm expected from 12 years old kid.
3. One book in particular was not about learning programming, but more of an "introduction to computers" in general, with a lot of history in it up until 90s. It was in this book that I first learned that the BASIC programming language was created by John Kemeny and Thomas Kurtz, Fortran by John Backus, C by Dennis Ritchie and Ken Thompson, and Pascal by Niklaus Wirth. I have never forgotten those names in the past 25 years, despite the fact that they had no meaning to me other than random pieces of information. So were mentions of obsolete programming languages such as Forth and SNOBOL, that I didn't see anywhere else beyond that one book, at least until many years later.   
4. One of those names, however, materialised eventually into far more than a piece of information. In 2011, destiny placed me in Lausanne, Switzerland to start a PhD in computer science, and just a few months in, I saw an announcement that Professor Niklaus Wirth of ETH was coming to Lausanne for a keynote. 
4. I didn't evn know that Wirth was Swiss. Seeing that name was like a message being thrown from my younger self, at the satrt of the journey that ended up in EPFL.
5. I attended the talk. I don't remember at all what it was about, but I remember him saying something along the lines of "I was a Professor when a byte was 6 bits". 
6. At the end of the talk, I approached him and asked to have a photo of him. I don't know what he was thinking, or how much he was used to being asked for a photograph, but I did it anyway. Someone took the photo using my pre-smartphone-era Nokia N70.
7. That photo got lost later, I never realised when and how. I regret that a lot, but I feel extremely lucky to have the chance to meet Niklaus Wirth in person. He made programming approachable to many generations, including mine, although a lot of us never became seasoned Pascal programmers. 
8. Professor Niklaus Wirth passed away on January 1st, 2024, after 90 years of fruitful life. He was professionally active well until the past few years. I wish I end up like that.