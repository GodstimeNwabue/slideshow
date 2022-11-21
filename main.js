let slideIndex = 1;
// show the current slide
showSlides(slideIndex);

// Next or previous controls
function plusSlides(n) {
    // increase the slide index by 1 and show the slide
    showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
    // Show the current slide
    showSlides(slideIndex = n);
}

// on/off switch correct slides
function showSlides(n) {
    let i;
    // All of the slides in the document
    let slides = document.getElementsByClassName("slide");

    // if slide i.e checking if the slide is greater than the total number of slides
    if (n > slides.length) {
        slideIndex = 1;
    }

    //  check if the slides is less than the total number of slides
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide each of the slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Set the current slide to display as a block element
    slides[slideIndex - 1].style.display = "block";
}