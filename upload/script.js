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
    var files = document.getElementById("photo").files[0];

    //adding progress bar
    document.getElementById(
        "form"
    ).innerHTML += ` <progress value="0" id="progress" ></progress>`;

    //storing in fire storage
    let storageRef = firebase.storage().ref(`${name}/ ${files.name}`);
    let uploadTask = storageRef.put(files);
    const data = {
        Name: name,
        Email: email,
        Contact: contact,
        Address: address,
        URL: "",
    };

    //change value of progressbar
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            var percent = snapshot.bytesTransferred / snapshot.totalBytes;
            document.getElementById(`progress`).value = percent;
        },
        (err) => {
            console.log(err); //throw err
            document.getElementById("progress").classList.add("hidden");
            return;
        },
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                data.URL = url;
                storeindatabase(data);
            });
        }
    );

    // storing in firestore;

    const storeindatabase = (data) => {
        db.collection(state)
            .add(data)
            .then((docRef) => {
                alert("Data added successfully", docRef);
            })
            .catch((err) => {
                alert("Unsuccessful in adding Data, error: ", err);
            });
    };
};
