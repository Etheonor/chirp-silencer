const copyWord = (event) => {
  const word = event.target.closest("div").querySelector(".word");
  navigator.clipboard.writeText(word.textContent);
};

const initWordList = async () => {
  // get the list of words from words.json and add them to the DOM
  await fetch("words.json")
    .then((response) => response.json())
    .then((data) => {
      const wordList = document.querySelector(".word-list");
      data.forEach((word) => {
        const div = document.createElement("div");
        div.innerHTML = `
                    <span class="word">${word}</span>
                    <span class="button primary copy">Copy</span>
                `;
        div.classList.add("word-item");
        wordList.appendChild(div);
      });
    });
};

const initEventListeners = () => {
  // add event listeners to the copy buttons
  const copyButtons = document.querySelectorAll(".copy");
  copyButtons.forEach((button) => {
    button.addEventListener("click", copyWord);
  });
};

const init = async () => {
  await initWordList();
  initEventListeners();
};

init();
