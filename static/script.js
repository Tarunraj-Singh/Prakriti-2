
// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");
// const chatbox = document.querySelector(".chatbox");

// let userMessage;

// // Define questions and options
// const questions = [
//     {
//         question: "Hi How can I help you?",
//         options: ["Know your prakruti"],
//       },
//   {
//     question: "What is your body frame like?",
//     options: ["Slim", "Medium", "Heavy"],
//   },
//   {
//     question: "What is your skin type?",
//     options: ["Dry" , "Oily" , "Combination"],
//   },
//   {
//     question: "How is your hair type?",
//     options: ["Straight", "Wavy", "Curly"],
//   },
//   {
//     question: "Do you feel cold or hot more often?",
//     options: [ "Cold" , "Hot"],
//   },
//   {
//     question: "How do you respond to changes in weather or climate?",
//     options: ["Easily affected", "Moderate effect", "Less affected"],
//   },
//   {
//     question: "How do you typically react to stress or challenges?",
//     options: ["Anxious or worried", "Confident and determined", "Calm and composed"],
//   },
//   // Add more questions and options as needed
// ];

// let currentQuestion = 0;

// // Create a chat message with options
// const createQuestionMessage = (question) => {
//   const questionMessage = createChatLi(question.question, "incoming");
//   question.options.forEach((option) => {
//     const optionButton = document.createElement("button");
//     optionButton.textContent = option;
//     optionButton.classList.add("option-button");
//     optionButton.addEventListener("click", () => handleUserChoice(option));
//     questionMessage.appendChild(optionButton);
//   });
//   chatbox.appendChild(questionMessage);
// };

// const createChatLi = (message, className) => {
//   const chatLi = document.createElement("li");
//   chatLi.classList.add("chat", className);
//   let chatContent =
//     className === "outgoing"
//       ? `<p>${message}</p>`
//       : `<p><span class="material-symbols-outlined">smart_toy</span>${message}</p>`;
//   chatLi.innerHTML = chatContent;
//   return chatLi;
// };

// const handleUserChoice = (choice) => {
//   chatbox.querySelectorAll(".option-button").forEach((button) => {
//     button.style.display = "none"; // Hide option buttons
//   });
//   const userChoiceMessage = createChatLi(`User selected: ${choice}`, "outgoing");
//   chatbox.appendChild(userChoiceMessage);
//   sendBotResponse(choice); // Send the user's choice to the bot
// };

// const sendBotResponse = (userChoice) => {
//   // Simulate a bot response based on user choice (replace with your logic)
//   setTimeout(() => {
//     const botResponse = `You selected ${userChoice}`;
//     chatbox.appendChild(createChatLi(botResponse, "incoming"));
//     if (currentQuestion < questions.length - 1) {
//       currentQuestion++; // Move to the next question
//       createQuestionMessage(questions[currentQuestion]);
//     } else {
//       // Chatbot reached the end of questions
//       chatInput.disabled = true; // Disable input after finishing questions
//     }
//   }, 1000); // Simulate a 1-second delay
// };

// const handleChat = () => {
//   userMessage = chatInput.value.trim();
//   if (!userMessage) return;

//   chatbox.appendChild(createChatLi(userMessage, "outgoing"));

//   setTimeout(() => {
//     chatbox.appendChild(createChatLi("Thinking", "incoming"));
//     sendBotResponse(userMessage); // Send the user's message to the bot
//   }, 600);

//   chatInput.value = ""; // Clear the input field
// };

// sendChatBtn.addEventListener("click", handleChat);

// // Listen for the Enter key (key code 13)
// chatInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault(); // Prevent the default behavior of Enter (new line)
//     handleChat(); // Trigger the chat handling function
//   }
// });

// // Start the chat by displaying the first question
// createQuestionMessage(questions[currentQuestion]);




////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");
// const chatbox = document.querySelector(".chatbox");

// let userMessage;

