function toggleMenu() {
  const links = document.querySelector('.links');
  links.classList.toggle('active');
}
 
const blogCards = document.querySelectorAll('.blog-card');

 
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
       
      entry.target.classList.add('visible');
  
      entry.target.style.animationDelay = `${index * 0.2}s`;
      observer.unobserve(entry.target);  
    }
  });
}, { threshold: 0.5 });  

 
blogCards.forEach(card => {
  observer.observe(card);
});


function openLightbox(element) {
    const imgSrc = element.querySelector("img").src;
    document.getElementById("lightbox-img").src = imgSrc;
    document.getElementById("lightbox").classList.add("active");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
}
 
document.querySelectorAll('.image-container').forEach(item => {
    item.addEventListener('click', function() {
        openLightbox(this);
    });
});
