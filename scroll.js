document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("mainButton");
  const card = document.querySelector(".card");

  button.addEventListener("click", function () {
    card.scrollIntoView({ behavior: "smooth" });
  });
});
