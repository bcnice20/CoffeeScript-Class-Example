class Banner
  div: ->
    $('<div id="banner"></div>').appendTo('body')

  head: ->
    $('<h1 id="title">Welcome to my Site!!</h1>').appendTo('#banner')

class Content

class Footer

banner = new Banner

banner.div()
banner.head()
