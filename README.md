# Tellers' Desk - Server

A study case system used to learn a set of Web Technologies (Javascript/ES6/Ember.js, CSS/SASS, Node.js/Express and MongoDB). The system is another attempt to create a **Storytelling RPG** manager (for the former "New World of Darkness - **nWoD**", now "Chronicles of Darkness - **CofD**") to aid storytellers around the world.

For more information regarding Storytelling and nWoD/CofD, check <https://en.wikipedia.org/wiki/White_Wolf_Publishing> or <http://theonyxpath.com/category/worlds/chroniclesofdarkness/>. 

For the front-end project got to [Teller's Desk - Front](https://github.com/alejoceballos/tellersdesk-front "https://github.com/alejoceballos/tellersdesk-front")

### To make a long story short...

The main idea is to allow a storyteller and its fellow players to manage story tables and characters sheets in one system. Basically one story may allow one or more characters to interact with each other.  

#### Example:
```
.
├── Unsecured Area
│   └── Login
├── Secured Area
│   ├── Dashboard 
│   │   ├── Stories
│   │   │   └── My Stories (as a Player and a Storyteller)
│   │   ├── Characters
│   │   │   ├── My Characters (as a Player)
│   │   │   └── My Non Playable Characters (as a Storyteller)
│   │   └── Last Actions 
│   │       ├── My Last Actions (as a Storyteller and a Player)
│   │       └── Last each action by Story and Player (as an Admin)
│   ├── Stories
│   │   ├── My Stories (as a Player)
│   │   ├── My Stories (as a Storyteller)
│   │   └── All Other Stories (as an Admin)
│   ├── Characters
│   │   ├── My Characters (as a Player)
│   │   ├── My Non Playable Characters (as a Storyteller)
│   │   └── All Other Characters (as an Admin)
.   .   
.   .
.   .
```

#### System milestones are:
1. Characters management:
2. Story management:
3. Security

For example:
- An admin can do anything, also is the only one that can create users;
- A Storyteller can create stories, NPCs and associate characters to the stories;
- A Player can only create characters;
- Other requirements:
  - While in a story, a player cannot update its character. Only the Storyteller responsible for the story is allowed to do it;

# Setup
```
TBD
```

# **Thanks to...**
... The development team and supporters of the applications below, without them I could not even start this project at such low cost (I'm $upporting some of them, just to let you know):
+ Ember.js - [http://emberjs.com/](http://emberjs.com/ "http://emberjs.com/")
+ Express - [https://expressjs.com/](https://expressjs.com/ "https://expressjs.com/")
+ Font Awesome - [https://fontawesome.com/](https://fontawesome.com/ "https://fontawesome.com/")
+ Gimp - [http://www.gimp.org/](http://www.gimp.org/ "http://www.gimp.org/")
+ Git - [http://git-scm.com/](http://git-scm.com/ "http://git-scm.com/")
+ GitHub - [https://github.com/](https://github.com/ "https://github.com/")
+ GitKraken - [https://www.gitkraken.com/](https://www.gitkraken.com/ "https://www.gitkraken.com/")
+ Google Chrome - [http://www.google.com/chrome/](http://swww.google.com/chrome/ "http://www.google.com/chrome/")
+ MongoDB - [https://www.mongodb.com/](https://www.mongodb.com/ "https://www.mongodb.com/")
+ Mozilla Firefox - [https://www.mozilla.org/en-US/firefox/new/](https://www.mozilla.org/en-US/firefox/new/ "https://www.mozilla.org/en-US/firefox/new/")
+ Node.js - [http://nodejs.org/](http://nodejs.org/ "http://nodejs.org/")
+ Robo 3T - [https://www.robomongo.org/](https://www.robomongo.org/ "https://www.robomongo.org/")
+ Ubuntu Desktop - [http://www.ubuntu.com/desktop](http://www.ubuntu.com/desktop "http://www.ubuntu.com/desktop")

**Node.js Libraries**
+ http-errors - [https://github.com/jshttp/http-errors](https://github.com/jshttp/http-errors "https://github.com/jshttp/http-errors")
+ http-status-codes - [https://github.com/prettymuchbryce/node-http-status](https://github.com/prettymuchbryce/node-http-status "https://github.com/prettymuchbryce/node-http-status")
+ jsonapi-serializer - [https://github.com/SeyZ/jsonapi-serializer](https://github.com/SeyZ/jsonapi-serializer "https://github.com/SeyZ/jsonapi-serializer")
+ MongoDB Node.JS Driver - [https://mongodb.github.io/node-mongodb-native/](https://mongodb.github.io/node-mongodb-native/ "https://mongodb.github.io/node-mongodb-native/")

**Ember Addons/Libraries:**
+ ember-cli-sass - [https://github.com/aexmachina/ember-cli-sass](https://github.com/aexmachina/ember-cli-sass "https://github.com/aexmachina/ember-cli-sass")
+ ember-fontawesome - [https://github.com/FortAwesome/ember-fontawesome](https://github.com/FortAwesome/ember-fontawesome "https://github.com/FortAwesome/ember-fontawesome")
+ ember-intl - [https://github.com/ember-intl/ember-intl](https://github.com/ember-intl/ember-intl "https://github.com/ember-intl/ember-intl")

**Special thanks to:**
+ All the guys that have created all these wonderful Javascript libraries, hidden in the dungeons of the ones referenced here, that I was able to use!

**Even though I'm paying for... Thanks to...**
+ The [GitKraken](https://www.gitkraken.com/ "https://www.gitkraken.com/") team for creating a truly cross platform and beautiful Git Client;
+ The [Intellij IDEA](https://www.jetbrains.com/idea/ "Intellij IDEA") team and all the guys in JetBrains. Your IDE rocks (Money well spent). Among your plugins in the repository, special thanks to:
    + .ignore - [http://ignore.hsz.mobi/]
    + idea-handlebars - [https://github.com/dmarcotte/idea-handlebars]
    + intellij-emberjs - [https://github.com/Turbo87/intellij-emberjs]

# By the way...
If you find any broken link, English mistakes (there must be tons) or any type of fix you think its worth of noticing... Please, **contact me**! My contact info can be found in my **GitHub** profile. Thanks!

[ [https://github.com/alejoceballos](https://github.com/alejoceballos "https://github.com/alejoceballos") ]

# **License**
```
The MIT License (MIT)

Copyright (c) 2016 Alejo Ceballos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
