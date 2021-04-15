document.addEventListener("DOMContentLoaded", main);

function main() {
    deleteItem();
}

function deleteItem(){
    const form = document.querySelector('#deleteItm');
    if(!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = e.target.id.value;
        const budget_id = e.target.budget_id.value;
        const options = {
            method : "DELETE",
            headers: { 'Content-Type': 'application/json' }
        }
        
        fetch(`${window.location.origin}/api/items/${id}`, options).then(() => {
            window.location = `${window.location.origin}/budgets/${budget_id}`;
        });
    })
}