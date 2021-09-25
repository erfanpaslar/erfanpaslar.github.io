botToken=""
chatId=""
var theUrl = "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + chatId
let response = document.getElementById("response")
let id = document.getElementById("id")
let messageContent = document.getElementById("content")
document.getElementById("send").addEventListener("click", async function () {
  var xmlHttp = new XMLHttpRequest();
  theUrl += "&text="+messageContent.value+"%0A%0Ainfo: "+id.value
  await xmlHttp.open("GET", theUrl, false); // false for synchronous request
  await xmlHttp.send( null );
  let res = JSON.parse(xmlHttp.responseText)
  if (res.ok) {
    response.innerHTML = "<p class='ok'>Message sent</p>"
    id.value=""
    messageContent.value=""
  } else {
    response.innerHTML = "<p class='error'>Sorry direct message is currently unavailable</p>"
  }
  setTimeout(() => {
    response.innerHTML =""
  },10000)
});