function enterGarden() {
  document.getElementById("game").innerHTML = `
    <img src="yoda-pixel.png" class="npc-sprite" alt="Pixel Yod'Da" />

    <h2>Yod'Da appears...</h2>

    <p class="dialogue">
      “Welcome, little creator...<br>
      Entered the Garden, you have.<br><br>
      Ready to remember the magic within, are you?”
    </p>

    <div class="choices">
      <button onclick="startJourney()">Yes, I am ready</button>
      <button onclick="startJourney()">I think so...</button>
    </div>
  `;
}

function startJourney() {
  document.getElementById("game").innerHTML = `
    <h2>The First Portal Opens</h2>

    <p class="dialogue">
      Yod'Da raises his staff.<br>
      The pixels begin to glow.<br><br>
      “First, the Stone you must remember.<br>
      To the Mineral Realm... go.”
    </p>

    <div class="choices">
      <button onclick="enterMineralRealm()">Enter the Mineral Realm</button>
    </div>
  `;
}

function enterMineralRealm() {
  document.getElementById("game").innerHTML = `
    <h2>ÂIÖN — Memory in the Stone</h2>

    <p class="dialogue">
      The air becomes still.<br>
      Mountains breathe in silence.<br><br>
      A deep voice rises from the stone:<br><br>
      “I remain.<br>
      I am the memory beneath your feet.<br>
      Before you move forward... remember your center.”
    </p>

    <div class="choices">
      <button onclick="returnToPortal()">Receive the Stone Gift</button>
    </div>
  `;
}

function returnToPortal() {
  document.getElementById("game").innerHTML = `
    <h2>You received: Stone of Memory 🜨</h2>

    <p class="dialogue">
      A small crystal appears in your hands.<br><br>
      The next portal begins to shimmer...
    </p>

    <div class="choices">
      <button onclick="enterGarden()">Return to Yod'Da</button>
    </div>
  `;
}
