import { deleteFruit, getFruitById } from '../data/fruits.js';
import {html, page, render} from '../src/lib.js';
import { getUserData } from '../src/util.js';

const detailsTemplate = (fruit, isOwner, onDelete) => html`
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src=${fruit.imageUrl}/>
  <p id="details-title">${fruit.name}</p>
  <div id="info-wrapper">
    <div id="details-description">
      <p>${fruit.description}
        </p>
          <p id="nutrition">Nutrition</p>
         <p id = "details-nutrition">
                ${fruit.nutrition}
              </p>
    </div>
     <!--Edit and Delete are only for creator-->
     ${isOwner ? html`<div id="action-buttons">
     <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
     <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>
   </div>` : null}
  </div>
</div>
</section>`;

export async function showDetails(ctx){
    const id  = ctx.params.id;
    const fruit = await getFruitById(id);
    const user = await getUserData();
    const hasUser = !!user;
    const isOwner = hasUser && user._id == fruit._ownerId; 
    render(detailsTemplate(fruit, isOwner, onDelete));

    async function onDelete(){
        const sure = confirm('Are you sure?')

        if(sure){
            await deleteFruit(id);
            page.redirect('/catalog');
        }
     
    }
}