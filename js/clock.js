const clock = document.querySelector("#clock");

const setTime = () => {
  const date = new Date();
  Hours = String(date.getHours()).padStart(2, "0");
  Minutes = String(date.getMinutes()).padStart(2, "0");
  Secounds = String(date.getSeconds()).padStart(2, "0");
  MiliSecounds = String(date.getMilliseconds()).padStart(2, "0");
  // console.log(`${Hours}시 ${Minutes}분 ${Secounds}초`);
  clock.innerText = `${Hours}시 ${Minutes}분 ${Secounds}초`;
};
setTime();
setInterval(setTime, 1000);
