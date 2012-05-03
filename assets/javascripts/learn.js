(function() {
  var Renderer, Storage, output, source, storage;

  source = $('#source');

  output = $('#output');

  storage = null;

  $(function() {
    var renderer;
    console.log('Welcome to LearnJS console.');
    storage = new Storage();
    storage.load();
    renderer = new Renderer(source);
    renderer.render();
    return source.change(function() {
      console.log("Changes");
      return renderer.render();
    });
  });

  Storage = (function() {

    function Storage() {}

    Storage.prototype.load = function() {
      return source.val(localStorage['source']);
    };

    Storage.prototype.save = function(str) {
      return localStorage['source'] = str;
    };

    return Storage;

  })();

  Renderer = (function() {

    function Renderer(source) {
      this.source = source;
      true;
    }

    Renderer.prototype.render = function() {
      var content, converter, obj, slide, str, widget, _i, _len, _ref, _results;
      str = source.val();
      storage.save(str);
      obj = jsyaml.load(str);
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
      console.log(obj);
      console.log(JSON.stringify(obj));
      output.empty();
      _ref = obj.slides;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        slide = _ref[_i];
        _results.push((function() {
          var _j, _len2, _ref2, _results2;
          _ref2 = slide.widgets;
          _results2 = [];
          for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
            widget = _ref2[_j];
            switch (widget.type) {
              case 'text':
                content = widget.content;
                converter = new Showdown.converter();
                content = converter.makeHtml(content);
                _results2.push(output.append("<div>" + content + "</div>"));
                break;
              case 'image':
                _results2.push(output.append("<img src='" + widget.src + "'>"));
                break;
              default:
                _results2.push(void 0);
            }
          }
          return _results2;
        })());
      }
      return _results;
    };

    return Renderer;

  })();

}).call(this);
