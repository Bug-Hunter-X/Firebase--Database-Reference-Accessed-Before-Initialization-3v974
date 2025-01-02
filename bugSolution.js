The correct approach involves handling the asynchronous nature of `initializeApp` using Promises or async/await:

```javascript
// Correct - using async/await
async function initializeAppAndAccessData() {
  await firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  const userRef = db.ref('users');
  const snapshot = await userRef.once('value');
  console.log(snapshot.val());
}
initializeAppAndAccessData();

// Correct - using Promises
firebase.initializeApp(firebaseConfig).then(() => {
  const db = firebase.database();
  const userRef = db.ref('users');
  return userRef.once('value');
}).then(snapshot => {
  console.log(snapshot.val());
}).catch(error => {
  console.error('Error accessing database:', error);
});
```
This ensures that the database is ready before any operations are performed, preventing the error.