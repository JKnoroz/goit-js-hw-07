const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("#gallery");
gallery.classList.add("gallery");
// console.log(gallery);

// const makeGalleryList = (images) => {
//   return images.map((image) => {
//     const galleryElement = document.createElement("li");
//     galleryElement.classList.add("gallery-item");
//     const galleryImage = document.createElement("img");
//     galleryElement.appendChild(galleryImage);
//     galleryImage.src = image.url;
//     galleryImage.alt = image.alt;

//     return galleryElement;
//   });
// };

// const galleryList = makeGalleryList(images);

// const galleryListIns = gallery.append(...galleryList);

gallery.insertAdjacentHTML(
  "afterbegin",
  
    return images.map((image) => {
      const galleryElement = document.createElement("li");
      galleryElement.classList.add("gallery-item");
      const galleryImage = document.createElement("img");
      galleryElement.appendChild(galleryImage);
      galleryImage.src = image.url;
      galleryImage.alt = image.alt;

      return galleryElement;
    });
  
);

// console.log(galleryListIns);
