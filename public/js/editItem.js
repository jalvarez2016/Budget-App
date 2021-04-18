document.addEventListener('DOMContentLoaded', () => {
  main();
});

function main() {
  editItem();
}

function editItem() {
  const form = document.querySelector('#editItemForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const {
      price, rating, title, description, count, purchase_date
    } = e.target;
    const id = e.target.id.value;

    const options = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: price.value,
        rating: rating.value,
        title: title.value,
        description: description.value,
        count: Number(count.value),
        purchaseDate: purchase_date.value,
      })
    };

    fetch(`${window.location.origin}/api/items/${id}`, options).then(() => {
      window.location = `${window.location.origin}/items/${id}`;
    });
  });
}
