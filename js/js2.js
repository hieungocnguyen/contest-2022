const signupUsername = document.getElementById('signup');
const signupPasswork = document.getElementById('signup1');
const signupConfirm = document.getElementById('signup2');
const loginUsername = document.getElementById('signup7');
const loginPasswork = document.getElementById('signup8');
const textBottom = document.querySelector('.text-bottom');
const blackBox = document.querySelector('.black-box')

var testObject = []
var n = 0
testObject.push({'id': 1, 'username': 'admin', 'password': 'admin123', 'active': true})
localStorage.setItem('user', JSON.stringify(testObject))
var n1 = JSON.parse(localStorage.getItem('user'))
console.log(n1[0].username)
// var n2 = (JSON.parse(n1.id))
// console.log(n2[0])
// var getId = JSON.parse(localStorage.getItem('id'))
// var getObject = JSON.parse(localStorage.getItem('user', (testObject)))

function moveBlackBox() {
    blackBox.classList.add('move-black-box')

}

function moveBlackBox2() {
    blackBox.classList.remove('move-black-box')
}

function signUpButton() {
    // event.preventDefault();
    n++
    if (signupUsername.value != null && signupPasswork.value != null && signupConfirm != null &&
        signupUsername.value != '' && signupPasswork.value != '' && signupConfirm != '' ) {
        if (signupPasswork.value == signupConfirm.value) {
            testObject.push({'id': n,'username: ': signupUsername.value, 'password: ': signupPasswork.value, 'acitve': true})
            localStorage.setItem('user', JSON.stringify(testObject))
        }
        else{
            alert("Wrong passwork")
        }
    }    
    else {
        alert("Enter username or passwork")
    }   
}

const good = document.getElementById('good');


function getVal() {
    if (loginUsername.value !== null && loginPasswork.value !== null) {
        if (loginUsername.value == n1[0].username && loginPasswork.value == n1[0].password) {
            loginUsername.value = ""
            loginPasswork.value = ""
            good.href = 'main.html'
        }
    }
    else {
        console.log('null');
    }
  }

