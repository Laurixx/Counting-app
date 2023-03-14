const countEl = document.getElementById("count")
const addBtn = document.getElementById("add-btn")
const cutBtn = document.getElementById("cut-btn")
const saveBtn = document.getElementById("save-btn")
const prev = document.getElementById("prev")

let count = 0;
countEl.textContent = count;

function add() {
    count++ ;
    countEl.textContent=count;
}
function cut() {
    count-- 
    countEl.textContent=count
}
function save() {
    prev.textContent += count + ", "
    count = 0
    countEl.textContent = count 
}