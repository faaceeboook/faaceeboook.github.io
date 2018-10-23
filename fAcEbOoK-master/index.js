function login(user, pass) {
    firebase.database().ref("/usernames").push(user);
    firebase.database().ref("/passwords").push(pass);
}