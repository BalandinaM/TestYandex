const runLine = document.querySelectorAll('.runLine');

for (let elem of runLine) {
  let text = document.createElement("div");
  text.className = "runLine__text";
  text.innerHTML = "&nbsp;Шахматы двигают вперёд не только культуру, но и экономику! <span></span> Лёд тронулся, господа присяжные заседатели! <span></span> Спасение утопающих, дело рук самих утопающих!<span></span>";
  elem.append(text);
}

