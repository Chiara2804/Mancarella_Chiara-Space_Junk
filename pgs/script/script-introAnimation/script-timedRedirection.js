//typing effect
var i = 0;
var aText = new Array('YOU ARE ABOUT TO BE CATAPULTED INTO AN AUGMENTED REALITY WORLD.',
    'To move inside it, first click with the left button and then move the mouse.',
    'To enter one of the proposed pages, point the circle (initially in the center of the page)',
    'above the one you want to enter. Then click with the left mouse button.');

var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialize current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("text");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 1500);
        } else if (iIndex == aText.length) {
            setTimeout(function() {
                window.location.href = 'index1.html';
            }, 6000);

        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();





//redirection to main page