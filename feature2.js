// Select all image containers
const imageContainers = document.querySelectorAll(".image-container");

// Function to reset all images to their original state
function resetImages() {
    imageContainers.forEach((container) => {
        const image = container.querySelector(".thumbnail");
        const deleteBtn = container.querySelector(".delete-btn");
        const saveBtn = container.querySelector(".save-btn");
        const message = container.querySelector(".message");

        // Reset image size and hide buttons/messages
        image.classList.remove("enlarged");
        deleteBtn.style.display = "none";
        saveBtn.style.display = "none";
        message.style.display = "none";
    });
}

// Add event listeners to each image container
imageContainers.forEach((container) => {
    const image = container.querySelector(".thumbnail");
    const deleteBtn = container.querySelector(".delete-btn");
    const saveBtn = container.querySelector(".save-btn");
    const message = container.querySelector(".message");

    // Enlarge the image when clicked
    image.addEventListener("click", () => {
        // Reset all images first
        resetImages();

        // Enlarge the clicked image and show buttons
        image.classList.add("enlarged");
        deleteBtn.style.display = "block";
        saveBtn.style.display = "block";
    });

    // Delete the image
    deleteBtn.addEventListener("click", () => {
        container.style.display = "none"; // Hide the entire container
    });

    // Save the image
    saveBtn.addEventListener("click", () => {
        message.style.display = "block"; // Show success message
        deleteBtn.style.display = "none"; // Hide buttons
        saveBtn.style.display = "none";
    });
});