// // Define questions and options
// const questions = [
//   {
//     question: "Hi, how can I help you?",
//     options: ["Know your prakruti"],
//   },
//   {
//     question: "What is your body frame like?",
//     options: ["Slim", "Medium", "Heavy"],
//   },
//   {
//     question: "What is your skin type?",
//     options: ["Dry", "Oily", "Combination"],
//   },
//   {
//     question: "How is your hair type?",
//     options: ["Straight", "Wavy", "Curly"],
//   },
//   {
//     question: "Do you feel cold or hot more often?",
//     options: ["Cold", "Hot"],
//   },
//   {
//     question: "How do you respond to changes in weather or climate?",
//     options: ["Easily affected", "Moderate effect", "Less affected"],
//   },
//   {
//     question: "How do you typically react to stress or challenges?",
//     options: ["Anxious or worried", "Confident and determined", "Calm and composed"],
//   },
//   // Add more questions and options as needed
// ];

// let currentQuestion = 0;

// // Create a chat message with options
// const createQuestionMessage = (question) => {
//   const questionMessage = createChatLi(question.question, "incoming");
//   question.options.forEach((option) => {
//     const optionButton = document.createElement("button");
//     optionButton.textContent = option;
//     optionButton.classList.add("option-button");
//     optionButton.addEventListener("click", () => handleUserChoice(option));
//     questionMessage.appendChild(optionButton);
//   });
//   chatbox.appendChild(questionMessage);
// };

// const createChatLi = (message, className) => {
//   const chatLi = document.createElement("li");
//   chatLi.classList.add("chat", className);
//   let chatContent =
//     className === "outgoing"
//       ? `<p>${message}</p>`
//       : `<p><span class="material-symbols-outlined">smart_toy</span>${message}</p>`;
//   chatLi.innerHTML = chatContent;
//   return chatLi;
// };

// // Array to store user choices
// const userChoices = [];

// const handleUserChoice = (choice) => {
//   chatbox.querySelectorAll(".option-button").forEach((button) => {
//     button.style.display = "none"; // Hide option buttons
//   });

//   userChoices.push(choice); // Store the user's choice in the array
//   const userChoiceMessage = createChatLi(`User selected: ${choice}`, "outgoing");
//   chatbox.appendChild(userChoiceMessage);
//   sendBotResponse();
  
// };

// const sendBotResponse = () => {
//   // Simulate a bot response based on user choice (replace with your logic)
//   setTimeout(() => {
//     if (currentQuestion < questions.length - 1) {
//       currentQuestion++; // Move to the next question
//       createQuestionMessage(questions[currentQuestion]);
//     } else {
//       // Chatbot reached the end of questions
//       chatInput.disabled = true; // Disable input after finishing questions
//       // You can now use the userChoices array in your logic
//       sendUserChoicesToBackend();
//       console.log("User Choices:", userChoices);
//     }
//   }, 1000); // Simulate a 1-second delay
// };



// // Create a data object with userChoices
// const data = {
//   userChoices: userChoices,
// };

// // Make a POST request to your Flask app
// fetch('/process_user_choices', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // Handle the response from your Flask app
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// const handleChat = () => {
//   userMessage = chatInput.value.trim();
//   if (!userMessage) return;

//   chatbox.appendChild(createChatLi(userMessage, "outgoing"));

//   setTimeout(() => {
//     chatbox.appendChild(createChatLi("Thinking", "incoming"));
//     sendBotResponse();
//   }, 600);

//   chatInput.value = ""; // Clear the input field
// };

// sendChatBtn.addEventListener("click", handleChat);

// // Listen for the Enter key (key code 13)
// chatInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     handleChat();
//   }
// });

// // Start the chat by displaying the first question
// createQuestionMessage(questions[currentQuestion]);




////////////////////////////////////////////////////////////////////////////////////////////////////////
// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");
// const chatbox = document.querySelector(".chatbox");

// let userMessage;

