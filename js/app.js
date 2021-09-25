let zone = new Date().getTimezoneOffset();
var lang = zone == -270 || zone == -210 ? "fa" : "en";

function DateDiffer(
  thisYear,
  thisMonth,
  thisDay,
  thatYear,
  thatMonth,
  thatDay
) {
  let theYear = thisYear - thatYear; //2021 - 2019
  let theMonth = thisMonth - thatMonth; // 3 - 7
  let theDay = thisDay - thatDay; //21 - 26
  let format = "";
  if (theDay < 0) {
    theMonth -= 1;
    theDay += 30;
  }
  if (theMonth < 0) {
    theYear -= 1;
    theMonth += 12;
  }
  if (theYear > 1) {
    format += theYear;
    format += lang == "fa" ? " سال و " : " years, ";
  } else if (theYear == 1) {
    format += theYear;
    format += lang == "fa" ? " سال و " : " year, ";
  }

  if (theMonth > 1) {
    format += theMonth;
    format += lang == "fa" ? " ماه و " : " months, ";
  } else if (theMonth == 1) {
    format += theMonth;
    format += lang == "fa" ? " ماه و " : " month, ";
  }

  if (theDay > 0) {
    format += theDay;
    format += lang == "fa" ? " روز  " : " days ";
  } else if (theDay == 1) {
    format += theDay;
    format += lang == "fa" ? " روز " : " day ";
  }

  return format;
}
function updateDates() {
  const date = new Date();
  const thisYear = date.getFullYear();
  const thisMonth = date.getMonth() + 1;
  const thisDay = date.getDate();
  document.getElementById("myAge").innerText = DateDiffer(
    thisYear,
    thisMonth,
    thisDay,
    2001,
    1,
    1
  );
  document.getElementById("pythonYear").innerText = DateDiffer(
    thisYear,
    thisMonth,
    thisDay,
    2019,
    7,
    26
  );
  document.getElementById("cYear").innerText = DateDiffer(
    thisYear,
    thisMonth,
    thisDay,
    2020,
    2,
    21
  );
  document.getElementById("javaYear").innerText = DateDiffer(
    thisYear,
    thisMonth,
    thisDay,
    2020,
    4,
    10
  );
  document.getElementById("phpYear").innerText = DateDiffer(
    thisYear,
    thisMonth,
    thisDay,
    2021,
    1,
    9
  );
  document.getElementById("htmlYear").innerText = DateDiffer(
    thisYear,
    thisMonth,
    thisDay,
    2020,
    5,
    11
  );
}

updateDates();

function closeGetInTouch() {
  document.getElementById("glass").classList.add("hidden");
}
function openGetInTouch() {
  document.getElementById("glass").classList.remove("hidden");
}

// openGetInTouch();
// var audio = new Audio(
//   "https://res.cloudinary.com/erfanpaslar-ir/video/upload/v1616845155/personal_website/bgMusic_bcbxgk.mp3"
// );
// let played = 0;
// document.getElementById("playMusic").addEventListener("click", function () {
//   if (played) {
//     audio.pause();
//     this.innerHTML = "<i class='fad fa-volume-mute'></i>";
//     played = 0;
//   } else {
//     audio.play();
//     this.innerHTML = "<i class='fad fa-volume'></i>";
//     played = 1;
//   }
// });

const links = [
  "https://github.com/erfanpaslar/Crack-it",
  "https://github.com/LiorSinai/SudokuSolver-Python",
  "https://github.com/erfanpaslar/HOC-Front-end",
  "https://github.com/erfanpaslar/The-Adventure-1979",
  "#magic8ball",
  "https://github.com/erfanpaslar/Mini-Blackjack",
  "#letsCode",
  "https://github.com/RaemondBW/Python-Minesweeper",
  "https://github.com/erfanpaslar/Editor-Preview",
  "#Weather",
  "https://github.com/erfanpaslar/SimonSays",
  "https://github.com/erfanpaslar/Incognito-Web",
  "https://github.com/erfanpaslar/Complex-Calculator",
  "https://github.com/erfanpaslar/Drag-N-Drop-ToDo"
];

let c = document.querySelectorAll(".slideContent");
let content;
for (let i = 0; i < c.length; i++) {
  content = c[i].innerHTML;
  c[i].innerHTML =
    `<a class="linkSlide" href='${links[i % links.length]}'>` +
    content +
    "</a>";
}
