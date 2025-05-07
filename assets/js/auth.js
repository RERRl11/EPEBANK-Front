// Funcionalidades para login y registro
document.addEventListener('DOMContentLoaded', function() {
    // Solo ejecutar en páginas de login/registro
    if (document.querySelector('.auth-form')) {
        setupAuthForms();
    }
});

function setupAuthForms() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('#email').value;
            const password = this.querySelector('#password').value;
            
            // Validación simple
            if (!email || !password) {
                showAlert('Por favor complete todos los campos', 'error');
                return;
            }
            
            // Simular login (en un caso real sería una petición AJAX)
            showAlert('Inicio de sesión exitoso', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        });
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const password = this.querySelector('#password').value;
            const confirmPassword = this.querySelector('#confirm-password').value;
            
            // Validaciones
            if (!name || !email || !password || !confirmPassword) {
                showAlert('Por favor complete todos los campos', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showAlert('Las contraseñas no coinciden', 'error');
                return;
            }
            
            if (password.length < 6) {
                showAlert('La contraseña debe tener al menos 6 caracteres', 'error');
                return;
            }
            
            // Simular registro
            showAlert('Registro exitoso. Redirigiendo...', 'success');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        });
    }
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    const container = document.querySelector('.auth-container') || document.body;
    container.prepend(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}