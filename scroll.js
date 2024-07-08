document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("mainButton");
  const card = document.querySelector(".card");

  button.addEventListener("click", function () {
    card.scrollIntoView({ behavior: "smooth" });
  });
});

function redirectToIndex() {
  window.location.href = "index.html";
}
function redirectToEvents() {
  window.location.href = "events.html";
}
function redirectToChars() {
  window.location.href = "characters.html";
}
function redirectToValue() {
  window.location.href = "value.html";
}
function redirectToIlls() {
  window.location.href = "illustrations.html";
}
function redirectToTest() {
  window.location.href = "test.html";
}
function redirectToContacts() {
  window.location.href = "contacts.html";
}
