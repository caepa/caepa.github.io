<link rel="stylesheet" href="https://cdn.muut.com/1/moot.css">
<link rel="stylesheet" href="http://blog.caepa.org/assets/css/drawer.css">
  
<!-- You can safely delete this line if your theme does not require jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://cdn.muut.com/1/moot.min.js"></script>
<script src="http://blog.caepa.org/assets/js/drawer.js"></script>
<script>
var url = 'https://api.muut.com/postcounts?'

$('.comment-count').map(function() {
  url += '&path=/caepaboard/comments/' + $(this).data('path')
})

$.getJSON(url, function(json) {
  $.each(json, function(path, data) {
    var key = path.replace('/caepaboard/comments/', '')
    $('[data-path="' + key + '"]').text(data.size)
  })
})

$.getJSON(url, function(json) {
    var results = $(".comment-count");
    
    $.each(json, function(key, val) {
        results.append("<span>" + val["size"] + "</span>");
    });
});
</script>