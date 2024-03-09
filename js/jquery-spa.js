$(document).ready(function () {

    function loadPage(page) {
        $.get(page, function (pageContent) {
            $("#content").html(pageContent);
        });
    }

    // Handle click events on anchor tags with data-link attribute
    $(document).on('click', '[data-link]', function (e) {
        e.preventDefault();

        var page = $(this).attr('href');
        var routes = page.substring(0, page.lastIndexOf('.'));
        window.history.pushState(null, null, routes);

        console.log("Ajax loaded: " + page);
        loadPage(page);
    });

    // Handle popstate event when user navigates back or forward
    $(window).on('popstate', function () {
        var url = window.location.href;
        var routes = url.substring(url.lastIndexOf('/') + 1);
        var page = routes !== '' ? url + ".html" : "home.html";

        console.log(page);
        loadPage(page);
    });

    // Handle initial page load
    var url = window.location.href;
    var routes = url.substring(url.lastIndexOf('/') + 1);
    var page = routes !== '' ? url + ".html" : "home.html";

    console.log(page);
    loadPage(page);

});
