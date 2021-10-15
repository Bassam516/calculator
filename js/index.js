
var screen = document.getElementById('screen');
function static() {
    
    var x = 0, y = 0, z, s;
    var input = document.getElementsByTagName('input'),
        btn = document.getElementById('btn');

    for (var i = 0; i < 3; i++) {
        btn.children[i].style.backgroundColor = '#8f8f8f';
        btn.children[i].style.color = '#000';
    }
    for (var i = 3; i < 17; i += 4) {
        btn.children[i].style.backgroundColor = 'rgb(221 129 0)';
        btn.children[i].onfocus = function () {
            'use strict';
            this.style.color = 'rgb(221 129 0)';
            this.style.backgroundColor = '#fff';
        };
    }
    btn.children[16].style.width = '130px';
    btn.children[16].style.borderRadius = '30px';
    function calc() {
        'use strict';
        switch (s) {
            case ('+'):
                z = parseFloat(x) + parseFloat(y);
                break;
            case ('-'):
                z = x - y;
                break;
            case ('*'):
                z = x * y;
                break;
            case ('/'):
                z = x / y;
                break;
            case ('%'):
                z = x % y;
                break;

        }
    };


    for (var i = 0; i < input.length; i++) {
        input[i].onclick = function () {
            if (this.getAttribute("data-value") === "clear") {
                screen.value = '';
                screen.setAttribute('placeholder', '0');
                for (var i = 3; i < 17; i += 4) {
                    btn.children[i].style.backgroundColor = 'rgb(221 129 0)';
                    btn.children[i].style.color = '#fff';
                }

            } else if (this.getAttribute("data-value") === "backspace") {
                screen.value = screen.value.substring(0, screen.value.length - 1);

            } else if (this.getAttribute("data-value") === "number") {
                screen.value += this.value;
                screen.setAttribute('placeholder', '');
                for (var i = 3; i < 17; i += 4) {
                    btn.children[i].style.backgroundColor = 'rgb(221 129 0)';
                    btn.children[i].style.color = '#fff';
                }

            } else if (this.getAttribute("data-value") === "sign") {
                x = screen.value;
                s = this.value;
                screen.value = '';

            } else if (this.getAttribute("data-value") === "result") {
                y = screen.value;
                calc();
                screen.value = z;
            }
        };
    }
};

function scientific() {
    'use strict';
    var x = 0,y=0, z, s;
    var button = document.querySelectorAll('.scientific button'),
        res = document.getElementById('btn').lastElementChild;
    function func() {
        'use strict';
        switch (s) {

            case ('pow2'):
                z = Math.pow(x,2);
                break;
            case ('pow3'):
                z = Math.pow(x,3);
                break;
            case ('powx'):
                z = Math.pow(x,y);
                break;
            case ('root2'):
                z = Math.sqrt(x);
                break;
            case ('root3'):
                z = Math.cbrt(x);
                break;
            case ('1/x'):
                z = 1/x;
                break;
            case ('sin'):
                z = Math.fround(Math.sin(x * (Math.PI / 180)));
                break;
            case ('cos'):
                z = Math.fround(Math.cos(x * (Math.PI / 180)));
                break;
            case ('tan'):
                z = Math.fround(Math.tan(x * (Math.PI / 180)));
                break;
            case ('sinh'):
                z = Math.fround(Math.sinh(x));
                break;
            case ('cosh'):
                z = Math.fround(Math.cosh(x));
                break;
            case ('tanh'):
                z = Math.fround(Math.tanh(x));
                break;
            case ('e'):
                z = Math.E;
                break;
            case ('ex'):
                z = Math.pow(Math.E,x);
                break;
            case ('pi'):
                z = Math.PI;
                break;
            case ('rand'):
                z = Math.random();
                break;
            case ('log'):
                z = Math.log(x);
                break;
            case ('log10'):
                z = Math.log10(x);
                break;
            case ('log2'):
                z = Math.log2(x);
                break;

        }
    };


    for (var i = 0; i < button.length; i++) {
        button[i].onclick = function () {
            if (this.getAttribute("data-value") === "func") {
                x = screen.value;
                s = this.value;
                func();
                screen.value = z;

            } else if (this.getAttribute("data-value") === "val") {
                s = this.value;
                func();
                screen.value = z;

            } else if (this.getAttribute("data-value") === "var") {
                x = screen.value;
                s = this.value;
                screen.value = '';
         
                res.onclick = function () {
                    'use strict';
                    y = screen.value;
                    func();
                    screen.value = z;
                };
            }
        };
    }
};

static();
scientific();

$(document).ready(function () {
    $("#icon").click(function () {
        $(".static").fadeToggle(0);
        $(".scientific").fadeToggle(0);
    });
});