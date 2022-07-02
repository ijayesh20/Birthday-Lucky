var dob = document.querySelector("#myDob");
var luckyNo = document.querySelector("#lucky-no");
var checkBtn = document.querySelector("#checkBtn");
var message = document.querySelector("#div-output");

function validateInput() {
    let dobValue = dob.value;
    let luckyNoValue = luckyNo.value;
    message.innerHTML = "";
    if(dobValue !== "" && luckyNoValue !== "") {
        checkLuckyBirthday(dobValue,luckyNoValue);
    }
    else {
        message.innerHTML ="Invalid Input";
    }
}

function checkLuckyBirthday(a,b) {
    let date = a.replaceAll("-","");
    let number = parseInt(b);
    let sum = 0;
    for(let i=0;i<8;i++) {
        sum = sum + parseInt(date.charAt(i));
    }
    if(sum % number === 0) {
        message.innerHTML = "&#127881; Yayy!! Your Birthday is Lucky";
    }
    else {
        message.innerHTML = "&#128533; Oops!! Your Birthday is not Lucky";
    }
}
checkBtn.addEventListener("click",validateInput);
