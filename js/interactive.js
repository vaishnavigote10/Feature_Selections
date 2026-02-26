// Interactive Features for Feature Selection Website

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Animated number counters
    const animateCounters = () => {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(element => {
            const target = parseInt(element.getAttribute('data-value'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target;
                }
            };

            updateCounter();
        });
    };

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                
                // Trigger counter animation for hero stats
                if (entry.target.classList.contains('hero')) {
                    setTimeout(animateCounters, 300);
                }
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.hero, .methods-section, .results-section, .features-section').forEach(el => {
        observer.observe(el);
    });

    // Method card click interactions
    const methodCards = document.querySelectorAll('.method-card');
    methodCards.forEach(card => {
        card.addEventListener('click', function() {
            const details = this.querySelector('.method-details');
            if (details) {
                const isVisible = details.style.display !== 'none';
                details.style.display = isVisible ? 'none' : 'block';
                
                // Smooth expansion animation
                if (!isVisible) {
                    details.style.animation = 'slideInUp 0.3s ease-out';
                }
            }
        });

        // Keyboard accessibility
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                card.click();
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active');
                    });
                    if (this.classList.contains('nav-link')) {
                        this.classList.add('active');
                    }
                }
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });

    // Ripple effect on buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Feature card hover animations
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s backwards`;
    });

    // Results cards staggered animation
    document.querySelectorAll('.results-box').forEach((box, index) => {
        box.style.animation = `slideInUp 0.6s ease-out ${index * 0.2}s backwards`;
    });

    // Add visual feedback to stat boxes in hero
    document.querySelectorAll('.stat-box').forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
        });

        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Intersection Observer for fade-in animations on scroll
    const fadeInElements = document.querySelectorAll('.method-card, .feature-card, .results-box');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        fadeInObserver.observe(el);
    });

    // Progress bar animations
    const animateProgressBars = () => {
        const progressFills = document.querySelectorAll('.progress-fill');
        
        progressFills.forEach(fill => {
            const width = fill.style.width;
            fill.style.width = '0';
            
            setTimeout(() => {
                fill.style.transition = 'width 1.5s ease-out';
                fill.style.width = width;
            }, 100);
        });
    };

    // Trigger progress animations when results section is visible
    const resultsSection = document.querySelector('.results-section');
    if (resultsSection) {
        const resultsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    resultsObserver.unobserve(resultsSection);
                }
            });
        }, { threshold: 0.3 });

        resultsObserver.observe(resultsSection);
    }

    // Scroll reveal for features
    const scrollReveal = () => {
        const elements = document.querySelectorAll('.feature-card, .method-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.classList.add('revealed');
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Initial check

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: rippleEffect 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .method-details {
            background: #f5f7fa;
            padding: 1.5rem;
            border-radius: 8px;
            margin-top: 1rem;
            border-left: 4px solid var(--primary);
        }

        .method-details ul {
            list-style-position: inside;
            color: #2c3e50;
        }

        .method-details li {
            margin-bottom: 0.5rem;
        }

        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }

        @media (max-width: 768px) {
            .method-card {
                cursor: pointer;
            }

            .method-card.active .method-details {
                display: block;
            }
        }
    `;
    document.head.appendChild(style);

    // Stats tracking for analytics (optional)
    const trackEvent = (eventName, eventData) => {
        console.log(`Event: ${eventName}`, eventData);
        // You can send this to an analytics service
    };

    // Track section views
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    trackEvent('section_viewed', {
                        section: entry.target.id,
                        timestamp: new Date().toISOString()
                    });
                }
            });
        }, { threshold: 0.5 });

        sectionObserver.observe(section);
    });

    // Track button clicks
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            trackEvent('button_clicked', {
                button_text: this.textContent,
                button_href: this.href || 'no-href'
            });
        });
    });

    console.log('✅ Interactive features loaded successfully!');
});

// Preload animations
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});
