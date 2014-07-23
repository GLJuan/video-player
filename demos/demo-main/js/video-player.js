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