// set green or red color for Do or Don't headline
$('h2').each(function() {
    var currItem = $(this);
    var currItemString = currItem.text().trim();
    
    if (currItemString.indexOf("Do:") == -1) {
        currItem.css('color', 'red');
    }
    else if (currItemString.indexOf("Don't:") == -1) {
        currItem.css('color', 'green');
    }
});
