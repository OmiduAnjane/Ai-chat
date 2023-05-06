const chatInput = document.getElementById('chat-input');

const chatBody = document.getElementById('chat-body');

const sendButton = document.getElementById('send-button');

const apiUrl = 'https://api.brainshop.ai/get';

const botID = '<your-bot-id>';

const apiKey = '<your-api-key>';

function sendMessage() {

  const message = chatInput.value.trim();

  if (message === '') {

    return;

  }

  chatInput.value = '';

  const chatMessage = document.createElement('div');

  chatMessage.classList.add('chat-message');

  chatMessage.innerHTML

