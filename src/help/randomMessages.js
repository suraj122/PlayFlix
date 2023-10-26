function generateRandomMessage() {
  var messages = [
    "Hello, world!",
    "I'm a random message.",
    "How are you today?",
    "What's new?",
    "I'm feeling good.",
    "I'm excited for the future.",
    "I'm grateful for all the good things in my life.",
    "I'm looking forward to today.",
    "I'm going to make today a great day.",
    "I'm going to do something amazing today.",
  ];

  var randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

export default generateRandomMessage;
