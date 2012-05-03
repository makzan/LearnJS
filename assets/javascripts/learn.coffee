
source = $('#source')
output = $('#output')
storage = null

$ ->
  console.log 'Welcome to LearnJS console.'
  
  
  storage = new Storage()
  storage.load()
  
  renderer = new Renderer source
  
  renderer.render()
  
  source.change ->
    console.log "Changes"
    renderer.render()

class Storage
  load: ->
    source.val localStorage['source']
  save: (str) ->
    localStorage['source'] = str

class Renderer
  
  constructor: (@source) -> yes
  render: ->
    # get the source code
    str = source.val()
    
    # save the document
    storage.save str
    
    # parse the yaml into JS object
    obj = jsyaml.load(str)
    
    # inspect what's going on in console.
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log obj
    console.log JSON.stringify obj
    
    output.empty()
    
    for slide in obj.slides
         for widget in slide.widgets
           switch widget.type
             when 'text'
               content = widget.content
         
               # the markdown parser
               converter = new Showdown.converter();
       
               # and parse the content into HTML
               content = converter.makeHtml(content);                              
               output.append "<div>#{content}</div>"
             when 'image'
               output.append "<img src='#{widget.src}'>"
               
            
      #   
      # 
      # try 
      #   content = obj.slides[0].widgets[0].content
      #   
      #   # the markdown parser
      #   converter = new Showdown.converter();
      # 
      #   # and parse the content into HTML
      #   content = converter.makeHtml(content);
      #   
      # catch error
      #   console.log "Found error: #{error}"
      #   
      # 
      # 
      # 
      # 
      # 
      # try 
      #   content2 = obj.slides[0].widgets[1]
      #   output.append "<img src='#{content2.src}'>"
      # catch error
      #   console.log "Found error: #{error}"
      
    
    
	
    