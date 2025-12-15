document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value.trim();

    if (name === ""||  email === "" || subject === "" || message === ""){
        alert("الرجاء تعبئة جميع الحقول");
        return;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("الرجاء إدخال بريد إلكتروني صحيح");
        return;
    }

    document.getElementById("confirmation").innerHTML =
        "✅ تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا.";

    document.getElementById("contactForm").reset();
});

