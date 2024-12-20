document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("news-container");
    const newsData = [
        { title: "Notícia 1", content: "Conteúdo da notícia 1" },
        { title: "Notícia 2", content: "Conteúdo da notícia 2" },
        { title: "Notícia 3", content: "Conteúdo da notícia 3" },
    ];

    newsData.forEach(news => {
        const newsItem = document.createElement("div");
        newsItem.className = "news-item";
        newsItem.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
        newsContainer.appendChild(newsItem);
    });
});
