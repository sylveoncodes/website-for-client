$(document).ready(function() {

// When product is ready to be purchased code
  // $("#quantity").hide();
  // $("#quantity_label").hide();
  // var select = false;
  // $("#option").click(function (){
  //   if (select){
  //     $("#quantity").hide();
  //     $("#quantity_label").hide();
  //     $("#quantityError").addClass("hidden");
  //     $("#quantity").min = 0;
  //     $("#quantity").value = 0;
  //     $("#quantity").required = false;
  //     select = false;
  //   }
  //   else{
  //     $("#quantity").show();
  //     $("#quantity_label").show();
  //     $("#quantity").min = 0;
  //     $("#quantity").value = 0;
  //     $("#quantity").required=true;
  //     select=true;
  //   }
  // });


  $("#contact-form").on("submit", function() {
      // This variable is true when the form is valid
      var formValid = true;
      // storing name input to check validity
      var nameIsValid = $("#name").prop("validity").valid;
      // storing email input to check validity
      var emailIsValid = $("#email-input").prop("validity").valid;
      // storing textarea input to check that it was filled out
      // var messageIsValid = $("#message").prop("validity").valid;
      // storing subject selection(s) to check validity of at least one selected
      // var quantityIsValid = $("#quantity").prop("validity").valid;


      // If name is valid hide error
      if (nameIsValid) {
        $("#nameError").addClass("hidden");
        $("#name").removeClass("validityBox");
      }
      // If name is missing show error
      else {
        formValid = false;
        $("#nameError").removeClass("hidden");
        $("#name").addClass("validityBox");
      }

      // If email is valid hide error
      if (emailIsValid) {
        $("#emailError").addClass("hidden");
        $("#email-input").removeClass("validityBox");
      }
      // If email is invalid/missing show error
      else {
        formValid = false;
        $("#emailError").removeClass("hidden");
        $("#email-input").addClass("validityBox");
      }

      // // If quantity is valid hide message
      // if (quantityIsValid) {
      //   $("#quantityError").addClass("hidden");
      //   $("#quantity").removeClass("validityBox");
      // }
      // // If quantity is invalid show error
      // else {
      //   formValid = false;
      //   $("#quantityError").removeClass("hidden");
      //   $("#quantity").addClass("validityBox");
      // }

      // If message field is filled out hide error
      // if (messageIsValid) {
      //   $("#messageError").addClass("hidden");
      //   $("#message").removeClass("validityBox");
      // }
      // // If message is missing show error
      // else {
      //   formValid = false;
      //   $("#messageError").removeClass("hidden");
      //   $("#message").addClass("validityBox");
      // }

      // If form is valid hide error
      if (formValid) {
        $("#main-feedback").addClass("hidden");
      }
      // If form is invalid show error
      else {
        formValid = false;
        $("#main-feedback").removeClass("hidden");
      }

      // If the form is valid, we allow the user to submit (return true)
      // If the form is invalid, we prevent submission (return false)
      return formValid;

    });





  });
