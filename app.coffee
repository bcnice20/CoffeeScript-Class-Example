class Banner
  div: ->
    $('<div id="banner"></div>').appendTo('body')

  head: ->
    $('<h1 id="title">Welcome to my Site!!</h1>').appendTo('#banner')

class Content
  div: ->
    $('<div id="content"></div>').appendTo('body')

  text: ->
    $('<p>This is some text.</p>').appendTo('#content')


class Footer
  div: ->
    $('<div id="footer"></div>').appendTo('body')

banner = new Banner
content = new Content
footer = new Footer

banner.div()
banner.head()
