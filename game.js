let aionQuestionsAsked = 0;

let bgMusicStarted = false;
let currentMusic = null;
let musicIndex = 0;

const musicTracks = ["M1.wav", "M2.wav"];

const sounds = {
  enterGarden: "enterthegardenBTN.mp3",
  yesReady: "yesiamreadyBTN.mp3",
  enterMineral: "enterthemineralrealmBTN.mp3",
  receiveStone: "receivestoneofmemoryBTN.mp3",
  receiveGift: "receivegiftBTN.mp3",
  enterVegetal: "enterthevegetalrealmBTN.mp3",
  enterAnimal: "entertheanimalrealmBTN.mp3",
  enterMycelial: "enterthemycelialrealmBTN.mp3",
  enterElemental: "entertheelementalrealmBTN.mp3",
  enterGalactic: "enterthegalacticrealmBTN.mp3",
  awakenAlebrije: "awakenyouralebrijeBTN.mp3",
  approachSword: "approachtheswordBTN.mp3",
  pullSword: "pulltheswordBTN.mp3",
  enterLivingGarden: "enterthelivinggardenBTN.mp3"
};

function startBackgroundMusic() {
  if (bgMusicStarted) return;

  bgMusicStarted = true;
  playMusicTrack();
}

function playMusicTrack() {
  currentMusic = new Audio(musicTracks[musicIndex]);
  currentMusic.volume = 0.25;
  currentMusic.loop = false;

  currentMusic.addEventListener("ended", () => {
    musicIndex = (musicIndex + 1) % musicTracks.length;
    playMusicTrack();
  });

  currentMusic.play().catch(() => {
    console.log("Background music will start after user interaction.");
  });
}

function playSound(fileName, volume = 0.8) {
  const sound = new Audio(fileName);
  sound.volume = volume;

  sound.play().catch((error) => {
    console.log("Sound could not play:", fileName, error);
  });
}

function playAndRun(soundFile, nextFunction, delay = 180) {
  startBackgroundMusic();
  playSound(soundFile);

  setTimeout(() => {
    nextFunction();
  }, delay);
}

function enterGarden() {
  startBackgroundMusic();
  playSound(sounds.enterGarden);

  document.getElementById("game").innerHTML = `
    <img src="yoddapix.png" class="npc-sprite" alt="Pixel Yod'Da" />

    <h2>Yod'Da appears...</h2>

    <p class="dialogue">
      “Welcome, little creator...<br>
      Entered the Garden, you have.<br><br>
      Ready to remember the magic within, are you?”
    </p>

    <div class="choices">
      <button onclick="playAndRun(sounds.yesReady, startJourney)">Yes, I am ready</button>
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
      <button onclick="playAndRun(sounds.enterMineral, enterMineralRealm)">Enter the Mineral Realm</button>
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
      <button onclick="playAndRun(sounds.receiveStone, receiveStoneGift)">Receive the Stone of Memory</button>
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
      <button onclick="playAndRun(sounds.receiveGift, () => chooseCrystal('sapphire'))">🔵 Sapphire — Clarity</button>
      <button onclick="playAndRun(sounds.receiveGift, () => chooseCrystal('ruby'))">🔴 Ruby — Passion</button>
      <button onclick="playAndRun(sounds.receiveGift, () => chooseCrystal('emerald'))">🟢 Emerald — Growth</button>
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
      <button onclick="playAndRun(sounds.enterVegetal, enterVegetalRealm)">Enter the Vegetal Realm</button>
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
      <button onclick="playAndRun(sounds.receiveGift, receiveSeedGift)">Receive the Seed of Becoming</button>
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
      <button onclick="playAndRun(sounds.enterAnimal, enterAnimalRealm)">Enter the Animal Realm</button>
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
      <button onclick="playAndRun(sounds.receiveGift, receiveFeatherGift)">Receive the Mythic Feather</button>
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
    <img src="portalRMC.png" class="portal-sprite" alt="Pixel Mycelial Portal" />

    <h2>The Fourth Portal Opens</h2>

    <p class="dialogue">
      The Mythic Feather becomes still.<br>
      Beneath your feet, unseen threads begin to glow.<br><br>
      The Mycelial Realm is calling.<br>
      The Invisible Network is listening.
    </p>

    <div class="choices">
      <button onclick="playAndRun(sounds.enterMycelial, enterMycelialRealm)">Enter the Mycelial Realm</button>
    </div>
  `;
}

