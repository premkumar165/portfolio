// CONTACT FORM
  $('#contact-form').submit(function(e) {
    e.preventDefault();

      $.ajax({
          url: "https://formspree.io/pkvyda@uwaterloo.ca",
          method: "POST",
          data: { message: $('form').serialize() },
          dataType: "json"
      }).done(function(response) {
          $('#success').addClass('expand');
          $('#contact-form').find("input[type=text], input[type=email], textarea").val("");
      });
  });

  $('#close').click(function() {
    $('#success').removeClass('expand');
  })

});