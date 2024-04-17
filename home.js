// #region nav
// Add active class to the current button (highlight it)
var header = document.getElementById("nav-ul");
var btns = header.getElementsByClassName("nav-li");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

// #region rotater
TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};



window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap {}";
  document.body.appendChild(css);
};

// #region animation
function handleScroll() {
  const scrollPositionInt = window.scrollY || window.pageYOffset;

  const card_element_box_heder = document.querySelector('.card_element_box_heder');
  const card_element1 = document.querySelector('.card_element1');
  const card_element2 = document.querySelector('.card_element2');
  const card_element3 = document.querySelector('.card_element3');
  


  if (scrollPositionInt >= 490 ) {
    card_element_box_heder.classList.add('active');

    card_element1.classList.add('active');
    card_element2.classList.add('active');
    card_element3.classList.add('active');
  } else {
    card_element_box_heder.classList.remove('active');

    card_element1.classList.remove('active');
    card_element2.classList.remove('active');
    card_element3.classList.remove('active');
  }
}

window.addEventListener("scroll", handleScroll);

  