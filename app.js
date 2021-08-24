const inputText = document.querySelector("#txt-input");
const translateButton = document.querySelector("#btn-translate");
const resultArea = document.querySelector("#result-area");

const apiURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function constructURL(text) {
  return `${apiURL}?text=${text}`;
}

function errorHandler(e) {
  alert("Oops! The server seems to be down. Please try after some time");
}

function clickEventHandler() {
  const inputValue = inputText.value;
  fetch(constructURL(inputValue))
    .then((response) => response.json())
    .then((json) => (resultArea.innerText = json.contents.translated))
    .catch(errorHandler);
}

translateButton.addEventListener("click", clickEventHandler);
inputText.addEventListener("click", () => (resultArea.innerHTML = ""));
