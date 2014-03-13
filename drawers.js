$(document).ready(function() {
      
      $("#career_drawer").hide();
      $("#education_drawer").hide();
      $("#contact_drawer").hide();
      
      $("#button_about_me").click(function() {
         if ($("#about_me_drawer").is(":visible")) {
         }
         else {
         	closeDrawer();
         	$("#about_me_drawer").delay(1000).slideDown();
         }
      });
      $("#button_education").click(function() {
      	if ($("#education_drawer").is(":visible")) {
      	}
      	else{
	         closeDrawer();
   	      $("#education_drawer").delay(1000).slideDown();
      	}
      });
      $("#button_career").click(function() {
      	if ($("#career_drawer").is(":visible")) {
      	}
      	else {
         	closeDrawer();
         	$("#career_drawer").delay(1000).slideDown();
         }
      });
      $("#button_contact").click(function() {
      	if ($("#contact_drawer").is(":visible")) {
      	}
      	else{      	
      		closeDrawer();
	         $("#contact_drawer").delay(1000).slideDown();
     		}
      });
});

function closeDrawer() {
   
   if ($("#about_me_drawer").is(":visible")) {
      $("#about_me_drawer").slideUp();
   }
   else if ($("#career_drawer").is(":visible")) {
      $("#career_drawer").slideUp();
   }
   else if ($("#education_drawer").is(":visible")) {
      $("#education_drawer").slideUp();
   }
   else if ($("#contact_drawer").is(":visible")) {
      $("#contact_drawer").slideUp();
   }
   else {
      window.clearInterval(this.tick);
   }
}
