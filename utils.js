function formatDate(timestamp) {
  const dateObj = new Date(timestamp);
  const month = dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1;
  const date = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
  return `${dateObj.getFullYear()}-${month}-${date}`;
}

function formatAsMoney(num) {
  const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  return money.format(num);
}

module.exports = {
  formatDate,
  formatAsMoney
};
