function init() {
  for (let i = 9; i < 18; i++) {
    let t = i < 13 ? i : i - 12;
    let timeBlock = `
            <div data-timeBlock="${i}" class="row time-block">
                <div class="col-1 hour">
                    <p>${t}${i < 12 ? "AM" : "PM"}</p>
                </div>
                <div class="col-10 description past" style="border: 1px solid white">
                    <textarea></textarea>
                </div>
                <div class="col-1 saveBtn">
                    <i class="fas fa-save"></i>
                </div>
            </div>
            `;
    $(".container").append(timeBlock);
  }
}

init();
