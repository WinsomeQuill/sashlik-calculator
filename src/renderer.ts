// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

const range_count_peoples = document.getElementById('range-count-peoples');
const range_time_duration = document.getElementById('range-time-duration');
const total_info_people = document.getElementById('total-info-people');
const total_info_eat = document.getElementById('total-info-eat');

let a = 7;
let b = 2;

range_count_peoples.addEventListener('change', (event) => {
    const input = event.target as HTMLInputElement;
    a = parseInt(input.value, 10);
    update();
});

range_time_duration.addEventListener('change', (event) => {
    const input = event.target as HTMLInputElement;
    b = parseInt(input.value, 10);
    update();
});

function formula(): string {
    const form = a*(6.5**(b-1))/16;
    console.log(form);
    return `${Math.round(form*10)/10}`;
}

function update(): void {
    total_info_people.innerText = String(a);
    total_info_eat.innerText = String(formula());
}

const rangeInputs = document.querySelectorAll('input[type="range"]');

function changeRangeBackground(target: HTMLInputElement): void {
    const min = parseInt(target.min, 10);
    const max = parseInt(target.max, 10);
    const val = parseInt(target.value, 10);
    
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

function handleInputChange(event: Event): void {
  let target = event.target as HTMLInputElement;
  if (target.type !== 'range') {
    target = document.getElementById('range') as HTMLInputElement;
  } 
  changeRangeBackground(target);
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange);
  changeRangeBackground(input as HTMLInputElement);
})