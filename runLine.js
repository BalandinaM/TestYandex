const runLine = document.querySelectorAll('.runLine');

// for (let elem of wrapRunLine) {
//   const sloganFirst = document.createElement("p");
//   sloganFirst.className = "runLine__text";
//   sloganFirst.innerHTML =
//     "Шахматы двигают вперёд не только культуру, но и экономику!<span></span>";
//   const sloganSecond = document.createElement("p");
//   sloganSecond.className = "runLine__text";
//   sloganSecond.innerHTML = "Лёд тронулся, господа присяжные заседатели!<span></span>";
//   const sloganThird = document.createElement("p");
//   sloganThird.className = "runLine__text";
//   sloganThird.innerHTML = "Спасение утопающих, дело рук самих утопающих!<span></span>";

//   elem.append(sloganFirst);
//   elem.append(sloganSecond);
//   elem.append(sloganThird);
// }

///////////////////////////////////////////////////////////////////

//Работает, но дергается, и спан игнорируется

for (let elem of runLine) {
  let text = document.createElement("div");
  text.className = "runLine__text";
  text.innerHTML = "&nbsp;Шахматы двигают вперёд не только культуру, но и экономику! <span></span> Лёд тронулся, господа присяжные заседатели! <span></span> Спасение утопающих, дело рук самих утопающих!<span></span>";
  elem.append(text);
}

//const runLine = document.querySelectorAll('.runLine__text');

function playh1(element){
  let str = element.textContent;
  let a = str.slice(1);
  let b = str.slice(0, 1);
  let newstr = a + b;
  element.textContent = newstr;

  return;
};

// for (let elem of runLine) {
//   let si = setInterval(playh1, 50, elem);
// }

/////////////////////////////////////////////////////////////////////////////////////


