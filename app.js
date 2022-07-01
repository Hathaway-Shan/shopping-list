import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
//import handler functions written by me
import createAddItem from './components/AddItem.js';
import { getAllItems, createItem, updateItem, deleteItem } from './services/item-services.js';
import createShoppingList from './components/shoppingList.js'

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
    console.log(itemToAdd, itemToAdd.item, user.id);
    //this form data object is pushed into the items array
    items.push(data);
    //update display
    display();
}

async function handleSignOut() {
    signOut();
}

// Components made by Marty
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);
//Components made by me
//create new variable that is a query selector targeting the HTML element for the new item and call handleCreate resume here with Dave or TA in morning
const shoppingList = createShoppingList(document.querySelector('form'), { handleCreate });

function display() {
    User({ user });
    shoppingList({ items });
}

handlePageLoad();
