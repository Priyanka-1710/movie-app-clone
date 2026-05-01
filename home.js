if (!localStorage.getItem("user")) {
  window.location.href = "signin.html";
}

const logoutBtn = document.getElementById("logoutBtn");
const searchBar = document.getElementById("searchBar");
const searchStatus = document.getElementById("searchStatus");
const movies = document.querySelectorAll(".movie-card");

const movieNames = [
  "With Love",
  "youth",
  "Dude",
  "Sirai",
  "Premalu",
  "Hi Nanna",
  "sookshmadarshini",
  "Prema",
  "Spider Man",
  "With Love",
  "With Love",
  "youth",
  "Dude",
  "Sirai",
  "Premalu",
  "Hi Nanna",
  "sookshmadarshini",
  "Prema",
  "Spider Man",
  "With Love",
];

movies.forEach((movie, index) => {
  const name = movieNames[index] || `Movie ${index + 1}`;
  movie.dataset.name = name;
  const img = movie.querySelector("img");
  if (img) {
    img.alt = name;
  }

  let titleElement = movie.querySelector(".movie-title");
  if (!titleElement) {
    titleElement = document.createElement("div");
    titleElement.className = "movie-title";
    movie.appendChild(titleElement);
  }
  titleElement.textContent = name;
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "index.html";
});

document.querySelectorAll(".play-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Playing movie 🎬");
  });
});

if (searchBar) {
  searchBar.addEventListener("input", () => {
    const value = searchBar.value.toLowerCase();
    let visibleCount = 0;

    movies.forEach(movie => {
      const name = (movie.dataset.name || "").toLowerCase();
      const img = movie.querySelector("img");
      const altText = (img?.alt || "").toLowerCase();
      const matches = name.includes(value) || altText.includes(value);

      movie.style.display = matches ? "block" : "none";
      if (matches) visibleCount += 1;
    });

    if (!value) {
      searchStatus.textContent = "Search premium titles instantly by name.";
    } else if (visibleCount === 0) {
      searchStatus.textContent = `No titles found for "${searchBar.value}".`;
    } else {
      searchStatus.textContent = `${visibleCount} premium title${visibleCount === 1 ? "" : "s"} found.`;
    }
  });
}

