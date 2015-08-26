# KnitPicker 

This is a prototype for a knitting app  I developed @Nortal Hackathon 2015.
Sales pitch and technical details:

With the ample experience of having knitted a pair on the 6th grade and another one a few weeks ago, I can tell you that knitting socks sucks... Not only are the patterns written in teeny-tiny font no-one over forty is able to perceive at all, but you also need to keep constant track of your progress. This involves being equipped with a pen and paper and scribbling down the rows, decreases, increases, loops, crosses and stitches you have managed to do so far. I'm sure you all know how utterly annoying this process is and how completely it destroys your knitting momentum. But not to worry...

Enter KnitPicker!

With KnitPicker you can easily follow the pattern in you browser and make it as large as your old and tired eyes require. And more importantly, with a subtle click of a button you can mark down checkpoints and effortlessly follow your progress. No more missing that tricky cross on every seventh stich of every thrid or fourth row. No more messing up your decreases. No more switching back and forth with your knitting and the pen. With KnitPicker you can think less and flow more - and who doesn't want that!

Hardware:
- Arduino Yún board with Standard Firmata (uploaded through Arduino IDE)
- TinkerKit shield + a push button and a big green led attached to its pins
- My laptop as both the server and the client

Software:
- Express, a web framework for Node.js used for running the software
- Socket.io, for bi-directional, event-based communication between Arduino, the server and the client software.
- Angular.js for handling client side logic and presentation 
- Bootstrap and Font Awesome for looks
- JohnnyFive, a javascript framework for communicating with the Arduino
- Lodash for updating the json that is the knitting pattern

Development:
- Visual Studio 2013
- Gulp for running tasks 
- Git for version management

Yarn:
Nalle Taika by Novita

Vocabulary: 
push, broadcast, emit * 

* The most exciting thing in the project was to get the communication flowing from the server to the web client without the client asking for any updates.
