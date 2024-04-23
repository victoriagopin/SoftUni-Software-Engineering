import { getAllFruits, searchFruit } from '../data/fruits.js';
import {html, render} from '../src/lib.js';
import { createSubmitHandler } from '../src/util.js';

const searchTemplate = (handler, result) => html`
<section id="search">

<div class="form">
  <h2>Search</h2>
  <form class="search-form" @submit=${handler}>
    <input
      type="text"
      name="search"
      id="search-input"
    />
    <button class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  ${result ? fruitTemplate(result) : html`
  <p class="no-result">No result.</p>`}
  </div>
  </section>`;

const fruitTemplate = (fruit) => html`
${fruit ? fruit.map(x => html`
<div class="search-result">
<div class="fruit">
<img src=${x.imageUrl} alt="example1" />
<h3 class="title">${x.name}</h3>
<p class="description">${x.description}</p>
<a class="details-btn" href="/catalog/${x._id}">More Info</a>
</div></div>`) : null} 
`;

export async function showSearch(){
  const handler = createSubmitHandler(onSearch);
    render(searchTemplate(handler));

}

async function onSearch(data, form){
  const {search} = data;

  if(!search){
    return alert('Search field is empty!');
  }
  const result = await searchFruit(search);
  const handler = createSubmitHandler(onSearch);
  render(searchTemplate(handler, result));
}