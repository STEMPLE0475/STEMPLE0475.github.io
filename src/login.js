const loginForm = document.querySelector(".loginForm");
const loginText = document.querySelector(".loginText");
const card = document.getElementById("card");
const loginWindow = document.getElementById("loginWindow");
const savedUSER_ID = localStorage.getItem("savedUSER_ID");
const bannerText = document.querySelector(".bannerText");
const button = document.querySelector(".button");

if (savedUSER_ID !== null) {
  card.classList.remove("hidden");
  loginWindow.classList.add("hidden");
  bannerText.innerHTML = `Welcome! ${savedUSER_ID}`;
} else {
  loginForm.addEventListener("submit", getUserId);
  function getUserId(e) {
    const USER_ID = loginText.value;
    localStorage.setItem("savedUSER_ID", USER_ID);
    console.log(`ID ${USER_ID}가 저장되었습니다.`);
  }
}

button.addEventListener("click", buttonClick);

function buttonClick() {
  localStorage.removeItem("savedUSER_ID");
  console.log("buttonclick");
  window.location.reload();
}
