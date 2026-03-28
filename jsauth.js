// Auth logic khusus app.html
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOlYwSjMJRsRwru9Ui6ArBJp0NePSNu7g",
  authDomain: "ho-o-2a7cd.firebaseapp.com",
  projectId: "ho-o-2a7cd",
  storageBucket: "ho-o-2a7cd.firebasestorage.app",
  messagingSenderId: "1057456094946",
  appId: "1:1057456094946:web:eb3e82d917a1f2489728bb",
  measurementId: "G-Q3Y8F63XEK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  const loading = document.getElementById('loadingScreen');
  const profile = document.getElementById('userProfile');
  const story = document.getElementById('storyContainer');
  
  if (!user) {
    window.location.href = 'index.html';
    return;
  }
  
  // Setup profile
  document.getElementById('userAvatar').src = user.photoURL || 'https://via.placeholder.com/40?text=?';
  document.getElementById('userName').textContent = user.displayName || user.email?.split('@')[0] || 'Petualang';
  
  // Hide loading, show app
  loading.style.display = 'none';
  profile.classList.remove('hidden');
  story.classList.remove('hidden');
  
  // Start story
  if (window.startStory) {
    window.startStory();
  }
  
  // Logout
  document.getElementById('logoutBtn').onclick = () => {
    signOut(auth).then(() => {
      window.location.href = 'index.html';
    });
  };
});
