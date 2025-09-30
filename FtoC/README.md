# Homework Week #5 *Supplemental*

Oh.... hello. 

When I tell you that I tried making this so much more complicated than it really was, I mean it. And honestly, that might even be an understatement. 

Here's a fun list of things I did before realizing that this assignment was SO much more simple than I thought: 

I solved the c-->f equation for f because I was going through the motions of isolating every variable like I used to in my math classes and then realized I didn't need to at all...

I wrote `const f = Fahrenheit`, `const c = celsius`, THEN wrote `let f = 99` and `const c = (f - 32) * 5 / 9;` even though nothing in the rest of my code at the time referenced the word Fahrenheit or Celsius at all ??? c r a s y

I tried to make a string of some sort??? Couldn't possibly tell you why I was on that track for a while... (Well, I was trying to go through all my notes from class + thought we'd have to put a bunch of things together so I was trying out a bit of everything)

I tried looking online for anyone else who has done this (and found out it was a very common exercise) but no one was doing it in a helpful way to me and what I'd learned from our textbook. So after quickly scanning a ton of different sites, I gave up on that. I didn't want to use code I didn't fully understand and I knew I had all the tools to be able to figure this out by myself. 

And just to be safe, here are some of the sites I visited, but I didn't end up using any of this code: 
[w3resource site](https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-11.php), 
[geeksforgeeks site](https://www.geeksforgeeks.org/javascript/javascript-program-to-convert-farenheit-to-celcius/), and 
[w3schools site](https://www.w3schools.com/howto/howto_js_temperature_converter.asp)

And I'd rather put these here because it's sort of like my references section even if I didn't directly use any of this information. IDK... just to cover all my bases and get used to linking things quickly. 

Eventually, *after far too long*, I realized the whole point of this conversion was that it was supposed to be... you guessed it... a conversion. (Writing this all out makes me want to bash my head into a wall but alas... this is how we learn.) 🤦 So I finally understood that I'd have to write out that f is equal to c and here's where we finally got on the right track. 

I went back through our notes where we talked about brackets and how it refers to the indeces, in which I realized I had established f = 99 and c = (f - 32) * 5 / 9 as index entries (struggling with proper terminology but you see what I'm saying). It was at this point where I had already realized I didn't have to use the `let` function at all and this made everything much clearer to me. 

SO: I had `const f = 99 // const c = (f - 32) * 5 / 9; // console.log(`${f} is equal to ${c}`);` And I ran the code.... **AND IT WORKED!**

...But it didn't look pretty. 

So then I realized I wanted to add the units so the answer would be clearer as to what the purpose of the function was (and I saw it in all of the sites I visited and it was only after I ran my code that I realized that I didn't add units and should probably do that). I also wanted to make 37.222222222222222 into 37.22 because that huge long number tough on the eyes. Thankfully, I had already gone through my notes a couple times and knew exactly what pages to reference to get there, and VOILA! I ended up with the following code: 

`const f = 99
const c = (f - 32) * 5 / 9;
console.log(`${f}°F is equal to ${c.toFixed(2)}°C`);`

which produced this result: `99°F is equal to 37.22°C`

*(also, I can see that the back tics within the code are making the format weird, but I'm not sure how to fix that...)*

Anyway... so that's pretty cool. :)

...End Supplemental 

[Thank you!](ThankYou.jpg)

