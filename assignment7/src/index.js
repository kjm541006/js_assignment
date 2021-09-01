const clockTitle = document.querySelector(".js-clock");

const xmasDay = new Date("Dec 25, 2021 00:00:00").getTime();

function getClock() {
  const now = new Date().getTime();

  const gap = xmasDay - now;

  const day = Math.floor(gap / 1000 / 60 / 60 / 24);
  const hour = Math.floor((gap / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((gap / 1000 / 60) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  clockTitle.innerText = `${day}d ${hour}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
