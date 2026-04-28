function enterGarden() {
  document.getElementById("game").innerHTML = `
    <h2>You have entered the Garden...</h2>
    <p>A presence is watching you...</p>

    <button onclick="meetYodda()">Continue</button>
  `;
}

function meetYodda() {
  document.getElementById("game").innerHTML = `
    <h2>🧙 Yod'Da appears...</h2>
    <p>“Ready to play… are you?”</p>

    <button onclick="startJourney()">Yes</button>
    <button onclick="startJourney()">No</button>
  `;
}

function startJourney() {
  document.getElementById("game").innerHTML = `
    <h2>A portal opens...</h2>
    <p>The journey begins.</p>
  `;
}