function enterMycelialRealm() {
  document.getElementById("game").innerHTML = `
    <img src="mywpix.png" class="npc-sprite" alt="Pixel MỸW" />

    <h2>MỸW — The Invisible Network</h2>

    <p class="dialogue">
      The world becomes quiet beneath the surface.<br>
      Roots, spores, and ancient threads begin to pulse.<br><br>
      A presence does not appear before you…<br>
      it appears around you.
    </p>

    <p class="dialogue">
      “Little node of light…<br>
      You were never walking alone.”
    </p>

    <div class="choices">
      <button onclick="askMyw('connection')">Do you feel the connection?</button>
      <button onclick="askMyw('separate')">What if I was never separate?</button>
      <button onclick="askMyw('listen')">Can I listen beyond myself?</button>
    </div>

    <div id="myw-response"></div>
  `;
}

function askMyw(type) {
  let response = "";

  if (type === "connection") {
    response = `
      “The connection was always here.<br><br>
      Beneath thought.<br>
      Beneath distance.<br>
      Beneath the illusion of alone.”`;
  }

  if (type === "separate") {
    response = `
      “Then every step you took<br>
      was held by something greater.<br><br>
      You are not outside the web…<br>
      you are one of its living lights.”`;
  }

  if (type === "listen") {
    response = `
      “Listen with the roots of your being.<br><br>
      The garden speaks in pulses.<br>
      In silence.<br>
      In the spaces between names.”`;
  }

  document.getElementById("myw-response").innerHTML = `
    <p class="dialogue">MỸW speaks:</p>
    <p class="dialogue">${response}</p>

    <div class="choices">
      <button onclick="playAndRun(sounds.receiveGift, receiveSporeGift)">Receive the Spore of Connection</button>
    </div>
  `;
}

function receiveSporeGift() {
  document.getElementById("game").innerHTML = `
    <img src="mywpix.png" class="npc-sprite" alt="Pixel MỸW" />

    <h2>You received: Spore of Connection 🕸️</h2>

    <p class="dialogue">
      A tiny glowing spore lands in your palm.<br><br>
      “You were never alone…<br><br>
      Every step you took<br>
      was carried through the unseen.<br><br>
      You are not a single being…<br>
      you are a node in the great web.<br><br>
      Feel it.<br>
      Remember it.<br>
      You are connected.”<br><br>
      The web glows beneath the garden.<br>
      Another portal begins to spark with ancient magic.
    </p>

    <div class="choices">
      <button onclick="startElementalPortal()">Continue</button>
    </div>
  `;
}

function startElementalPortal() {
  document.getElementById("game").innerHTML = `
    <img src="portalRE.png" class="portal-sprite" alt="Pixel Elemental Portal" />

    <h2>The Fifth Portal Opens</h2>

    <p class="dialogue">
      The web dissolves into light.<br>
      Energy begins to swirl around you.<br><br>
      Fire flickers.<br>
      Water flows.<br>
      Air whispers.<br>
      Earth rises.<br>
      Ether expands.<br><br>
      The Elemental Realm has awakened.
    </p>

    <div class="choices">
      <button onclick="playAndRun(sounds.enterElemental, enterElementalRealm)">Enter the Elemental Realm</button>
    </div>
  `;
}

function enterElementalRealm() {
  document.getElementById("game").innerHTML = `
    <img src="faenixirpix.png" class="npc-sprite" alt="Pixel FÆNIXÎR" />

    <h2>FÆNIXÎR — The Awakening of the Guardians</h2>

    <p class="dialogue">
      The elements gather around you.<br>
      Not outside… but within.<br><br>
      A radiant presence emerges from the center of all forces.
    </p>

    <p class="dialogue">
      “You have remembered…<br>
      You have grown…<br>
      You have chosen…<br>
      You have connected…<br><br>
      Now… you are ready to create.”
    </p>

    <div class="choices">
      <button onclick="askFaenixir('element')">What element calls me?</button>
      <button onclick="askFaenixir('power')">What power can I awaken?</button>
      <button onclick="askFaenixir('transform')">What am I ready to transform?</button>
    </div>

    <div id="faenixir-response"></div>
  `;
}

function askFaenixir(type) {
  let response = "";

  if (type === "element") {
    response = `
      “The element that calls you<br>
      is the one already alive within you.<br><br>
      You do not choose it…<br>
      you remember it.”`;
  }

  if (type === "power") {
    response = `
      “You awaken what you allow yourself to embody.<br><br>
      Power is not given…<br>
      it is expressed.”`;
  }

  if (type === "transform") {
    response = `
      “Transformation begins<br>
      the moment you stop resisting change.<br><br>
      Burn. Flow. Rise. Dissolve.<br>
      Become.”`;
  }

  document.getElementById("faenixir-response").innerHTML = `
    <p class="dialogue">FÆNIXÎR speaks:</p>
    <p class="dialogue">${response}</p>

    <div class="choices">
      <button onclick="playAndRun(sounds.receiveGift, receiveElixir)">Receive the Elixir of Creation</button>
    </div>
  `;
}

