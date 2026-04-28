let aionQuestionsAsked = 0;

function enterGarden() {
  document.getElementById("game").innerHTML = `
    <img src="yoddapix.png" class="npc-sprite" alt="Pixel Yod'Da" />

    <h2>Yod'Da appears...</h2>

    <p class="dialogue">
      “Welcome, little creator...<br>
      Entered the Garden, you have.<br><br>
      Ready to remember the magic within, are you?”
    </p>

    <div class="choices">
      <button onclick="startJourney()">Yes, I am ready</button>
      <button onclick="notReady()">No, I am not ready</button>
    </div>
  `;
}

function notReady() {
  document.getElementById("game").innerHTML = `
    <img src="yoddapix.png" class="npc-sprite" alt="Pixel Yod'Da" />

    <h2>The Garden closes...</h2>

    <p class="dialogue">
      “Not ready, you are.<br>
      Wrong, this is not.<br><br>
      Return when play in your heart awakens.”
    </p>

    <div class="choices">
      <button onclick="location.reload()">Return to the Beginning</button>
    </div>
  `;
}

function startJourney() {
  document.getElementById("game").innerHTML = `
    <img src="portalRM.png" class="portal-sprite" alt="Pixel Portal" />
  
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
  aionQuestionsAsked = 0;
  
  document.getElementById("game").innerHTML = `
    <img src="aionpix.png" class="npc-sprite" alt="Pixel ÂIÖN" />

    <h2>ÂIÖN — Memory in the Stone</h2>

    <p class="dialogue">
      The ground becomes still.<br><br>
      A presence speaks from within the stone...
    </p>

    <div class="choices">
      <button onclick="askAion('identity')">Who am I… beneath all movement?</button>
      <button onclick="askAion('inner')">What do I carry within me?</button>
      <button onclick="askAion('stone')">What do I share with the stone?</button>
    </div>

    <div id="aion-response"></div>
  `;
}

function askAion(type) {
  let response = "";

  if (type === "identity") {
    response = `
      “You are not the movement…<br><br>
      You are that which remains when all motion ends.<br>
      The silent witness beneath all becoming.”`;
  }

  if (type === "inner") {
    response = `
      “You carry memory.<br><br>
      Not of this life alone…<br>
      but of the Earth itself.<br>
      Of pressure, time, and transformation.”`;
  }

  if (type === "stone") {
    response = `
      “Like the stone, you endure.<br><br>
      You are structure.<br>
      You are presence.<br>
      You are the foundation upon which life stands.”`;
  }

  document.getElementById("aion-response").innerHTML = `
    <p class="dialogue">ÂIÖN speaks:</p>
    <p class="dialogue">${response}</p>

    <div class="choices">
      <button onclick="receiveStoneGift()">Receive the Stone of Memory</button>
    </div>
  `;
}

function receiveStoneGift() {
  document.getElementById("game").innerHTML = `
    <img src="aionpix.png" class="npc-sprite" alt="Pixel ÂIÖN" />

    <h2>You received: Stone of Memory 🜨</h2>

    <p class="dialogue">
      A small crystal appears in your hands.<br><br>
      “Carry this not as weight…<br>
      but as remembrance.”<br><br>
      The next portal begins to shimmer.
    </p>

    <div class="choices">
      <button onclick="startVegetalPortal()">Continue</button>
    </div>
  `;
}

function startVegetalPortal() {
  document.getElementById("game").innerHTML = `
    <h2>The Second Portal Opens</h2>

    <p class="dialogue">
      The crystal warms in your hands.<br>
      From stone… a seed awakens.<br><br>
      The path to the Vegetal Realm begins to grow.
    </p>

    <div class="choices">
      <button onclick="alert('Next: LÖRÃE — Vegetal Realm')">Enter the Vegetal Realm</button>
    </div>
  `;
}
