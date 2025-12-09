# The Tragedy of Ushanka's Despair 
### A Lament 

Step 1: The Idea^TM

I was inspired by an episode from The Magnus Archives titled [“Binary”](https://snarp.github.io/magnus_archives_transcripts/episode/065.html), which is about the story of Sergey Ushanka, an urban legend who supposedly uploaded his mind into his computer, and now terrorizes people via online chat rooms. In the realm of the podcast, this story is well known in the computer programming world and it is common for people to try their hand at recreating such chat rooms. Throughout this episode, we hear Tessa Winters recount the story of how she stumbled across a computer program that was much more sinister than any of the others she had ever come across. After opening up the “chat room” and seeing “just a mess of symbols and letters, like it was using the wrong characters”, she tried to forcibly close the program. It wouldn’t close, however, and eventually morphed into a grainy video of a man (presumably Sergey Ushanka) sobbing heavily as he ripped apart his keyboard and computer and ate every last piece. She immediately turned her computer off in an attempt to stop the video from continuing, but it moved to her TV. She tried to leave her home, but the video would follow her down the street, on other people’s phones, on news broadcasts-- everywhere. The statement giver was forced to watch 17 hours of this video until Sergey finished his ‘meal’ and slumped over the remains of his computer. 

I was so enthralled by recreating this concept that I started writing the story at the beginning of the semester. This isn’t to say “wow look my writing is so great and has been very edited and carefully picked through” -- rather I mention it because it will become apparent later on how brutal that is that I managed to lose so much of my writing. 

So anyway, my vision of the project was to create my version of this chat room simulator, but make it actually unsettling and look like old Windows 95. A couple people have attempted this online but I didn’t really love their versions- they were mostly electric green text with a black background and I wanted something more. I also wanted mine to start with both a somewhat skeptical reader or a compassionate reader and for the ending to be the same no matter what. 

Another idea that I want to drive home is that I approached this so that the entire point of Sergey is that he is a **victim** of The Spiral (and also of The End). He's often portrayed as just a manifestation of these entities, but I wanted to take a different approach which I think works well, especially in this format. 

The Spiral (also known as It Is Not What It Is, Es Mentiras, and The Twisting Deceit) is one of the Entities. It is based on the fear of madness, that your world isn’t right, that your mind is lying to you. It deals with deception, lying, deceiving the mind and senses. The Spiral is associated with fractal patterns, hallucinations, doubt of sanity, impossible geometry, maddening realms and dimensions, doors and mazes.
The aspect that I wanted to focus on was the true core of manifestations of The Spiral. It is perfectly exemplified in this bit of dialogue from [episode 187](https://snarp.github.io/magnus_archives_transcripts/episode/187.html): 


SPIRAL ENTITY: 
I am your friend. 


ARCHIVIST: 
No. You’re not. That’s just what you distort. It’s why you spin, but you never quite lie. The corridors, the warped body, it’s all just set dressing, isn’t it? It’s not the reality of what you actually are.


SPIRAL ENTITY: 
And what, actually, am I? 


ARCHIVIST:
You’re a question. 


SPIRAL ENTITY: 
“What lurks behind the door?” 


ARCHIVIST:
To some. But that would be The Stranger or The Dark. No, you are the question of “What lurks behind a smile?” Is a friendship true, or is it reaching out with hands that cut you?


In this visual novel, I wanted to focus on the relationship between the user and, not just a manifestation of The Spiral, but as I've stated, a victim of The Spiral. The victim is being puppeted by this fear entity in many different ways, but what happens when that victim’s pain is a weapon against the user? Does it even matter if the victim isn’t a ‘real person’? What constitutes a ‘real person’? 

Here's a sketch of the original design: 


![UshankaSketch](UshankaSketch.jpg)




# Why Is This a Tragedy? 

That's a great question. 

Two days ago, I was working on my Twine game and trying to add some final touches to make it look super cool and get my file organization tidied up when I accidentally moved a file to a location it is not supposed to be. 

You'd think that's fine, right? I just move it back? Oh. No, now the application won't open at all and won't let me change the preferences that I need to. I followed every single direction on the official troubleshooting page along with every reddit site and forum I could find to no avail. 

Ha! Fun! But oh, this is fixable still, right? 

Ha! 

After deleting every single file on my computer relating to Twine in any capacity (along with every file on my local storage)(LIKE I WAS TOLD TO DO), redownloading everything from scratch, diving deep into terminal etc, zipping and saving the now almost useless files of my progress on my game to Google Drive, I was still not able to open the application. I had broken this game and I didn't know what to do. I spent countless hours scanning every page on the internet and nothing had worked--- until late last night yesterday, when I managed to contact a friend of a friend of a friend who is apparently a computer wizard, and he helped me track down the file error that was so infuriatingly hidden within my computer. 

HUZZAH!

But oh... oh no. 

You see, I had saved the wrong version of my project. It was a week old, and maybe 60% done. And every other file was gone - deleted from my computer, emptied from my trash-- I was stupid, you see. Blinded by panic and now it was going to cost me pretty much everything. 

I went through the five stages of grief and have finally landed on acceptance. There is nothing I can do to restore what I had made in less than 24 hours. This took me so many hours and I simply just have to rebuild it with time I didn't have. So what I present to you is 60% of a project that was once so so so so so cool. 

This version kind of looks like shit, the passages aren't complete, the code is not where it needs to be, all of my custom buttons are gone (which is one of the most infuriating things because I spent SO LONG ON THOSE BUTTONS). 


# Okay. That Sucks. But What Do You Have? 

Great question! Let's dive into the code: 

## HTML IN PASSAGES: 

`<div class="chat-window">`
 ` <div class="chat-titlebar">`
  `  <div class="title-left">Ushanka’s Despair.exe</div>`
  `  <div class="title-buttons">`
     ` <div class="tb-btn">_</div> `
    `  <div class="tb-btn">□</div>`
 `     <div class="tb-btn">✕</div>`
    `</div>`
 ` </div>``

// What this is saying is that we've got our chat window with a title bar, a title, and three fake looking buttons that were very reminiscent of Windows 95 buttons that I intentionally tried to copy the look of. 


 ` <div class="chat-scrollarea" id="chatList">
  
    <!-- SERGEY ONE MESSAGE -->
    
    <div class="chat-message from-them">
      <div class="msg-avatar">SU</div>
      
      <div class="bubble">
          <div class="msg-timestamp">12:03 AM</div>
          
           <div class="msg-line">
    <div class="msg-username">Sergey:</div>
    <div class="msg-text">Hello.</div>
  </div>
</div>
</div>`

- // This gives us our first message from Sergey, with an avatar with his initials, a fake timestamp, and his username along with his message. 

`    <!-- USER MESSAGE -->
    
    <div class="chat-message from-me">
      <div class="bubble">
       <div class="msg-timestamp">12:04 AM</div>
       
        <div class="msg-line">
          <div class="msg-username">You</div>
        <div class="msg-text">[[Hi. How are you?]]</div>
      </div>
</div>`
   
   
  - // this gives us our first option (which was positioned very differently in the final version)
	  
`<div class="chat-message from-me">`
      `<div class="bubble">`
      ` <div class="msg-timestamp">12:04 AM</div>`
       
       ` <div class="msg-line">`
        `  <div class="msg-username">You</div>`
      `  <div class="msg-text">[[Hello. Sergey, right?]]</div>`
    `  </div>`
  `  </div>`
  
`<div class="msg-avatar">ME</div>
</div>
  
</div>`

-  // this gives us our second option along with our own avatar 

   ` <div class="chat-input-area">
    <input class="chat-input" id="chatInput" placeholder="Choose one of the messages above to chat." />
    <button class="chat-send" id="chatSend">Send</button>
</div>
</div>`

// this was added to look more like Windows 95, even though I didn't want people to be able to type their messages into the chat, so I just added the instructions there and created a fun little fake send button. 


## CSS FROM MY STORY STYLESHEET: 
`
:root{
  --bg:#c0c0c0;
  --panel:#e0e0e0; /*not this one*/
  --border-dark:#404040;
  --border-mid:#808080;
  --border-light:#ffffff;
  --accent:#000080;
  --msg-bg:#ffffff;
  --mine-bg:#dfe7ff;
  --username-color:#0000a0;
  --timestamp-color:#505050;
  --bubble-padding:0;
  --radius:2px;
  --font-stack: Sans-Serif, Tahoma, Geneva, Verdana, Arial;
  --small-font-size:12px;
  --font-weight: 700;
}`

// created variables to be used later on ^^ 

`#story {
  position: absolute;
  margin-top: 140px; 
  overflow: auto; 
} `

// an example of my past attempts at sizing ^^

`.chat-window {
  width: 600px;
  max-width: 98%;
  background: linear-gradient(#e9e9e9, #dcdcdc);
  border: 2px solid var(--border-mid);
  box-shadow: 2px 2px 0 var(--border-dark);
  box-sizing: border-box;
  margin-left: 94px;
}`

// an example of my past attempts at sizing ^^

`.chat-titlebar {
  display:flex;
  align-items:center;
  justify-content:space-between;
  background: linear-gradient(#000080, #000060); 
  color: #ffffff;
  padding: 0;
  font-weight: bold;
  font-size: 14px;
  border:2px solid var(--border-mid);
  margin: -6px -6px 8px -6px; 
  box-sizing: border-box;
  height:28px;
}
`
`.chat-titlebar .title-buttons {
  display:flex;
  gap:6px;
  align-items:center;
}`

`.chat-titlebar .tb-btn {
  width:14px;
  height:14px;
  border:2px solid var(--border-mid);
  background: linear-gradient(var(--border-light), var(--border-mid));
  box-shadow: 1px 1px 0 var(--border-dark) inset;
  text-align:center;
  line-height:12px;
  font-size:10px;
  color:var(--border-dark);
}`

`.chat-scrollarea {
  background: var(--panel);
  border-top:2px solid var(--border-light);
  border-left:2px solid var(--border-light);
  border-right:2px solid var(--border-mid);
  border-bottom:2px solid var(--border-mid);
  padding:0;
  height:425px;
  overflow:auto;
  box-sizing:border-box;
  font-size: 13px !important;
  line-height: 1.2 !important;
  font-weight: 700;
}`

`.chat-scrollarea::-webkit-scrollbar { width:10px; }
.chat-scrollarea::-webkit-scrollbar-thumb {
  border:2px solid var(--border-light);
  background: linear-gradient(#c0c0c0,#9a9a9a);
}`

`.chat-message {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  box-sizing: border-box;
  width: 100%; 
  height: auto;
  margin: 2px 0;
}
`
.`chat-message.from-me { justify-content: flex-end; }
.chat-message.from-me .bubble { background: var(--mine-bg); border-color: var(--border-dark); }
.chat-message.from-them { justify-content: flex-start; }
`
`.msg-avatar {
  width:36px;
  height:36px;
  flex: 0 0 36px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;
  font-size:13px;
  border:2px solid var(--border-mid);
  background: linear-gradient(var(--border-light), var(--panel));
  box-shadow: 1px 1px 0 var(--border-dark) inset;
}`

`.bubble {
  background: var(--msg-bg);
  border: 2px solid var(--border-mid);
  border-top-color: var(--border-light);
  border-left-color: var(--border-light);
  border-radius: var(--radius);
  box-sizing: border-box;
  padding: 4px 8px;
  flex-direction: column;
  gap: 2px;
  max-width: 76%;
  flex-grow: 1; 
  min-width: 200px;
}
`
`.msg-meta {
  display: flex;
  flex-direction: column;   /* stack vertically */
  align-items: flex-start;  /* align both to the left */
  margin: 0;
  padding: 0; 
}`

`.msg-timestamp {
  font-size: 12px;
  color: var(--timestamp-color);
  margin: 0;
  padding: 0;
  line-height: 1.1;
}`

`.msg-username {
  font-size: 13px;
  font-weight: bold;
  color: var(--username-color);
  margin:0;
  padding: 0;
}`

`.msg-text {
  display:block;
  font-size: 13px;
  color:#000;
  margin:0 !important;
  padding: 2px 6px !important;
  line-height: 1.2 !important;
}`

`.msg-line {
    display: flex;
    flex-direction: row;
    align-items: baseline; 
    gap: 4px;
}`

`.chat-input-area {
  display:flex;
  gap:8px;
  align-items:center;
  margin-top:10px;
}`

`.chat-input {
  flex:1;
  padding:6px;
  border:2px solid var(--border-mid);
  background:linear-gradient(var(--border-light), #f0f0f0);
  box-shadow: 1px 1px 0 var(--border-dark) inset;
  font-family: var(--font-stack);
  font-size: 13px;
  box-sizing:border-box;
}`

`.chat-send {
  padding:6px 10px;
  border:2px solid var(--border-mid);
  background: linear-gradient(#e9e9e9,#dcdcdc);
  box-shadow: 1px 1px 0 var(--border-dark);
  cursor:pointer;
  font-weight:bold;
}`

`body {
  background-image: url("images/ushankabackground.png");
  background-repeat: no-repeat; 
  background-size: cover;
  overflow: hidden;
  color: black; 
  margin: 12px;
  font-family: Courier New, Verdana, Arial;
  -webkit-font-smoothing: none; 
}`

`.username-red {
  /* Username color sergey */
    color: #cc0000;
    font-weight: bold;
}`

`.username-blue {
  /* Username color you */
    color: #003399;
    font-weight: bold;
}`

`a { 
  /* link color */ 
  color: dimgray;
}`

 ` a:hover { 
    /* link color when hovering */ 
  color: black;
  text-decoration: none;
  border-bottom: 4px solid black;
}`

`.popupone { 
  /* tag background color */ 
  background-color: white;
  color: black; 
  font-family: Verdana, Arial; 
  font-size: 125%
}
`
`.passage button {
  background-color: transparent;
  color: var(--text);
  border: 1px solid var(--text);
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: .05em;
  padding: .5em;
}`

`.dm .passage button {
  color: var(--dm-text);
  border: 1px solid var(--dm-text);
}`

`.passage button:hover {
  box-shadow: 4px 4px 0 var(--menu);
}`

`.dm .passage button:hover {
  box-shadow: 4px 4px 0 var(--dm-menu);
}`

// below are examples of code that were not implemented in this version including some of the first buttons I tried making: 

`.yes button {
  display: flex;
  margin: 0 auto;
  transform: translateX(-10%);
}`

`.passage img {
  display: block;
  margin: 0 auto;
}`

`.areyousure-container {
  position: relative;
  width: 1200px; /* Or a specific width */
  height: 400px; /* Give it height to contain the image */
}`

`.areyousure-image {
  position: absolute;
  top: 200; /* From the top of the container */
  left: 400; /* From the left of the container */
  /* Or use bottom/right for precise placement */
  /* bottom: 20px; */
  /* right: 800px; */
}`

`a.popupone { 
  /* tag link color */
  color: darkgrey; 
  }`

`a.popupone:hover { 
  /* tag link when hovering */ 
  color: black;
  text-decoration: none;
  border-bottom: 4px solid black;
}`

`#ui-bar { 
  /* getting rid of ugly ass sidebar */
  display: none; 
}`

## How did you learn all of that?? 

Christy Tucker:
[HowToBuildAChatSimulation](https://christytuckerlearning.com/how-i-built-a-chat-simulation-in-2-hours/)

- This was a great starting off point and it allowed me to start thinking of all the things a chat simulation might entail, however, she did this one in Harlowe and it set me off on the wrong path since I had to later switch to SugarCube. 
- She didn't provide any code in this page also so while it set me on the right foot, I was still floundering. 

[HowToBuildAChatSimulation2](https://christytuckerlearning.com/twine-chatbot-improvements/)

- She updated it! With SugarCube! And added example code!! This was very helpful. 

[VeryHelpful](https://christytuckerlearning.com/twine-makes-branching-scenarios-easier/)

- I didn't necessarily use this, but I read it and thought I should add it here. Just an overview of Twine, really. 

Adam Hammond (The GOAT): 
[SO HELPFUL](https://www.adamhammond.com/twineguide/#css)

- This guy is my hero; he's got a HUGE youtube playlist (and blog that follows along with it) about styling Twine with CSS in SugarCube. I watched all of his videos- it was amazing. I've got a parasocial relationship with him now. 

Developer.modzilla.org: 
[Great because I was confused on boxes for a while](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-sizing)

- This was a great site because I was still having a bit of trouble getting sizing and properties of boxes down and referencing this source helped me clear some things up. 

SUGARCUBE AND CSS HOW TO: EVERYTHING: 
[SugarCube Documentation: I learned everything on here](https://www.motoslave.net/sugarcube/2/docs/)
[Everything to know about CSS: I also learned everything on here](https://www.w3schools.com/css/)

- These two sources are what I stuck to the most-- they have everything you could ever want to know about Twine and CSS (except for the right instructions on how to troubleshoot my earlier problem and I might still be a bit emotional about it). Like, literally- any time I wanted to do something, I looked it up in these two documents and boom, the directions were there. 





