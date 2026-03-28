// Firebase Auth Logic untuk app.html
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Redirect ke login jika belum login
    window.location.href = 'index.html';
    return;
  }
  
  // Tampilkan user info
  document.getElementById('userAvatar').src = user.photoURL || 'https://via.placeholder.com/40';
  document.getElementById('userName').textContent = user.displayName || user.email;
  
  // Logout handler
  document.getElementById('logoutBtn').addEventListener('click', async () => {
    await signOut(auth);
    window.location.href = 'index.html';
  });
});

// Export untuk digunakan di main.js
window.auth = auth;