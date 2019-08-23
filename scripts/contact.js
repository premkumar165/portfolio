// CONTACT FORM
function submit()
{
var $form = $('form#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbyUwOEc_t11kcVMx2V1Jlnh09kGEn62vUYqMnFr00T1nTZjZPQ-/exec'

$('#submit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
	alert(Your message was sent successfully. Thanks!)
  );
})
};