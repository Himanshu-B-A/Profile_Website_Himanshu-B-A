// ===== PRELOADER =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);
});

// ===== CUSTOM CURSOR =====
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Hover effect on links and buttons
    const hoverElements = document.querySelectorAll('a, button, .btn, .nav-toggle, .project-card, .skill-card');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.backgroundColor = 'rgba(110, 87, 224, 0.1)';
            cursorFollower.style.borderColor = 'var(--primary-color)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.backgroundColor = 'transparent';
            cursorFollower.style.borderColor = 'var(--secondary-color)';
        });
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE NAVIGATION =====
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// ===== ACTIVE NAVIGATION LINK ON SCROLL =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== TYPED TEXT EFFECT =====
document.addEventListener('DOMContentLoaded', () => {
    const typedTextElement = document.querySelector('.typed-text');
    
    if (typedTextElement) {
        const texts = [
            'Information Science Engineer',
            'Blockchain Developer',
            'AI/ML Enthusiast',
            'Full-Stack Developer'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pause at end
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before typing next
            }
            
            setTimeout(type, typingSpeed);
        }
        
        setTimeout(type, 1000);
    }
});

// ===== SCROLL REVEAL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: false
    });
    
    // Home
    sr.reveal('.hero-content', {});
    sr.reveal('.hero-visual', {delay: 200});
    sr.reveal('.scroll-indicator', {delay: 400});
    
    // About
    sr.reveal('.about-image', {});
    sr.reveal('.about-text h3', {delay: 200});
    sr.reveal('.about-text p', {delay: 300});
    sr.reveal('.stats-container', {delay: 400});
    sr.reveal('.timeline', {delay: 500});
    
    // Skills
    sr.reveal('.skills-text', {});
    sr.reveal('.skill-card', {interval: 100});
    
    // Projects
    sr.reveal('.projects-filter', {});
    sr.reveal('.project-card', {interval: 200});
    
    // Testimonials
    sr.reveal('.testimonials-slider', {});
    
    // Contact
    sr.reveal('.contact-info', {});
    sr.reveal('.contact-form', {delay: 200});
});

// ===== COUNTER ANIMATION =====
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                let count = 0;
                
                const updateCount = () => {
                    const increment = target / speed;
                    
                    if (count < target) {
                        count += increment;
                        counter.textContent = Math.ceil(count);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// ===== SKILL BARS ANIMATION =====
document.addEventListener('DOMContentLoaded', () => {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const level = skillBar.getAttribute('data-level');
                
                skillBar.style.width = level + '%';
                observer.unobserve(skillBar);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(skillBar => {
        observer.observe(skillBar);
    });
});

// ===== PROJECT FILTERING =====
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
});

