## LearnJS

Easy to make interactive teaching material with YAML and Markdown.

This is now a hobby project. I'm building this so I can make interactive slides for my courses.

## TODO

- tons of core things. Well, this is just a first commits.

## Screenshot
![screenshot of current LearnJS state](http://makzan.github.com/LearnJS/assets/images/screenshot.png)

## Sample Testing Value

	slides:
	  - type: text
	    pos: 
	      x: 40
	      'y': 30
	    content:
	    >
	      # Title
	      
	      so, now what? 
	      
	
	      now we can have **markdown**, right? **yes, right, and _great_!!**
	      
	      
	      What's more? Let's add a link to [42games] 
	
	      And bullets too.
	      
	      ### What is Flash?
	      
	      * It is an animation tool
	      
	      * It is a game
	      
	      * It is an iOS app
	      
	      * None of these.
	
	        [42games]: http://42games.net "Company behinds LearnJS"
	
	
	  - type: image
	    pos: 
	      x: 0
	      'y': 10
	    src: http://placekitten.com/300/200
