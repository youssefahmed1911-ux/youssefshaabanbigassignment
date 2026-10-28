import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.textContent = "";

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("tile");
    li.textContent = `${item.name} - ${item.price} EGP`;
    listElement.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.category === "electronics");
}

export function start() {
  renderItems(items);

  document.querySelector("#shortlist").addEventListener("click", () => {
    renderItems(matching());
  });
}
