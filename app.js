(function() {
  var Banner, Content, Footer, banner, content, footer;
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
  Content = (function() {
    function Content() {}
    Content.prototype.div = function() {
      return $('<div id="content"></div>').appendTo('body');
    };
    Content.prototype.text = function() {
      $('<p>This is some text.</p>').appendTo('#content');
      return $('<p>This is some more text.</p>').appendTo('#content');
    };
    return Content;
  })();
  Footer = (function() {
    function Footer() {}
    Footer.prototype.div = function() {
      return $('<div id="footer"></div>').appendTo('body');
    };
    Footer.prototype.copyright = function() {
      return $('<p>&copy 2011 Brad Carter</p>').appendTo('#footer');
    };
    return Footer;
  })();
  banner = new Banner;
  content = new Content;
  footer = new Footer;
  banner.div();
  banner.head();
  content.div();
  content.text();
  footer.div();
  footer.copyright();
}).call(this);
