function setup() {
  createCanvas(400, 800); 
  noStroke(); 
  
  // parameters for text:
  textAlign(CENTER, CENTER); 
  rotate(radians(45));
  textSize(27);
  // [I HATE ANGLES IN THIS GOD FORSAKEN WEB EDITOR]
}

function drawObject(x, y, s) {

  strokeWeight(4);
  stroke(0, 255, 0);
  noFill();
  
//  BACKGROUND: 
  
  fill (0);
  square(400, 400, 0)
  
// OUTSIDE LINES: 
  
  push(); // im doing separate push/pops for each section because i want to keep everything in their own little bubbles 
  translate(x, y);
  scale(s);
  
// outline of eye:
  rect(1, 1, 400-2, 400-2);

// lower-left lines: 
  line(0, 0, 400 * 0.1, 400);
  line(0, 400 * 0.1, 400 * 0.2, 400);
  line(0, 400 * 0.2, 400 * 0.3, 400);
  line(0, 400 * 0.3, 400 * 0.4, 400);
  line(0, 400 * 0.4, 400 * 0.5, 400);
  line(0, 400 * 0.5, 400 * 0.6, 400);
  line(0, 400 * 0.6, 400 * 0.7, 400);
  line(0, 400 * 0.7, 400 * 0.8, 400);
  line(0, 400 * 0.8, 400 * 0.9, 400);
  line(0, 400 * 0.9, 400, 400);

// upper-right lines:
  line(400 * 0.9, 0, 400, 400);
  line(400 * 0.8, 0, 400, 400 * 0.9);
  line(400 * 0.7, 0, 400, 400 * 0.8);
  line(400 * 0.6, 0, 400, 400 * 0.7);
  line(400 * 0.5, 0, 400, 400 * 0.6);
  line(400 * 0.4, 0, 400, 400 * 0.5);
  line(400 * 0.3, 0, 400, 400 * 0.4);
  line(400 * 0.2, 0, 400, 400 * 0.3);
  line(400 * 0.1, 0, 400, 400 * 0.2);
  line(0, 0, 400, 400 * 0.1);  
  
  pop()
  
// PUPILS:   
  
  push(); 
  translate(x, y);
  scale(s);
  
// green pupil:
  fill(74, 255, 61);
  noStroke();
  circle(200, 200, 125);

// inner pupil:
  fill(0);
  noStroke();
  circle(200, 200, 42);
  
  pop(); 
  
// TEXT: 
  
  push(); 
  translate(x, y);
  scale(s);
  
// parameters:
  fill(255);
  stroke(0);
  strokeWeight(4);
  
  // alright girliepops lets get down to business to defeat the huns 
  
  // i know i don’t have to use push/pop for each text block but 1. it helps with organization and 2. it gives me peace of mind because ive been traumatized by working with the angles...
  
  push(); // start "Look"
  let angleText1 = 113 // no because why would anything be easy with angles in this godforsaken web editor 
  let rotateText1 = (angleText1 - 90)/2; // oh because obviously.
  translate(200, 200);
  rotate(radians(rotateText1));
  text('Look', -160, -141);
  pop(); // end "Look"
  
  push(); // start "at"
  let angleText2 = 125 
  let rotateText2 = (angleText2 - 90)/2; 
  translate(200, 200);
  rotate(radians(rotateText2));
  text('at', -122, -129);
  pop(); // end "at"
  
  push(); // start "the"
  let angleText3 = 130 
  let rotateText3 = (angleText3 - 90)/2; 
  translate(200, 200);
  rotate(radians(rotateText3));
  text('the', -85, -125);
  pop(); // end "the"
  
  push(); // start "sky,"
  let angleText4 = 145
  let rotateText4 = (angleText4 - 90)/2; 
  translate(200, 200);
  rotate(radians(rotateText4));
  text('sky,', -47, -117);
  pop(); // end "sky,"
  
  push(); // start "Mar"
  let angleText5 = 165 
  let rotateText5 = (angleText5 - 90)/2; 
  translate(200, 200);
  rotate(radians(rotateText5));
  text('Mar', -8, -107);
  pop(); // end "Mar"
     
  push(); // start "tin"
  let angleText6 = 180 
  let rotateText6 = (angleText6 - 90)/2; 
  translate(200, 200);
  rotate(radians(rotateText6));
  text('tin', 17, -107);
  pop(); // end "tin"
  
  push(); // start "...(1)"
  let angleText7 = 190 
  let rotateText7 = (angleText7 - 90)/2; 
  translate(200, 200);
  rotate(radians(rotateText7));
  text('...', 38, -110);
  pop(); // end "...(1)"
  
  push(); // start "...(2)"
  let angleText8 = 165 
  let rotateText8 = (angleText8 - 90)/2; 
  translate(200, 200);
  rotate(radians(rotateText8));
  text('...', 10, 112);
  pop(); // end "...(2)"
  
  push(); // start "Its"
  let angleText9 = 149 
  let rotateText9 = (angleText9 - 90)/2; 
  translate(200, 196);
  rotate(radians(rotateText9));
  text('Its', 25, 119);
  pop(); // end "Its"
  
  push(); // start "look"
  let angleText10 = 143 
  let rotateText10 = (angleText10 - 90)/2;
  translate(200, 200);
  rotate(radians(rotateText10));
  text('look', 68, 118);
  pop(); // end "look"
  
  push(); // start "ing"
  let angleText11 = 135 
  let rotateText11 = (angleText11 - 90)/2;
  translate(200, 200);
  rotate(radians(rotateText11));
  text('ing', 103, 123);
  pop(); // end "ing"
  
  push(); // start "back."
  let angleText12 = 120 
  let rotateText12 = (angleText12 - 90)/2;
  translate(200, 200);
  rotate(radians(rotateText12));
  text('back.', 149, 136);
  pop(); // end "back."
  
   // sisyphus would rather push his boulder up that hill or whatever he does than deal with angles on p5.js and i know that to be a fact 
  
  // guys i did it. 
  
  pop(); 
  
  // MOTHER OF SPIDERS
  
  // even SHE didn't give me as much of an issue as those goddamn angles and she's THE MOTHER OF SPIDERS 
  
  push(); 
  translate(x, y);
  scale(s);
  
  // parameters for web spokes:
let bg;
let webSpokes = 6;
let size = 25;
let angle = 360/webSpokes;
  
let scaleWeb = [1.19, 1.03];

// function for the web spokes: 
  push();
  translate(400 / 2, 400 / 2);
  stroke(0, 0, 0)
  
  for (let i = 0; i < webSpokes; i++) {
    strokeWeight(4);
    rotate(radians(angle));
    line(0, 0, 75, 0);
    spiral();
  }
  pop(); 
  
// function for the webbing:
function spiral(){
  
  //how close to the centre do you want to start drawing webs?
  let minHeight = 25;
  
  //how far out from the centre do you want to draw webs until?
  let maxHeight = 125;
  
  //calculates spacing between webs
  let increment = 20;
  
  //how much to rotate each web so that the arc is aligned with the web angle 
  let rotateAmount = (angle - 90)/2;
 
  let scaleWeb;
  if (webSpokes == 5){
    scaleWeb = 1.19
  }
  
  if (webSpokes == 6){
    scaleWeb = 1.03
  }
  
  noFill();
  
// parameters + function for drawing multiple webs:
  for (let l = minHeight; l < maxHeight; l += increment){
    // calculate vector to move arc to sit between two lines
    let v = p5.Vector.fromAngle(radians(angle/2), l);
    
    push();
    translate(v.x, v.y);
    rotate(radians(rotateAmount));
    arc(0, 0, l*scaleWeb, l*scaleWeb, radians(180), radians(270));  
    pop();
  }
  
}
  pop(); 
  
}

function draw() {
  drawObject(0, 0, 1);
  drawObject(0, 400, 1);
}

