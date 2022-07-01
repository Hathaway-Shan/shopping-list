export default function createListItems(root, {
    handleBought,
}) {
    return ({ items }) => {
        root.innerHTML = '';

        for (const item of items) {
            const li = buyItem(item, { handleBought });

            root.append(li);
        }
    };
}

function buyItem(item, { handleBought }) {

    li.addEventListener('dblclick', () => {
        item.bought === true;
        handleBought(item);
    });

    if (item.bought) {
        li.classList.add('bought');
    }
}

