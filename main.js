const cardArea = document.querySelector(".gameArea");

let numArr = [];
let pair = [];

let pairCount1 = 0;
let pairCount2 = 0;

const player = ["player1", "player2"];

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

          // while (pair[0] === pair[1]) {
          //   count1++;
          // }
        } else {
          setTimeout(() => {
            fronts.map((front) => {
              front.classList = "back";
              front.textContent = "";
            });
            deletePair();
          }, 500);
        }
        // console.log(count);
      }
    });
  }
};

createCards();
createNum(4);
btn();

// if (pair[0] === pair[1])=> true のときに処理を追加する

const match = function () {
  const info = document.createElement("div");
  cardArea.appendChild(info);

  for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    info.appendChild(p);

    if (i === 0) {
      p.textContent = `次は${player[0]}番です。`;
    } else if (i === 1) {
      p.textContent = `player1:${pairCount1}`;
    } else {
      p.textContent = `player2:${pairCount2}`;
    }
  }
};

match();
