export default function createItems(root, {
    handleComplete,
    handleEdit,
    handleDelete,
}) {
    return ({ items }) => {
        root.innerHTML = '';

        for (const item of items) {
            const li = MyItem({
                item,
                handleComplete,
                handleEdit,
                handleDelete,
            });
            root.append(li);
        }
    };
}

export function MyItem({ item, handleComplete, handleEdit, handleDelete }) {
    const li = document.createElement('li');
    if 
}