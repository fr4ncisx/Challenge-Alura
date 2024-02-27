// test "jaimenters"

const encryptedText = document.querySelector(".encrypt_text");
const textDecrypt = document.getElementById("txt-encrypted");
const copyBtn = document.getElementById("copy-btn");
const counter = document.querySelector(".char-counter");

function getText() {
  let text = encryptedText.value;
  return text;
}

function hideElements() {
  document.getElementById("msgNotFound").style.display = "none";
  document.querySelector("#msgNotFound-2").style.display = "none";
  document.getElementById("notFound").style.display = "none";
}

function changeText() {
  if (encryptedText.value.length > 0 && encryptedText.value.length <= 600) {
    hideElements();
    enableText();
    textDecrypt.innerText = textConverter(getText());
    enableCopyBtn();
    cleanEncrypter();
    readLetters();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No hay texto o excediste los 600 carácteres!",
    });
    cleanEncrypter();
  }
}

function cleanEncrypter() {
  document.querySelector(".encrypt_text").value = "";
  readLetters();
}
function cleanDecrypter() {
  document.getElementById("txt-encrypted").innerText = "";
}

function enableCopyBtn() {
  copyBtn.removeAttribute("disabled");
}

function copyText() {
  if (textDecrypt.innerText.length > 0) {
    encryptedText.value = textDecrypt.innerText;
    textDecrypt.innerText = "";
    //readLetters();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No hay nada que copiar",
    });
  }
}

function textConverter(elementText) {
  cleanDecrypter();
  elementText = elementText.toLowerCase();
  let newLetter = "";
  for (let i = 0; i < elementText.length; i++) {
    let letter = elementText[i];
    switch (letter) {
      case "a":
        newLetter += "ai";
        break;
      case "e":
        newLetter += "enter";
        break;
      case "i":
        newLetter += "imes";
        break;
      case "o":
        newLetter += "ober";
        break;
      case "u":
        newLetter += "ufat";
        break;
      default:
        newLetter += letter;
        break;
    }
  }
  return newLetter;
}

function decryptMsg() {
  if (encryptedText.value.length > 0 && encryptedText.value.length <= 600) {
    let elementText = getText();
    cleanEncrypter();
    cleanDecrypter();
    hideElements();
    enableCopyBtn();
    elementText.toLowerCase;
    enableText();
    elementText = decryptStarter(elementText);
    document.getElementById("txt-encrypted").innerText = elementText;
    readLetters();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No hay texto o excediste los 600 carácteres!",
    });
  }
}

function enableText() {
  textDecrypt.style.visibility = "visible";
  textDecrypt.style.display = "flex";
  textDecrypt.style.length = "100";
}

function decryptStarter(msgText) {
  let hasEncrypted = hasEncryptedWords(msgText);
  while (hasEncrypted) {
    if (msgText.includes("enter")) {
      msgText = msgText.replaceAll("enter", "e");
    }
    if (msgText.includes("ai")) {
      msgText = msgText.replaceAll("ai", "a");
    }
    if (msgText.includes("ober")) {
      msgText = msgText.replaceAll("ober", "o");
    }
    if (msgText.includes("imes")) {
      msgText = msgText.replaceAll("imes", "i");
    }
    if (msgText.includes("ufat")) {
      msgText = msgText.replaceAll("ufat", "u");
    }
    hasEncrypted = hasEncryptedWords(msgText);
  }
  return msgText;
}
function hasEncryptedWords(text) {
  if (text.includes("enter")) {
    return true;
  }
  if (text.includes("ai")) {
    return true;
  }
  if (text.includes("ober")) {
    return true;
  }
  if (text.includes("imes")) {
    return true;
  }
  if (text.includes("ufat")) {
    return true;
  }
  return false;
}
let lastTxt = "";

function readLetters() {
  let txt = getText();
  if (getText().length >= 0 && getText().length < 600) {
    timer = getText().length;
    counter.innerText = `Carácteres (${timer}/600)`;
    counter.style.color = "white";
    counter.style.textShadow = "none";
    counter.style.transform = "scale(1.0)";
  } else if (getText().length == 600) {
    timer = getText().length;
    lastTxt = txt;
    counter.innerText = `Carácteres (${timer}/600)`;
    counter.style.transform = "scale(1.5)";
    counter.style.color = "yellow";
    counter.style.textShadow = "1px 0 3px red";
    counter.style.transition = "500ms";
  } else {
    encryptedText.value = lastTxt;
  }
}
