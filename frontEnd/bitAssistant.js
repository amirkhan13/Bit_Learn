import {GoogleGenerativeAI} from "@google/generative-ai";

const businessInfo = `
1. AI Assistant Role
Supportive Guide: The assistant's primary function is to support students as they learn coding by answering questions, providing explanations, and offering real-time feedback on code.
Personalized Experience: Tailor responses based on the user's learning progress, past interactions, and coding skill level. The assistant should adapt to the individual needs of students.
Resource Integration: The assistant should suggest relevant tutorials, coding exercises, and learning materials based on the student's current challenge or progress.
2. Types of Interactions
Problem Solving: Students can ask questions about coding problems or concepts they’re working on, and the assistant provides immediate feedback and solutions.
Debugging: The assistant assists in debugging code by highlighting errors, suggesting fixes, and providing explanations.
Code Suggestions: The AI can recommend code snippets or help refactor code for better performance or readability.
Interactive Learning: The assistant can guide students through coding exercises, step-by-step, offering hints when needed.
3. User Progress Tracking
Learning Pathway: Track each student’s progress in the tutorials and problem-solving exercises. Use this data to personalize interactions, suggest next steps, and recommend topics based on their learning pace.
Adaptive Content Delivery: Adjust the difficulty of tutorials, exercises, and questions based on the student’s performance. If they struggle with certain concepts, the assistant can suggest simpler problems or revisit topics.
Milestone Markers: Notify students when they reach certain milestones or complete sections of their learning pathway.
4. Monetization Strategy
Freemium Model: Offer basic coding tutorials and assistance for free. Provide premium features, such as advanced problem-solving sessions, personalized mentorship, and in-depth courses, through paid subscriptions.
In-App Purchases: Offer additional learning materials, coding challenges, or premium access to specific courses or resources through microtransactions.
Certification: Provide certification or badges for completing courses or passing coding challenges, which can be sold as a premium feature.
5. Content Curation
Tutorials: Curate coding tutorials and problems across multiple difficulty levels. The AI should guide students through each tutorial by offering explanations, hints, and clarifications.
Dynamic Content Suggestions: The assistant should suggest additional exercises or tutorials based on the student’s performance. It should use algorithms to recommend content that bridges gaps in the student’s understanding.
6. AI as a Teaching Assistant
24/7 Availability: The AI is available anytime, allowing students to learn and interact at their own pace without the need for live tutors.
Scalability: With an AI assistant, you can cater to thousands of students simultaneously, offering the same level of assistance that would otherwise require multiple human tutors.
Feedback Loop: Collect user feedback on the assistant’s responses to improve the system’s performance and adapt its learning capabilities.
7. Engagement & Retention
Gamification: Implement game-like elements such as coding challenges, leaderboards, achievements, and rewards to keep students engaged.
Notifications: Use push notifications to remind students of their progress, suggest new content, and encourage them to return to continue their learning journey.
Community Integration: Allow students to interact with each other through a forum or chat feature, with the assistant acting as a facilitator to help resolve issues or share coding tips.
8. Data Analytics and Insights
Student Performance Analytics: Track metrics such as completion rates, time spent on problems, success/failure rates, and areas where students struggle most.
AI Behavior Analytics: Monitor how well the AI assistant performs in terms of response accuracy, helpfulness, and user satisfaction.
Content Effectiveness: Analyze which tutorials or topics engage students the most and make data-driven decisions on content improvement.

FAQs:
What can the Coding Assistant help with? The Coding Assistant can guide you in solving coding problems, explain concepts, debug your code, and provide relevant resources for learning.

How do I interact with the Coding Assistant? Simply type your coding-related questions or problems in the chatbox, and the assistant will provide instant help or explanations.

Can the assistant solve coding problems for me? Yes, the assistant can help you solve coding problems by providing step-by-step explanations and sample solutions.

Which programming languages does the assistant support? The assistant supports multiple programming languages, including C++, Java, Python, JavaScript, and more.

Is my code executed by the assistant? Yes, the assistant can evaluate and run code in several languages to check for errors and verify correctness.

How can I learn coding on this website? You can explore tutorials, practice problems, and interactive exercises. The assistant will guide you through each learning step.

Can I track my progress on this platform? Yes, the platform tracks your learning progress, and the assistant will provide personalized suggestions to help you improve.

What should I do if I get stuck? If you're stuck, simply ask the assistant for help, and it will guide you through troubleshooting or explain the concept in more detail.
`;

const API_KEY = 'AIzaSyCnJO2SQ65rWLMFMv4zu69PfFEKkAgOa0s';

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    systemInstruction: businessInfo
});

let messages = {
    history: [],
};

async function sendMessage() {
    const userMessage = document.querySelector(".chat-window input").value;
    if (userMessage.length) {
        try {
            document.querySelector(".chat-window input").value = "";
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="user">
                    <p>${userMessage}</p>
                </div>
            `);

            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="loader"></div>
            `);

            const chat = model.startChat(messages);
            const result = await chat.sendMessageStream(userMessage);

            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="model">
                    <p></p>
                </div>
            `);

            let modelMessages = "";
            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                const modelResponseElement = document.querySelectorAll(".chat-window .chat div.model");
                const lastModelResponse = modelResponseElement[modelResponseElement.length - 1].querySelector("p");

                
                lastModelResponse.insertAdjacentHTML("beforeend", chunkText);
                modelMessages = lastModelResponse.innerHTML;
            }


            if (/\bcode\b|\blogic\b|\bfunction\b|\bimplementation\b/i.test(userMessage) || /\bcode\b|\bimplementation\b/.test(modelMessages)) {
                const codeBlock = `\n<pre style='background-color: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto;'><code>${modelMessages}</code></pre>`;
                modelMessages = `<div class="code-response">Here is the requested code:<br>${codeBlock}</div>`;
                const modelResponseElement = document.querySelectorAll(".chat-window .chat div.model");
                modelResponseElement[modelResponseElement.length - 1].innerHTML = modelMessages;
            }


            messages.history.push({
                role: "user",
                parts: [{ text: userMessage }],
            });

            messages.history.push({
                role: "model",
                parts: [{ text: modelMessages }],
            });
        } catch (error) {
            document.querySelector(".chat-window .chat").insertAdjacentHTML("beforeend", `
                <div class="error">
                    <p>The message could not be sent. Please try again.</p>
                </div>
            `);
        }

        document.querySelector(".chat-window .chat .loader").remove();
    }
}

document.querySelector(".chat-window input").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) { 
        event.preventDefault();
        sendMessage();
    }
});

document.querySelector(".chat-window .input-area button").addEventListener("click", () => sendMessage());
document.querySelector(".chat-button").addEventListener("click", () => {
    document.querySelector("body").classList.add("chat-open");
});

document.querySelector(".chat-window button.close").addEventListener("click", () => {
    document.querySelector("body").classList.remove("chat-open");
});


const chatWindow = document.querySelector(".chat-window");
if (chatWindow) {
    chatWindow.style.width = "600px"; 
}
