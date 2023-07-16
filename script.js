const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// function search(str) {
//   let results = [];
//   // TODO
//   // for (let i = 0; i < fruit.length; i++) {
//   //   if (fruit[i].toLowerCase().includes(input.value)) {
//   //     results.push(fruit[i]);
//   //   }
//   // }
//   // return results;
//   results = fruit.filter(item, function () {
//     item.toLowerCase().includes(str);
//   });
//   return results;
// }



function search(str) {
  let results = fruit.filter((item) =>
    item.toLowerCase().includes(str.toLowerCase())
  );
  return results;
}

function searchHandler(e) {
  // TODO
  suggestions.innerHTML = "";
  let results = search(e.target.value);
  // console.log(results);
  for (let i = 0; i < 5; i++) {
    let suggestion = document.createElement("li");
    let suggestedWord = results[i];
    if (suggestedWord) {
      let startIndex = suggestedWord.toLowerCase().indexOf(input.value.toLowerCase());
      let endIndex = startIndex + input.value.length;
      let boldedText = document.createElement('strong');
      boldedText.textContent = suggestedWord.slice(startIndex, endIndex);
      suggestion.textContent = "";
      suggestion.appendChild(document.createTextNode(suggestedWord.slice(0, startIndex)));
      suggestion.appendChild(boldedText);
      suggestion.appendChild(document.createTextNode(suggestedWord.slice(endIndex)));
    };

    if (suggestion.innerText === "undefined" || input.value === "") {
      suggestions.removeChild("ul li");
    }
    // console.log(input.value);
    suggestion.addEventListener("mouseover", function () {
      // console.log('HIGHLIGHT!!!');
    });
    suggestion.addEventListener("click", useSuggestion);
    suggestions.appendChild(suggestion);
  }
}

function useSuggestion(e) {
  // TODO
  // console.log('CLICKED!!!!!!');
  // console.log(e.target.innerText)
  input.value = e.target.innerText;
  // console.log(input.value);
  suggestions.innerHTML = "";
}
// while (suggestions.firstChild) {
// 	suggestions.removeChild(suggestions.firstChild);
// }
input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
