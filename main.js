function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const openandclosediv = document.getElementById('op-btn');
openandclosediv.onclick = () => myFunction();
