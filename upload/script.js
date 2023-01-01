//variables
//filling states with fetch
fetch("../state.json")
    .then((res) => res.json())
    .then((data) => {
        data.map((item) => {
            document.getElementById(
                "state"
            ).innerHTML += `<option value="${item}">${item}</option>`;
        });
    });

//prevent form to reload page
document.querySelector(".container").addEventListener("submit", (e) => {
    e.preventDefault();
});

// firebase initialize
const firebaseConfig = {
    apiKey: "AIzaSyCRX2RfoyEgTcxxE1iABlsF-nx4EIjeMGg",
    authDomain: "animaldonation-83efe.firebaseapp.com",
    projectId: "animaldonation-83efe",
    storageBucket: "animaldonation-83efe.appspot.com",
    messagingSenderId: "331565292523",
    appId: "1:331565292523:web:cf2fc61e5e4bf7ed80d7ae",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// SubmitHandler function
const clickHandler = () => {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var files = document.getElementById("photo").files;

    //storing in fire storage
    document.getElementById(
        "form"
    ).innerHTML += ` <progress value="0" id="progress" ></progress>`;

    for (var i of files) {
        let storageRef = firebase.storage().ref(`${name}/ ${i.name}`);
        let uploadTask = storageRef.put(i);
        var URL;
        //add upload progress bar

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                var percent = snapshot.bytesTransferred / snapshot.totalBytes;
                document.getElementById(`progress`).value = percent;
            },
            (err) => {
                console.log(err);
                document.getElementById("progress").classList.add("hidden");
                return;
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                    URL = url;
                });
            }
        );
    }

    // storing in firestore
    db.collection(state).add({
        Name: name,
    });
};