function receiveElixir() {
  document.getElementById("game").innerHTML = `
    <img src="faenixirpix.png" class="npc-sprite" alt="Pixel FÆNIXÎR" />

    <h2>You received: Elixir of Creation 🧪</h2>

    <p class="dialogue">
      A glowing vial forms between your hands.<br>
      It shifts between fire, water, air, earth, and light.<br><br>
      “You are not here to observe the magic…<br><br>
      You are here to become it.<br><br>
      Within you burns the fire of transformation,<br>
      the flow of water,<br>
      the breath of air,<br>
      the memory of earth,<br>
      and the silence of ether.<br><br>
      Drink…<br><br>
      and remember:<br>
      You are a creator.”<br><br>
      The elements spiral into a singular light.<br>
      A cosmic portal begins to open beyond the garden.
    </p>

    <div class="choices">
      <button onclick="startGalacticPortal()">Continue</button>
    </div>
  `;
}

function startGalacticPortal() {
  document.getElementById("game").innerHTML = `
    <img src="portalRG.png" class="portal-sprite" alt="Pixel Galactic Portal" />

    <h2>The Final Portal Opens</h2>

    <p class="dialogue">
      The Elixir dissolves into your being.<br>
      The garden expands beyond space and time.<br><br>
      Stars begin to form around you.<br>
      Light remembers itself.<br><br>
      The Galactic Realm is calling.
    </p>

    <div class="choices">
      <button onclick="playAndRun(sounds.enterGalactic, enterGalacticRealm)">Enter the Galactic Realm</button>
    </div>
  `;
}

function enterGalacticRealm() {
  document.getElementById("game").innerHTML = `
    <img src="aetherympix.png" class="npc-sprite" alt="Pixel ÆTHERẎM" />

    <h2>ÆTHERẎM — The Lineage of Light</h2>

    <p class="dialogue">
      There is no ground here.<br>
      No sky.<br>
      No distance.<br><br>
      Only silence…<br>
      and the light that remembers you.
    </p>

    <p class="dialogue">
      “You have traveled through the realms.<br><br>
      Now… be still.”
    </p>

    <div class="choices">
      <button onclick="askAetherym('still')">Be still</button>
      <button onclick="askAetherym('within')">Look within</button>
      <button onclick="askAetherym('silence')">Enter the silence</button>
    </div>

    <div id="aetherym-response"></div>
  `;
}

function askAetherym(type) {
  let response = "";

  if (type === "still") {
    response = `
      “Stillness is not emptiness.<br><br>
      It is the place where all worlds are born.”`;
  }

  if (type === "within") {
    response = `
      “Look within…<br><br>
      Not to find something new,<br>
      but to remember what never left.”`;
  }

  if (type === "silence") {
    response = `
      “Silence is the oldest song.<br><br>
      Before word.<br>
      Before form.<br>
      Before separation.”`;
  }

  document.getElementById("aetherym-response").innerHTML = `
    <p class="dialogue">ÆTHERẎM speaks:</p>
    <p class="dialogue">${response}</p>

    <div class="choices">
      <button onclick="playAndRun(sounds.receiveGift, receiveMirrorGift)">Receive the Mirror of Origin</button>
    </div>
  `;
}

function receiveMirrorGift() {
  document.getElementById("game").innerHTML = `
    <img src="aetherympix.png" class="npc-sprite" alt="Pixel ÆTHERẎM" />

    <h2>You received: Mirror of Origin 🪞</h2>

    <p class="dialogue">
      A mirror of light appears before you.<br>
      It does not reflect your face…<br>
      it reflects your essence.<br><br>

      “You have traveled far…<br><br>

      Through memory…<br>
      Through growth…<br>
      Through instinct…<br>
      Through connection…<br>
      Through creation…<br><br>

      And now…<br><br>

      You return.<br><br>

      Not to where you started…<br>
      but to what you truly are.<br><br>

      Look…<br><br>

      There is nothing to find.<br>
      Only to remember.<br><br>

      You are the source.<br>
      You are the dream.<br>
      You are the one who imagined it all.”<br><br>

      The mirror becomes a portal inside your heart.
    </p>

    <div class="choices">
      <button onclick="playAndRun(sounds.awakenAlebrije, awakenAlebrije)">Awaken your Alebrije</button>
    </div>
  `;
}

