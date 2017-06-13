// Automatically image sources
$(document).ready(function () {
    LoadContactRefs();
});

/**
 * Loads the nav bar references


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
            case "github.png":
                $(img).parent().attr("href", "https://github.com/captainsalt")
                break;
            case "linkedin.png":
                $(img).parent().attr("href", "https://www.linkedin.com/in/david-wright-659006144/")
                break;
            case "stack.png":
                $(img).parent().attr("href", "https://stackoverflow.com/users/7107832/captainsalt")
                break;
            default:
                break;
        }
    }
}