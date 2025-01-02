# Firebase Database Initialization Error

This repository demonstrates a common error in Firebase Realtime Database applications: accessing a database reference before the Firebase app has fully initialized.  The example shows the incorrect approach and provides a corrected solution.

## Problem

The `firebase.initializeApp()` method is asynchronous. Attempting to access the database before initialization completes can result in errors or unexpected behavior.

## Solution

The solution uses a Promise or async/await to ensure the database is ready before accessing it.