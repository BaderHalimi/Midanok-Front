// Midanok Platform - Main JavaScript

// Mobile Menu Toggle
function toggleMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active');
  }
}

// Form Validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;
  
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }
  });
  
  return isValid;
}

// Modal Functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Filter Functions
function filterItems(filterClass) {
  const items = document.querySelectorAll('.filterable-item');
  items.forEach(item => {
    if (filterClass === 'all' || item.classList.contains(filterClass)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Search Function
function searchItems(searchTerm) {
  const items = document.querySelectorAll('.searchable-item');
  searchTerm = searchTerm.toLowerCase();
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// File Upload Preview
function previewFile(input) {
  const file = input.files[0];
  const preview = document.getElementById('file-preview');
  
  if (file && preview) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

// Notifications
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Active Navigation Link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.sidebar-menu a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  setActiveNavLink();
  
  // Close modals on outside click
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });
});

// Smooth Scroll
function smoothScroll(targetId) {
  const target = document.getElementById(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Confirm Action
function confirmAction(message, callback) {
  if (confirm(message)) {
    callback();
  }
}
