// Selectors
const computerSum = document.querySelector(".computerSum");
const youSum = document.querySelector(".youSum");
const headsBtn = document.querySelector(".headsBtn");
const tailsBtn = document.querySelector(".tailsBtn");
const history = { computer: 0, you: 0 };
const computerList = document.querySelector(".computerList");
const playerList = document.querySelector(".playerList");
// options
const coin = ["Heads", "Tails"];
// coinFlip
function coinFlip() {
  const res = Math.floor(Math.random() * coin.length);
  return coin[res];
}
// separate numbers
function separate(Number) {
  Number += "";
  Number = Number.replace(",", "");
  x = Number.split(".");
  y = x[0];
  z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}
// add result to list
function addToList(content, target) {
  // get time
  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // content
  const text = `${time}
   ${content}`;
//create li
  const li = document.createElement("li");
  // add content to the list
  li.innerText = text;
  // add class to the list 
  li.classList.add("list-group-item");
  // add to the start of the list
  target.insertBefore(li, target.childNodes[0]);
}
// Process
function process(click) {
  //Computer Choice (Random)
  const computer = coinFlip();
  // Player coinFlip
  const you = click;
  // Result coinFlip
  const result = coinFlip();
  // Check who is the winner and store result
  if (computer == result && you == result) {
    history.computer += 1;
    history.you += 1;
    addToList("+", computerList);
    addToList("+", playerList);
    console.log("BOTH");
  } else if (computer == result) {
    history.computer += 1;
    addToList("+", computerList);
    addToList("-", playerList);
    console.log("Computer");
  } else if (you == result) {
    history.you += 1;
    addToList("+", playerList);
    addToList("-", computerList);
    console.log("YOU");
  } else {
    console.log("NONE");
    addToList("-", computerList);
    addToList("-", playerList);
  }
}

// run Process on Click
function run() {
  if (this.innerText === "Heads") {
    process(this.innerText);
  } else {
    process(this.innerText);
  }
  // Store results
  computerSum.innerText = history.computer;
  youSum.innerText = history.you;
}
// Event Listeners
headsBtn.addEventListener("click", run);
tailsBtn.addEventListener("click", run);
