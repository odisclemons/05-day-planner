// get element where we will show the current day
var currentDay = $("#currentDay");
var descriptions;

function init() {
  // use moment.js to set the day in the format Monday, April 1st
  currentDay.text(`${moment().format("dddd[,] MMMM Do")}`);

  // get descriptions obj from localstorage.  if no dice, set to empty obj
  descriptions = JSON.parse(localStorage.getItem("descriptions")) ?? {};

  // loop through every hour 9 to 5 (or 09 to 17 in 24hr time)
  for (let i = 9; i < 18; i++) {
    // format the time number to use normal time, not 24hr time
    let t = i < 13 ? i : i - 12;

    // find the key "i" inside descriptions array, otherwise use empty string
    let desc = descriptions[`${i}`] ?? "";

    // template literal to make the entire time-block
    let timeBlock = `
        <div class="row time-block">
            <div class="col-1 hour">
                <p>${t}${i < 12 ? "AM" : "PM"}</p>
            </div>
            <div class="col-10 description ${getTense(i)}">
                <textarea id="tb-${i}">${desc}</textarea>
            </div>
            <div onclick="handleSave(${i})" class="col-1 saveBtn" role="button" alt="save">
                <i class="fas fa-save"></i>
            </div>
        </div>
        `;

    //add it to the dom
    $(".container").append(timeBlock);
  }
}

// when they click save button:
function handleSave(i) {
  // set the key "i" to the value of the textarea with id tb-i
  descriptions[`${i}`] = $(`#tb-${i}`)[0].value;

  // store obj
  localStorage.setItem("descriptions", JSON.stringify(descriptions));
}

// change the class name in textarea to past, present, or future
function getTense(i) {
  var hour = moment().format("H");
  switch (true) {
    case i > hour:
      return "future";
      break;
    case i < hour:
      return "past";
      break;
    default:
      return "present";
  }
}

// do all of the things
init();
