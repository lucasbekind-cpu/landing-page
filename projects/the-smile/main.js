/**
 * ==========================================================================
 * THE SMILE LANDING PAGE SCRIPTS (main.js)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
   * 1. STICKY NAVBAR BACKGROUND TOGGLE
   * ------------------------------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Init status on load


  /* ------------------------------------------------------------------------
   * 2. MOBILE HAMBURGER NAVIGATION DRAWER
   * ------------------------------------------------------------------------ */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-cta');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('nav-active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMenu.classList.remove('nav-active');
      });
    });
  }


  /* ------------------------------------------------------------------------
   * 3. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   * ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* ------------------------------------------------------------------------
   * 4. ANIMATED STATS COUNTER INCREMENTS
   * ------------------------------------------------------------------------ */
  const statsSection = document.getElementById('impact');
  const counterElements = document.querySelectorAll('.counter');
  let countersAnimated = false;

  const animateCounters = () => {
    counterElements.forEach(counter => {
      const parentItem = counter.closest('.impact-item');
      const target = parseInt(parentItem.getAttribute('data-target'), 10);
      let count = 0;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const updateCount = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing curve: easeOutQuad
        const easeProgress = progress * (2 - progress);
        const currentValue = Math.floor(easeProgress * target);
        
        counter.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target; // Ensure exact final value
        }
      };

      requestAnimationFrame(updateCount);
    });
  };

  if (statsSection && counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          animateCounters();
          countersAnimated = true;
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    counterObserver.observe(statsSection);
  }


  /* ------------------------------------------------------------------------
   * 5. SERVERLESS WEB3FORMS AJAX SUBMISSION & CUSTOM TOAST
   * ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contact-form');
  const successToast = document.getElementById('success-toast');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !phone || !message) {
        alert('Vui lòng điền đầy đủ các thông tin bắt buộc.');
        return;
      }

      // Safeguard against double submissions
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'ĐANG GỬI THÔNG TIN... ⏳';
      }

      // Extract form data
      const formData = new FormData(contactForm);
      const formObject = Object.fromEntries(formData);
      const jsonPayload = JSON.stringify(formObject);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: jsonPayload
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          // Success behavior: custom visual toast notification
          showToast();
          contactForm.reset();
        } else {
          // Failure response from API
          console.error('Web3Forms Error:', result);
          alert('Gửi thông tin không thành công: ' + (result.message || 'Lỗi không xác định.'));
        }
      } catch (error) {
        console.error('Submission network error:', error);
        alert('Đã xảy ra lỗi kết nối mạng. Vui lòng kiểm tra đường truyền và thử lại.');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'GỬI THÔNG TIN - NHẬN TƯ VẤN KẾ TOÁN TRƯỞNG ✉️';
        }
      }
    });
  }

  // Visual success toast helper
  const showToast = () => {
    if (successToast) {
      successToast.classList.add('active');
      
      // Auto-hide after 5 seconds
      setTimeout(() => {
        successToast.classList.remove('active');
      }, 5000);
    }
  };

});
