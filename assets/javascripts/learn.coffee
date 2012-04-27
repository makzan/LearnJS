$ ->
  console.log 'Welcome to LearnJS console.'
  source = $('#source');
  output = $('#output')
  
  source.val localStorage['source']
  
  source.change ->
    # get the source code
    str = source.val()
    
    # save the document
    localStorage['source'] = str
    
    
    obj = jsyaml.load(str)
    console.log obj
    console.log JSON.stringify obj
    
    output.val JSON.stringify obj
    
    content = obj.slides[0].content
    
    converter = new Showdown.converter();
    content = converter.makeHtml(content);
    
    $('#test').remove()
    $('body').append "<div id='test'></div>"
    $('#test').html content
    