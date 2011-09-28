(function() {
  var Banner, banner;
  Banner = (function() {
    function Banner() {}
    Banner.prototype.div = function() {
      return $('<div id="banner"></div>').appendTo('body');
    };
    Banner.prototype.head = function() {
      return $('<h1 id="title">Welcome to my Site!!</h1>').appendTo('#banner');
    };
    return Banner;
  })();
  banner = new Banner;
  banner.div();
  banner.head();
}).call(this);
