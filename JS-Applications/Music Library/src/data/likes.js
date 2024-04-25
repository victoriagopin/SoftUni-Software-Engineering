import { get, put } from "./request.js";

const endpoints = {
    likeAlbum : '/data/likes',
    likesByAlbumId: (albumId) =>  `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    hasLikes : (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}