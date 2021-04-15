
document.addEventListener('DOMContentLoaded', () => {
    main();
});

function main() {
    percentSpent();
    analyzeType();
}

function analyzeType() {
    const buttons = document.querySelectorAll(".budget-analysis-icon");
    
}

function percentSpent() {
    const canvas = document.querySelector('#percent-spent');
    if(canvas) {
        const percent = Number(document.querySelector('#percent-spent-value').textContent);
        const total = Number(document.querySelector("#percent-total-value-int").textContent);
        const spent = Number(document.querySelector("#percent-spent-value-int").textContent);
        const ctx = canvas.getContext("2d");
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [`${percent}% Spent`, `${100 - percent}% Left`],
                datasets: [
                    {
                        label: 'Percent Spent',
                        data: [spent, total],
                        backgroundColor: ["#DC143C", "#00FF00"],
                    }
                ],
            },
            options: {
                title: {
                  display: true,
                  text: 'Percent Spent'
                }
            },
        });
    }
}