const currentDate = () => {
  const now = new Date().toLocaleDateString("ukr");
  document.querySelector('#data').innerText = now;
};

const updateTime = (k) => `${ k < 10 ? 0 : '' }${ k }`;

const currentTime = () => {
  const date = new Date();
  const hour = updateTime(date.getHours());
  const min = updateTime(date.getMinutes());
  const sec = updateTime(date.getSeconds());
  const timeStr = `${ hour }:${ min }:${ sec }`;

  document.querySelector('#clock').innerText = timeStr;
}

const init = () => {
  currentDate();
  currentTime();
  setInterval(currentTime, 1000);
}

init();