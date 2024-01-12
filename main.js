const cardArea = document.querySelector(".gameArea");

let numArr = [];
let pair = [];

const createCards = function () {
  for (let i = 0; i < 8; i++) {
    const card = document.createElement("div");
    cardArea.appendChild(card);
    card.classList = "back";
  }
};

const shaffleCard = function (shaffleArr) {
  for (let i = shaffleArr.length - 1; 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));

    let tmp = shaffleArr[i];
    shaffleArr[i] = shaffleArr[r];
    shaffleArr[r] = tmp;
  }
  return shaffleArr;
};

const createNum = function (length) {
  for (let i = 0; i < length; i++) {
    numArr.push(i + 1);
    numArr.push(i + 1);
  }

  shaffleCard(numArr);
};

const deletePair = function () {
  pair.pop();
  pair.pop();
};

const btn = function () {
  const backs = Array.from(document.querySelectorAll(".back"));
  let count = 0;

  for (let i = 0, back; (back = backs[i]); i++) {
    back.addEventListener("click", function () {
      backs[i].textContent = numArr[i];
      backs[i].classList = "front";
      pair.push(numArr[i]);

      if (pair.length === 2) {
        const fronts = Array.from(document.querySelectorAll(".front"));
        if (pair[0] === pair[1]) {
          setTimeout(() => {
            fronts[0].classList = "finish";
            fronts[1].classList = "finish";
            deletePair();
            count++;

            setTimeout(() => {
              if (count === 4) {
                alert("終了です");
                window.location.reload();
              }
            }, 500);
          }, 500);

          CountUp();
        } else {
          setTimeout(() => {
            fronts.map((front) => {
              front.classList = "back";
              front.textContent = "";
            });
            deletePair();
          }, 500);

          turn();
        }
      }
    });
  }
};

createCards();
createNum(4);
btn();

// 2人で対戦するチャレンジ問題
let playerCount1 = 0;
let playerCount2 = 0;
let turnNum = 0;
const player = ["player1", "player2"];

// 対戦情報
const info = document.createElement("div");
cardArea.appendChild(info);

const turnText = document.createElement("p");
const player1Text = document.createElement("p");
const player2Text = document.createElement("p");

info.appendChild(turnText);
info.appendChild(player1Text);
info.appendChild(player2Text);

turnText.textContent = `次は${player[0]}番です。`;
player1Text.textContent = `player1:${playerCount1}`;
player2Text.textContent = `player2:${playerCount2}`;

// プレイヤーの交代
const turn = function () {
  turnNum++;

  if (turnNum % 2 === 0) {
    turnText.textContent = `次は${player[0]}番です。`;
  } else {
    turnText.textContent = `次は${player[1]}番です。`;
  }
};

// それぞれのプレイヤーのカウントアップ
const CountUp = function () {
  if (turnNum % 2 === 0) {
    ++playerCount1;
    player1Text.textContent = `player1:${playerCount1}`;
  } else {
    ++playerCount2;
    player2Text.textContent = `player2:${playerCount2}`;
  }
};
