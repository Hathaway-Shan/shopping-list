import { client } from './myClient.js';

export async function getAllItems() {
    //get all items from table
    const response = await client.from('Table_Primus').select();

    return response.data;
}
//client.from needs to target the name of your table idiot
export async function createItem(item) {
    //insert a new item into the table
    const response = await client.from('Table_Primus').insert(item).single();

    return response.data;
}

export async function updateItem(item) {
    //update a given item in the users table
    const response = await client.from('Table_Primus').update('item').match({ id: item.id }).single();

    return response.data;
}

export async function deleteItem(item) {
    //delete an item from the users table
    const response = await client.from('Table_Primus').delete().match({ id: item.id }).single();

    return response.data;
}