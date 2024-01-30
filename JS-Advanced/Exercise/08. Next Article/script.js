function getArticleGenerator(articles) {
    let arrOfArticles = Array.from(articles);

    return () => {
        if (arrOfArticles.length == 0) {
            return;
        }
        let curArticle = arrOfArticles.shift();
        let articleEl = document.createElement('article');
        articleEl.textContent = curArticle;
        document.getElementById('content').appendChild(articleEl);
    }
}
