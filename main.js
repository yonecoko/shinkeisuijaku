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
