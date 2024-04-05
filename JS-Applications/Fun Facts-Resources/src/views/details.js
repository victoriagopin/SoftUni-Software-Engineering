import { deleteFact, getFactById } from '../data/facts.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (fact, hasUser, isOwner, onDelete) => html`
  <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src="${fact.imageUrl}" alt="example1" />
          <p id="details-category">${fact.category}</p>
          <div id="info-wrapper">
            <div id="details-description">
              <p id="description">
                ${fact.description}
              </p>
              <p id="more-info">${fact.moreInfo}</p>
            </div>

            <h3>Likes:<span id="likes">0</span></h3>

            ${hasUser ? html`
            <div id="action-buttons">
                ${isOwner ? html`
                 <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>` : html`
              <a href="javascript:void(0)" id="like-btn">Like</a>`}
              </div>` : null}
          </div >
        </div >
      </section > `;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const fact = await getFactById(id);
    const user = getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == fact._ownerId;

    render(detailsTemplate(fact, hasUser, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?')

        if (choice) {
            await deleteFact(id);
            page.redirect('/catalog');
        }
    }
}