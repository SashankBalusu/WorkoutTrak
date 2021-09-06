const auth = firebase.auth()
const logInBtn = document.getElementById('logInBtn')
auth.onAuthStateChanged((user) => {
 console.log("logged in")
 console.log(user.uid)
 let useruid = user.uid
 const storageRef = firebase.storage().ref();

//  firebase.storage().ref(user.uid).on('value', function(snapshot){
//    console.log(snapshot.val().Link)
//    document.getElementById("myvid").src = snapshot.val().Link
//  })

// const listRef = storageRef.child(useruid.toString())

// listRef.listAll()
// .then((res) => {
//   res.prefixes.forEach((folderRef) => {
//     console.log(folderRef)
//   })
//   res.items.forEach((itemRef) => {
//     console.log(itemRef)
//     document.getElementById("myvid").src = itemRef
//   })
// })
let firebaseRef = firebase.database().ref(useruid.toString())
        firebaseRef.once("value", function(snapshot){
            snapshot.forEach(function(element){
              console.log(element)
              storageRef.child(useruid.toString() + element.toString()).getDownloadURL()
              .then((url) => {
                var xhr= new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                  var blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element
                var vid = document.getElementById('myvid');
                vid.setAttribute('src', url);
            })
        })

})
})

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  auth.signInWithPopup(provider)
}

const signOut = () => {
  auth.signOut()
}

logInBtn.onclick = signIn