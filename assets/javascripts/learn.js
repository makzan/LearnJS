(function() {

  $(function() {
    var source;
    console.log('Welcome to LearnJS console.');
    source = $('#source');
    source.val(localStorage['source']);
    return source.change(function() {
      var content, content2, converter, obj, str;
      str = source.val();
      localStorage['source'] = str;
      obj = jsyaml.load(str);
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      console.log(obj);
      console.log(JSON.stringify(obj));
      content = obj.slides[0].content;
      converter = new Showdown.converter();
      content = converter.makeHtml(content);
      $('#test').remove();
      $('body').append("<div id='test'></div>");
      $('#test').append(content);
      content2 = obj.slides[1];
      return $('#test').append("<img src='" + content2.src + "'>");
    });
  });

}).call(this);
