Video Player
============
This was built to mange video playlists in a static website. 

##Components
The player leverages **jQuery** for the functionality. The template is built with **mustache.js**. These files are included in the **components** directory.

* [jQuery](http://jquery.com/) - Version 1.11.1 is included here.
* [mustache.js](https://github.com/janl/mustache.js/) - Version 0.8.2 is included here.

<hr>

###Installation

####Requirements
Your project needs jQuery and Mustache.js in order to function. They can either be in the project with files stored on the same server. Or they can be referenced via a CDN. Call them before your closing `</body>`. They are added in the demos here as:

<pre lang="javascript"><code>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.min.js"></script>
</code></pre>

####Configuration
Reference the default `video-player.js` file or add a script after the Mustache script. For example:

<pre lang="javascript"><code>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.8.1/mustache.min.js"></script>
	<script>
	// Streams in the data from the JSON file
	$(function() {
	  $.getJSON('js/videos.js', function(data) {
	    var template = $('#videotpl').html();
	    var html = Mustache.to_html(template, data);
	    $('#video-list').html(html);
	  });
	});

	// Changest the url of the iframe
	function loadIframe(iframeName, url) {
	  var $iframe = $('#' + iframeName);
	    if ( $iframe.length ) {
	      $iframe.attr('src',url);   
	      return false;
	    }
	  return true;
	}
	</script>
</code></pre>

The player will not work if you do not have the scripts in that order.

The second line should be modified to fit the path where you saved your playlist `$.getJSON('js/videos.js', function(data) {`. This is very important if you have multiple video playlists on your site. Rename the videos.js when you have multiple lists that you need to pull from. 

####HTML Markup
The default is 

<pre lang="javascript"><code>
	<section class="video-fixed-rt">
	  <div class="video-stage">
	    <!-- Include the default video to be viewed -->
	    <iframe name="ifrm" id="ifrm" src="//www.youtube.com/embed/pYkwcehadxo" frameborder="0" allowfullscreen></iframe>
	  </div>
	  
	  <div class="video-playlist">
	    <div class="playlist-heading">
	      <span>Related Videos</span>
	    </div>
	  	<nav>
	  		<ul id="video-list"></ul>
	  	</nav>
	  </div>
	</section>
</code></pre>

The class of the `<section>` should use the class of the player version that you want to use. The naming convention was set to describe [element type]-[grid type]-[position of playlist]. The grid options are fluid or fixed. The positions can be **top**(top), **rt**(right), **btm**(bottom), or **lt**(left).

The `src` in the `<iframe>` sets the default video. Replace as necessary into `src="//www.youtube.com/embed/pYkwcehadxo"`. 

The default player has the list populated as `<li>` items into `<ul id="video-list"></ul>`. 

####HTML Template script
The template is populated by the script. The default is 

<pre lang="javascript"><code>
	<script id="videotpl" type="text/template">
	  {{#videos}}
	    <li><a href="{{url}}" onclick="return loadIframe('ifrm', this.href);">{{{title}}}</a></li>
	  {{/videos}}
	</script>
</code></pre>

####Styling
Add the respective stylesheet according to the player version that you need in that page. 

Add the HTML template into where you need it in your page. The BruxZir demo has`video-player-fixed-rt.css` to your project in the `<head>` tag as <br>

  `<link rel="stylesheet" href="css/video-player.css">`

Modify the path to where you have the CSS file. Rather than editing that file, you might wish to add your overrides into an additional CSS file that you are using sitewide. 

<hr>

###Demos

#### demo-main
Basic implementation of a player on a static page. The demo is built with [https://github.com/JGallardo/bones](https://github.com/JGallardo/bones) but you can modify the CSS file structure as you need. This has a player that is on a fixed grid up to 1800px. The playlist by default is on the right when viewing pages over 960px wide. The playlist is then dropped below the video stage when the browser window is or below 959px wide. Use this as a starting point for more consistent projects.

#### demo-bruxzir 
Example of how I used the code on the BruxZir website redesign. It has a responsive layout with the video list on the right by default. The class that 