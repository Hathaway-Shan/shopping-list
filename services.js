import { client } from './client.js';

export async function getAllItems() {
    //get all items from table
    const response = await client.from('items').select();

    return response.data;
}

export async function createItem(item) {
    //insert a new item into the table
    const response = await client.from('items').insert(item).single();

    return response.data;
}

export async function updateItem(item) {
    //update a given item in the users table
    const response = await client.from('items').update('item').match({ id: item.id }).single();

    return response.data;
}

export async function deleteItem(item) {
    //delete an item from the users table
    const response = await client.from('items').delete().match({ id: item.id }).single();

    return response.data;
}