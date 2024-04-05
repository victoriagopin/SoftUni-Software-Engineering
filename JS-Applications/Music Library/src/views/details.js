import { deleteAlbum, getAlbumById } from '../data/albums.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (album, hasUser, isOwner, onDelete) => html`
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
          <div id="likes">Likes: <span id="likes-count">0</span></div>

          ${hasUser && !isOwner ? html` <div id="action-buttons">
            <a href="javascript:void(0)" id="like-btn">Like</a>
            </div>` : null}
          ${isOwner ? html` <div id="action-buttons">
            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
          </div>` : null}
         
        </div>
      </section>`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const album = await getAlbumById(id);
    const user = getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == album._ownerId;
    render(detailsTemplate(album, hasUser, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');
        if (choice) {
            await deleteAlbum(id);
            page.redirect('/catalog');
        }
    }
}