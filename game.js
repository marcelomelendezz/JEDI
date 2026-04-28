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
    <img src="portalRV.png" class="portal-sprite" alt="Pixel Vegetal Portal" />

    <h2>The Second Portal Opens</h2>

    <p class="dialogue">
      The Stone of Memory warms in your hands.<br>
      From stillness… a seed awakens.<br><br>
      Vines of light begin to grow around the path.<br>
      The Vegetal Realm is calling.
    </p>

    <div class="choices">
      <button onclick="enterVegetalRealm()">Enter the Vegetal Realm</button>
    </div>
  `;
}

function enterVegetalRealm() {
  document.getElementById("game").innerHTML = `
    <img src="loraepix.png" class="npc-sprite" alt="Pixel LÖRÃE" />

    <h2>LÖRÃE — The Voice of Becoming</h2>

    <p class="dialogue">
      The air becomes soft.<br>
      Roots whisper beneath your feet.<br><br>
      A presence blooms before you...
    </p>

    <p class="dialogue">
      “Little seed of light…<br>
      Tell me where your heart wishes to grow.”
    </p>

    <div class="choices">
      <button onclick="askLorae('grow')">What do you wish to grow?</button>
      <button onclick="askLorae('release')">What are you ready to release?</button>
      <button onclick="askLorae('expand')">Where does your heart want to expand?</button>
    </div>

    <div id="lorae-response"></div>
  `;
}

function askLorae(type) {
  let response = "";

  if (type === "grow") {
    response = `
      “Grow what is true.<br><br>
      Not what the world demanded from you…<br>
      but what your soul planted before you arrived.”`;
  }

  if (type === "release") {
    response = `
      “Release what has become too small for your becoming.<br><br>
      The old leaf does not fail when it falls…<br>
      it feeds the next version of life.”`;
  }

  if (type === "expand") {
    response = `
      “Your heart expands toward connection.<br><br>
      Toward beauty.<br>
      Toward wonder.<br>
      Toward the garden you came here to remember.”`;
  }

  document.getElementById("lorae-response").innerHTML = `
    <p class="dialogue">LÖRÃE speaks:</p>
    <p class="dialogue">${response}</p>

    <div class="choices">
      <button onclick="receiveSeedGift()">Receive the Seed of Becoming</button>
    </div>
  `;
}

function receiveSeedGift() {
  document.getElementById("game").innerHTML = `
    <img src="loraepix.png" class="npc-sprite" alt="Pixel LÖRÃE" />

    <h2>You received: Seed of Becoming 🌱</h2>

    <p class="dialogue">
      A luminous seed appears in your hands.<br><br>
      “You are not meant to stay the same…<br>
      you are meant to grow; ever-evolve.”<br><br>
      The garden breathes with you.<br>
      A new portal begins to awaken.
    </p>

    <div class="choices">
      <button onclick="startAnimalPortal()">Continue</button>
    </div>
  `;
}

function startAnimalPortal() {
  document.getElementById("game").innerHTML = `
    <h2>The Third Portal Begins to Awaken</h2>

    <p class="dialogue">
      The Seed of Becoming pulses with life.<br>
      Somewhere in the distance… a heartbeat answers.<br><br>
      The Animal Realm is near.
    </p>

    <div class="choices">
      <button onclick="alert('Next: ĐŘAVÜK — Animal Realm')">Continue</button>
    </div>
  `;
}
