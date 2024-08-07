document.addEventListener("DOMContentLoaded", () => {
    const getSumBtn = document.createElement("button");
    getSumBtn.append("Get Total Price");
    document.body.appendChild(getSumBtn);

    const getSum = () => {
        // Select all elements with the class 'price'
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

        // Display the total price in the div with id 'ans'
        const ansDiv = document.getElementById('ans');
        ansDiv.textContent = `Total Price: Rs ${total.toFixed(2)}`;
    };

    getSumBtn.addEventListener("click", getSum);
});
