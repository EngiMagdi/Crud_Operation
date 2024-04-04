// login
var personEmail=document.getElementById("P-email");
var personPassword=document.getElementById("P-pass");
var SignInBtn=document.getElementById("signIn-btn");
var EmailError =document.querySelector('.EmailError');
var PassError =document.querySelector('.PassError');

function login(){
    if(personEmail.value=="" ||personEmail.value.includes('@')===false||personEmail.value.includes('.com')===false ){
        EmailError.classList.remove('hide');   
    }
    else if( personPassword.value==""){    
        PassError.classList.remove('hide');
}
else{
  window.open("home.html")
}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// sign up when sign up correctly
function thanksPage(){
    var prName=document.getElementById('P-name').value;
    var prEmail=document.getElementById('P-email').value;
     var prPhone=document.getElementById('P-phone').value; 
     var prPass=document.getElementById('P-pass').value;
     var submitErrorMsg=document.querySelector('.submitErrorMsg');
     if(prName!="" && prEmail!='' && prEmail.includes('@')===true && prEmail.includes('.com')===true && prPhone!='' &&  prPass!="" ){
       window.open("thanks.html")}
       else{
        submitErrorMsg.classList.remove("hide");
       }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// home

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// student list //table// student form
var StName=document.getElementById("student-Name");
var StEmail=document.getElementById("student-Email");
var StPhone=document.getElementById("student-Phone");
var StEnrollNumber=document.getElementById("student-EnrollNumber");
var StDateOfAdmission=document.getElementById("student-DateOfAdmission");
var AddBtn=document.getElementById("addBtn");
var studentContainer=[];
 initIndex=0;

//locAL storage
if(localStorage.getItem('studentList') != null){
    studentContainer=JSON.parse(localStorage.getItem('studentList'));
    //call  display function 
    display()
}
document.querySelector('.addNewStudent-btn').addEventListener('click',function(){window.open('addStudentForm.html')})

//  prevent user to add empty stydent
function preventEmptyStudent(){
    var emptyError =document.querySelector(".AddEmptyErrorMsg");
    if(StName.value!="" && StEmail.value!='' &&StEmail.value.includes('@')===true && StEmail.value.includes('.com')===true && StPhone.value!='' &&  StEnrollNumber.value!="" &&StDateOfAdmission.value!='' ){
        window.open("studentList.html")
    }
        else{
            emptyError.classList.remove("hide");
            document.querySelector(".addNewStudent-btn").addEventListener('click',function(e){e.preventDefault()})
            
        }
       

}



// add function 
function addStudent(){
    preventEmptyStudent()
    if( AddBtn.innerHTML==" Update Student"){
        AddBtn.innerHTML==" Add Student"
    
var users={
    Name: StName.value,
    Email:StEmail.value,
    Phone: StPhone.value,
    EnrollNumber: StEnrollNumber.value,
    DateOfAdmission:StDateOfAdmission.value,
    
}
studentContainer.splice(studentContainer,1,users )
    }
    else{
      
        var users={
            Name: StName.value,
            Email:StEmail.value,
            Phone: StPhone.value,
            EnrollNumber: StEnrollNumber.value,
            DateOfAdmission:StDateOfAdmission.value,       
        }  
        studentContainer.push(users);
    }
localStorage.setItem('studentList',JSON.stringify(studentContainer ))
display()
clear()
}



//  هخزن الداتا بتاعتي ف تابل function
function display(){
    var allUser=``;
    for(var i=0;i<studentContainer.length ;i++ ){
        allUser +=
        `<tr>
        <td >${studentContainer[i].Name}</td>
        <td >${studentContainer[i].Email}</td>
        <td >${studentContainer[i].Phone}</td>
        <td >${studentContainer[i].EnrollNumber}</td>
        <td >${studentContainer[i].DateOfAdmission}</td>

        <td><button id="updateBtn" class="btn m-2  " onclick='update(${i})'><i class="fa-solid fa-pen-to-square text-success text-xl  "></i></button></td>
        <td><button  id="deleteBtn" type=" button" class="btn btn-danger m-2 "  onclick='delet(${i})'><i class="fa-solid fa-trash-can text-danger text-xl "></i>
        </button></td>
      </tr>`
    }
    document.getElementById('StTableBody').innerHTML=allUser;
}

//  Delete function
function delet(index){
    studentContainer.splice(index,1)
    localStorage.setItem('studentList',JSON.stringify( studentContainer))
    display()
    clear()
}

// clear  function
function clear(){
    StName.value='';
    StEmail.value='';
    StPhone.value='';
    StEnrollNumber.value='';
    StDateOfAdmission.value='';
}
function returnValue(Index){
    StName.value=studentContainer[Index].Name;
    StEmail.value=studentContainer[Index].Email;
    StPhone.value= StEmail.value=studentContainer[Index].Phone;;
    StEnrollNumber.value= StEmail.value=studentContainer[Index].EnrollNumber;
    StDateOfAdmission.value= StEmail.value=studentContainer[Index].DateOfAdmission;
    AddBtn.innerHTML="Update Student";
    initIndex=Index;
}

// update function
function update(Index){
    window.open('addStudentForm.html');
    // مش شغاله
   
    returnValue(Index)

}
//  function search
function search(searchTxt){
    var allUser="";

    for( var i=0; i<studentContainer.length ;i++){
      if(studentContainer[i].Name.toLowerCase().includes(searchTxt.toLowerCase()) ){
        allUser +=
        `<tr>
        <td >${studentContainer[i].Name}</td>
        <td >${studentContainer[i].Email}</td>
        <td >${studentContainer[i].Phone}</td>
        <td >${studentContainer[i].EnrollNumber}</td>
        <td >${studentContainer[i].DateOfAdmission}</td>

        <td><button id="updateBtn" class="btn m-2  " onclick='update(${i})'><i class="fa-solid fa-pen-to-square text-success text-xl  pe-12"></i></button></td>
        <td><button type="button" class="btn btn-danger m-2 " onclick='delet(${i})'>Delete</button></td>
      </tr>`
      }
 }
 document.getElementById("tableBody").innerHTML=allUser;
}
// /////////////////////////////////////////////////////////////////////////////////////////
// sidebar
document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('bx-x')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });