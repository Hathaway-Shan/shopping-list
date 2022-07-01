import { getUser } from '../services/auth-service.js';

export default function createListItems(root, {
    handleBought, handleDelete,
}) {
    //adding event listeners needs to be outside of loop
    deleteTable({ handleDelete });

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

async function deleteTable({ handleDelete }) {
    let user = await getUser();
    const deleteButton = document.querySelector('.delete');
    deleteButton.addEventListener('click', () => {
        //this will pop out an alert with the message if they confirm it comes back true and wont run the return. Boolean logic my man.
        if (!confirm('are you sure you want to delete this list?')) return;
        handleDelete(user);

    });
    return deleteButton;
}

