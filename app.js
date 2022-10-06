/* ==== Timer ====================================== */

let time = 1800;
const countDownEl = document.getElementById("countdown");

setInterval(updateCountDown, 1000);

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDownEl.innerHTML = `${minutes} : ${seconds}`;
  time--;
}

/* ==== Number input ====================================== */

const changeHandler = (e) => {
  const value = e.value;
  e.value = value.replace(/\D/g, "");
};

/* ==== Scroll to order ====================================== */

const anchors = document.querySelectorAll("a[href*='#']");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
