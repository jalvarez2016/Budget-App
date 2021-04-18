let ctx;
let canvas;
let chart;
document.addEventListener('DOMContentLoaded', () => {
    main();
});

function main() {
    canvas = document.querySelector('#percent-spent');
    ctx = canvas.getContext("2d");
    percentSpent();
    analyzeType();
}

function analyzeType() {
    const buttons = document.querySelectorAll(".budget-analysis-icon");
    buttons.forEach(btn => btn.addEventListener('click', (e)=> {
        chart.destroy();
        removeClass(buttons, 'active');
        e.target.classList.add('active');
        if(e.target.textContent === 'Total Percent Spent'){
            percentSpent();
        } else if(e.target.textContent === 'Spent Across Items') {
            itemSpent();
        } else if(e.target.textContent === 'Only Items') {
            itemTotal();
        }
    }));
}

function removeClass(elements, name) {
    elements.forEach(el => {
        el.classList.remove(name);
    })
}

function percentSpent() {
    if(canvas) {
        const percent = Number(document.querySelector('#percent-spent-value').textContent);
        const total = Number(document.querySelector("#percent-total-value-int").textContent);
        const spent = Number(document.querySelector("#percent-spent-value-int").textContent);
        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [`${percent.toFixed(2)}% Spent`, `${(100 - percent).toFixed(2)}% Left`],
                datasets: [
                    {
                        label: 'Percent Spent',
                        data: [spent, total-spent],
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

function itemSpent() {
    chart.destroy();
    if(canvas) {
        const total = Number(document.querySelector("#percent-total-value-int").textContent);
        const itemPrices = document.querySelector("#items").textContent.split(',').map(val => Number(val.split('-')[0]));
        itemPrices.pop();
        const itemNames = document.querySelector('#items').textContent.split(',').map(val => {
            const bits = val.split('-');
            return bits[bits.length -1];
        })
        itemNames.pop();
        const left = total - itemPrices.reduce((cur, val) => cur + val, 0);
        
        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [...itemNames, "Left"],
                datasets: [
                    {
                        label: 'Item Percent Spent',
                        data: [...itemPrices, left],
                        backgroundColor: backgroundColors(itemPrices.length + 1),
                    }
                ],
            },
            options: {
                title: {
                  display: true,
                  text: 'Item Percent Spent'
                }
            },
        });
    }
}

function itemTotal() {
    chart.destroy();
    if(canvas) {
        const total = Number(document.querySelector("#percent-total-value-int").textContent);
        const itemPrices = document.querySelector("#items").textContent.split(',').map(val => Number(val.split('-')[0]));
        itemPrices.pop();
        const itemNames = document.querySelector('#items').textContent.split(',').map(val => {
            const bits = val.split('-');
            return bits[bits.length -1];
        })
        itemNames.pop();
        
        chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: (itemPrices.length) ? [...itemNames] : ["Left"],
                datasets: [
                    {
                        label: 'Items Spent',
                        data: (itemPrices.length) ? [...itemPrices] : [total],
                        backgroundColor: backgroundColors( (itemPrices.length) ? itemPrices.length : 1),
                    }
                ],
            },
            options: {
                title: {
                  display: true,
                  text: 'Items Spent'
                }
            },
        });
    }
}

function backgroundColors(num) {
    let colors =[];
    for(let i = 0; i < num; i++){
        const color = '#'+Math.floor(Math.random()*16777215).toString(16);
        colors.push(color);
    }
    return colors;
}