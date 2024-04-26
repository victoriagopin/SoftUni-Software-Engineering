import { get, post } from "./request.js";

const endpoints = {
    likeAlbum : '/data/likes',
    likesByAlbumId: (albumId) =>  `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    hasLiked : (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function like(albumId){
    await post(endpoints.likeAlbum, {albumId});
}

export async function getPersonByAlbumId(albumId){
    return get(endpoints.likesByAlbumId(albumId));
}

export async function isLiked(albumId, userId){
    return get(endpoints.hasLiked(albumId, userId));
}