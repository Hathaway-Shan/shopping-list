export default function createAddItem(input, { handleAdd }) {
    input.addEventListener('keypress', (e) => {
        if (e.key !== 'Enter' || input.value === '') return;
        handleAdd(input.value);
        input.value = '';
    });
} 