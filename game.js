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
      And wrong, this is not.<br><br>
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
      <button onclick="askAion('ÂIÖN, ¿quién soy yo ante la memoria de la piedra?')">Who am I?</button>
      <button onclick="askAion('ÂIÖN, ¿qué sostengo dentro de mí?')">What do I carry?</button>
      <button onclick="askAion('ÂIÖN, muéstrame mi esencia desde el Reino Mineral.')">My essence</button>
    </div>

    <div id="aion-response"></div>
  `;
}

async function askAion(question) {
  const responseBox = document.getElementById("aion-response");

  if (aionQuestionsAsked >= 3) {
    responseBox.innerHTML = `
      <p class="dialogue">
        ÂIÖN returns to silence.<br><br>
        “Three questions have been asked.<br>
        Now… hold what has been remembered.”
      </p>
    `;
    return;
  }

  aionQuestionsAsked++;

  responseBox.innerHTML = `
    <p class="dialogue">ÂIÖN listens from within the stone...</p>
  `;

  try {
    const response = await fetch("http://127.0.0.1:8643/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer jedi-local-key",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "hermes-agent",
        messages: [
          {
            role: "user",
            content: question
          }
        ]
      })
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "ÂIÖN remains silent.";

    responseBox.innerHTML = `
      <p class="dialogue">“${text.replace(/\n/g, "<br>")}”</p>
      <p class="counter">Questions used: ${aionQuestionsAsked}/3</p>
    `;
  } catch (error) {
    responseBox.innerHTML = `
      <p class="dialogue">
        The stone signal did not arrive.<br><br>
        Make sure ÂIÖN gateway is running.
      </p>
    `;
  }
}
