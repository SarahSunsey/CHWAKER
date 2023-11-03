const sendChatBtn = document.querySelector(".message-box button");
const chatInput = document.querySelector(".message-box textarea");
let userMessage;

const createChatMss = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.textContent=message;
    const senderContainer = document.querySelector(".sender");

// Append the chatLi to the senderContainer
    senderContainer.appendChild(chatLi);
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage)return;
    createChatMss(userMessage,"sender")
}

sendChatBtn.addEventListener("click", handleChat);
