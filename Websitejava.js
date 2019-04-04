//test alert for if you dont think the script is working
// alert("The javascript works")



 //$("button").on("click", function(){
   //alert("Are you sure you wish to submit?")
 //});

 // checkConfirm = confirm("Are you sure you wish to submit?");
 // if(!checkConfirm){
 //   $("button").on("click", function(){
 //     alert("Are you sure you wish to submit?")
 //   });
 //     window.close();


$("button").click(function() {
    var isGood=confirm('Are you sure you wish to submit?');
      if (isGood==true)
        {
          alert("This is the if bit");
          window.location.href="index.html";
      }
      else
        {
          alert("This is the else bit");
          window.location.href="asia.html";
      }
  
});

// function confirmation(){
//    var answer=confirm("Are you sure you want to cancel this record?");
//    if (answer==true)
//      {
//      gsftSubmit(null, g_form.getFormElement(), 'cancel_change'); //MUST call the 'Action name' set in this UI Action
//    }
//    else
//      {
//      return false;
//    }
// }
// if(typeof window == 'undefined')
//   {
//   current.state = 8;
//   current.update();
//   action.WhatNextForm.html(current);
//   gs.addInfoMessage('The current change request has been cancelled.');
// }
