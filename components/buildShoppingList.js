export default function createListItems(root, {
    handleBought,
}) {
    return ({ items }) => {
        root.innerHTML = '';

        for (const item of items) {
            const li = buyItem(item, { handleBought });
            li.textContent = `${item.item} ${item.quantity}`;
            root.append(li);
        }
    };
}

function buyItem(item, { handleBought }) {
    const li = document.createElement('li');
    li.addEventListener('dblclick', () => {

        handleBought(item);
    });

    if (item.bought) {
        li.classList.add('bought');
    }
    return li;
}

