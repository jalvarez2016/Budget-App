const form = document.getElementById('addItemForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = form.querySelector('[name="title"]').value;
  const description = form.querySelector('[name="description"]').value;
  const price = form.querySelector('[name="price"]').value;
  const count = form.querySelector('[name="count"]').value;
  const rating = form.querySelector('[name="rating"]').value;
  const budgetId = form.querySelector('[name="budgetId"]').value;
  const purchaseDate = form.querySelector('[name="purchaseDate"]').value;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title, description, price, count, rating, budgetId, purchaseDate
    })
  };
  fetch(`${window.location.origin}/api/items`, options).then((res) => {
    window.location = `${window.location.origin}/budgets/${budgetId}`;
  });
});
