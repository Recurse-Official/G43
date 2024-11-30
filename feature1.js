// // // Select DOM elements
// // const galleryImages = document.querySelectorAll(".gallery-image");
// // const createCollageButton = document.getElementById("createCollageButton");
// // const collageContainer = document.getElementById("collageContainer");

// // // Track selected images
// // let selectedImages = [];
// // const MAX_SELECTION = 5; // Limit to 5 images

// // // Toggle selection of images
// // galleryImages.forEach((img) => {
// //     img.addEventListener("click", () => {
// //         if (img.classList.contains("selected")) {
// //             // Deselect image
// //             img.classList.remove("selected");
// //             selectedImages = selectedImages.filter((src) => src !== img.src);
// //         } else {
// //             if (selectedImages.length >= MAX_SELECTION) {
// //                 alert(`You can only select up to ${MAX_SELECTION} images!`);
// //                 return; // Prevent further selection
// //             }
// //             // Select image
// //             img.classList.add("selected");
// //             selectedImages.push(img.src);
// //         }
// //     });
// // });

// // // Create collage
// // createCollageButton.addEventListener("click", () => {
// //     collageContainer.innerHTML = ""; // Clear previous collage
// //     if (selectedImages.length === 0) {
// //         alert("Please select at least one image to create a collage!");
// //         return;
// //     }

// //     selectedImages.forEach((src) => {
// //         const imgElement = document.createElement("img");
// //         imgElement.src = src;
// //         imgElement.classList.add("collage-image");
// //         collageContainer.appendChild(imgElement);
// //     });
// // });
// // Create collage
// // createCollageButton.addEventListener("click", () => {
// //     collageContainer.innerHTML = ""; // Clear previous collage
// //     if (selectedImages.length === 0) {
// //         alert("Please select at least one image to create a collage!");
// //         return;
// //     }

// //     // Dynamically set grid layout for fewer images
// //     const gridSize = selectedImages.length <= 2 ? "1fr" : "repeat(2, 1fr)";
// //     collageContainer.style.gridTemplateColumns = gridSize;

// //     selectedImages.forEach((src) => {
// //         const imgElement = document.createElement("img");
// //         imgElement.src = src;
// //         imgElement.classList.add("collage-image");
// //         collageContainer.appendChild(imgElement);
// //     });
// // });



// // Select DOM elements
// const galleryImages = document.querySelectorAll(".gallery-image");
// const createCollageButton = document.getElementById("createCollageButton");
// const collageContainer = document.getElementById("collageContainer");

// // Track selected images
// let selectedImages = [];
// const MAX_SELECTION = 5; // Limit to 5 images

// // Toggle selection of images
// galleryImages.forEach((img) => {
//     img.addEventListener("click", () => {
//         if (img.classList.contains("selected")) {
//             // Deselect image
//             img.classList.remove("selected");
//             selectedImages = selectedImages.filter((src) => src !== img.src);
//         } else {
//             if (selectedImages.length >= MAX_SELECTION) {
//                 alert(`You can only select up to ${MAX_SELECTION} images!`);
//                 return; // Prevent further selection
//             }
//             // Select image
//             img.classList.add("selected");
//             selectedImages.push(img.src);
//         }
//     });
// });

// // Create collage
// createCollageButton.addEventListener("click", () => {
//     collageContainer.innerHTML = ""; // Clear previous collage
//     if (selectedImages.length === 0) {
//         alert("Please select at least one image to create a collage!");
//         return;
//     }

//     // Dynamically set grid layout for fewer images
//     const gridSize = selectedImages.length <= 2 ? "1fr" : "repeat(2, 1fr)";
//     collageContainer.style.gridTemplateColumns = gridSize;

//     selectedImages.forEach((src) => {
//         const imgElement = document.createElement("img");
//         imgElement.src = src;
//         imgElement.classList.add("collage-image");
//         collageContainer.appendChild(imgElement);
//     });
// });




// Select DOM elements
const galleryImages = document.querySelectorAll(".gallery-image");
const createCollageButton = document.getElementById("createCollageButton");
const collageContainer = document.getElementById("collageContainer");

// Track selected images
let selectedImages = [];
const MAX_SELECTION = 5; // Limit to 5 images

// Toggle selection of images
galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        if (img.classList.contains("selected")) {
            // Deselect image
            img.classList.remove("selected");
            selectedImages = selectedImages.filter((src) => src !== img.src);
        } else {
            if (selectedImages.length >= MAX_SELECTION) {
                alert(`You can only select up to ${MAX_SELECTION} images!`);
                return; // Prevent further selection
            }
            // Select image
            img.classList.add("selected");
            selectedImages.push(img.src);
        }
    });
});

// Create collage
createCollageButton.addEventListener("click", () => {
    collageContainer.innerHTML = ""; // Clear previous collage
    if (selectedImages.length === 0) {
        alert("Please select at least one image to create a collage!");
        return;
    }

    // Clear any previous grid classes
    collageContainer.classList.remove("grid-1x1", "grid-1x2", "grid-2x2", "grid-3x3");

    // Adjust grid layout depending on the number of selected images
    if (selectedImages.length === 1) {
        collageContainer.classList.add("grid-1x1");
    } else if (selectedImages.length === 2) {
        collageContainer.classList.add("grid-1x2");
    } else if (selectedImages.length <= 4) {
        collageContainer.classList.add("grid-2x2");
    } else {
        collageContainer.classList.add("grid-3x3");
    }

    // Add selected images to the collage
    selectedImages.forEach((src, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        imgElement.classList.add("collage-image");

        // Randomize the images' rotation or effects
        const randomRotation = Math.floor(Math.random() * 10) - 5; // Random rotation between -5 and +5 degrees
        imgElement.style.transform = `rotate(${randomRotation}deg)`; // Apply random rotation to images

        collageContainer.appendChild(imgElement);
    });
});
