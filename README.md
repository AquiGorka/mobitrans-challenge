# Mobitrans Challenge


## The Challenge
> Create a simple console game in which the computer generates a random math expression like 7 * 9 / 3 and asks the user to solve the equation.

> https://gist.github.com/homam/f5e1e0a81b613b82540f

### Build

```sh
npm i
```

### The Solution:

```sh
node src/game.js --level=[:level]
```


### All of it

```sh
node src/game.js --tree --tip --answer --list --plain --level [:level]
                  [OPTIONAL --level=level]
                  [OPTIONAL --tree]
                  [OPTIONAL --tip]
                  [OPTIONAL --answer]
                  [OPTIONAL --list]
                  [OPTIONAL --plain]
```

### Precedence

- / (division)
- \- (substraction)
- \+ (sum)
- \* (multiplication)

#### Exception

Multiplication has precedence over substraction.
I assumed so from this two examples (from the gist):
```
51 * ( 68 - 2 ) = 3366
82 * 22 - 16 = 1788
```

### Side Notes
This was a very fun excercise. It took me a while to find out how to correctly finish it. I went back and forth with different approaches. I researched a lot ([here](https://www.thepolyglotdeveloper.com/2015/03/parse-with-the-shunting-yard-algorithm-using-javascript/) and [here](http://eddmann.com/posts/small-rpn-implementation-in-javascript/) and even went and read a paper by Crockford [here](http://javascript.crockford.com/tdop/tdop.html)) but I wanted to code something myself and [this](http://stackoverflow.com/questions/32936045/generate-a-random-math-equation-using-random-numbers-and-operators-in-javascript) pointed me in the right direction.


### Future works
Probably work on the bonuses. Even though I did include the substraction operator (and it would be fairly easy to add division) some other rules had to be met and I did not code those.
