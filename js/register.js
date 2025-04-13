document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const togglePassword = document.querySelector('.toggle-password');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
      const passwordInput = document.getElementById('registerPassword');
      const icon = this.querySelector('i');
      
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
      }
    });
    
    // Form submission
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('registerUsername').value.trim();
      const email = document.getElementById('registerEmail').value.trim();
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const termsAgreed = document.getElementById('termsAgreement').checked;
      
      // Validation
      if (!username || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
      }
      
      if (username.length < 4) {
        alert('Username must be at least 4 characters');
        return;
      }
      
      if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
      }
      
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      
      if (!termsAgreed) {
        alert('You must agree to the terms and conditions');
        return;
      }
      
      // Prepare data for MongoDB
      const userData = {
        username: username,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
      };
      
      // Here's where your friend will connect to MongoDB
      console.log('Data ready for MongoDB:', userData);
      
      // For demo purposes - replace with actual fetch call
      /*
      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Registration successful! Please login');
          window.location.href = 'login.html';
        } else {
          alert(data.message || 'Registration failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during registration');
      });
      */
      
      // Temporary success message
      alert('Registration successful (MongoDB integration pending)');
    });
  });