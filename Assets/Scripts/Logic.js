window.onload = function () {
    LoadContactRefs();
    LoadNavRefs();
    ButtonHook();
}

/**
 * Loads nav references
 */
function LoadNavRefs() {
    var navItems = $("nav ul li a").get();

    for (var i = 0; i < navItems.length; i++) {
        var element = navItems[i];

        switch (element.outerText) {
            case "Contact": element.href = "contact.html"; break;
            case "About": element.href = "index.html"; break;
            case "Portfolio": element.href = "portfolio.html"; break;
        }
    }
}

/**
 * Loads the contact image references
 */
function LoadContactRefs() {
    var imageObjects = $("img").get();

    for (var i = 0; i < imageObjects.length; i++) {
        var img = imageObjects[i];
        var imageSource = $(img).attr('src');
        var sourceEnd = imageSource.substring(14, imageSource.length)

        switch (sourceEnd) {
            case "github.png": $(img).parent().attr("href", "https://github.com/captainsalt"); break;
            case "linkedin.png": $(img).parent().attr("href", "https://www.linkedin.com/in/david-wright-659006144/"); break;
            case "stack.png": $(img).parent().attr("href", "https://stackoverflow.com/users/7107832/captainsalt"); break;
        }
    }
}

function ButtonHook() {
    //button events
    $("button").mouseover(function () {
        $(this).css("background", "#367c79");
    })

    $("button").mouseout(function () {
        $(this).css("background", "#4aaaa5");
    });

    $("button").mousedown(function () {
        $(this).css("background", "#102322");
    });

    $("button").mouseup(function () {
        $(this).css("background", "#4aaaa5");
    });
}
