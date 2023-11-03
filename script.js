logoutDialog = document.getElementById("logoutDialog");

function goToProfilePage() {
    window.location.href = 'profile.html';
}

function handleLogout() {
    logoutDialog.style.display = "flex";
}

function cancelLogout() {
    logoutDialog.style.display = "none";
}

function doLogout() {
    window.location.href = 'login.html';
}

function handleLogin() {
    // validity check ...
    window.location.href = 'chat_page.html';
}