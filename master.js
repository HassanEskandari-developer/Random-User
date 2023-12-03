let _pic = document.getElementById('pic')
let _title = document.getElementById('title')
let _text = document.getElementById('text')
let _name = document.getElementById('name')
let _email = document.getElementById('email')
let _age = document.getElementById('age')
let _map = document.getElementById('map')
let _phone = document.getElementById('phone')
let _username = document.getElementById('username')
let _button = document.getElementById('random')

function random(){
    fetch('https://randomuser.me/api/?results=30')
    .then(res => res.json())
    .then(mydata =>{
        mydata.results.map((val) =>{
            _pic.setAttribute('src' , val.picture.large)
            _title.innerHTML = 'My name is'
            _text.innerHTML= val.name.first + ' ' + val.name.last
            show(val.name.first , val.name.last , val.email , val.dob.age , val.location.street.number , val.location.street.name , val.phone , val.login.username)
        })
    })
}random()

function show(first , last , email , age , streetNumber , streetName , phone , userName){
    _name.addEventListener('click' , ()=>{
        _title.innerHTML = 'My name is'
        _text.innerHTML = first + ' ' + last
    })
    _email.addEventListener('click' , ()=>{
        _title.innerHTML = 'My email is'
        _text.innerHTML = email
    })
    _age.addEventListener('click' , ()=>{
        _title.innerHTML = 'My age is'
        _text.innerHTML = age
    })
    _map.addEventListener('click' , ()=>{
        _title.innerHTML = 'My street is'
        _text.innerHTML = streetNumber + " " + streetName
    })
    _phone.addEventListener('click' , ()=>{
        _title.innerHTML = 'My phone is'
        _text.innerHTML = phone
    })
    _username.addEventListener('click' , ()=>{
        _title.innerHTML = 'My username is'
        _text.innerHTML = userName
    })
}   

_button.addEventListener('click' , ()=>{
    random()
})