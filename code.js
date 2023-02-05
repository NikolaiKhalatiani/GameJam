const showImageBtn = document.getElementById("show-image-btn");
const imageContainer = document.getElementById("image-container");
const images = [
  "photo_1_2023-02-05_11-40-57.jpg",
  "photo_2_2023-02-05_11-40-57.jpg",
  "photo_3_2023-02-05_11-40-57.jpg",
  "photo_4_2023-02-05_11-40-57.jpg",
  "photo_5_2023-02-05_11-40-57.jpg",
  "photo_6_2023-02-05_11-40-57.jpg",
  "photo_7_2023-02-05_11-40-57.jpg",
  "photo_8_2023-02-05_11-40-57.jpg"
];

showImageBtn.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  const image = document.createElement("img");
  image.src = randomImage;
  imageContainer.innerHTML = "";
  imageContainer.appendChild(image);
  imageContainer.style.display = "block";
});

imageContainer.addEventListener("click", function() {
  imageContainer.style.display = "none";
});