// ===== PROJECT MODAL =====
document.addEventListener('DOMContentLoaded', () => {
    const projectBtns = document.querySelectorAll('.btn-view-project');
    const projectModal = document.querySelector('.project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBody = document.querySelector('.modal-body');
    
    projectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const projectCard = btn.closest('.project-card');
            const projectTitle = projectCard.querySelector('h3').textContent;
            const projectDesc = projectCard.querySelector('p').textContent;
            const projectImg = projectCard.querySelector('img').src;
            const projectTech = projectCard.querySelector('.project-tech').innerHTML;
            
            const modalContent = `
                <div class="modal-header">
                    <h2>${projectTitle}</h2>
                </div>
                <div class="modal-img">
                    <img src="${projectImg}" alt="${projectTitle}">
                </div>
                <div class="modal-desc">
                    <h3>Project Overview</h3>
                    <p>${projectDesc}</p>
                    <h3>Technologies Used</h3>
                    <div class="project-tech">
                        ${projectTech}
                    </div>
                    <h3>Project Details</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>
                </div>
            `;
            
            modalBody.innerHTML = modalContent;
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    modalClose.addEventListener('click', () => {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// ===== TESTIMONIAL SLIDER =====
document.addEventListener('DOMContentLoaded', () => {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dotsContainer = document.querySelector('.testimonial-dots');
    
    let currentIndex = 0;
    
    // Create dots
    testimonialItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // Show first testimonial
    testimonialItems[0].classList.add('active');
    
    // Functions
    function goToSlide(index) {
        testimonialItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialItems[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        goToSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
        goToSlide(currentIndex);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    const testimonialSlider = document.querySelector('.testimonials-slider');
    
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// ===== CONTACT FORM =====
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    // Form submission is handled by onsubmit attribute in HTML
});

// ===== 3D BACKGROUND WITH THREE.JS =====
document.addEventListener('DOMContentLoaded', () => {
    // Check if Three.js is loaded
    if (typeof THREE !== 'undefined') {
        // Create scene
        const scene = new THREE.Scene();
        
        // Create camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;
        
        // Create renderer
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        // Append renderer to hero section
        const heroSection = document.querySelector('.hero');
        heroSection.appendChild(renderer.domElement);
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '-1';
        
        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        
        const posArray = new Float32Array(particlesCount * 3);
        
        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        // Create material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0x6e57e0,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        
        // Create mesh
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);
        
        // Create avatar mesh (placeholder for 3D model)
        const avatarContainer = document.querySelector('.avatar-3d');
        
        if (avatarContainer) {
            const avatarScene = new THREE.Scene();
            const avatarCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            avatarCamera.position.z = 2;
            
            const avatarRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            avatarRenderer.setSize(400, 400);
            avatarRenderer.setPixelRatio(window.devicePixelRatio);
            
            avatarContainer.appendChild(avatarRenderer.domElement);
            
            // Create a simple 3D shape (placeholder for actual avatar)
            const geometry = new THREE.IcosahedronGeometry(1, 1);
            const material = new THREE.MeshPhongMaterial({
                color: 0x6e57e0,
                wireframe: true,
                emissive: 0x00d9ff,
                emissiveIntensity: 0.5,
                shininess: 100
            });
            
            const avatar = new THREE.Mesh(geometry, material);
            avatarScene.add(avatar);
            
            // Add lights
            const light1 = new THREE.DirectionalLight(0xffffff, 1);
            light1.position.set(0, 0, 1);
            avatarScene.add(light1);
            
            const light2 = new THREE.DirectionalLight(0x00d9ff, 1);
            light2.position.set(0, 0, -1);
            avatarScene.add(light2);
            
            // Animation function for avatar
            function animateAvatar() {
                requestAnimationFrame(animateAvatar);
                
                avatar.rotation.x += 0.01;
                avatar.rotation.y += 0.01;
                
                avatarRenderer.render(avatarScene, avatarCamera);
            }
            
            animateAvatar();
        }
        
        // Mouse movement effect
        let mouseX = 0;
        let mouseY = 0;
        
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            
            particlesMesh.rotation.x += 0.0005;
            particlesMesh.rotation.y += 0.0005;
            
            // Respond to mouse movement
            particlesMesh.rotation.x += mouseY * 0.0005;
            particlesMesh.rotation.y += mouseX * 0.0005;
            
            renderer.render(scene, camera);
        }
        
        animate();
    } else {
        console.warn('Three.js is not loaded. The 3D background will not be displayed.');
    }
});

// ===== SCROLL REVEAL POLYFILL =====
// This is a simplified version of ScrollReveal for demo purposes
if (typeof ScrollReveal === 'undefined') {
    function ScrollReveal(options = {}) {
        const defaultOptions = {
            origin: 'bottom',
            distance: '20px',
            duration: 500,
            delay: 0,
            reset: false
        };
        
        const mergedOptions = { ...defaultOptions, ...options };
        
        return {
            reveal: function(selector, customOptions = {}) {
                const elements = document.querySelectorAll(selector);
                const options = { ...mergedOptions, ...customOptions };
                
                const observerOptions = {
                    threshold: 0.1
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const element = entry.target;
                            
                            // Apply animation
                            element.style.visibility = 'visible';
                            element.style.opacity = '0';
                            element.style.transform = getTransform(options.origin, options.distance);
                            element.style.transition = `opacity ${options.duration}ms ease, transform ${options.duration}ms ease`;
                            
                            setTimeout(() => {
                                element.style.opacity = '1';
                                element.style.transform = 'translate3d(0, 0, 0)';
                            }, options.delay);
                            
                            if (!options.reset) {
                                observer.unobserve(element);
                            }
                        } else if (options.reset) {
                            const element = entry.target;
                            element.style.opacity = '0';
                            element.style.transform = getTransform(options.origin, options.distance);
                        }
                    });
                }, observerOptions);
                
                elements.forEach(element => {
                    element.style.visibility = 'hidden';
                    observer.observe(element);
                });
            }
        };
    }
    
    function getTransform(origin, distance) {
        switch (origin) {
            case 'top':
                return `translate3d(0, -${distance}, 0)`;
            case 'bottom':
                return `translate3d(0, ${distance}, 0)`;
            case 'left':
                return `translate3d(-${distance}, 0, 0)`;
            case 'right':
                return `translate3d(${distance}, 0, 0)`;
            default:
                return `translate3d(0, ${distance}, 0)`;
        }
    }
}

// Initialize EmailJS with your public key
(function() {
    try {
        emailjs.init("CTftypSlf3y22r_uC"); // Your EmailJS public key
        console.log('EmailJS initialized successfully');
    } catch (error) {
        console.error('EmailJS initialization error:', error);
    }
})();

// Function to send email
function sendEmail(event) {
    event.preventDefault();

    // Get the form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const submitBtn = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    // Disable the submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Prepare the email parameters
    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
        time: new Date().toLocaleString(),
        to_email: '1DS23IS407@dsce.edu.in'
    };

    // Send the email using EmailJS
    console.log('Sending email with params:', templateParams);
    emailjs.send('service_epu7eot', 'template_h7nvxs3', templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            // Show success message
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
            
            // Reset the form
            document.getElementById('contactForm').reset();
        }, function(error) {
            // Show error message
            console.error('Detailed error:', error);
            successMessage.style.display = 'none';
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Failed to send message: ' + (error.text || 'Unknown error');
        })
        .finally(function() {
            // Re-enable the submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });

    return false;
}