$(document).ready(function(){
 
  $('form#mcsubscribe')
			.bind("ajax:beforeSend", function(evt, xhr, settings){
      	var $divResponse = $('div#response');
 
      // Update the text of the submit button to let the user know stuff is happening.
      // But first, store the original text of the submit button, so it can be restored when the request is finished.
      $divResponse.data( 'origText', $divResponse.text() );
      $divResponse.text( "Adding Email...." );
 
    })

		// Returns response after success
    .bind("ajax:success", function(evt, data, status, xhr){
      var $form = $(this);
       var $divResponse = $('div#response');
 
      // Blanks fields and removes messages so it can be used immediately again.
      $form.find('input[type="email"]').val("");
      $divResponse.html(data.message);
    })
    .bind('ajax:complete', function(evt, xhr, status){
      var $divResponse = $('div#response');
    })
    .bind("ajax:error", function(evt, xhr, status, error){
       var $divResponse = $('div#response'),
          errors,
          errorText,
      errorList;
 
      try {
        // error messages
        errors = $.parseJSON(xhr.responseText);
      } catch(err) {
        // this is the generic error message for non json errors (like a HTTP error, eg, 500).
        errors = {message: "Please reload the page and try again"};
      }
 
      // makes an unordered list of json errors
      errorText = "There were errors with the submission. Please reload the page and try again.";
      errorList = "<ul>"
      for ( error in errors ) {
        errorList += "<li>" + error + ': ' + errors[error] + "</li> ";
      }
 
      errorList += "</ul>";
 
      // puts above error text into the divResponse
      $divResponse.html(errorText);
    });
 
});