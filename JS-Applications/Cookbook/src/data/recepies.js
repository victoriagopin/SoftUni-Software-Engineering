import { get, post, put, del } from "./request.js";

const endpoints = {
    dashboard: '/jsonstore/cookbook/recipes',
    recepies: '/jsonstore/cookbook/recipes',
    details: '/jsonstore/cookbook/details/'
}

export async function getAllAlbums() {
    return get(endpoints.dashboard);
}

export async function getAlbumById(id) {
    return get(endpoints.details + id);
}

export async function createAlbum(name, img) {
    return post(endpoints.recepies, {
        name, 
        img
    })
}

export async function updateAlbum(id, data) {
    return put(endpoints.details + id, data);
}

export async function deleteAlbum(id) {
    return del(endpoints.details + id);
}