var login = document.getElementById("login")
function Login(){
    document.getElementById("signin").style.display = "block"
    document.getElementById("signup").style.display = "none"
    document.getElementById("signinadmin").style.display = "none"
    // document.getElementById("signup").style.display = "none"
    // document.getElementById("admin-login").style.display = "none"
}

function Viewreports(){
    document.getElementById("corruption-cases").style.display = "block"
    document.getElementById("reportform").style.display = "none" 
}
function Makereport(){
    document.getElementById("reportform").style.display = "block"
    document.getElementById("corruption-cases").style.display = "none" 
}
function AdminLogin(){
    document.getElementById("login").style.display = "none"
    document.getElementById("messag").style.display = "none"
    document.getElementById("signup").style.display = "none"
    document.getElementById("admin-login").style.display = "block"   
}
function Signup(){
    document.getElementById("signin").style.display = "none"
    document.getElementById("signup").style.display = "block"
    document.getElementById("admin-login").style.display = "none"
    // document.getElementById("signin").style.display = "block"

    
}
function edit_intervention(){
    document.getElementById("editintervation").style.display = "block"
    document.getElementById("submit").style.display = "block"
    var edit = document.getElementById("editintervation").innerHTML
    document.getElementById("intervantion").innerHTML= edit
    // var edit = prompt ("please edit your intervation")
    // if (edit != null){

    }
function Changestatus(){
    document.getElementById("changestatus").style.display = "block"
    document.getElementById("submit").style.display = "block"
    var edit = document.getElementById("changestatus").value
    document.getElementById("currentstatus").innerHTML = edit
}

function edit_geographical(){
    document.getElementById("editlocation").style.display = "block"
    document.getElementById("submits").style.display = "block"
    var edit = document.getElementById("editintervation").innerHTML
    document.getElementById("intervantion").innerHTML= edit   
}

function delete_intervantion(){
    // if (confirm("do you really want to delete this intervantion record")){
    //     var element =document.getElementById("intervantion");
    //     element.parentNode.removeChild(element)
    document.getElementById("intervantion").style.display = "none"  

}




 function Bribe(){    
    document.getElementById("bribedetail").style.display = "block";
    document.getElementById("embezzlement").style.display = "none" 
    // document.getElementsById("corruption-cases").style.display = "none"
 }
 function Embezzle(){
    document.getElementById("bribedetail").style.display = "none"
    document.getElementById("embezzlement").style.display = "block"
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

