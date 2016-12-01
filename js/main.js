/**
 * Created by xujian on 12/1/16.
 */
function loadPosts() {
    var template = ' <a href="{0}">{1} <span style="float: right">{2}</span></a>' +
        '<br><span>{3}</span><br>';
    $.get('posts.json', function (res) {
        $.each(res, function (index, item) {
            $('#postContainer').append(template.format(item.url, item.name, item.date, item.desc));
        });
    })
}
function loadHeader(){
    $.get('header.html', function (res) {
       $('#header').html(res);
        $( "span.menu" ).click(function() {
            $( "ul.nav1" ).slideToggle( 300, function() {
                // Animation complete.
            });
        });
    })
}
function loadFooter(){
    $.get('footer.html', function (res) {
        $('#footer').html(res);
    })
}


$(document).ready(function () {
    loadHeader();
    loadFooter();
});