// Selectors
const computerSum = document.querySelector(".computerSum");
const youSum = document.querySelector(".youSum");
const headsBtn = document.querySelector(".headsBtn");
const tailsBtn = document.querySelector(".tailsBtn");
const history = { computer: 0, you: 0 };
const computerList = document.querySelector(".computerList");
const playerList = document.querySelector(".playerList");
const coinAnimate = document.querySelector("#coin");
const resHeader = document.querySelector(".resHeader");
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
function process(click, animate, resHeader) {
  //Computer Choice (Random)
  const computer = coinFlip();
  // Player coinFlip
  const you = click;
  // Result coinFlip
  const result = coinFlip();

  // coin animate
  animate.className = "";
  setTimeout(() => {
    if (result === "Heads") {
      animate.classList.add("heads");
    } else {
      animate.classList.add("tails");
    }
  }, 100);

  setTimeout(() => {
    // Check who is the winner and store result
    if (computer == result && you == result) {
      history.computer += 1;
      history.you += 1;
      resHeader.innerText = `
    ${result}
      Computer and You are the winner :)
    `;
      addToList("WIN", computerList);
      addToList("WIN", playerList);
      console.log("BOTH");
    } else if (computer == result) {
      history.computer += 1;
      resHeader.innerText = `
      ${result}
        Computer is the winner !
      `;
      addToList("Win", computerList);
      addToList("---", playerList);
      console.log("Computer");
    } else if (you == result) {
      history.you += 1;
      resHeader.innerText = `
      ${result}
        You are the winner !
      `;
      addToList("WIN", playerList);
      addToList("---", computerList);
      console.log("YOU");
    } else {
      resHeader.innerText = `
      ${result}
      
        NO winner !
      `;
      console.log("NONE");
      addToList("---", computerList);
      addToList("---", playerList);
    }

    // resHeader.innerText = `
    // ${result}

    // `;
    // Store results
    computerSum.innerText = history.computer;
    youSum.innerText = history.you;
  }, 3000);
}

const alert = document.querySelector;
// run Process on Click
function run() {
  if (this.innerText === "Heads") {
    process(this.innerText, coinAnimate, resHeader);
  } else {
    process(this.innerText, coinAnimate, resHeader);
  }
}
// Event Listeners
headsBtn.addEventListener("click", run);
tailsBtn.addEventListener("click", run);

