document.onreadystatechange = function() {
    var state = document.readyState;
    if (state == 'interactive') {
        document.getElementById('background').style.display = "none";
    } else if (state == 'complete') {
        setTimeout(function() {
            document.getElementById('interactive');
            document.getElementById('container').style.display = "none";
            document.getElementById('background').style.display = "block";
        }, 5000);
    }
}