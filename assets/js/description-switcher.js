document.addEventListener("DOMContentLoaded", () => {
    const descriptions = [
        "Game-developer",
        "Fullstack Developer",
        "Gamer",
        "DnD enthusiast",
    ];
    const descriptionElement = document.getElementById("description-switcher");
    let currentIndex = 0;

    function updateText() {
        descriptionElement.classList.remove("fade");
        void descriptionElement.offsetWidth; // Trigger reflow to restart the animation
        descriptionElement.classList.add("fade");

        descriptionElement.textContent = descriptions[currentIndex];
        currentIndex = (currentIndex + 1) % descriptions.length; // Cycle through the array
    }

    // Initialize the first description
    updateText();

    // Change the text every 3 seconds
    setInterval(updateText, 3000);
});
