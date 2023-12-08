
    // Grab HTML Elements
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");

    // Add Event Listeners
    btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

    //using the modal 
    const dialog = document.querySelector("dialog");
    const showButton = document.querySelector("dialog + button");
    const closeButton = document.querySelector("dialog button");

    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });

    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
        dialog.close();
    });


    //to start using the libary
    AOS.init(
    );

// Wrap the JavaScript code inside a DOMContentLoaded event listener to ensure the form element is loaded
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        // Create and populate HTML elements for the result message
        const resultMessageElement = document.createElement('p');
        resultMessageElement.classList.add("sm:text-center", "text-sm", "sm:text-md");
        resultMessageElement.textContent = `Your predicted temperament type is ${data.resultMessage}`;

        document.getElementById('result-message').appendChild(resultMessageElement);

        // Create and populate HTML elements for the result message dialog
        const resultMessageElementDialog = document.createElement('p');
        resultMessageElementDialog.classList.add("sm:text-justify", "text-sm", "text-bold", "sm:text-3xl");
        resultMessageElementDialog.textContent = `Your predicted temperament type is ${data.resultMessage}`;

        document.getElementById('result-message-dialog').appendChild(resultMessageElementDialog);

        // Handle different temperament results using an if statement
        if (data.resultMessage === "Sanguine") {// Create and populate HTML elements for the Sanguine temperament description
          const sanguineDescriptionElement = document.createElement('div');
          sanguineDescriptionElement.classList.add("flex", "flex-col", "gap-5");
          
          const sanguineHeadingElement = document.createElement('p');
          sanguineHeadingElement.classList.add("text-sm", "text-bold", "sm:text-lg", "text-justify", "data-aos", "fade-left");
          sanguineHeadingElement.textContent = "The Sanguine Temperament:";
          
          const sanguineDescriptionListElement1 = document.createElement('li');
          sanguineDescriptionListElement1.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
          sanguineDescriptionListElement1.textContent = "Sanguine individuals are known for their optimism, enthusiasm, and outgoing nature. They are social butterflies, effortlessly drawing others in with their infectious laughter and vivacious energy. Adaptable and easygoing, they embrace new experiences and readily adjust to change. Sanguines excel at communication, often using humor and storytelling to connect with others. Their positive outlook and carefree spirit make them naturally charismatic leaders.";
          
          const sanguineDescriptionListElement2 = document.createElement('li');
          sanguineDescriptionListElement2.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
          sanguineDescriptionListElement2.textContent = "Strengths: Optimistic, enthusiastic, adaptable, communicative, charismatic, social";
          
          const sanguineDescriptionListElement3 = document.createElement('li');
          sanguineDescriptionListElement3.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
          sanguineDescriptionListElement3.textContent = "Challenges: Can be easily distracted, impulsive, lacking focus, prone to boredom";
          
          // Add the description elements to the container div
          sanguineDescriptionElement.appendChild(sanguineHeadingElement);
          sanguineDescriptionElement.appendChild(sanguineDescriptionListElement1);
          sanguineDescriptionElement.appendChild(sanguineDescriptionListElement2);
          sanguineDescriptionElement.appendChild(sanguineDescriptionListElement3);
          
          // Append the container div to the appropriate DOM element
          document.getElementById('temperament-content').appendChild(sanguineDescriptionElement);
          
        } else if (data.resultMessage === "Melancholic") {
          // ... update the DOM with specific content for Melancholic temperament ...
          // Create and populate HTML elements for the Melancholic temperament description
const melancholicDescriptionElement = document.createElement('div');
melancholicDescriptionElement.classList.add("flex", "flex-col", "gap-5");

const melancholicHeadingElement = document.createElement('p');
melancholicHeadingElement.classList.add("text-sm", "text-bold", "sm:text-lg", "text-justify", "data-aos", "fade-left");
melancholicHeadingElement.textContent = "The Melancholic Temperament:";

const melancholicDescriptionListElement1 = document.createElement('li');
melancholicDescriptionListElement1.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
melancholicDescriptionListElement1.textContent = "Melancholic individuals are known for their thoughtful and analytical nature. They are introspective and introverted, preferring solitude and reflection to large social gatherings. Melancholics have a deep appreciation for beauty and art, often possessing a creative streak that manifests in various forms. Their perfectionistic tendencies and desire for order can sometimes lead to challenges with procrastination and indecisiveness.";

const melancholicDescriptionListElement2 = document.createElement('li');
melancholicDescriptionListElement2.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
melancholicDescriptionListElement2.textContent = "Strengths: Deep thinkers, analytical, creative, introspective, perfectionistic";

const melancholicDescriptionListElement3 = document.createElement('li');
melancholicDescriptionListElement3.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
melancholicDescriptionListElement3.textContent = "Challenges: Introverted, perfectionistic, prone to procrastination and indecisiveness";

// Add the description elements to the container div
melancholicDescriptionElement.appendChild(melancholicHeadingElement);
melancholicDescriptionElement.appendChild(melancholicDescriptionListElement1);
melancholicDescriptionElement.appendChild(melancholicDescriptionListElement2);
melancholicDescriptionElement.appendChild(melancholicDescriptionListElement3);

// Append the container div to the appropriate DOM element
document.getElementById('temperament-content').appendChild(melancholicDescriptionElement);

        } else if (data.resultMessage === "Phlegmatic") {
          // ... update the DOM with specific content for Phlegmatic temperament ...
          // Create and populate HTML elements for the Phlegmatic temperament description
  const phlegmaticDescriptionElement = document.createElement('div');
  phlegmaticDescriptionElement.classList.add("flex", "flex-col", "gap-5");

  const phlegmaticHeadingElement = document.createElement('p');
  phlegmaticHeadingElement.classList.add("text-sm", "text-bold", "sm:text-lg", "text-justify", "data-aos", "fade-left");
  phlegmaticHeadingElement.textContent = "The Phlegmatic Temperament:";

  const phlegmaticDescriptionListElement1 = document.createElement('li');
  phlegmaticDescriptionListElement1.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
  phlegmaticDescriptionListElement1.textContent = "Phlegmatic individuals are known for their calm and peaceful nature. They are easygoing and adaptable, preferring harmony and avoiding conflict. Phlegmatics are reliable and dependable, often serving as the mediators and peacemakers within their social circles. They value stability and routine, and often find comfort in familiar surroundings.";

  const phlegmaticDescriptionListElement2 = document.createElement('li');
  phlegmaticDescriptionListElement2.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
  phlegmaticDescriptionListElement2.textContent = "Strengths: Calm, peaceful, easygoing, reliable, dependable, good mediators";

  const phlegmaticDescriptionListElement3 = document.createElement('li');
  phlegmaticDescriptionListElement3.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
  phlegmaticDescriptionListElement3.textContent = "Challenges: Can be seen as passive or uninterested, prone to procrastination, may lack initiative";

  // Add the description elements to the container div
  phlegmaticDescriptionElement.appendChild(phlegmaticHeadingElement);
  phlegmaticDescriptionElement.appendChild(phlegmaticDescriptionListElement1);
  phlegmaticDescriptionElement.appendChild(phlegmaticDescriptionListElement2);
  phlegmaticDescriptionElement.appendChild(phlegmaticDescriptionListElement3);

  // Append the container div to the appropriate DOM element
  document.getElementById('temperament-content').appendChild(phlegmaticDescriptionElement);

        } else if (data.resultMessage === "Choleric") {
          // ... update the DOM with specific content for Choleric temperament ...
          // Create and populate HTML elements for the Choleric temperament description
const cholericDescriptionElement = document.createElement('div');
cholericDescriptionElement.classList.add("flex", "flex-col", "gap-5");

const cholericHeadingElement = document.createElement('p');
cholericHeadingElement.classList.add("text-sm", "text-bold", "sm:text-lg", "text-justify", "data-aos", "fade-left");
cholericHeadingElement.textContent = "The Choleric Temperament:";

const cholericDescriptionListElement1 = document.createElement('li');
cholericDescriptionListElement1.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
cholericDescriptionListElement1.textContent = "Choleric individuals are known for their energetic and ambitious nature. They are driven by a strong desire for achievement and possess a natural leadership ability. Cholerics are decisive and action-oriented, often taking charge and pushing others to achieve their goals. Their direct communication style and passion for their work can sometimes come across as assertive or impatient.";

const cholericDescriptionListElement2 = document.createElement('li');
cholericDescriptionListElement2.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
cholericDescriptionListElement2.textContent = "Strengths: Energetic, ambitious, decisive, action-oriented, natural leaders";

const cholericDescriptionListElement3 = document.createElement('li');
cholericDescriptionListElement3.classList.add("text-sm", "sm:text-md", "text-justify", "data-aos", "fade-left");
cholericDescriptionListElement3.textContent = "Challenges: Can be impatient and assertive, prone to conflict, may struggle with delegation";

// Add the description elements to the container div
cholericDescriptionElement.appendChild(cholericHeadingElement);
cholericDescriptionElement.appendChild(cholericDescriptionListElement1);
cholericDescriptionElement.appendChild(cholericDescriptionListElement2);
cholericDescriptionElement.appendChild(cholericDescriptionListElement3);

// Append the container div to the appropriate DOM element
document.getElementById('temperament-content').appendChild(cholericDescriptionElement);

        } else {
          // Update the DOM for unknown temperament
          const unknownElement = document.createElement('p');
          unknownElement.textContent = `We could not determine your temperament based on the results.`;
          document.getElementById('result-message').appendChild(unknownElement);
        }
      });
      
  });
  
});
const questions = {
  "Openness to Experience": [
    "How often do you try new things?",
    "How much do you enjoy learning new things?",
    "How comfortable are you with ambiguity?",
    "Do you prefer familiar routines or unexpected experiences?",
    "How curious are you about the world around you?",
    "Do you find yourself easily bored with routine tasks?",
    "Do you enjoy exploring new ideas and concepts?",
    "How comfortable are you with change and uncertainty?",
    "Do you value creativity and imagination?",
  ],
  "Conscientiousness": [
    "How organized are you?",
    "How responsible are you?",
    "How good are you at planning and meeting deadlines?",
    "How important is it to follow rules and instructions?",
    "Do you dislike mess and clutter?",
    "How efficient are you at completing tasks?",
    "How well do you manage your time?",
    "Do you prioritize your work and responsibilities?",
    "Are you detail-oriented and meticulous?",
  ],
  "Extraversion": [
    "How outgoing and sociable are you?",
    "How much do you enjoy being around other people?",
    "How comfortable are you talking in front of groups?",
    "Do you prefer to be the center of attention?",
    "How much energy do you have for social activities?",
    "Do you enjoy meeting new people and making friends?",
    "How comfortable are you initiating conversations?",
    "Do you prefer active and stimulating environments?",
    "Do you enjoy being assertive and taking charge?",
  ],
  "Agreeableness": [
    "How cooperative and helpful are you?",
    "How trusting are you of others?",
    "How compassionate are you?",
    "Are you willing to compromise and make sacrifices?",
    "Do you avoid conflict and confrontation?",
    "How empathetic are you towards others?",
    "Do you enjoy helping others and making them happy?",
    "Are you generally forgiving and understanding?",
    "Do you prioritize group harmony and cooperation?",
  ],
  "Neuroticism": [
    "How often do you experience anxiety or worry?",
    "How easily do you get stressed?",
    "How sensitive are you to criticism?",
    "Do you experience mood swings frequently?",
    "How easily do you feel overwhelmed or out of control?",
    "Are you prone to negative thoughts and emotions?",
    "Do you have difficulty dealing with uncertainty and change?",
    "Do you find yourself easily hurt by others' words or actions?",
    "Do you often feel anxious or apprehensive?",
  ],
  "Sensation-Seeking": [
    "How much do you enjoy new and exciting experiences?",
    "How much do you crave physical thrills and sensations?",
    "How impulsive are you?",
    "Do you enjoy taking risks and venturing outside your comfort zone?",
    "Are you easily bored with routine and predictability?",
    "Do you seek out adventurous and challenging activities?",
    "How much do you value excitement and novelty?",
    "Do you enjoy strong sensory experiences?",
    "Do you feel a need for constant stimulation and variety?",
  ],
  "Impulsiveness": [
    "How often do you act without thinking?",
    "How difficult is it for you to control your emotions?",
    "How easily do you get distracted?",
    "Do you find it hard to resist temptation?",
    "How well do you plan and think ahead?",
    "Do you often regret your decisions?",
    "Do you have difficulty delaying gratification?",
    "Are you quick to react and express your emotions?",
    "Do you often take unnecessary risks?",
  ],
  "Optimism": [
    "How hopeful are you about the future?",
    "How often do you see the silver lining in difficult situations?",
    "How resilient are you in the face of challenges?",
    "Do you believe in your own abilities and potential?",
    "How often do you experience positive emotions?",
    "Do you tend to focus on the good things in life?",
    "Are you generally optimistic and upbeat?",
    "Do you maintain a positive outlook even when things are tough?",
    "Do you believe that good things happen to good people?",
  ]
};

window.onload = function() {
  const quizContainer = document.getElementById("quiz-container");
  
  for (const tag of document.querySelectorAll(".question-tag")) {
      const parameter = tag.textContent;
      const randomQuestionIndex = Math.floor(Math.random() * questions[parameter].length);
      const questionText = questions[parameter][randomQuestionIndex];

      tag.textContent = questionText;
  }
};



    //to start using the libary
    AOS.init(
    );