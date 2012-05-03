## LearnJS

Easy to make interactive teaching material with YAML and Markdown.

This is now a hobby project. I'm building this so I can make interactive slides for my courses.

## TODO

- tons of core things. Well, this is just a first commits.

## Screenshot
![screenshot of current LearnJS state](http://makzan.github.com/LearnJS/assets/images/screenshot.png)

## Sample Testing Value

	slides:
	  - widgets:
	    - type: text
	      posX: 40
	      posY: 30
	      content: |
	        # Slide Title 
	        so, now what?       

	        now we can have **markdown**, right? **yes, right, and _great_!!**
            
	        What's more? Let's add a link to [42games] 

	        And bullets too.
        
	        and I can have <span class='hello'>HTML code here</span> too.
      
	        ### What is Flash?
      
	        * It is an animation tool      
	        * It is a game      
	        * It is an iOS app      
	        * None of these.

	          [42games]: http://42games.net "Company behinds LearnJS"


	    - type: image
	      posX: 10
	      posY: 10
	      src: http://placekitten.com/400/300
	  - widgets:
	    - type: text
	      posX: 0
	      posY: 10
	      content: |
	        # Slide Title 
        
	        This is a link: [42games].
        
	        This is another link to [google][0].
       

	         [42games]: http://42games.net "Company behinds LearnJS"
	         [0]: http://google.com "Gooogle"


	    - type: image
	      posX: 10
	      posY: 10
	      src: http://placekitten.com/400/300

 
	
