const signupForm = document.getElementById('signup-form');
const goToLoginButton = document.getElementById('go-to-login');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Aquí iría la lógica para guardar el nuevo usuario (en tu caso, podrías simularlo)
    alert(`Registro exitoso para: ${name} (${email})`);
    window.location.href = "index.html"; // Redirige de vuelta al inicio de sesión
});

goToLoginButton.addEventListener('click', () => {
    window.location.href = "index.html"; // Redirige de vuelta al inicio de sesión
});