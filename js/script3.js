document.addEventListener("DOMContentLoaded", function() {
    fetch('news.json')
        .then(response => response.json()) 
        .then(data => {
            const newsContainer = document.getElementById('news-container');

            data.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('news-thum');

                const title = document.createElement('h2');
                title.textContent = article.title;

                const description = document.createElement('p');
                description.textContent = article.description;

                const link = document.createElement('a');
                link.href = `newspage.html?id=${article.id}`; 

                link.appendChild(title);
                link.appendChild(description);
                articleElement.appendChild(link);
                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error loading news:', error);
        });
});