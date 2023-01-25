let timer = 5;
let timerForRocket;

function changeState(stateToUpdate) {
  //   console.log("Function");
  document.body.className = "state" + stateToUpdate;

  if (stateToUpdate == 1 || stateToUpdate == 3) {
    timer = 5;
    document.getElementById("timer-counter").innerText = timer;
    clearInterval(timerForRocket);
  }

  if (stateToUpdate == 2) {
    timerForRocket = setInterval(() => {
      console.log(timer);
      document.getElementById("timer-counter").innerText = timer--;
      if (timer == 0) {
        clearInterval(timerForRocket);
        changeState(3);
      }
    }, 1000);
  }
}
