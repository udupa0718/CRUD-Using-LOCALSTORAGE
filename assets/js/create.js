let formId = document.getElementById("userForm");

let fName = document.getElementById("name");
let femail = document.getElementById("email");
let fmobile = document.getElementById("mobile");

// to read data from local storage
let users = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : [];

// random Id
let genId = () => {
    return Math.floor(Math.random() * 10000);
};

formId.addEventListener("submit", async (e) => {
     e.preventDefault(); // avoid page refresh

     let data = {
        id: genId(),
        name: fName.value,
        email: femail.value,
        mobile: fmobile.value
    };
    console.log('new user =', data);
    createUser(data); // new user method call
});

// create new user 
function createUser(user) {
    let extEmail = users.find((item) => item.email === user.email);  // true -> return user object, false = nuull
    let extMobile = users.find((item) => item.mobile === user.mobile);
     
    if(extEmail) {
        window.alert(`${user.email} already exists.`);
    } else if(extMobile) {
        window.alert(`${user.mobile} already exists.`);
    } else {
        users.push(user);
        localStorage.setItem("usersData", JSON.stringify(users));
        alert("New user added successfully");
        window.location.href = "index.html";
    }
}