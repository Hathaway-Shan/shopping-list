import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
//import handler functions written by me
import createAddItem from './components/AddItem.js';
import { getAllItems, createItem, updateItem, deleteItem } from './services/item-services.js';
import createShoppingList from './components/shoppingList.js';
import createBuildShoppingList from './components/buildShoppingList.js';

// State
let user = null;
let items = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);
    //display items from table
    items = await getAllItems();
    display();
}
//this is the item we want to create and we pass in the definition of item from our form data this passes to createItem in item-services
async function handleCreate(item) {
    const itemToAdd = {
        item: item.item,
        quantity: item.quantity,
        bought: false,
        user_id: user.id,
    };
    const data = await createItem(itemToAdd);

    //this form data object is pushed into the items array
    items.push(data);
    //update display
    display();
}

//handler functions made by Marty
async function handleSignOut() {
    signOut();
}

//handler functions made by me
async function handleBought(item) {

    //we need to target the right item in the index of the array of items that's what this is for
    const index = items.indexOf(item);

    if (item.bought) {
        item.bought = false;
    }
    else {
        item.bought = true;
    }


    const boughtItem = await updateItem(item);

    items[index] = boughtItem;

    display();
}

// Components made by Marty
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);
//Components made by me
//create new variable that is a query selector targeting the HTML element for the new item and call handleCreate 
const shoppingList = createShoppingList(document.querySelector('form'), { handleCreate });

const BuildShoppingList = createBuildShoppingList(document.querySelector('.list'), { handleBought });


function display() {
    User({ user });
    shoppingList({ items });
    BuildShoppingList({ items });
}

handlePageLoad();
