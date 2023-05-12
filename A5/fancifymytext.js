function changeFSize(){
    const textA = document.getElementById("textInput");
    textA.style.fontSize = "24pt";
}

function addStyle(){
    const textS = document.getElementById("textInput");
    textS.style.fontWeight = "bold";
    textS.style.color = "blue";
    textS.style.textDecoration = "underline";
}

function removeStyle(){
    const textA = document.getElementById("textInput");
    textA.style.fontWeight ="";
    textA.style.color = "";
    textA.style.textDecoration = "";
}

function Moo(){
    const textA = document.getElementById("textInput");
    const Utext = textA.nodeValue.toUpperCase();
    textA.nodeValue = Utext;
    let string = textA.nodeValue;
    let sentences = string.split(".");
    string = sentences.join("-MOO.");
    textA.nodeValue = string;
}

const biggerBtn = document.getElementById("biggerButton");
const fancyRadioBtn = document.getElementById("fancy");
const boringRadioBtn = document.getElementById("boring");
const mooBtn = document.getElementById("moo");

biggerBtn.addEventListener("click", changeFSize);
fancyRadioBtn.addEventListener("click", addStyle);
boringRadioBtn.addEventListener("click", removeStyle);
mooBtn.addEventListener("click", Moo);