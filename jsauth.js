// Auth untuk app.html - FIXED
import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js')
  .then(({ getAuth, onAuthStateChanged, signOut }) => {
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) => {
      const loadingScreen = document.getElementById('loadingScreen');
      const userProfile = document.getElementById('userProfile');
      const storyContainer = document.getElementById('storyContainer');
      
      if (!user) {
        // Belum login → redirect
        window.location.href = 'index.html';
        return;
      }
      
      // Show user info
      document.getElementById('userAvatar').src = user.photoURL || 'https://via.placeholder.com/40?text=?';
      document.getElementById('userName').textContent = user.displayName || user.email.split('@')[0];
      
      // Hide loading, show app
      loadingScreen.style.display = 'none';
      userProfile.classList.remove('hidden');
      storyContainer.classList.remove('hidden');
      
      // Trigger story start
      window.startStory();
      
      // Logout
      document.getElementById('logoutBtn').onclick = () => {
        signOut(auth).then(() => {
          window.location.href = 'index.html';
        });
      };
    });
  })
  .catch(console.error);
