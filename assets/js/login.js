const auth = firebase.auth()
const logInBtn = document.getElementById('logInBtn')

auth.onAuthStateChanged(async (user) => {
 console.log("logged in")
 console.log(user.uid)
 window.location.href = "homeloggedin.html";
})

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}

const signOut = () => {
  auth.signOut()
}

logInBtn.onclick = signIn