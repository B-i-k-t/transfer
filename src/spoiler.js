ask__minus1.onclick = function() {
    minus(0);
}
ask__plus1.onclick = function() {
    plus(0);
}

ask__minus2.onclick = function() {
    minus(1);
}
ask__plus2.onclick = function() {
    plus(1);
}

ask__minus3.onclick = function() {
    minus(2);
}
ask__plus3.onclick = function() {
    plus(2);
}

ask__minus4.onclick = function() {
    minus(3);
}
ask__plus4.onclick = function() {
    plus(3);
}

ask_plus = document.getElementsByClassName("ask__plus");
ask_minus = document.getElementsByClassName("ask__minus");
ask_text = document.getElementsByClassName("ask__text"); 
ask_header = document.getElementsByClassName("ask__header"); 

function minus(n) {
    ask_plus[n].className += " ask__plus-active";
    ask_minus[n].className = ask_minus[n].className.replace(" ask__minus-active", "");
    ask_text[n].className = ask_text[n].className.replace(" ask__text-active", "");
    ask_header[n].className = ask_header[n].className.replace(" ask__header-active", "");
}

function plus(n) {
    ask_minus[n].className += " ask__minus-active";
    ask_plus[n].className = ask_plus[n].className.replace(" ask__plus-active", "");
    ask_text[n].className += " ask__text-active";
    ask_header[n].className += " ask__header-active";
}
