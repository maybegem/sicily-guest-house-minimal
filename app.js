/**
 * Sicily Guest House - Minimalist Editorial Logic
 * Instant Display & Lightbox Gallery
 */

document.addEventListener('DOMContentLoaded', () => {

  // Make all sections visible immediately
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach(el => {
    el.classList.add('is-visible');
  });

  // ------------------------------------------------------------------
  // 1. Header Scroll Effect
  // ------------------------------------------------------------------
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ------------------------------------------------------------------
  // 2. Fullscreen Lightbox Modal
  // ------------------------------------------------------------------
  const imageWrappers = document.querySelectorAll('.story-image-wrap');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (imageWrappers.length && lightboxModal) {
    imageWrappers.forEach(wrap => {
      wrap.addEventListener('click', () => {
        const src = wrap.getAttribute('data-src') || wrap.querySelector('img').src;
        const caption = wrap.getAttribute('data-caption') || '';

        lightboxImg.src = src;
        lightboxCaption.textContent = caption;
        lightboxModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      });
    });

    const closeLightbox = () => {
      lightboxModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target === lightboxImg) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightboxModal.style.display === 'flex') {
        closeLightbox();
      }
    });
  }

});
