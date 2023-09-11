let formId = document.getElementById("userForm");

let fName = document.getElementById("name");
let femail = document.getElementById("email");
let fmobile = document.getElementById("mobile");


// read ref id from url query
const query = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParam,prop) => searchParam.get(prop)
});
    console.log('query params =', query.id);

    // read data from localstorage
let users = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : [];


// submit handler
formId.addEventListener("submit", async (event) => {
    event.preventDefault();
    let data = {
        id: Number(query.id),
        name: fName.value,
        email: femail.value,
        mobile: fmobile.value
    };
    console.log('updated user =', data);
    updateData(data);
});


// update logic
const updateData = async (data) => {
    const index = users.findIndex(item => item.id == data.id);
        console.log('index =', index);
    users.splice(index,1,data);
    localStorage.setItem("usersData",JSON.stringify(users));
    alert("User info updated successfully");
    window.location.href = "index.html";
};


(function (){
// find single user info
let single = users.find((item) => item.id == query.id);
console.log('single =', single); 

fName.value = single.name;
femail.value = single.email;
fmobile.value = single.mobile;

})()