//  bu fonksiyon gönderilen mesajı ekrana işler
function sendMessage(){
    let message=document.getElementById("messageInput").value

    let messageContainer=document.getElementById("messageContainer")

   messageContainer.innerHTML += '<div class="d-flex justify-content-end mb-4"><div class="msg_cotainer_send">' + message 

   document.getElementById("messageInput").value=""
}

// enter tuşuna basınca mesaj göndermeyi etkinleştir

document.getElementById("messageInput").addEventListener("keydown",function(event){
    if(event.key==="Enter"){
        event.preventDefault()

        sendMessage()
    }

})

// localStorage.clear()