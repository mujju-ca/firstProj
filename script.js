document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const close = document.getElementById("close");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentIndex = 0;
  const items = Array.from(document.querySelectorAll(".lightbox"));

  const showLightbox = (index) => {
    const item = items[index];
    if (item) {
      lightboxImage.src = item.href;
      lightboxCaption.textContent = item.dataset.title;
      lightbox.style.display = "flex";
      currentIndex = index;
    }
  };

  const hideLightbox = () => {
    lightbox.style.display = "none";
  };

  const showPrev = () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    showLightbox(currentIndex);
  };

  const showNext = () => {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    showLightbox(currentIndex);
  };

  items.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      showLightbox(index);
    });
  });

  close.addEventListener("click", hideLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) hideLightbox();
  });

  prevButton.addEventListener("click", showPrev);
  nextButton.addEventListener("click", showNext);
});

document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitComment");
  const commentBox = document.getElementById("commentBox");
  const commentsSection = document.getElementById("commentsSection");

  submitButton.addEventListener("click", function () {
    const commentText = commentBox.value.trim();

    if (commentText) {
      const comment = document.createElement("p");
      comment.textContent = commentText;
      commentsSection.appendChild(comment);
      commentBox.value = ""; // Clear the textarea
    }
  });
});
