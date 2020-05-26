checkDarkMode = () => {
  console.log(localStorage.getItem('darkmode'))
  if (window.localStorage.getItem('darkmode') == 'on') {
    document.getElementById('checkbox').checked = true;
    darkMode();
  } else if (window.localStorage.getItem('darkmode') == 'off') {
    document.getElementById('checkbox').checked = false;
    darkMode();
  }
}

darkMode = () => {
  let elements = [];
  let black_elements = [];
  let grey_elements = [];
  let project_page_black =[];
  let p = document.getElementsByTagName('P');
  let a = document.getElementsByTagName('A');
  let li = document.getElementsByTagName('LI');
  let h1 = document.getElementsByTagName('H1');
  let h2 = document.getElementsByTagName('H2');
  let h3 = document.getElementsByTagName('H3');
  let h4 = document.getElementsByTagName('H4');
  let project = document.getElementsByClassName('projecttitle');
  let rec = document.getElementById('rec');
  let img = document.getElementsByClassName('darkmode');
  elements.push(p, a, li, h1, h2, h3, h4);
  grey_elements.push(p, a, li, h3, h4);
  black_elements.push(h1, h2);
  project_page_black.push(h3,h4);
  var mediaQuery = window.matchMedia("(max-width: 700px)");
  if (document.getElementById('checkbox').checked) { // Dark Mode On
    for (let i = 0; i < img.length; i++) {
      img[i].style.cssText = '-webkit-filter: invert(1); filter: invert(1);';
    }
    document.getElementById('switch-label').textContent = 'Light Mode';
    document.body.style.backgroundColor = "#000000";
    rec.style.cssText = 'background-color: #ffffff;';
    for (let i = 0; i < project.length; i++) {
      project[i].style.cssText = 'border-bottom: solid #ffffff 5px;';
    }
    for (let i = 0; i < elements.length; i++) {
      for (let j = 0; j < elements[i].length; j++) {
        elements[i][j].style.color = '#ffffff'
      }
    }
    if (mediaQuery.matches) {
      document.getElementById('switch-label').style.color = '#000000';
      document.getElementById('switch-label').style.fontWeight = '300';
      document.querySelector('.slider').style.backgroundColor = '#cecece';
    }
    if (document.getElementById('projectoverview')) {
      document.getElementById('projectoverview').style.cssText =
        'border-right: 5px solid #ffffff; border-left: 5px solid #ffffff;  padding-left: 1%;  padding-right: 1%;';
    }
    if (document.getElementById('oppertunities')) {
      document.getElementById('oppertunities').style.cssText =
        'border-top: 5px solid #ffffff; border-bottom: 5px solid #ffffff; padding-top: 2%;';
      document.querySelector('.suggestions').style.cssText =
        'display: grid; grid-template-columns: auto auto auto; grid-gap: 100px; border-top: 5px solid #ffffff; border-bottom: 5px solid #ffffff; padding-top: 2%;';
    }
    window.localStorage.setItem('darkmode', 'on');
  } else if (document.getElementById('checkbox').checked === false) { //Dark Mode Off
    for (let i = 0; i < img.length; i++) {
      img[i].style.cssText = '-webkit-filter: invert(0); filter: invert(0);';
    }
    document.getElementById('switch-label').textContent = 'Dark Mode';
    document.body.style.backgroundColor = "#ffffff";
    rec.style.cssText = 'background-color: #000000;';
    for (let i = 0; i < project.length; i++) {
      project[i].style.cssText = 'border-bottom: solid #000000 5px;';
    }
    for (let i = 0; i < grey_elements.length; i++) {
      for (let j = 0; j < grey_elements[i].length; j++) {
        grey_elements[i][j].style.color = '#696969'
      }
    }
    for (let i = 0; i < black_elements.length; i++) {
      for (let j = 0; j < black_elements[i].length; j++) {
        black_elements[i][j].style.color = '#000000'
      }
    }
    if (mediaQuery.matches) {
      document.getElementById('switch-label').style.color = '#ffffff';
      document.getElementById('switch-label').style.fontWeight = '300';
      document.querySelector('.slider').style.backgroundColor = '#ffffff';

    }
    if (document.getElementById('projectoverview')) {
      document.getElementById('projectoverview').style.cssText =
      'border-right: 5px solid #000000; border-left: 5px solid #000000;  padding-left: 1%;  padding-right: 1%;';
      for (let i=0; i<project_page_black.length; i++){
        for (let j = 0; j < project_page_black[i].length; j++) {
          project_page_black[i][j].style.color = '#000000'
        }
      }
    }
    window.localStorage.setItem('darkmode', 'off');
  }
}
if (document.getElementById("greeting")) {
  let time = new Date().getHours();
  let greeting;

  let morning = ("Good morning!");
  let afternoon = ("Good afternoon!");
  let evening = ("Good evening!");
  let other = ("Hello!");

  if (time >= 0 && time < 12) {
    greeting = morning;

  } else if (time >= 12 && time < 18) {
    greeting = afternoon;

  } else if (time >= 17 && time < 24) {
    greeting = evening;

  } else {
    greeting = other;
  }

  document.getElementById("greeting").innerHTML = greeting;

}
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}