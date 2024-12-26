// Tarot deck definition
const tarotDeck = [
    { name: "The Fool", meaning: "New beginnings, innocence, spontaneity" },
    { name: "The Magician", meaning: "Skill, resourcefulness, power" },
    { name: "The High Priestess", meaning: "Intuition, mystery, subconscious" },
    { name: "The Empress", meaning: "Abundance, nature, femininity" },
    { name: "The Emperor", meaning: "Authority, structure, control" },
    { name: "The Lovers", meaning: "Love, harmony, relationships" },
    { name: "The Chariot", meaning: "Willpower, victory, determination" },
    { name: "Strength", meaning: "Courage, patience, compassion" },
    { name: "The Hermit", meaning: "Soul-searching, introspection, solitude" },
    { name: "The Wheel of Fortune", meaning: "Change, cycles, fate" },
    { name: "Death", meaning: "Endings, transformation, transition" },
    { name: "Temperance", meaning: "Balance, moderation, patience" },
    { name: "The Devil", meaning: "Bondage, addiction, materialism" },
    { name: "The Tower", meaning: "Chaos, upheaval, revelation" },
    { name: "The Star", meaning: "Hope, faith, rejuvenation" },
    { name: "The Moon", meaning: "Illusion, fear, anxiety" },
    { name: "The Sun", meaning: "Joy, success, celebration" },
    { name: "Judgement", meaning: "Reflection, reckoning, awakening" },
    { name: "The World", meaning: "Completion, achievement, fulfillment" },
];

// Get elements
const drawCardsButton = document.getElementById("drawCards");
const pastCard = document.getElementById("pastCard");
const presentCard = document.getElementById("presentCard");
const futureCard = document.getElementById("futureCard");
const result = document.getElementById("result");

// Function to draw a random card
function drawRandomCard() {
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    return tarotDeck[randomIndex];
}

// Draw cards and display results
drawCardsButton.addEventListener("click", () => {
    const past = drawRandomCard();
    const present = drawRandomCard();
    const future = drawRandomCard();

    // Update card elements
    pastCard.textContent = past.name;
    presentCard.textContent = present.name;
    futureCard.textContent = future.name;

    // Display meanings
    result.innerHTML = `
        <h3>Interpretation</h3>
        <p><strong>Past:</strong> ${past.name} - ${past.meaning}</p>
        <p><strong>Present:</strong> ${present.name} - ${present.meaning}</p>
        <p><strong>Future:</strong> ${future.name} - ${future.meaning}</p>
    `;
    result.style.display = "block";
});