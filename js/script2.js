document.addEventListener("DOMContentLoaded",function(){
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get("id");
    fetch("news.json")
        .then(response => response.json())
        .then(date => {
            const article = date.find(a => a.id == articleId);
            
            if (article) {
                const articleContainer = document.getElementById("article-container");

                const title = document.createElement("h2");
                title.textContent = article.title;

                const content = document.createElement("p");
                content.textContent = article.content;

                articleContainer.appendChild(title);
                articleContainer.appendChild(content)
            } else {
                const articleContainer = document.getElementById("article-container");
                articleContainer.textContent = "記事が見つかりませんでした"
            }
        })
        .catch(error => {
            console.error("Error loading article:", error);
        });
});