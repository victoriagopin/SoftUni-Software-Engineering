import { get, post, put, del } from "./request.js";

const endpoints = {
    dashboard: '/data/albums?sortBy=_createdOn%20desc',
    albums: '/data/albums',
    details: '/data/albums/'
}

export async function getAllAlbums() {
    return get(endpoints.dashboard);
}

export async function getAlbumById(id) {
    return get(endpoints.details + id);
}

export async function createAlbum(singer, album, imageUrl, release, label, sales) {
    return post(endpoints.albums, {
        singer,
        album,
        imageUrl,
        release,
        label,
        sales
    })
}

export async function updateAlbum(id, data) {
    return put(endpoints.details + id, data);
}

export async function deleteAlbum(id) {
    return del(endpoints.details + id);
}

