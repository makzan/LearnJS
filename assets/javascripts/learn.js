(function() {

  $(function() {
    var output, source;
    console.log('Welcome to LearnJS console.');
    source = $('#source');
    output = $('#output');
    source.val(localStorage['source']);
    return source.change(function() {
      var content, converter, obj, str;
      str = source.val();
      localStorage['source'] = str;
      obj = jsyaml.load(str);
      console.log(obj);
      console.log(JSON.stringify(obj));
      output.val(JSON.stringify(obj));
      content = obj.slides[0].content;
      converter = new Showdown.converter();
      content = converter.makeHtml(content);
      $('#test').remove();
      $('body').append("<div id='test'></div>");
      return $('#test').html(content);
    });
  });

}).call(this);
