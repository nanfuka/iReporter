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

 function Bribe(){    
    document.getElementById("embezzmler").style.display = "none";
    // document.getElementById("embezkmler").style.display = "none" 
    // document.getElementsById("corruption-cases").style.display = "none"
 }
 function Embezzle(){
    document.getElementById("bribnery").style.display = "none"
    document.getElementById("embezkmler").style.display = "block"
    // document.getElementById("extortion").style.display = "none" 
  

 }
 function Status(){
    var edit = prompt ("please edit edit the status of the Report")
    if (edit != null){
        document.getElementById("status").innerHTML= edit
    }
}
 
//  function Extort(){
//     document.getElementById("bribnery").style.display = "none"
//     document.getElementById("embezzmler").style.display = "none";
//     document.getElementById("extortion").style.display = "block"   
//  }
//  function deletes_intervantion(){
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

