document.addEventListener("scroll", function() {
    // Get the video section and cloud elements
    var videoSection = document.querySelector(".video-section");
    var cloud = document.querySelector(".cloud");

    // Get the cloud's position relative to the viewport
    var cloudPosition = cloud.getBoundingClientRect();

    if (cloudPosition.bottom <= window.innerHeight * 0.5) {
        // Hide the video section when the bottom of the cloud is halfway up the viewport
        videoSection.style.display = "none";
    } else {
        // Show the video section otherwise
        videoSection.style.display = "block";
    }
});
