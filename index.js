document.addEventListener("DOMContentLoaded", () => {
  const exit = document.querySelector(".exit");
  const popup = document.querySelector(".cookie-consent");
  const acceptBtn = document.querySelector(".consent-btn");

  if (!localStorage.getItem("cookie-consent")) {
    popup.style.display = "block";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookie-consent", "true");
    popup.style.display = "none";
  });

  exit.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
