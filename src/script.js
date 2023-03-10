URL = `https://words.dev-apis.com/word-of-the-day?random=1`;

const outputArea = document.getElementById("target");

async function generateWord() {
  let req = await fetch(URL);
  let res = await req.json();
  let word = res.word;

  // create a new element
  let entryElement = document.createElement("li");
  // make some text content
  let entryElementText = document.createTextNode(word);
  // and put that content inside the child element
  entryElement.appendChild(entryElementText);
  // make this element a child of another
  outputArea.appendChild(entryElement);
  // put that element out to the DOM
  document.body.insertBefore(entry, outputArea);
}

document.getElementById("generateWord").addEventListener("click", generateWord);

function clearUp() {
  outputArea.textContent = "";
}

document.getElementById("clearWords").addEventListener("click", clearUp);
