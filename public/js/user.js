const newBudget = document.getElementById('new-budget-button');

newBudget.addEventListener('click', () => {
  window.location = `${window.location.origin}/budgets/new`;
});
