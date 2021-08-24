// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
var range_count_peoples = document.getElementById('range-count-peoples');
var range_time_duration = document.getElementById('range-time-duration');
var total_info_people = document.getElementById('total-info-people');
var total_info_eat = document.getElementById('total-info-eat');
var a = 7;
var b = 2;
range_count_peoples.addEventListener('change', function (event) {
    var input = event.target;
    a = parseInt(input.value, 10);
    update();
});
range_time_duration.addEventListener('change', function (event) {
    var input = event.target;
    b = parseInt(input.value, 10);
    update();
});
function formula() {
    var form = a * (Math.pow(6.5, (b - 1))) / 16;
    console.log(form);
    return "" + Math.round(form * 10) / 10;
}
function update() {
    total_info_people.innerText = String(a);
    total_info_eat.innerText = String(formula());
}
var rangeInputs = document.querySelectorAll('input[type="range"]');
function changeRangeBackground(target) {
    var min = parseInt(target.min, 10);
    var max = parseInt(target.max, 10);
    var val = parseInt(target.value, 10);
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}
function handleInputChange(event) {
    var target = event.target;
    if (target.type !== 'range') {
        target = document.getElementById('range');
    }
    changeRangeBackground(target);
}
rangeInputs.forEach(function (input) {
    input.addEventListener('input', handleInputChange);
    changeRangeBackground(input);
});
//# sourceMappingURL=renderer.js.map