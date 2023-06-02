
// Add event listener to form submission
function sendRequest() {
  // Retrieve form data
  var firstName = document.getElementById('first-name').value;
  var middleName = document.getElementById('middle-name').value;
  var lastName = document.getElementById('last-name').value;
  var dateOfBirth = document.getElementById('date-preview').value;
  var studentId = document.getElementById('student-id').value;
  var streetAddress = document.getElementById('street-preview').value;
  var city = document.getElementById('city-preview').value;
  var state = document.getElementById('state-preview').value;
  var country = document.getElementById('country-preview').value;
  var zipCode = document.getElementById('zipcode-preview').value;
  var email = document.getElementById('email-preview').value;
  var contact = document.getElementById('blank').value;
  var course = document.getElementById('course-preview').value;
  var lv = document.getElementById('lv-preview').value;
  var la = document.getElementById('la-preview').value;
  var dateOfStart = document.getElementById('date-preview-two').value;
  var none = document.getElementById('none').value;
  var comment = document.getElementById('comment').value;

  // Check if any of the required fields are empty
  if (
    firstName === '' ||
    middleName === '' ||
    lastName === '' ||
    dateOfBirth === '' ||
    studentId === '' ||
    streetAddress === '' ||
    city === '' ||
    state === '' ||
    country === '' ||
    zipCode === '' ||
    email === '' ||
    contact === '' ||
    course === '' ||
    lv === '' ||
    la === '' ||
    dateOfStart === '' ||
    none === '' ||
    comment === ''
  ) {
    // Show a pop-up message indicating the required fields are empty
    alert('Ensure to fill all fields, as they are mandatory to this registration process.');
    return; // Prevent form submission
  }else{
    alert('Request Sent!')
  }

  window.location.href = "preview.html";

  
  // Create an object to store the form data
  var formData = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    studentId: studentId,
    streetAddress: streetAddress,
    city: city,
    state: state,
    country: country,
    zipCode: zipCode,
    email: email,
    contact: contact,
    course: course,
    lv: lv,
    la: la,
    dateOfStart: dateOfStart,
    none: none,
    comment: comment
  };

  // Store the form data in local storage
  localStorage.setItem('formData', JSON.stringify(formData));
}

// Retrieve the data from local storage
var storedData = localStorage.getItem('formData');
if (storedData) {
  var formData = JSON.parse(storedData);

  // Populate the form fields with the retrieved data
  document.getElementById('another-first-name').value = formData.firstName;
  document.getElementById('another-middle-name').value = formData.middleName;
  document.getElementById('another-last-name').value = formData.lastName;
  document.getElementById('another-date-preview').value = formData.dateOfBirth;
  document.getElementById('another-student-id').value = formData.studentId;
  document.getElementById('another-street-preview').value = formData.streetAddress;
  document.getElementById('another-city-preview').value = formData.city;
  document.getElementById('another-state-preview').value = formData.state;
  document.getElementById('another-country-preview').value = formData.country;
  document.getElementById('another-zipcode-preview').value = formData.zipCode;
  document.getElementById('another-email-preview').value = formData.email;
  document.getElementById('another-blank').value = formData.contact;
  document.getElementById('another-course-preview').value = formData.course;
  document.getElementById('another-lv-preview').value = formData.lv;
  document.getElementById('another-la-preview').value = formData.la;
  document.getElementById('another-date-preview-two').value = formData.dateOfStart;
  document.getElementById('another-none').value = formData.none;
  document.getElementById('another-comment').value = formData.comment;
}