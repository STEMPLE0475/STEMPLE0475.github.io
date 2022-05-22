const imageSpace = document.querySelector(".image");

const backgroundImages = [
  "src/Images/backgroundImages/1.jpg",
  "src/Images/backgroundImages/2.jpg",
  "src/Images/backgroundImages/3.jpg"
];

const renNum = Math.floor(Math.random() * backgroundImages.length);
const selectImage = backgroundImages[renNum];
console.log(selectImage);

imageSpace.style.cssText = `background: linear-gradient(rgba(34, 30, 49, 1), rgba(57, 62, 70, 0.90), rgba(0, 0, 0, 0.1)), url("${selectImage}"); background-size: cover; height: 620px; width: 280px; position: absolute; border-radius: 25px 25px 25px 25px;`;
console.log(imageSpace.style);
