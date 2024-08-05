$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

const myBtn = document.getElementById('button');

myBtn.addEventListener('click', async function(event) {
  event.preventDefault();

  console.log("button pressed");

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const topic = document.getElementById('topic').value;
  const message = document.getElementById('message').value;

  if (name && email && topic && message) {
    myBtn.innerText = 'Sending...';
    myBtn.disabled = true;

    const serviceID = 'default_service';
    const templateID = 'template_qs9em36';

    const formData = {
      from_name: name,
      email_id: email,
      subject: topic,
      message: message
    };

    try {
      await emailjs.send(serviceID, templateID, formData);
      alert('Sent!');
      document.getElementById('form').reset();
    } catch (err) {
      alert(JSON.stringify(err));
    } finally {
      myBtn.innerText = 'Send message';
      myBtn.disabled = false; 
    }
  }
});

function myresume() {
  document.getElementById("alert2").style.visibility = "visible";
}

document.addEventListener('DOMContentLoaded', function(){
  var options = {
      strings: ["a Undergrad Student in CSE(CYS)", "into Web Development", "into Full Stack Development", "into Cyber Security"],
      typeSpeed: 30,
      backSpeed: 10,
      backDelay: 2000,
      loop: true
  };
  var typed = new Typed("#typed-output", options);
});