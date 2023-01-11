// All variables
const body = document.querySelector("body");
let present = {
    form: true,
    container: false,
};

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

const search = () => {
    const value = document.getElementById("search").value;
    let allobjects;
    document
        .getElementsByTagName("body")[0]
        .removeChild(document.querySelector(".container"));
    document
        .getElementsByTagName("body")[0]
        .removeChild(document.querySelector(".svgs"));
    present.form = false;
    present.container = true;
    const docRef = db.collection(value);
    let output = `<div class="container2">`;
    const post = (obj) => {
        return `<div class="post">
                <img src="${obj.URL}" alt="no photo" id="photo" />
                <div class="hidden" id="name">Name : ${obj.Name}</div>
                <div class="hidden" id="info">
                    <div id="email">
                        <b>Email:</b> ${obj.Email}<br />
                        <b>Contact:</b><br />
                        ${obj.Contact}
                    </div>
                    <div id="address">
                        <b>Address:</b><br />
                        ${obj.Address}
                    </div>
                </div>
                <button id="change" onclick="togglephoto()">View photo</button>
            </div>`;
    };

    docRef
        .get()
        .then((doc) => {
            allobjects = doc.docs.map((items) => items.data());
            allobjects.map((item) => {
                output += post(item);
            });
            output += `</div>`;
            body.innerHTML += output;
            document.getElementById("photo").addEventListener("click", () => {
                document.getElementById("photo").classList.add("hidden");
                document.getElementById("name").classList.remove("hidden");
                document.getElementById("info").classList.remove("hidden");
            });
        })
        .catch((err) => {
            console.log("error:", err);
        });
};

const nav = () => {
    return `<div class="nav">
            <li>
                <a href="../index.html"
                    ><i class="fa fa-home" aria-hidden="true"></i
                ></a>
            </li>
            <li>
                <a onclick="changecontent()"><i class="fa fa-search" aria-hidden="true"></i></a>
            </li>
            <li>
                <a href="../upload/index.html"
                    ><i class="fa fa-user" aria-hidden="true"></i
                ></a>
            </li>
            <li>
                <a href="#"><i class="fa fa-phone" aria-hidden="true"></i></a>
            </li>
        </div>`;
};

const form = () => {
    return `<div class="container">
            <input id="search" type="text" placeholder="Search for the State" />
            <div class="button">
                <button id="btn" onclick="search()"><i class="fa-solid fa-search"></i></button>
            </div>
        </div>  
        <div class="svgs"><img src="post.svg" /></div>`;
};
body.innerHTML += nav();
body.innerHTML += form();

const togglephoto = () => {
    document.getElementById("photo").classList.remove("hidden");
    document.getElementById("name").classList.add("hidden");
    document.getElementById("info").classList.add("hidden");
};
