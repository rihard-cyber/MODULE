import data from "../user.js";

// Tampilkan data di console
console.log(data);

// Tampilkan data di HTML
const dataContainer = document.getElementById("data-container");

data.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerText = `${item.name}, ${item.email}, ${item.number}`;

  dataContainer.appendChild(listItem);
});
