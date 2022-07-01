//create async function that sets the HTML form element as root, then creates a new item using the handleCreate object function 
export default function createShoppingList(form, { handleCreate }) {
    console.log(form);
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {
            item: formData.get('item'),
            quantity: formData.get('quantity'),
        };
        //waits on handleCreate to make the object from the form data
        await handleCreate(data);

        //resets form with js reset function
        form.reset();

    });
    //returns the new object to be rendered in the display function
    return () => {

    };

}