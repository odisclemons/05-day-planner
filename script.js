function init() {
  var descriptions = JSON.parse(localStorage.getItem("descriptions")) ?? {};

  for (let i = 9; i < 18; i++) {
    let t = i < 13 ? i : i - 12;
    let desc = descriptions[`${i}`] ?? "";
    let timeBlock = `
            <div class="row time-block">
                <div class="col-1 hour">
                    <p>${t}${i < 12 ? "AM" : "PM"}</p>
                </div>
                <div class="col-10 description past">
                    <textarea id="tb-${i}">${desc}</textarea>
                </div>
                <div onclick="handleSave(${i})" class="col-1 saveBtn" role="button" alt="save">
                    <i class="fas fa-save"></i>
                </div>
            </div>
            `;
    $(".container").append(timeBlock);
  }
}

var handleSave = (i) => {
  //console.log(e.target.getAttribute("data-tb"));
  console.log(i);
};
init();
