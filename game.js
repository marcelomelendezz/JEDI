function enterGarden() {
  document.getElementById("game").innerHTML = `
    <h2>You have entered the Garden...</h2>
    <p>A presence is watching you...</p>

    <button onclick="meetYodda()">Continue</button>
  `;
}

function meetYodda() {
  document.getElementById("game").innerHTML = `
    <div class="yodda">
  (•_•)
  /| |\\
   / \\
</div>

<p>Yod'Da emerges from the pixels...</p>
<p>“Ready to play… are you?”</p>
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
