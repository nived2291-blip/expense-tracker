
  const firebaseConfig = {
    apiKey: "AIzaSyCnirgw1KgR9JBV1v-M00phEhefKWNzNTk",
    authDomain: "expense-tracker-130cf.firebaseapp.com",
    projectId: "expense-tracker-130cf",
    storageBucket: "expense-tracker-130cf.firebasestorage.app",
    messagingSenderId: "408940395065",
    appId: "1:408940395065:web:97cb0d647376a905c5abe8",
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get current user ID
function getUserId() {
  return auth.currentUser.uid;
}

// Add transaction for logged-in user
function saveTransaction(transaction) {
  return db
    .collection("users")
    .doc(getUserId())
    .collection("transactions")
    .add({
      ...transaction,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
}

// Load logged-in user's transactions
function loadTransactions(callback) {
  return db
    .collection("users")
    .doc(getUserId())
    .collection("transactions")
    .orderBy("createdAt")
    .onSnapshot(snapshot => {
      const data = [];
      snapshot.forEach(doc => {
        data.push({ docId: doc.id, ...doc.data() });
      });
      callback(data);
    });
}

// Delete transaction
function deleteTransaction(docId) {
  return db
    .collection("users")
    .doc(getUserId())
    .collection("transactions")
    .doc(docId)
    .delete();
}