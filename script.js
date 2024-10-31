//	the important thing here is that it works tbh

let passport = document.getElementById("cover");
let passportOpened = document.getElementById("passport-opened");
let page1 = document.getElementById("page-1");
let btn1 = document.getElementById("Btn1");

function passportOpen() {
  btn1.style.display = "inline-block";
  passportOpened.style.display = "block";
  page1.style.display = "block";
  passport.className = "passportANI";
  passportOpened.className = "pageANI";
}

function passportClose() {
  passport.style.display = "block";
  passport.className = "passportCloseANI";
  passportOpened.style.display = "none";
  btn1.style.display = "none";
}
