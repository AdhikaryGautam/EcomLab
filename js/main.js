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

const handleSubmit = (e) => {
  e.preventDefault();
  let fullName = document.querySelector("#fullname");
  let email = document.querySelector("#email");
  let passFirst = document.querySelector("#password-1");
  let passSecond = document.querySelector("#password-2");

  // validate
  if (fullName.value.length === 0) {
    alert("Full name empty");
    return;
  }
  if (email.value.length === 0) {
    alert("Email empty");
    return;
  } else {
    if (
      !email.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      alert("Enter a valid email");
      return;
    }
  }
  if (passFirst.value.length === 0) {
    alert("Password cannot be empty");
    return;
  }
  if (passSecond.value.length === 0) {
    alert("Password cannot be empty");
    return;
  }
  if (passFirst.value !== passSecond.value) {
    alert("Both password must be same");
    return;
  } else {
    if (passFirst.value.length < 8) {
      alert("Password length must be at least 8");
      return;
    }
  }
  alert("Successfully submitted");
};

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
