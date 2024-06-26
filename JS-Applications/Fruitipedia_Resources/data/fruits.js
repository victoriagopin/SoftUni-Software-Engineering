import { get, post, put, del } from "./request.js";

const endpoints = {
    dashboard: '/data/fruits?sortBy=_createdOn%20desc',
    fruits: '/data/fruits',
    details: '/data/fruits/',
}

export async function getAllFruits() {
    return get(endpoints.dashboard);
}

export async function getFruitById(id) {
    return get(endpoints.details + id);
}

export async function createFruit(name, imageUrl, description, nutrition) {
    return post(endpoints.fruits, {
        name,
        imageUrl,
        description,
        nutrition
    })
}

export async function updateFruit(id, data) {
    return put(endpoints.details + id, data);
}

export async function deleteFruit(id) {
    return del(endpoints.details + id);
}

export async function searchFruit(query){
    return await get(endpoints.details + `?where=name%20LIKE%20%22${query}%22`)
}