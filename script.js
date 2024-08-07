function showLogin(role) {

    document.querySelector('.home-page').style.display = 'none';

    document.querySelector('#login-form').style.display = 'flex';

    document.querySelector('#register-form').style.display = 'none';

    document.querySelector('#login-title').textContent = `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`;

}

function showRegister() {

    document.querySelector('.home-page').style.display = 'none';

    document.querySelector('#login-form').style.display = 'none';

    document.querySelector('#register-form').style.display = 'flex';

}

function login() {

    const username = document.querySelector('#username').value;

    const password = document.querySelector('#password').value;

    // For simplicity, just alerting the values. Replace with actual login logic.

    alert(`Username: ${username}, Password: ${password}`);

    // Reset login form

    document.querySelector('#username').value = '';

    document.querySelector('#password').value = '';

    document.querySelector('.home-page').style.display = 'flex';

    document.querySelector('#login-form').style.display = 'none';

}

function register() {

    const fullNames = document.querySelector('#full-names').value;

    const nationalId = document.querySelector('#national-id').value;

    const birthDistrict = document.querySelector('#birth-district').value;

    const birthSector = document.querySelector('#birth-sector').value;

    const birthCell = document.querySelector('#birth-cell').value;

    const birthVillage = document.querySelector('#birth-village').value;

    const phoneNumber = document.querySelector('#phone-number').value;

    const email = document.querySelector('#email').value;

    // For simplicity, just alerting the values. Replace with actual registration logic.

    alert(`Registered with: ${fullNames}, ${nationalId}, ${birthDistrict}, ${birthSector}, ${birthCell}, ${birthVillage}, ${phoneNumber}, ${email}`);

    // Reset register form

    document.querySelector('#full-names').value = '';

    document.querySelector('#national-id').value = '';

    document.querySelector('#birth-district').value = '';

    document.querySelector('#birth-sector').value = '';

    document.querySelector('#birth-cell').value = '';

    document.querySelector('#birth-village').value = '';

    document.querySelector('#phone-number').value = '';

    document.querySelector('#email').value = '';

    document.querySelector('.home-page').style.display = 'flex';

    document.querySelector('#register-form').style.display = 'none';

    // Simulate sending login credentials via email

    alert(`Login credentials sent to: ${email}`);

}