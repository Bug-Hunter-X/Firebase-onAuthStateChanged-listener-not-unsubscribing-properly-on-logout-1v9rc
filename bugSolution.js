let unsubscribe;

function handleAuthStateChange(auth) {
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log('User is signed in:', user.email);
    } else {
      // User is signed out
      console.log('User is signed out');
    }
  });
}

// Call this when you no longer need the listener (e.g., component unmount)
function cleanupListener() {
  if (unsubscribe) {
    unsubscribe();
  }
}

export { handleAuthStateChange, cleanupListener };