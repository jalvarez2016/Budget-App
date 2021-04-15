document.addEventListener("DOMContentLoaded", main);

function main() {
    onFormChange();
}

function onFormChange() {
    const form = document.querySelector('#budget-form');
    if(!form) return;
    const banner = document.querySelector("#budget-banner-img");
    form.addEventListener('change', async (e) => {
        if(e.target.name === "banner_style") {
            const style = await getBanner(e.target.value);
            banner.style.background = "";
            banner.className = `budget-banner banner-${style}`;
        }
    });
}

async function getBanner(id) {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  
  const banner = await fetch(`${window.location.origin}/api/banners/${id}`, options);
  const json = await banner.json();
  return json.data;
}