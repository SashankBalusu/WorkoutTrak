const auth = firebase.auth()
const logInBtn = document.getElementById('logInBtn')

auth.onAuthStateChanged((user) => {
 console.log("logged in")
 console.log(user.uid)

})

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}

const signOut = () => {
  auth.signOut()
}

logInBtn.onclick = signIn