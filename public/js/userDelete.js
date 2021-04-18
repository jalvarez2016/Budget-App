document.addEventListener('DOMContentLoaded', main);

function main() {
  deleteUser();
}

function deleteUser() {
  const form = document.querySelector('#userDelete');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    // console.log(`${pathUtil()}`);
    fetch(`${pathUtil()}`, options).then(() => {
      window.location = `${window.location.origin}/`;
    });
  });
}