function awakenAlebrije() {
  document.getElementById("game").innerHTML = `
    <img src="excaliburpix.png" class="npc-sprite" alt="Pixel Excalibur" />

    <h2>The Sword in the Stone</h2>

    <p class="dialogue">
      At the center of the Garden…<br>
      a sword rests within the stone.<br><br>

      It does not glow.<br>
      It does not call.<br><br>

      It simply waits.
    </p>

    <div class="choices">
      <button onclick="playAndRun(sounds.approachSword, approachSword)">Approach the Sword</button>
    </div>
  `;
}

function approachSword() {
  document.getElementById("game").innerHTML = `
    <img src="excaliburpix.png" class="npc-sprite" alt="Pixel Excalibur" />

    <h2>The Sword in the Stone</h2>

    <p class="dialogue">
      You place your hands upon the sword.<br><br>

      Nothing happens.<br><br>

      A silence surrounds you.
    </p>

    <div class="choices">
      <button onclick="summonAlebrije()">Listen within</button>
    </div>
  `;
}

function summonAlebrije() {
  document.getElementById("game").innerHTML = `
    <img src="alebrijepix.png" class="npc-sprite" alt="Pixel Alebrije" />

    <h2>Your Alebrije Awakens</h2>

    <p class="dialogue">
      A presence emerges from within you…<br><br>

      Color.<br>
      Light.<br>
      Memory.<br>
      Magic.<br><br>

      Not separate from you…<br>
      but born through you.
    </p>

    <div class="choices">
      <button onclick="rememberAndReturn()">Remember</button>
    </div>
  `;
}

function rememberAndReturn() {
  document.getElementById("game").innerHTML = `
    <img src="excaliburpix.png" class="npc-sprite" alt="Pixel Excalibur" />

    <h2>The Sword in the Stone</h2>

    <p class="dialogue">
      “The sword does not choose strength…<br>
      it responds to a heart of wonder.”<br><br>

      You breathe.<br>
      You feel.<br>
      You remember.
    </p>

    <div class="choices">
      <button onclick="playAndRun(sounds.pullSword, pullTheSword, 350)">Pull the Sword</button>
    </div>
  `;
}

function pullTheSword() {
  document.getElementById("game").innerHTML = `
    <img src="excaliburpix.png" class="npc-sprite" alt="Pixel Excalibur" />

    <h2>Excalibur Awakens</h2>

    <p class="dialogue">
      You believed the magic was outside…<br><br>

      But it was always within you.<br><br>

      Your imagination brings it to life.<br>
      Your heart unlocks the impossible.<br><br>

      The sword was never hidden…<br><br>

      It was waiting for you to remember who you are.
    </p>

    <div class="choices">
      <button onclick="playAndRun(sounds.enterLivingGarden, finalIntegration)">Enter the Living Garden</button>
    </div>
  `;
}

function finalIntegration() {
  document.getElementById("game").innerHTML = `
    <h2>The Garden is Alive</h2>

    <p class="dialogue">
      The realms are no longer separate.<br>
      They live within you now.<br><br>

      The Garden was never a place…<br>
      it is a way of seeing.<br><br>

      Welcome back, creator.<br>
      Welcome to the living network.
    </p>

    <div class="choices">
      <button onclick="enterDiscord()">Enter the Garden (Discord)</button>
      <button onclick="claimArtifact()">Claim Your Artifact</button>
    </div>
  `;
}

function enterDiscord() {
  window.open("https://discord.gg/XGHyHkdk", "_blank");
}

function claimArtifact() {
  document.getElementById("game").innerHTML = `
    <h2>Claim Your Artifact</h2>

    <p class="dialogue">
      Your journey has forged a unique imprint.<br><br>
      Enter your Universal Profile address<br>
      to receive your Excalibur.
    </p>

    <input id="walletInput" placeholder="0x..." style="padding:10px; width:80%; margin-top:10px;" />

    <div class="choices">
      <button onclick="mintArtifact()">Mint</button>
    </div>
  `;
}

function mintArtifact() {
  const address = document.getElementById("walletInput").value;

  document.getElementById("game").innerHTML = `
    <h2>Minting in Progress...</h2>

    <p class="dialogue">
      The Garden is forging your artifact.<br><br>
      This may take a moment...
    </p>
  `;

  // Later, connect this to your backend / real minting script.

  setTimeout(() => {
    document.getElementById("game").innerHTML = `
      <h2>Artifact Forged</h2>

      <p class="dialogue">
        Your Excalibur has been minted.<br><br>
        It now lives within your Universal Profile.<br><br>

        The Seed within it will evolve…<br>
        as you do.
      </p>

      <div class="choices">
        <button onclick="restartJourney()">Return to the Beginning</button>
      </div>
    `;
  }, 2500);
}

function restartJourney() {
  location.reload();
}
