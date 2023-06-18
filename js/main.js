let searchBar = document.querySelector(".search-bar");
let searchInput = document.querySelector("#search");
let news = document.querySelector(".news");
let newsToggle = document.querySelector(".toggle");
let isExpanded = true;
let hotNews = news.textContent;

const handleNews = () => {
  if (isExpanded) {
    const newContent = hotNews.slice(0, 30);
    news.textContent = newContent;
    newsToggle.textContent = "Read More";
    isExpanded = !isExpanded;
  } else {
    const newContent = hotNews.slice(0);
    news.textContent = newContent;
    newsToggle.textContent = "Read Less";
    isExpanded = !isExpanded;
  }
};

const expand = () => {
  searchBar.classList.add("active");
};

const shrink = () => {
  searchBar.classList.remove("active");
  searchInput.value = "";
};

searchBar.addEventListener("mouseover", expand);
searchBar.addEventListener("mouseout", shrink);

window.addEventListener("load", handleNews);
newsToggle.addEventListener("click", handleNews);
