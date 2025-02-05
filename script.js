const app = document.getElementById("app");
let eightBallAnswers = ["It is certain", "It is decidedly so", "Without a doubt!", "Better not tell you now", "Don't count on it", "My reply is no", "Outlook not so good", "Very doubtful"];
let answer = "";

function showHTML() {
    app.innerHTML = /*HTML*/ `
        <div class="container">
            <div class="text">Ask a yes or no question!</div>
            <button onclick="generateRandomAnswer()">Ask</button>
            <div class="text">${answer}</div>
        </div>
    `
}
showHTML();

function generateRandomAnswer() {
    answer = eightBallAnswers[Math.floor(Math.random() * eightBallAnswers.length)];
    showHTML();
}