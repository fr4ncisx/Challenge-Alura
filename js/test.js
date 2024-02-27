let msgText = "baitaitai bimesobernimescai"; // batata bionica

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
function decrypt() {
  while (hasEncryptedWords(msgText)) {
    if (msgText.includes("enter")) {
      console.log("Contiene enter");
      msgText = msgText.replaceAll("enter", "e");
    }
    if (msgText.includes("ai")) {
      console.log("Contiene ai");
      msgText = msgText.replaceAll("ai", "a");
    }
    if (msgText.includes("ober")) {
      console.log("Contiene ober");
      msgText = msgText.replaceAll("ober", "o");
    }
    if (msgText.includes("imes")) {
      console.log("Contiene imes");
      msgText = msgText.replaceAll("imes", "i");
    }
    if (msgText.includes("ufat")) {
      console.log("Contiene ufat");
      msgText = msgText.replaceAll("ufat", "u");
    }
  }
}
decrypt();

console.log(`Resultado final: ${msgText}`);
