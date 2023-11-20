document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("news-list");
  const apiKey = "168194b6116b4ae59b7332a5e853f65e";
  const apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;

  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network error!');
          }
          return response.json();
      })
      .then(data => {
          if (data.articles) {
              data.articles.forEach(article => {
                  const listItem = document.createElement("li");
                  listItem.textContent = article.title;
                  newsList.appendChild(listItem);
              });
          } else {
              throw new Error('Invalid API!');
          }
      })
      .catch(error => {
          console.error("Error:", error);
      });
});