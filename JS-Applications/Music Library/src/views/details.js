import { deleteAlbum, getAlbumById } from '../data/albums.js';
import {  getPersonByAlbumId, isLiked, like } from '../data/likes.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (album, hasUser, isOwner, likes, hasUserLiked, onDelete, onLike) => html`
      <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

          ${hasUser ? html` 
          <div id="action-buttons">
          ${isOwner ? html`
          <a href="/edit/${album._id}" id="edit-btn">Edit</a>
          <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : (
            !hasUserLiked ? html`<a href="javascript:void(0)" id="like-btn" @click=${onLike}>Like</a>` : null)}` : null}
         
        </div>
      </section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const requests = [
      getAlbumById(id),
      getPersonByAlbumId(id)
    ]
    
    const user = getUserData();
    if(user){
      requests.push(isLiked(id, user._id));
    }

    const [album, likes, hasUserLiked] = await Promise.all(requests);

    const hasUser = !!user;
    const isOwner = hasUser && user._id == album._ownerId;
    render(detailsTemplate(album, hasUser, isOwner, likes,hasUserLiked,onDelete, onLike));

    async function onDelete() {
        const choice = confirm('Are you sure?');
        if (choice) {
            await deleteAlbum(id);
            page.redirect('/catalog');
        }
    }

    async function onLike(){
      await like(id);
      page.redirect('/catalog/' + id);
    }
}