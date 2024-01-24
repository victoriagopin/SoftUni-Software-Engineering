function editElement(el, match, replacer) {
    let text = el.textContent;
    el.textContent = text.split(match).join(replacer);

}