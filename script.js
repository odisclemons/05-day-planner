function init() {
  descriptions = JSON.parse(localStorage.getItem("descriptions")) ?? {};

  for (let i = 9; i < 18; i++) {
    let t = i < 13 ? i : i - 12;
    let desc = descriptions[`${i}`] ?? "";
    let timeBlock = `
            <div class="row time-block">
                <div class="col-1 hour">
                    <p>${t}${i < 12 ? "AM" : "PM"}</p>
                </div>
                <div class="col-10 description past">
                    <textarea id="tb-${i}">test info</textarea>
                </div>
                <div onclick="handleSave(${i})" class="col-1 saveBtn" role="button" alt="save">
                    <i class="fas fa-save"></i>
                </div>
            </div>
            `;
    $(".container").append(timeBlock);
  }
}

function handleSave(i) {
  console.log(descriptions);
  descriptions[`${i}`] = $(`#tb-${i}`)[0].value;
  localStorage.setItem(descriptions, JSON.stringify(descriptions));
  console.log("Saved!", $(`#tb-${i}`)[0].value);
}

init();