// // Define questions and options
// const questions = [
//   {
//     question: "Hi, how can I help you?",
//     options: ["Know your prakruti"],
//   },
//   {
//     question: "What is your body frame like?",
//     options: ["Slim", "Medium", "Heavy"],
//   },
//   {
//     question: "What is your skin type?",
//     options: ["Dry", "Oily", "Combination"],
//   },
//   {
//     question: "How is your hair type?",
//     options: ["Straight", "Wavy", "Curly"],
//   },
//   {
//     question: "Do you feel cold or hot more often?",
//     options: ["Cold", "Hot"],
//   },
//   {
//     question: "How do you respond to changes in weather or climate?",
//     options: ["Easily affected", "Moderate effect", "Less affected"],
//   },
//   {
//     question: "How do you typically react to stress or challenges?",
//     options: ["Anxious or worried", "Confident and determined", "Calm and composed"],
//   }
//   // Add more questions and options as needed
// ];

// let currentQuestion = 0;

// // Create a chat message with options
// const createQuestionMessage = (question) => {
//   const questionMessage = createChatLi(question.question, "incoming");
//   question.options.forEach((option) => {
//     const optionButton = document.createElement("button");
//     optionButton.textContent = option;
//     optionButton.classList.add("option-button");
//     optionButton.addEventListener("click", () => handleUserChoice(option));
//     questionMessage.appendChild(optionButton);
//   });
//   chatbox.appendChild(questionMessage);
// };

// const createChatLi = (message, className) => {
//   const chatLi = document.createElement("li");
//   chatLi.classList.add("chat", className);
//   let chatContent =
//     className === "outgoing"
//       ? `<p>${message}</p>`
//       : `<p><span class="material-symbols-outlined">smart_toy</span>${message}</p>`;
//   chatLi.innerHTML = chatContent;
//   return chatLi;
// };

// // Array to store user choices
// const userChoices = [];

// const handleUserChoice = (choice) => {
//   chatbox.querySelectorAll(".option-button").forEach((button) => {
//     button.style.display = "none"; // Hide option buttons
//   });

//   userChoices.push(choice); // Store the user's choice in the array
//   const userChoiceMessage = createChatLi(`User selected: ${choice}`, "outgoing");
//   chatbox.appendChild(userChoiceMessage);
//   sendBotResponse();
// };

// const sendBotResponse = () => {
//   // Simulate a bot response based on user choice (replace with your logic)
//   setTimeout(() => {
//     if (currentQuestion < questions.length - 1) {
//       currentQuestion++; // Move to the next question
//       createQuestionMessage(questions[currentQuestion]);
//     } else {
//       chatInput.disabled = true; // Disable input after finishing questions
//       console.log("User Choices:", userChoices);
//     }
//   }, 1000);
// };

// const handleChat = () => {
//   userMessage = chatInput.value.trim();
//   if (!userMessage) return;

//   chatbox.appendChild(createChatLi(userMessage, "outgoing"));

//   setTimeout(() => {
//     chatbox.appendChild(createChatLi("Thinking", "incoming"));
//     sendBotResponse();
//   }, 600);

//   chatInput.value = ""; // Clear the input field
// };

// sendChatBtn.addEventListener("click", handleChat);

// // Listen for the Enter key (key code 13)
// chatInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     handleChat();
//   }
// });



// // Start the chat by displaying the first question
// createQuestionMessage(questions[currentQuestion]);


/////////////////////////////////////////////////////////////////////////////////////////////////


const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;


const questions = [
  {
      question: "How is your Visual Features?",
      options: ["Emaciation", "Small stature", "Cracked Skin"],
  },
  {
      question: "How is your Tactile Features?",
      options: ["Dry"],
  },
  {
      question: "How are your Joints?",
      options: ["poor", "soft"],
  },
  {
      question: "How are your Eyes?",
      options: ["Restless"],
  },
  {
      question: "How are your Nails?",
      options: ["rough"],
  },
  {
      question: "How are your Teeth?",
      options: ["rough"],
  },
  {
      question: "How is your Mouth?",
      options: ["rough", "warm"],
  },
  {
      question: "How are your Palm and Sole?",
      options: ["rough"],
  },
  {
      question: "How is your Hair?",
      options: ["rough", "brown"],
  },
  {
      question: "How is your Voice Assessment?",
      options: ["dry", "broken", "low"],
  },
  {
      question: "How is your Sleep Pattern?",
      options: ["very light"],
  },
  {
      question: "How is your Movement and Gait?",
      options: ["Quick, light movements", "Hurried movements", "Quick,light gait"],
  },
  {
      question: "How is your Diet and Lifestyle?",
      options: ["poor"],
  },
  {
      question: "How are your Excretory Products?",
      options: ["NA"],
  }
];


