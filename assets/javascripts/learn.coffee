$ ->
  console.log 'Welcome to LearnJS console.'
  source = $('#source');
  
  source.val localStorage['source']
  
  source.change ->
    # get the source code
    str = source.val()
    
    # save the document
    localStorage['source'] = str
    
    # parse the yaml into JS object
    obj = jsyaml.load(str)
    
    # inspect what's going on in console.
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log obj
    console.log JSON.stringify obj
    
    content = obj.slides[0].content
    
    # the markdown parser
    converter = new Showdown.converter();
    
    # and parse the content into HTML
    content = converter.makeHtml(content);
    
    $('#test').remove()
    $('body').append "<div id='test'></div>"
    $('#test').append content
    
    content2 = obj.slides[1]
    $('#test').append "<img src='#{content2.src}'>"
    