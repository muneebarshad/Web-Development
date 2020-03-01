  $('#contact-form').validate ({
      //Check to see if user input matches what is required
      rules: {
        Name: {
            required: true,
            minlength: 2
        },
        Phone: {
          required: false,
          phoneUS: true
        },
        Email: {
            required: true,
            email: true,
        },
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

      submitHandler: function (form) {
        var subject="Customer Message";
        var contactName = $("input[name=Name]").val();
        var contactEmail = $("input[name=Email]").val();
        var contactPhone= $("input[name=Phone]").val();
        var message = $("#message").val();
        var br ="%0D%0A";
        // https://stackoverflow.com/questions/4768118/how-to-break-line-in-javascript
        var emailBody = "Cusomter Contact Information: " + br + br
        + "Contact Name: " + contactName + br
        + "Contact Email: " + contactEmail + br
        + "Contact Phone Number: " + contactPhone + br + br
        + "Message: " + message;

        window.location = 'mailto:' + "arsham14@mcmaster.ca" + '?subject=' + subject + '&body=' +   emailBody;;

      }

  });
