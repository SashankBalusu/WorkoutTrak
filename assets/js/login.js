const auth = firebase.auth()
const logInBtn = document.getElementById('logInBtn')
auth.onAuthStateChanged((user) => {
 console.log("logged in")
 console.log(user.uid)
 let useruid = user.uid
 const storageRef = firebase.storage().ref();

 firebase.storage().ref(user.uid).on('value', function(snapshot){
   console.log(snapshot.val().Link)
   document.getElementById("myvid").src = snapshot.val().Link
 })

const listRef = storageRef.child(useruid.toString())

// listRef.listAll()
// .then((res) => {
//   res.prefixes.forEach((folderRef) => {

//   })
//   res.items.forEach((itemRef) => {
//     console.log(itemRef)
//     document.getElementById("myvid").src = itemRef
//   })
// })

})

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}

const signOut = () => {
  auth.signOut()
}

logInBtn.onclick = signIn