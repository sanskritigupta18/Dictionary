const phonetics_value = document.getElementById("phonetics");
const meaning_value = document.getElementById("meaning");
const searchButton = document.getElementById("search");
const word_value = document.getElementById("word");

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

async function getMeaning() {
  const input = document.getElementById("input");
  console.log(input.value);
  if (input.value === "") {
    alert("Enter word");
    return;
  }
  const response = await fetch(`${url}${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const container = document.getElementById("container").innerHTML = `
                <div>
                    <!-- Word -->
                    <p class="text-2xl font-semibold" id="word">${input.value}</p>
                </div>
                <div class="flex gap-x-2">
                <p class="italic text-[#1e1e1e97]" id="phonetics">${data[0].meanings[0].partOfSpeech}</p>
                    <p class="italic text-[#1e1e1e97]" id="phonetics">${data[0].phonetic}</p>
                </div>
                <div class="border-l-4 rounded-sm px-2 mt-2 border-[#b6a5ff]">
                    <p class="" id="meaning">${data[0].meanings[0].definitions[0].definition}</p>
                </div>
                <div>
                    <p>
                        ${data[0].meanings[0].definitions[0].example ? (`${data[0].meanings[0].definitions[0].example}`) : ("")}
                    </p>
                </div>
                `
                ;
    });
  // const data = response.json();
  console.log(`${url}${input.value}`);
}

searchButton.addEventListener("click", getMeaning);
