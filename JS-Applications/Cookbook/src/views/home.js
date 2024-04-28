import { getAlbumById, getAllAlbums } from '../data/recepies.js';
import {html, render} from '../lib.js';

const main = document.querySelector('main');
const homeTemplate = (recepies) => html`
${recepies.length ? recepies.map(recepieTemplate): html`
        <p style="color: white">Loading...</p>`}
`

const recepieTemplate = (recepie) => html`
<article class="preview" @click=${toggle} data-id=${recepie._id}>
 <div class="title" data-id=${recepie._id}>
                <h2 data-id=${recepie._id}>${recepie.name}</h2>
            </div>
            <div class="small" data-id=${recepie._id}>
                <img src=${recepie.img}>
            </div>
</article>`



export async function showHome(){
    const recepiesAsObj = await getAllAlbums();
    const recepies = Object.values(recepiesAsObj);
   render(homeTemplate(recepies), main);
}

const detailsTemplate = (recepie,ingredients,steps) => html`
 
            <h2>${recepie.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src=${recepie.img}>
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${ingredients.length ? ingredients.map(generateLi) : null}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${steps.length ? steps.map(generateParagraphs) : null}
            </div>
       `;

const generateLi = (ingredient) => html`
<li>${ingredient}</li>`

const generateParagraphs = (step) => html`
<p>${step}</p>
`;

async function toggle(event){
    const id = event.target.dataset.id;
    const recepie = await getRecepie(id);
    const ingredients = Object.values(recepie.ingredients);
    const steps = Object.values(recepie.steps);
    
    const article = document.querySelector(`article[data-id="${id}"]`);
    article.textContent = '';
    render(detailsTemplate(recepie, ingredients,steps), article);
}

async function getRecepie(id){
    const recepie = await getAlbumById(id);
    return recepie;
}

