document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbar');
  if (navbarContainer) {
    fetch("components/header.html")
      .then(response => {
        if (!response.ok) throw new Error('Header: Network response was not ok');
        return response.text();
      })
      .then(html => {
        navbarContainer.innerHTML = html;
        initHeader();
        setHeaderVariant();
        highlightActiveLink();
      })
      .catch(error => {
        console.error('Error loading header:', error);
        navbarContainer.innerHTML = '<div class="bg-red-100 p-4">Header failed to load</div>';
      });
  }

  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    fetch("components/footer.html")
      .then(response => {
        if (!response.ok) throw new Error('Footer: Network response was not ok');
        return response.text();
      })
      .then(html => {
        footerContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error loading footer:', error);
        footerContainer.innerHTML = '<div class="bg-red-100 p-4">Footer failed to load</div>';
      });
  }

  function highlightActiveLink() {
    let currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('nav a, #mobileMenu a').forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('text-blue-600', 'font-semibold');
      }
    });
  }

  function setHeaderVariant() {
    const header = document.querySelector('header');
    if (!header) return;

    const pageType = document.body.dataset.headerType ||
                     (document.querySelector('.hero-section') ? 'transparent' : 'solid');

    header.dataset.variant = pageType;
    header.classList.remove('bg-white', 'text-gray-800', 'text-white', 'shadow-sm');

    if (pageType === 'transparent') {
      header.classList.add('text-white', 'shadow-sm');
      header.style.backgroundColor = 'transparent';
    } else {
      header.classList.add('bg-white', 'shadow-sm');
      header.style.backgroundColor = 'white';
      header.style.color = '#7f7171ff';
    }
  }

  function initHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    window.addEventListener('scroll', () => {
      if (!header.dataset.variant) return;

      if (window.scrollY > 50) {
        header.classList.add('scrolled', 'h-16');
        header.classList.remove('h-24');

        if (header.dataset.variant === 'transparent') {
          header.style.backgroundColor = 'white';
          header.style.color = '#1f2937';
        }
      } else {
        header.classList.remove('scrolled', 'h-16');
        header.classList.add('h-24');

        if (header.dataset.variant === 'transparent') {
          header.style.backgroundColor = 'transparent';
          header.style.color = 'white';
        }
      }
    });

    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.classList.replace('h-24', 'h-16');
    }
  }
});
