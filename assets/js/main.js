// ===== Main JavaScript for Starford Tech Graphics =====

// DOM Elements
const mobileNavToggle = document.querySelectorAll('.mobile-nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const overlay = document.getElementById('overlay');
const backToTop = document.getElementById('backToTop');

// Initialize AOS Animation
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// Mobile Navigation Toggle
mobileNavToggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        // Change icon
        const icon = toggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Close mobile menu when clicking on overlay
if (overlay) {
    overlay.addEventListener('click', () => {
        mobileNavToggle.forEach(toggle => {
            toggle.setAttribute('aria-expanded', 'false');
            const icon = toggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
}

// Mobile dropdown toggle
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
const mobileDropdownIcons = document.querySelectorAll('.mobile-dropdown-toggle i');

mobileDropdownToggles.forEach((toggle, index) => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const dropdown = toggle.nextElementSibling;
        const icon = toggle.querySelector('i');
        
        // Close all other dropdowns
        mobileDropdownToggles.forEach((otherToggle, otherIndex) => {
            if (otherIndex !== index) {
                const otherDropdown = otherToggle.nextElementSibling;
                const otherIcon = otherToggle.querySelector('i');
                otherDropdown.classList.remove('active');
                otherIcon.classList.remove('fa-chevron-up');
                otherIcon.classList.add('fa-chevron-down');
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
        if (dropdown.classList.contains('active')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// Desktop dropdown functionality
const desktopDropdowns = document.querySelectorAll('.nav-links > li.dropdown');

desktopDropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) {
            menu.style.opacity = '1';
            menu.style.visibility = 'visible';
            menu.style.transform = 'translateY(0)';
        }
    });
    
    dropdown.addEventListener('mouseleave', () => {
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.style.transform = 'translateY(10px)';
        }
    });
});

// Nested dropdown functionality
const dropdownItems = document.querySelectorAll('.dropdown-menu > li');

dropdownItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const submenu = item.querySelector('.dropdown-side');
        if (submenu) {
            submenu.style.opacity = '1';
            submenu.style.visibility = 'visible';
            submenu.style.transform = 'translateX(0)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.dropdown-side');
        if (submenu) {
            submenu.style.opacity = '0';
            submenu.style.visibility = 'hidden';
            submenu.style.transform = 'translateX(10px)';
        }
    });
});

// Back to Top Button
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Sticky Header on Scroll
const header = document.getElementById('header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.height = '70px';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.height = '80px';
        }
    });
}

// Search Functionality
const searchBox = document.querySelector('.search-box input');

if (searchBox) {
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchBox.value.trim();
            if (searchTerm) {
                // In a real implementation, this would redirect to search results
                alert(`Searching for: ${searchTerm}`);
                // window.location.href = `search.html?q=${encodeURIComponent(searchTerm)}`;
            }
        }
    });
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email) {
            // Simulate API call
            emailInput.value = '';
            showNotification('Thank you for subscribing to our newsletter!', 'success');
        }
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: var(--white);
                color: var(--dark);
                padding: 15px 20px;
                border-radius: var(--border-radius);
                box-shadow: 0 5px 20px rgba(0,0,0,0.15);
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 15px;
                z-index: 9999;
                transform: translateX(150%);
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                max-width: 400px;
            }
            .notification.active {
                transform: translateX(0);
            }
            .notification.success {
                border-left: 4px solid var(--success);
            }
            .notification.error {
                border-left: 4px solid var(--danger);
            }
            .notification.info {
                border-left: 4px solid var(--primary);
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .notification-content i {
                font-size: 1.2rem;
            }
            .notification.success .notification-content i {
                color: var(--success);
            }
            .notification.error .notification-content i {
                color: var(--danger);
            }
            .notification.info .notification-content i {
                color: var(--primary);
            }
            .notification-close {
                background: none;
                border: none;
                color: var(--medium-gray);
                cursor: pointer;
                font-size: 0.9rem;
                transition: color 0.3s;
            }
            .notification-close:hover {
                color: var(--dark);
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('active');
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('active');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Form Validation Example
const forms = document.querySelectorAll('form:not(.newsletter-form)');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'var(--danger)';
                
                // Add error message
                if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                    const errorMsg = document.createElement('div');
                    errorMsg.className = 'error-message';
                    errorMsg.textContent = 'This field is required';
                    errorMsg.style.color = 'var(--danger)';
                    errorMsg.style.fontSize = '0.85rem';
                    errorMsg.style.marginTop = '5px';
                    field.parentNode.appendChild(errorMsg);
                }
            } else {
                field.style.borderColor = '';
                const errorMsg = field.parentNode.querySelector('.error-message');
                if (errorMsg) {
                    errorMsg.remove();
                }
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            showNotification('Please fill in all required fields.', 'error');
        }
    });
});

// Dynamic Year for Footer Copyright
const footerBottom = document.querySelector('.footer-bottom');
if (footerBottom) {
    footerBottom.innerHTML = footerBottom.innerHTML.replace('2023', new Date().getFullYear());
}

// Lazy Loading for Images
const lazyImages = document.querySelectorAll('img[data-src]');

const lazyLoad = () => {
    lazyImages.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight + 100 && !img.src) {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            img.classList.add('loaded');
        }
    });
};

// Initial load
lazyLoad();

// Load on scroll
window.addEventListener('scroll', lazyLoad);

// Intersection Observer for animations
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Prevent body scroll when mobile menu is open
document.addEventListener('DOMContentLoaded', function() {
    // Add no-scroll class to body when mobile menu is active
    const body = document.body;
    const originalOverflow = body.style.overflow;
    
    // Update body overflow when mobile nav is toggled
    const mobileNavToggles = document.querySelectorAll('.mobile-nav-toggle');
    mobileNavToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            if (body.classList.contains('no-scroll')) {
                body.style.overflow = originalOverflow;
            } else {
                body.style.overflow = 'hidden';
            }
        });
    });
    
    // Reset on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            body.style.overflow = '';
            body.classList.remove('no-scroll');
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            
            // Reset toggle icons
            mobileNavToggle.forEach(toggle => {
                toggle.setAttribute('aria-expanded', 'false');
                const icon = toggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');
    
    // Update any dynamic elements
    if (typeof updatePageElements === 'function') {
        updatePageElements();
    }
});

// Export functions if needed
window.starfordTech = {
    showNotification,
    lazyLoad
};