var state = true;

function open_or_close_form() {

    //open form
    if (state == true) {
        document.getElementById('form').style.display = 'block';
        state = false;
    } else if (state == false) { //close form
        document.getElementById('form').style.display = 'none';
        state = true;
    }
}