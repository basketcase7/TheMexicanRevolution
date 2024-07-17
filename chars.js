function firstChar() {
  let firstCharLet = (document.getElementById("firstChar").value = "1");
  document.getElementById("firstChar").innerHTML = firstCharLet;
}

function secondChar() {
  let firstCharLet = (document.getElementById("firstChar").value = "2");
  document.getElementById("firstChar").innerHTML = firstCharLet;
}

function thirdChar() {
  let firstCharLet = (document.getElementById("firstChar").value = "3");
  document.getElementById("firstChar").innerHTML = firstCharLet;
}

function fourthChar() {
  let firstCharLet = (document.getElementById("firstChar").value = "4");
  document.getElementById("firstChar").innerHTML = firstCharLet;
}

function fifthChar() {
  let firstCharLet = (document.getElementById("firstChar").value = "5");
  document.getElementById("firstChar").innerHTML = firstCharLet;
}

function sixthChar() {
  let firstCharLet = (document.getElementById("firstChar").value = "6");
  document.getElementById("firstChar").innerHTML = firstCharLet;
}

document.addEventListener("DOMContentLoaded", function () {
  const button1 = document.getElementById("fBut");
  const button2 = document.getElementById("sBut");
  const button3 = document.getElementById("tBut");
  const button4 = document.getElementById("foBut");
  const button5 = document.getElementById("fiBut");
  const button6 = document.getElementById("siBut");
  const card = document.querySelector(".charText");

  button1.addEventListener("click", function () {
    card.scrollIntoView({ behavior: "smooth" });
  });
  button2.addEventListener("click", function () {
    card.scrollIntoView({ behavior: "smooth" });
  });
  button3.addEventListener("click", function () {
    card.scrollIntoView({ behavior: "smooth" });
  });
  button4.addEventListener("click", function () {
    card.scrollIntoView({ behavior: "smooth" });
  });
  button5.addEventListener("click", function () {
    card.scrollIntoView({ behavior: "smooth" });
  });
  button6.addEventListener("click", function () {
    card.scrollIntoView({ behavior: "smooth" });
  });
});
