function formatDate(timestamp) {
  const dateObj = new Date(timestamp);
  console.log(timestamp);
  const month = dateObj.getMonth() + 1 < 10 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1;
  const date = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();
  console.log(date);
  return `${dateObj.getFullYear()}-${month}-${date}`;
}

module.exports = {
  formatDate
};