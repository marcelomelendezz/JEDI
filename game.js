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

    <h2>The Stone of Memory reveals its form</h2>

    <p class="dialogue">
      The crystal in your hands begins to shift...<br><br>
      “Memory takes the shape your soul resonates with.”<br><br>
      Choose the form that calls you.
    </p>

    <div class="choices">
      <button onclick="chooseCrystal('sapphire')">🔵 Sapphire — Clarity</button>
      <button onclick="chooseCrystal('ruby')">🔴 Ruby — Passion</button>
      <button onclick="chooseCrystal('emerald')">🟢 Emerald — Growth</button>
    </div>
  `;
}

function chooseCrystal(type) {
  let name = "";
  let message = "";
  let emoji = "";

  if (type === "sapphire") {
    name = "Sapphire Crystal";
    emoji = "🔵";
    message = `
      “Clarity is your gift.<br><br>
      You see beyond illusion.<br>
      You remember truth.”`;
  }

  if (type === "ruby") {
    name = "Ruby Crystal";
    emoji = "🔴";
    message = `
      “Passion burns within you.<br><br>
      You are fire in motion.<br>
      You remember desire.”`;
  }

  if (type === "emerald") {
    name = "Emerald Crystal";
    emoji = "🟢";
    message = `
      “Growth lives within you.<br><br>
      You are ever-becoming.<br>
      You remember life.”`;
  }

  document.getElementById("game").innerHTML = `
    <img src="aionpix.png" class="npc-sprite" alt="Pixel ÂIÖN" />

    <h2>You received: ${name} ${emoji}</h2>

    <p class="dialogue">
      A crystal forms fully in your hands.<br><br>
      ${message}<br><br>
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

    <h2>LÖRÃE — The Voice of the Earth</h2>

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
    <img src="portalRA.png" class="portal-sprite" alt="Pixel Animal Portal" />

    <h2>The Third Portal Opens</h2>

    <p class="dialogue">
      The Seed of Becoming pulses in your hands.<br>
      A heartbeat rises from deep within the forest.<br><br>
      Claws. Wings. Breath. Instinct.<br>
      The Animal Realm is calling.
    </p>

    <div class="choices">
      <button onclick="enterAnimalRealm()">Enter the Animal Realm</button>
    </div>
  `;
}

function enterAnimalRealm() {
  document.getElementById("game").innerHTML = `
    <img src="dravukpix.png" class="npc-sprite" alt="Pixel ĐŘAVÜK" />

    <h2>ĐŘAVÜK — The Wild Heartbeat</h2>

    <p class="dialogue">
      The ground trembles beneath your feet.<br>
      A primal presence steps from the shadows.<br><br>
      It does not speak first with words…<br>
      it speaks through your heartbeat.
    </p>

    <p class="dialogue">
      “Little one…<br>
      before you think,<br>
      remember how to feel.”
    </p>

    <div class="choices">
      <button onclick="askDravuk('instinct')">What does my instinct know?</button>
      <button onclick="askDravuk('fear')">What if I am afraid?</button>
      <button onclick="askDravuk('wild')">How do I become wild again?</button>
    </div>

    <div id="dravuk-response"></div>
  `;
}

function askDravuk(type) {
  let response = "";

  if (type === "instinct") {
    response = `
      “Your instinct knows the path<br>
      before your mind names the road.<br><br>
      Trust the pulse.<br>
      Trust the body.<br>
      Trust the ancient animal within.”`;
  }

  if (type === "fear") {
    response = `
      “Fear is not your enemy.<br><br>
      It is a gatekeeper.<br>
      Bow to it…<br>
      then walk through.”`;
  }

  if (type === "wild") {
    response = `
      “You become wild again<br>
      when you stop asking permission<br>
      to be what you already are.<br><br>
      Run. Sing. Create. Fly.”`;
  }

  document.getElementById("dravuk-response").innerHTML = `
    <p class="dialogue">ĐŘAVÜK speaks:</p>
    <p class="dialogue">${response}</p>

    <div class="choices">
      <button onclick="receiveFeatherGift()">Receive the Mythic Feather</button>
    </div>
  `;
}

function receiveFeatherGift() {
  document.getElementById("game").innerHTML = `
    <img src="dravukpix.png" class="npc-sprite" alt="Pixel ĐŘAVÜK" />

    <h2>You received: Mythic Feather of Sovereignty 🪶</h2>

    <p class="dialogue">
      A feather of impossible colors falls into your hands.<br><br>
      “You are free...<br>
      it's your nature,<br>
      it's in your bones.<br><br>
      So, be bold, be wild, dare to fly!<br>
      Write your own story...”<br><br>
      The feather glows.<br>
      A hidden network begins to awaken beneath the garden.
    </p>

    <div class="choices">
      <button onclick="startMycelialPortal()">Continue</button>
    </div>
  `;
}

function startMycelialPortal() {
  document.getElementById("game").innerHTML = `
    <h2>The Fourth Portal Begins to Awaken</h2>

    <p class="dialogue">
      The Mythic Feather becomes still.<br>
      Beneath your feet, unseen threads begin to glow.<br><br>
      The Mycelial Realm is near.<br>
      The Invisible Network is listening.
    </p>

    <div class="choices">
      <button onclick="alert('Next: MỸW — Mycelial Realm')">Continue</button>
    </div>
  `;
}
