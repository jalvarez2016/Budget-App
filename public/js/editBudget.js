const form = document.getElementById('edit-budget-form');
const budgetId = form.querySelector('[name="budgetId"]').value;

document.getElementById('budget-button').addEventListener('click', () => {
  window.location = `${window.location.origin}/budgets/${budgetId}`;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bannerStyle = form.querySelector('[name="banner_style"]').value;
  const title = form.querySelector('[name="title"]').value;
  const description = form.querySelector('[name="description"]').value;
  const budgetAmount = form.querySelector('[name="budget_amount"]').value;
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      bannerStyle, title, description, budgetAmount
    })
  };
  fetch(`${window.location.origin}/api/budgets/${budgetId}`, options).then(() => {
    window.location = `${window.location.origin}/budgets/${budgetId}`;
  });
});
