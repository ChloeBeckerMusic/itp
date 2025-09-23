# Homework Week #4 *Supplemental*

## Chapter One: *"Values, Types, and Operators"*

### One Thing I Knew: 

I knew that bits were any kind of two-valued things (AKA: zeros and ones), and I knew they were usually described as "off" or "on", "yes" or "no", etc. It has gotten talked a lot about a lot in the very beginnings of my music production classes -- the differences between analog audio and digital audio. 

### One Thing I Did Not Know: 

That this is how we get to 13: 

	>  0  0  0  0  1 1 0 1 
	> 128 64 32 16 8 4 2 1 

At first, I was really confused as to why it started with 128, but it's starting to make sense now that I think about it, because there are 128 values for velocity in DAWs, and that must mean that's the max number that we can get with 7 bits available to us... right? 

...but then why are there 8 ones and zeros? I'm confused. 

### Chloe Sidenote(s): 

Was this a steven universe reference because I hope it was:

	> console.log("Garnet" != "Ruby")

	> // --> true

	> console.log("Pearl" == "Amethyst")

	> // --> false

Team, this is a lot of information that I'm trying to remember but will have to refer back to this chapter to really do anything. 

## Chapter Two: *"Program Structure"*

### One Thing I Knew: 

I knew that JavaScript is a language that humans can read, and I knew all of the math equations / jargen in this chapter. 

### One Thing I Did Not Know: 

(Basically everything else in this chapter, honestly)
More specifically, I learned about bindings **AND** this is the part of learning about it where the lightbulb went off: 

	> let luigisDebt = 140;
	
	> luigisDebt = luigisDebt - 35;
	
	> console.log(luigisDebt);
	
	> // → 105

Because, yeah, that makes sense to me now. 

#### Chloe Sidenote(s)^TM: 

"And my heart glows bright red under my filmy, translucent skin and they have to administer 10cc of JavaScript to get me to come back. (I respond well to toxins in the blood.) Man, that stuff will kick the peaches right out your gills!"
From: _why, Why's (Poignant) Guide to Ruby

THIS IS THE BEST QUOTE EVER OMG THAT'S SO UNBELIEVABLY UP MY ALLEY I HAVE TO FIND THIS BOOK!!!!

I wish I could go to school just to learn how to use these languages- this is the most interesting information ever, and gosh I wish I could spend all day every day learning about this and be able to truly spend a majority of my time on this. 

## Chapter Three: *"Functions"*

### One Thing I Knew: 

I knew that functions were central to JavaScript in some way, and that you have to introduce new words to avoid "excessive verbosity" (I loved how the author described that). 

EX: 
A function definition is a regular binding where the value of the binding is a function. For example, this code defines square to refer to a function that produces the square of a given number:

	> const square = function(x) {
		
	> return x * x;
	
	> };

	> console.log(square(12));
	> // → 144

^^ This made sense to me, and I knew that that is something you'd have to do. 

### One Thing I Did Not Know: 

(Again, basically everything else in this chapter, honestly)

I didn't know about nested scope, and it took me a couple times looking through all of this to really understand it: 

	> const hummus = function(factor) {
		
	> const ingredient = function(amount, unit, name) {
		
	> let ingredientAmount = amount * factor;
	
	> if (ingredientAmount > 1) {
		
	> unit += "s";
	
	> }
	
	> console.log(`${ingredientAmount} ${unit} ${name}`);
	
	> };
	
	> ingredient(1, "can", "chickpeas");
	
	> ingredient(0.25, "cup", "tahini");
	
	> ingredient(0.25, "cup", "lemon juice");
	
	> ingredient(1, "clove", "garlic");
	
	> ingredient(2, "tablespoon", "olive oil");
	
	> ingredient(0.5, "teaspoon", "cumin");
	
	> };

I really liked the ingredients of hummus examle - examples like that help me understand these concepts much better. 

Oh, and one thing I thought was awesome was the: 

	> if (ingredientAmount > 1) {
		
	> unit += "s";
	
	> }
	
Becase, yeah, if there is a multple of an ingredient, it needs an "s" added to the end of the word. 

### Chloe Sidenote(s): 

@Chloe: Please go through this chapter and the second chapter again before class because dude you need to let it seep into your brain and it unfortunately won't do that for you. 
