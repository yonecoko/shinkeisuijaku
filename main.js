// const gameArea = document.querySelector(".gameArea");

// // 1.8枚のカード生成
// // 2.ランダムに1-4を2つずつ、数字をランダムに生成
// // 3.8枚のカードに数字をランダムに表示
// // 4.カードを押したら数字が見える
// // 5.2枚のカードを押して、数字が一致したら2枚消える
// // 6.一致しなかったら裏返す
// // 7.カードがなくなるまで繰り返し、なくなったら「終了です」のアラート
// // 8.アラートが出たらリロードされてカードを復活

// // 1.8枚のカード生成
// // gameAreaのdivタグ持ってきたから、その子要素にinputタグを8つ生成
// // inputタグを生成,gameAreaの子要素に指定

// const makeCard = function () {
//   for (let i = 0; i < 8; i++) {
//     const card = document.createElement("input");
//     gameArea.appendChild(card);
//     card.type = "button";
//     card.classList = "card" + [i + 1];
//     card.value = 1;
//   }
// };

// makeCard();
// // 1から4の数値を配列に入れて
// const cardsArray = [];
// const cardNum = Math.floor(Math.random() * 5);

// [...cardsArray(5)].map(() => cardNum());
// // for (let j = 1; j < 5; j++) {
// //   const cardNum1 = Math.floor(Math.random() * 5);
// //   cardsArray.push(cardNum1);
// //   console.log(cardNum1);
// // }

// console.log(cardsArray);
