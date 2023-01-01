const body = document.querySelector("body");

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
                <button id="btn"><i class="fa-solid fa-search"></i></button>
            </div>
        </div>  
        <div class="post"><img src="post.svg" /></div>`;
};
body.innerHTML += nav();
// document.querySelector("body").innerHTML = form;

// document.getElementById("btn").addEventListener("click", () => {});

// document.getElementById("search").addEventListener("change", (event) => {});

document.getElementById("photo").addEventListener("click", () => {
    document.getElementById("name").classList.remove("hidden");
    document.getElementById("email").classList.remove("hidden");
    document.getElementById("contact").classList.remove("hidden");
    document.getElementById("address").classList.remove("hidden");
    document.getElementById("photo").classList.add("hidden");
});
