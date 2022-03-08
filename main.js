window.addEventListener('load', () => {
    if (window.localStorage.length > 0) {
        addToContainer();
    }
    
    document.getElementById('add-to-storage').addEventListener('click', () => {
        const product = document.getElementById('input-product').value;
        const price = parseInt(document.getElementById('input-price').value);

        if (product && price && typeof price === 'number' && price > 0) {
            window.localStorage.setItem(product, price);
            addToContainer();
        }
    });
});

// Add to the table
const addToContainer = () => {
    //  Get the object from Local Storage
    const storage = JSON.parse(JSON.stringify(window.localStorage));
    // Remove previous rows to add new rows from the beginning
    document.getElementById('product-container').innerHTML = '';

        for (const product in storage) {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <tr>
                <td class="bg-slate-100 border border-solid border-slate-400 p-2">${product}</td>
                <td class="bg-slate-100 border border-solid border-slate-400 p-2">${storage[`${product}`]}</td>
            </tr>`;
            document.getElementById('product-container').appendChild(tr);
        }
};