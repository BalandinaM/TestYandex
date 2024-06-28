const wrapRunLine = document.querySelectorAll('.wrap-runLine');

for (let elem of wrapRunLine) {
  const sloganFirst = document.createElement("p");
  sloganFirst.className = "runLine__text";
  sloganFirst.innerHTML =
    "Шахматы двигают вперёд не только культуру, но и экономику!";
  const sloganSecond = document.createElement("p");
  sloganSecond.className = "runLine__text";
  sloganSecond.innerHTML = "Лёд тронулся, господа присяжные заседатели!";
  const span = document.createElement("span");
  span.className = "runLine__span";

  elem.append(sloganFirst);
  elem.append(span);
  elem.append(sloganSecond);
}

