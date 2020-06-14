import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDUXKrEb5qPyMzzH-ZPtqfKlglVX9jfnTE",
    authDomain: "first-project-aea6b.firebaseapp.com",
    databaseURL: "https://first-project-aea6b.firebaseio.com",
    projectId: "first-project-aea6b",
    storageBucket: "first-project-aea6b.appspot.com",
    messagingSenderId: "973962554476",
    appId: "1:973962554476:web:af8aeb0592c4eb4c9d7c49",
    measurementId: "G-15JTK7L82R"
  };
  
  firebase.initializeApp(config);

  var ourDB = firebase.database();
  export function newfile(username,fileno,filename,nooffiles){
    if(filename===''){
filename="default";
    }
    ourDB.ref(username+'/'+fileno).set({
      filename:filename,
      text:""
        });
        ourDB.ref(username+'/nooffiles/').set({
          nooffiles:nooffiles
        })
  }
  export function updatetext(username,fileno,alltext){
      const wheretoupdate = ourDB.ref(username+'/'+fileno);
      const updates = {text:alltext};
      wheretoupdate.update(updates);
  }
export function deletefile(username,fileno,nooffiles){
  ourDB.ref(username+'/'+fileno).remove()
  ourDB.ref(username+'/'+'nooffiles').set({
    nooffiles:nooffiles
  })
}
export function fetchtfilename1(username,callback){
  ourDB.ref(username+'/1/'+'filename/').on('value',(snapshot) => {
    const allfilenamefetch = snapshot.val();
    callback(allfilenamefetch);
  });
}
export function fetchtfilename2(username,callback){
  ourDB.ref(username+'/'+2+'/'+'filename').on('value',(snapshot) => {
    const allfilenamefetch = snapshot.val();
    callback(allfilenamefetch);
  });
}
export function fetchtfilename3(username,callback){
  ourDB.ref(username+'/'+3+'/'+'filename').on('value',(snapshot) => {
    var allfilenamefetch = snapshot.val();
    callback(allfilenamefetch);
  });
}
export function fetchtfilename4(username,callback){
  ourDB.ref(username+'/'+4+'/'+'filename').on('value',(snapshot) => {
    const allfilenamefetch = snapshot.val();
    callback(allfilenamefetch);
  });
}
export function fetchtfilename5(username,callback){
  ourDB.ref(username+'/'+5+'/'+'filename').on('value',(snapshot) => {
    const allfilenamefetch = snapshot.val();
    callback(allfilenamefetch);
  });
}
export function fetchnooffiles(username,callback){
  ourDB.ref(username+'/'+'nooffiles/nooffiles').on('value',(snapshot) => {
    const fetcheddnooffiles = snapshot.val();
    callback(fetcheddnooffiles);
});
}
export function fetchtext(username,fileno,callback){
  ourDB.ref(username+'/'+fileno+'/'+'text/').on('value',(snapshot) => {
    const alltextfetch = snapshot.val();
    callback(alltextfetch);
  });
}
export function signup(username,password,nooftimes){
  if(nooftimes===0){
  ourDB.ref(username+'/').set({
  password:password
})
}
}
export function checksignin(username,callback){
  ourDB.ref(username+'/password').on('value',(snapshot) => {
    const password = snapshot.val()
    callback(password);
  });
}

