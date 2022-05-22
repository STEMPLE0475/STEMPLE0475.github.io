function date() {
  const dateAp = document.querySelector(".date");
  const date = new Date();
  let day = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;
  dateAp.innerHTML = day;
}

function clock() {
  const clockAp = document.querySelector(".clock");
  const date = new Date();
  let time = `${String(date.getHours()).padStart(2, "0")} : ${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
  clockAp.innerHTML = time;
}

setInterval(date, "1000");
setInterval(clock, "1000");
