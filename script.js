document.addEventListener("DOMContentLoaded", () => {
    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);

    const getSum = () => {
        const priceElements = document.querySelectorAll('.price');
        let total = 0;

        // Sum up the prices
        priceElements.forEach(priceElement => {
            total += parseFloat(priceElement.textContent);
        });

        // Check if the total row already exists and remove it if it does
        const existingTotalRow = document.querySelector('#total-row');
        if (existingTotalRow) {
            existingTotalRow.remove();
        }

        const totalRow = document.createElement('tr');
        totalRow.id = 'total-row';
        const totalCell = document.createElement('td');
        totalCell.colSpan = 2;
        totalCell.textContent = `Total Price: Rs ${total.toFixed(2)}`;
        totalRow.appendChild(totalCell);

        const table = document.querySelector('table');
        table.appendChild(totalRow);
    };

    getSumBtn.addEventListener("click", getSum);
});