// Define questions and options
// const questions = [
//   {
//       question: "How is your Visual Features?",
//       options: ["Emaciation", "Small stature", "Cracked Skin"],
//   },
//   {
//       question: "How is your Tactile Features?",
//       options: ["Dry", "Soft", "Poor"],
//   },
//   {
//       question: "How are your Joints?",
//       options: ["Poor", "Restless", "Rough"],
//   },
//   {
//       question: "How are your Eyes?",
//       options: ["Restless", "Rough", "Copper"],
//   },
//   {
//       question: "How are your Nails?",
//       options: ["Rough", "Broken", "Obstructed"],
//   },
//   {
//       question: "How are your Teeth?",
//       options: ["Rough", "Low", "Hoarse"],
//   },
//   {
//       question: "How is your Mouth?",
//       options: ["Rough", "Broken", "Obstructed"],
//   },
//   {
//       question: "How are your Palm and Sole?",
//       options: ["Rough", "Low", "Hoarse"],
//   },
//   {
//       question: "How is your Hair?",
//       options: ["Dry", "Low", "Profuse sweating"],
//   },
//   {
//       question: "How is your Voice Assessment?",
//       options: ["Very light", "Quick, light movements", "Hurried gait"],
//   },
//   {
//       question: "How is your Sleep Pattern?",
//       options: ["Poor", "Regular", "Deep"],
//   },
//   {
//       question: "How is your Movement and Gait?",
//       options: ["Quick, light movements", "Hastened gait", "Profuse sweating"],
//   },
//   {
//       question: "How is your Diet and Lifestyle?",
//       options: ["Poor", "Healthy", "More than Sufficient"],
//   },
//   {
//       question: "How are your Excretory Products?",
//       options: ["Minimal Sweating", "Over Sweating"],
//   }
// ];

let currentQuestion = 0;

// Create a chat message with options
const createQuestionMessage = (question) => {
  const questionMessage = createChatLi(question.question, "incoming");
  question.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option-button");
    optionButton.addEventListener("click", () => handleUserChoice(option));
    questionMessage.appendChild(optionButton);
  });
  chatbox.appendChild(questionMessage);
};

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<p><span class="material-symbols-outlined">smart_toy</span>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

// Array to store user choices
const userChoices = [];

const handleUserChoice = (choice) => {
  chatbox.querySelectorAll(".option-button").forEach((button) => {
    button.style.display = "none"; // Hide option buttons
  });

  userChoices.push([choice]); // Store the user's choice in the array
  const userChoiceMessage = createChatLi(`User selected: ${choice}`, "outgoing");
  chatbox.appendChild(userChoiceMessage);
  sendBotResponse();
};

const sendBotResponse = () => {
  // Simulate a bot response based on user choice (replace with your logic)
  setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++; // Move to the next question
      createQuestionMessage(questions[currentQuestion]);
    } else {
      chatInput.disabled = true; // Disable input after finishing questions
      console.log("User Choices:", userChoices);

      // When chat ends, send userChoices to your app.py
      fetch("/process_user_input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userChoices })
      })
      .then((response) => {
        if (response.ok) {
          console.log("User choices sent to the backend successfully.");
        } else {
          console.error("Failed to send user choices to the backend.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  }, 1000);
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    chatbox.appendChild(createChatLi("Thinking", "incoming"));
    sendBotResponse();
  }, 600);

  chatInput.value = ""; // Clear the input field
};

sendChatBtn.addEventListener("click", handleChat);

// Listen for the Enter key (key code 13)
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleChat();
  }
});

// Start the chat by displaying the first question
createQuestionMessage(questions[currentQuestion]);
