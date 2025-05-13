const signinForm = document.getElementById('signin-form');
const goToRegisterButton = document.getElementById('go-to-register');

// Usuario condicional
const usuarioCondicional = {
    email: "tomas@gmail.com",
    password: "tomas123",
    name: "tomas",
};

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    if (email === usuarioCondicional.email && password === usuarioCondicional.password) {
        alert(`¡Bienvenido, ${usuarioCondicional.name}! Sesión iniciada.`);
        window.location.href = "pagina_principal.html"; 
        window.location.href = "pagina_principal.html"; 
    } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
});

goToRegisterButton.addEventListener('click', () => {
    window.location.href = "register.html"; 
});