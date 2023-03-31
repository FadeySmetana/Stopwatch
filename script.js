let timers = 1; // количество секундомеров на странице
  let intervalID = null; // идентификатор интервала
  let timerRunning = false; // запущен ли секундомер
  let time = 0; // время в миллисекундах

  // функция для форматирования времени
  function formatTime(time) {
   let minutes = Math.floor(time / 60000);
   let seconds = Math.floor((time - minutes * 60000) / 1000);
   let milliseconds = Math.floor((time % 1000) / 10);

   if (minutes < 10) {
    minutes = "0" + minutes;
   }
   if (seconds < 10) {
    seconds = "0" + seconds;
   }
   if (milliseconds < 10) {
    milliseconds = "0" + milliseconds;
   }

   return minutes + ":" + seconds + ":" + milliseconds;
  }

  // функция для обновления таймера каждую миллисекунду
  function updateTimer() {
   time += 10;
   let timer = document.querySelector("#timer" + timers);
   let startButton = document.querySelector("#start" + timers);
   timer.innerHTML = formatTime(time);
   if (!timerRunning) {
    clearInterval(intervalID);
    intervalID = null;
   }
  }

  // функция для запуска/остановки таймера
  arrimg=new Array();
  arrimg[0]=new Image();
  arrimg[1]=new Image();
  arrimg[0].src="play.svg";
  arrimg[1].src="pause.svg";
  function toggleTimer() {
   let startButton = document.querySelector("#start" + timers);
   if (timerRunning) {
    timerRunning = false;
    startButton.innerHTML = arrimg[0].outerHTML;
    clearInterval(intervalID);
    intervalID = null;
   }
   else {
    timerRunning = true;
    startButton.innerHTML = arrimg[1].outerHTML;
    intervalID = setInterval(updateTimer, 10);
   }
  }

  // функция для сброса таймера
  function resetTimer() {
   let timer = document.querySelector("#timer" + timers);
   time = 0;
   timer.innerHTML = formatTime(time);
   if (timerRunning) {
    toggleTimer();
   }
  }

  // функция для добавления нового таймера
  function addTimer() {
   timers++;

   // новый элемент DOM для таймера
   let newTimer = document.createElement("div");
   newTimer.setAttribute("class", "timer");
   newTimer.innerHTML = '<span id="timer' + timers + '">00:00:00</span><div class="controls"><button id="start' + timers + '"><img src="/play.svg" alt=""></button><button id="reset' + timers + '"><img src="/reset.svg" alt=""></button></div>';

   // новый элемент DOM к списку таймеров
   document.querySelector("#timers").appendChild(newTimer);

   // обработчик событий для новых кнопок
   document.querySelector("#start" + timers).addEventListener("click", toggleTimer);
   document.querySelector("#reset" + timers).addEventListener("click", resetTimer);
  }

  // обработчик события для кнопки "Добавить секундомер"
  document.querySelector("#addTimer").addEventListener("click", addTimer);

  // обработчик событий для первого таймера
  document.querySelector("#start1").addEventListener("click", toggleTimer);
  document.querySelector("#reset1").addEventListener("click", resetTimer);