// const colorsList = [
//   "#fff8b5",
//   "#ffe227",
//   "#f9b248",
//   "#fc3a52",
//   "#f25287",
//   "#e79cc2",
//   "#65589c",
//   "#203e5f",
//   "#78c4d4",
//   "#14ffec",
//   "#00af91",
//   "#52d681",
// ];

//* you can make your own color packs with infinite colors!
//* Some other color packs (just uncomment one and comment others)
// const colorsList = ["#00af91", "#007965", "#f58634", "#ffcc29"]; //* nice
// const colorsList = ["#fa4659", "#feffe4", "#a3de83", "#2eb872"]; //* nice
// const colorsList = ["#fc3a52", "#f9b248", "#e8d5b7", "#78c4d4"]; //* nice
// const colorsList = ["#00ad7c", "#52d681", "#b5ff7d", "#fff8b5"]; //* nice
// const colorsList = ["#2d4059", "#ffb400", "#f6f6f6", "#ea5455"]; //* nice
// const colorsList = ["#f0f0f0", "#43dde6", "#364f6b", "#fc5185"]; //* nice
// const colorsList = ["#43496e", "#fff1cf", "#65589c", "#ffc12d"]; //* nice
// const colorsList = ["#f9ebc4", "#a7cf5d", "#a97555", "#483d3c"];
// const colorsList = ["#65589c", "#bb0029", "#f5841a", "#f2e8c6"];
// const colorsList = ["#222831", "#393e46", "#00adb5", "#eeeeee"];
// const colorsList = ["#3a0088", "#930077", "#e61c5d", "#ffbd39"];
// const colorsList = ["#f4f9f9", "#f1d1d0", "#fbaccc", "#f875aa"];
// const colorsList = ["#f47c7c", "#f7f48b", "#a1de93", "#70a1d7"];
// const colorsList = ["#f7f7f7", "#393e46", "#5c636e", "#f8b500"];
// const colorsList = ["#f6f6f6", "#323232", "#ff1e56", "#ffac41"];
// const colorsList = ["#525252", "#414141", "#313131", "#ca3e47"];
// const colorsList = ["#333644", "#84577c", "#c65f63", "#e1bf7f"];
// const colorsList = ["#f06161", "#eb786b", "#f3a871", "#e9ec82"];
// const colorsList = ["#015668", "#263f44", "#ffd369", "#fff1cf"];
// const colorsList = ["#cabfab", "#dfd8c8", "#41444b", "#52575d"];

const allThemes = [
  [
    "#fff8b5",
    "#ffe227",
    "#f9b248",
    "#fc3a52",
    "#f25287",
    "#e79cc2",
    "#65589c",
    "#203e5f",
    "#78c4d4",
    "#14ffec",
    "#00af91",
    "#52d681",
  ],
  ["#00af91", "#007965", "#f58634", "#ffcc29"],
  ["#fa4659", "#feffe4", "#a3de83", "#2eb872"],
  ["#fc3a52", "#f9b248", "#e8d5b7", "#78c4d4"],
  ["#00ad7c", "#52d681", "#b5ff7d", "#fff8b5"],
  ["#2d4059", "#ffb400", "#f6f6f6", "#ea5455"],
  ["#f0f0f0", "#43dde6", "#364f6b", "#fc5185"],
  ["#43496e", "#fff1cf", "#65589c", "#ffc12d"],
  ["#f9ebc4", "#a7cf5d", "#a97555", "#483d3c"],
  ["#65589c", "#bb0029", "#f5841a", "#f2e8c6"],
  ["#222831", "#393e46", "#00adb5", "#eeeeee"],
  ["#3a0088", "#930077", "#e61c5d", "#ffbd39"],
  ["#f4f9f9", "#f1d1d0", "#fbaccc", "#f875aa"],
  ["#f47c7c", "#f7f48b", "#a1de93", "#70a1d7"],
  ["#f7f7f7", "#393e46", "#5c636e", "#f8b500"],
  ["#f6f6f6", "#323232", "#ff1e56", "#ffac41"],
  ["#525252", "#414141", "#313131", "#ca3e47"],
  ["#333644", "#84577c", "#c65f63", "#e1bf7f"],
  ["#f06161", "#eb786b", "#f3a871", "#e9ec82"],
  ["#015668", "#263f44", "#ffd369", "#fff1cf"],
  ["#cabfab", "#dfd8c8", "#41444b", "#52575d"],
];

const colorsList = allThemes[Math.floor(Math.random() * allThemes.length)];

const numberOfLines = 10;

function getRandomSet() {
  let randomSet = [];
  let theNumber;
  let wordsInLine = Math.floor(Math.random() * 9) + 2;
  let sumOfWidths = 0;
  const maxWidth = 50;
  for (let i = 0; i < wordsInLine; i++) {
    theNumber = Math.floor(Math.random() * 9) + 1;
    if (maxWidth < theNumber + sumOfWidths) break;
    randomSet.push(theNumber);
    sumOfWidths += theNumber + 1;
  }
  return randomSet;
}

function drawWindow(lines = 10) {
  let spanHead = `<span class="line word" style="background-color: `;
  let spanMid = `; padding: 0 `;
  let spanTail = `%;" ></span>`;

  let lenColorList = colorsList.length;
  let toAdd = "";
  for (let i = 0; i < lines; i++) {
    toAdd += "<div class='line'>";
    let randomSet = getRandomSet();
    for (let j = 0; j < randomSet.length; j++) {
      toAdd +=
        spanHead +
        colorsList[Math.floor(Math.random() * lenColorList)] +
        spanMid +
        randomSet[j] +
        spanTail;
    }

    toAdd += `</div>`;
    // console.log(toAdd);
  }
  document.getElementById("theWindow").innerHTML += toAdd;
}
drawWindow(numberOfLines);
