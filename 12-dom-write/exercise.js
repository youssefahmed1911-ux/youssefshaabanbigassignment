export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = name;

  const amount = document.createElement("p");
  amount.classList.add("price");
  amount.textContent = `${price} EGP`;

  card.append(title, amount);
  document.querySelector("#list").append(card);
}

export function removeProduct(name) {
  const card = Array.from(document.querySelectorAll("#list .card")).find(
    (item) => item.querySelector("h3").textContent === name
  );

  card?.remove();
}

export function markSoldOut(name) {
  const card = Array.from(document.querySelectorAll("#list .card")).find(
    (item) => item.querySelector("h3").textContent === name
  );

  card?.classList.add("sold-out");
}

export function clearProducts() {
  const list = document.querySelector("#list");

  for (const card of list.querySelectorAll(".card")) {
    card.remove();
  }
}

export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
