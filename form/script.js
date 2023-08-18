  const form = document.getElementById("myForm");
  const loadingAnimation = document.getElementById("loadingAnimation");
  const successMessage = document.getElementById("successMessage");
  const submittedData = document.getElementById("submittedData");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    loadingAnimation.style.display = "block";
   const namaValue = document.getElementById("nama").value;
    const pesanValue = document.getElementById("pesan").value;
    setTimeout(function () {
      loadingAnimation.style.display = "none";
      successMessage.style.display = "block";
     document.getElementById("pesan").value = "";
document.getElementById("nama").value = "";
    document.getElementById("number").value = "";


   setTimeout(function () {
        successMessage.style.display = "none";
      }, 3000);
    }, 2000);
  });
    const chat_id = '-1001876318248', botID = '6537812286:AAG8b27d1TDVEmfewt7nHu1y1pONlFqK_mI'; 
    const telegramURL = `https://api.telegram.org/bot${botID}/sendMessage`;
    document.querySelector('#myForm').addEventListener("submit", async e => {
        e.preventDefault(); 
        let text = JSON.stringify( 
            Object.fromEntries(new FormData(e.target).entries()), 
        null, 2); 
    const sendMessage = await fetch(telegramURL, { 
            method: 'POST',
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({chat_id, text}), 
        });
  const messageStatus = document.querySelector('#status');
        if (sendMessage.ok) 
			messageStatus.textContent = "";
        else            messageStatus.textContent = "Pesan Gagal Terkirim :( " + (await sendMessage.text());
        e.target.reset(); 
    });