// nav manu 
// Toggle menu visibility on mobile
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('nav .part2 h4').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.textContent.toLowerCase().replace(/\s+/g, '-');
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: GSAP ScrollTrigger setup (if needed)
gsap.registerPlugin(ScrollTrigger);

// Example GSAP animation (modify as needed)
gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.hero-content',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

// menu end 
function page1(){
    var tl=gsap.timeline();
tl.from("nav h1, nav button, h4",{
    y:-20,
    opacity:0,
    duration:0.6,
    delay:0.1,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
},"-=-1")
tl.from(".center-part1 p",{
    y:-50,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 button",{
    x:-150,
    opacity:0,
    duration:0.4
})
tl.from(".center-part2 img ",{
    x:250,
    opacity:0,
    duration:2
},"-=-0.9")
tl.from(".center-part2 i, i",{
    y:-150,
    opacity:0,
    duration:0.7
})
tl.from("section1-bottom img", {
    rotate: 300,                // Start with a rotation of 300 degrees
    opacity: 0,                 // Start with opacity 0
    duration: 0.5,              // Animation duration
    stagger: 0.1,  // Animation duration
    scrollTrigger: {
      trigger: ".section1-bottom img",  
      scroller: "body",         
      start: "top 90%",         
      end: "top 10%",           
      scrub: true,             
      markers: false          
    }
  });

}

page1();


// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('.hero-content h1', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
    }
});

gsap.from('.cta-button', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.5,
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
    }
});

// Product Gallery Animation
gsap.from('.product-item', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.product-gallery',
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: true,
    }
});

// Smooth scroll to top functionality
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
