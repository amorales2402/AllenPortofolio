var current_section: string;
var current_section_temp: string;
var next_section: string;

function animatelogo() {
  const element_left = document.getElementById("transitionleft");
  const element_right = document.getElementById("transitionright");
  if (element_left != null) {
    setTimeout(() => {
      element_left.classList.add("translogoleft");
    }, 1);
  }
  if (element_right != null) {
    setTimeout(() => {
      element_right.classList.add("translogoright");
    }, 1);
  }
}

function removelogo() {
  const element_left = document.getElementById("transitionleft");
  const element_right = document.getElementById("transitionright");
  const container_right = document.getElementById("transcontainerright");
  if (element_left != null) {
    element_left.classList.remove("translogoleft");
  }
  if (element_right != null) {
    element_right.classList.remove("translogoright");
  }
  if (container_right != null) {
    container_right.classList.remove("transcontright");
  }
}

function remove_transitiontxt() {
  var transitionr = document.querySelectorAll(".transitiontxtright");
  var transitionl = document.querySelectorAll(".transitiontxtleft");
  var transitiont = document.querySelectorAll(".transitiontxttop");

  for (const transr of transitionr) {
    transr.classList.remove("transtxtright");
  }
  for (const transl of transitionl) {
    transl.classList.remove("transtxtleft");
  }
  for (const transt of transitiont) {
    transt.classList.remove("transtxttop");
  }
}
function add_transitiontxt() {
  var transitionr = document.querySelectorAll(".transitiontxtright");
  var transitionl = document.querySelectorAll(".transitiontxtleft");
  var transitiont = document.querySelectorAll(".transitiontxttop");


  for (const transr of transitionr) {
    setTimeout(() => {
      transr.classList.add("transtxtright");
    }, 1);
  }
  for (const transl of transitionl) {
    setTimeout(() => {
      transl.classList.add("transtxtleft");
    }, 1);
  }
  for (const transt of transitiont) {
    setTimeout(() => {
      transt.classList.add("transtxttop");
    }, 1);
  }
}

function app_navigator(
  current_section: string,
  next_section: string,
  tittle_text: string
) {
  if (current_section == "section") {
    if (current_section_temp == null) {
      current_section = "section1";
    } else {
      current_section = current_section_temp;
    }
  }

  var current_section_html = document.getElementById(current_section);
  var next_section_html = document.getElementById(next_section);
  var tittle_text_html = document.getElementById("tittle_menu");
  var home = document.getElementById("home_option");
  var resume = document.getElementById("resume_option");
  var menu = document.getElementById("navbar");

  remove_transitiontxt();

  if (current_section_html != null) {
    current_section_html.style.display = "none";
    if (current_section == "section1") {
      removelogo();
    }
  }
  if (next_section_html != null) {
    next_section_html.style.display = "flex";
  }

  if (home != null) {
    if (next_section == "section1") {
      home.style.display = "none";
      animatelogo();
      if (resume != null) {
        resume.style.display = "block";
      }
      animatelogo();
    } else {
      if (home.style.display != "block") {
        home.style.display = "block";
      }
    }
  }
  if (menu != null) {
    if (next_section == "section1") {
      menu.classList.remove("bg-light");
    } else {
      if (menu.classList.contains("bg-light")) {
      } else {
        menu.classList.add("bg-light");
      }
    }
  }

  if (next_section == "resume") {
    if (resume != null) {
      resume.style.display = "none";
    }
  }

  //if (next_section != "section1") {
  if (tittle_text_html != null) {
    //    tittle_text_html.style.display = "flex";
    tittle_text_html.innerHTML = tittle_text;
  }
  add_transitiontxt();

  //}

  current_section_temp = next_section;
}

function transitxt() {}

window.onload = function () {
  animatelogo();
  var allimages = document.getElementsByTagName("img");
  for (var i = 0; i < allimages.length; i++) {
    if (allimages[i].getAttribute("data-src")) {
      allimages[i].setAttribute("src", allimages[i].getAttribute("data-src"));
    }
  }
};
