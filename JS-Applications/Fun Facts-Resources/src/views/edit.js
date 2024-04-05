import { getFactById, updateFact } from '../data/facts.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const ediiTemplate = (fact, onEdit) => html`
   <section id="edit">
        <div class="form">
          <h2>Edit Fact</h2>
          <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="category" id="category" placeholder="Category" .value=${fact.category}
            />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" .value=${fact.imageUrl}
            />
            <textarea id="description" name="description" placeholder="Description" rows="10" cols="50">${fact.description}</textarea>
            <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10"
              cols="50">${fact.moreInfo}</textarea>
            <button type="submit">Post</button>
          </form>
        </div>
      </section>`;

export async function showEdit(ctx) {
  const id = ctx.params.id;
  const fact = await getFactById(id);
  render(ediiTemplate(fact, createSubmitHandler(onEdit)));

  async function onEdit({ category, 'image-url': imageUrl, description, 'additional-info': moreInfo }, form) {
    if (!category || !imageUrl || !description || !moreInfo) {
      return alert('All fields are required!');
    }
    debugger
    await updateFact(id, { category, imageUrl, description, moreInfo });
    page.redirect('/catalog/' + id);
  }
}