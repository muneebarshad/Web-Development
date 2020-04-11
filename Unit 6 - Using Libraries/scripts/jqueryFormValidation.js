// https://www.htmlgoodies.com/tutorials/forms/article.php/3895196
//Plugin ref: https://jqueryvalidation.org/
  $('#contact-form').validate ({
      //Check to see if user input matches what is required
      rules: {
        // Name should be required with minlength of 2
        Name: {
            required: true,
            minlength: 2
        },
        // Phone field is optional with US format phone number
        Phone: {
          required: false,
          phoneUS: true
        },
        // Email field required with valid email
        Email: {
            required: true,
            email: true,
        },
        // Message field required with minlength 5
        Message: {
            required: true,
            minlength:5
        },
      },

      //Custom messages appear if user input is incorrect
      messages: {
        Name: {
            required: 'Please enter your name',
            minlength: 'Your name must be at least 2 characters long'
        },
        Phone: {
            required: 'Please enter conatct number',
            phoneUS: 'Please eneter a valid US phone number',
        },
        Email: {
            required: 'Please enter an email address',
            email: 'Please enter a valid email address',
        },
        Message: {
            required: 'Please enter a message',
            minlength: 'Your name must be at least 5 characters long'
        },
      },

      // After submit button is clicked
      submitHandler: function (form) {
        // https://stackoverflow.com/questions/26104378/jquery-mailto-with-anchor-element/26105504
        // MailTo config email with email body and subject
        var subject="Customer Message";
        var contactName = $("input[name=Name]").val();
        var contactEmail = $("input[name=Email]").val();
        var contactPhone= $("input[name=Phone]").val();
        var message = $("#message").val();
        var br ="%0D%0A";
        // https://stackoverflow.com/questions/4768118/how-to-break-line-in-javascript
        var emailBody = "Customer Contact Information: " + br + br
        + "Contact Name: " + contactName + br
        + "Contact Email: " + contactEmail + br
        + "Contact Phone Number: " + contactPhone + br + br
        + "Message: " + message;

        // action: mailTo method:POST
        window.location = 'mailto:' + "arsham14@mcmaster.ca" + '?subject=' + subject + '&body=' +   emailBody;;

      }

  });
