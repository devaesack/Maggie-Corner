const inputEl = document.getElementById("foodForm");
const buttonEl = document.getElementById("addFood");
const foodContainer = document.getElementById("food-container");
const noListEl = document.getElementById("noList");
const foodLiStatics = document.getElementById("food-li-statics");

const STORAGE_KEY = "fooditems";

// Load saved items. Gives every item an id so it can be removed reliably.
function loadItems() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved)) return [];
    return saved.map((item) => ({
      id: item.id ?? crypto.randomUUID(),
      foodItem: item.foodItem,
    }));
  } catch {
    return [];
  }
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

let items = loadItems();

// Draw the list from the `items` array. The array is the single source of truth.
function render() {
  foodContainer.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "food-item";

    const text = document.createElement("div");
    text.textContent = item.foodItem;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "x";
    removeBtn.addEventListener("click", () => removeItem(item.id));

    li.append(text, removeBtn);
    foodContainer.appendChild(li);
  });

  refreshUI();
}

function addItem() {
  const value = inputEl.value.trim();
  if (!value) return;

  items.push({ id: crypto.randomUUID(), foodItem: value });
  saveItems();

  inputEl.value = "";
  render();
  inputEl.focus();
}

function removeItem(id) {
  items = items.filter((item) => item.id !== id);
  saveItems();
  render();
}

function refreshUI() {
  foodLiStatics.textContent = `You Have ${items.length} lists`;

  const hasItems = items.length > 0;
  noListEl.hidden = hasItems;
  foodLiStatics.hidden = !hasItems;
}

buttonEl.addEventListener("click", addItem);

inputEl.addEventListener("keyup", (event) => {
  if (event.key === "Enter") addItem();
  if (event.key === "Escape") inputEl.value = "";
});

document.addEventListener("DOMContentLoaded", render);




