document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
      const passwordInput = document.getElementById('loginPassword');
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
    loginForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const email = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value;
      
      // Basic validation
      if (!username || !password) {
        alert('Please fill in all fields');
        return;
      }
      
      // Prepare data for MongoDB
      const loginData = {
        username: username,
        password: password,
        remember: rememberMe
      };
      
      // Here's where your friend will connect to MongoDB
      console.log('Data ready for MongoDB:', loginData);
      
      // For demo purposes - replace with actual fetch call
      /*
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href = 'dashboard.html';
        } else {
          alert(data.message || 'Login failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login');
      });
      */
      
      // Temporary success message
      alert('Login successful (MongoDB integration pending)');
    });
  });