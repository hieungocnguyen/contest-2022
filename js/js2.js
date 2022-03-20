const signupUsername = document.getElementById('signup');
const signupPasswork = document.getElementById('signup1');
const signupConfirm = document.getElementById('signup2');
const loginUsername = document.getElementById('signup7');
const loginPasswork = document.getElementById('signup8');
const textBottom = document.querySelector('.text-bottom');
const blackBox = document.querySelector('.black-box')

let testObject = []
let n = 0
testObject.push({'id': 1, 'username': 'admin', 'password': 'admin123', 'active': true})
localStorage.setItem('user', JSON.stringify(testObject))
let n1 = JSON.parse(localStorage.getItem('user'))
console.log(n1[0])

// const users = JSON.parse(localStorage.getItem("user") || "[]");
// users.forEach(function(user, index) {
//     console.log("[" + index + "]: " + user.id);
// });
// console.log(users)



function moveBlackBox() {
    blackBox.classList.add('move-black-box')

}

function moveBlackBox2() {
    blackBox.classList.remove('move-black-box')
}

const hello2 = document.getElementById('hello2')
hello2.addEventListener("click", () => {
    n++
    if (signupUsername.value != null && signupPasswork.value != null && signupConfirm != null &&
        signupUsername.value != '' && signupPasswork.value != '' && signupConfirm != '' ) {
        if (signupPasswork.value == signupConfirm.value) {
            testObject.push({'id': n, 'username': signupUsername.value.toString(), 'password': signupPasswork.value.toString(), 'active': true})
            localStorage.setItem("user", JSON.stringify(testObject))
            signupConfirm.value = ""
            signupPasswork.value = ""
            signupUsername.value = ""
            alert("Tao tai khoan thanh cong")
        }
        else{
            alert("Wrong passwork")
        }
    }    
    else {
        alert("Enter username or passwork")
    }   
})
function signUpButton() {
    // n++
    // if (signupUsername.value != null && signupPasswork.value != null && signupConfirm != null &&
    //     signupUsername.value != '' && signupPasswork.value != '' && signupConfirm != '' ) {
    //     if (signupPasswork.value == signupConfirm.value) {
    //         testObject.push({'id': n, 'username': signupUsername.value.toString(), 'password': signupPasswork.value.toString(), 'active': true})
    //         localStorage.setItem("user", JSON.stringify(testObject))
    //         signupConfirm.value = ""
    //         signupPasswork.value = ""
    //         signupUsername.value = ""
    //         alert("Tao tai khoan thanh cong")
    //     }
    //     else{
    //         alert("Wrong passwork")
    //     }
    // }    
    // else {
    //     alert("Enter username or passwork")
    // }   
}

const good = document.getElementById('good');



function getVal() {
    var abc = JSON.parse(localStorage.getItem('user'))
    console.log(abc)
    if (loginUsername.value !== null && loginPasswork.value !== null) {
        // if (loginUsername.value == abc[0].username && loginPasswork.value == abc[0].password) {
        //     loginUsername.value = ""
        //     loginPasswork.value = ""
        //     good.href = 'main.html'
        // }
        abc.forEach(function(user, index) {
            // index = index+1
            if (loginUsername.value == user.username && loginPasswork.value == user.password) {
                // loginUsername.value = ""
                // loginPasswork.value = ""
                good.href = 'main.html'
                console.log("[" + index + "]: " + user.username);
            } 
            else {
                console.log(2)
            }
        })
    }
    else {
        console.log('null');
    }
  }

