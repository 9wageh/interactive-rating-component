let before = document.querySelector(".before");
let after = document.querySelector(".thank-you");
const selectedNum = document.querySelector("#selected-num");

function submit() {
    let checkedInput = document.querySelector('input[name="value"]:checked');
    before.style.display = "none";
    after.style.display = "flex";
    selectedNum.innerHTML = checkedInput.value;
}
