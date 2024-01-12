const cardArea = document.querySelector(".gameArea");

let numArr = [];
let pair = [];

// カードを8枚作成
const createCards = function () {
  for (let i = 0; i < 8; i++) {
    const card = document.createElement("div");
    cardArea.appendChild(card);
    card.classList = "back";
  }
};

// カードの数字をシャッフル
const shaffleCard = function (shaffleArr) {
  for (let i = shaffleArr.length - 1; 0 < i; i--) {
    let r = Math.floor(Math.random() * (i + 1));

    let tmp = shaffleArr[i];
    shaffleArr[i] = shaffleArr[r];
    shaffleArr[r] = tmp;
  }
  return shaffleArr;
};

// 数字を生成
const createNum = function (length) {
  for (let i = 0; i < length; i++) {
    numArr.push(i + 1);
    numArr.push(i + 1);
  }

  shaffleCard(numArr);
};

// 変数pairの中身を削除
const deletePair = function () {
  pair.pop();
  pair.pop();
};

// カードをクリックする時の処理
const btn = function () {
  const backs = Array.from(document.querySelectorAll(".back"));
  let count = 0;

  // どれかのカードをクリックしたら数字を表示、class名を"front"
  for (let i = 0, back; (back = backs[i]); i++) {
    back.addEventListener("click", function () {
      backs[i].textContent = numArr[i];
      backs[i].classList = "front";
      pair.push(numArr[i]);

      // 変数pairの要素が2になったら
      if (pair.length === 2) {
        const fronts = Array.from(document.querySelectorAll(".front"));

        // pairの要素が一致したら、class名を"finish"
        if (pair[0] === pair[1]) {
          setTimeout(() => {
            fronts[0].classList = "finish";
            fronts[1].classList = "finish";
            deletePair();
            count++;

            // カードの要素がなくなったらアラートと画面リロード
            setTimeout(() => {
              if (count === 4) {
                alert("終了です");
                window.location.reload();
              }
            }, 500);
          }, 500);

          // プレイヤーのカウントを追加
          CountUp();
        } else {
          // 要素が一致しなかったらclass名を"back"
          setTimeout(() => {
            fronts.map((front) => {
              front.classList = "back";
              front.textContent = "";
            });
            deletePair();
          }, 500);

          // プレイヤーを交代
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
