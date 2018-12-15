var login = document.getElementById("login")
function Login(){
    document.getElementById("login").style.display = "block"
    document.getElementById("messag").style.display = "none"
    document.getElementById("signup").style.display = "none"
}
function Signup(){
    document.getElementById("signup").style.display = "block"
    document.getElementById("messag").style.display = "none"
    document.getElementById("login").style.display = "none"
}
function edit_intervention(){
    var edit = prompt ("please edit your intervation")
    if (edit != null){
        document.getElementById("intervantion").innerHTML= edit
    }
}
function delete_intervantion(){
    if (confirm("do you really want to delete this intervantion record")){
        var element =document.getElementById("intervantion");
        element.parentNode.removeChild(element)
    }


}

// function deletes_intervantion(){
//     if (confirm("do you really want to delete this intervantion record")){
//         var element =document.getElementById("intervantions");
//         element.parentNode.removeChild(element)
//     }


// }
// function edits_intervention(){
//     var edit = prompt ("please edit your intervation")
//     if (edit != null){
//         document.getElementById("intervantions").innerHTML= edit
//     }
// }
 function Bribe(){
    document.getElementById("bribery").style.display = "block"
    document.getElementById("embezzler").style.display = "none"

 }
 function Embezzle(){
    document.getElementById("embezzler").style.display = "block"
//     document.getElementById("bribery").style.display = "none"
  

 }

