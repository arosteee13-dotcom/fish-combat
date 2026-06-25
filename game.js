/* ===== FISH DATA ===== */
const FISH_TYPES = [
  {
    id: 'shark',
    name: 'Tiburón',
    emoji: '🦈',
    maxHp: 130,
    attacks: [
      { name: 'Mordiscón', damage: 40, emoji: '🦷' },
      { name: 'Coletazo', damage: 25, emoji: '💥' }
    ]
  },
  {
    id: 'pufferfish',
    name: 'Pez Globo',
    emoji: '🐡',
    maxHp: 110,
    attacks: [
      { name: 'Pinchazo', damage: 30, emoji: '📍' },
      { name: 'Explosión', damage: 45, emoji: '💣' }
    ]
  },
  {
    id: 'clownfish',
    name: 'Pez Payaso',
    emoji: '🐠',
    maxHp: 90,
    attacks: [
      { name: 'Rasguño', damage: 25, emoji: '🔪' },
      { name: 'Burbuja', damage: 15, emoji: '🫧' }
    ]
  }
];

/* ===== GAME STATE ===== */
const state = {
  screen: 'main',
  selectedFishId: null,
  activeSection: 'fight',
  player: null,
  enemy: null,
  isPlayerTurn: true,
  gameOver: false,
  isAnimating: false
};

/* ===== DOM HELPERS ===== */
const $ = (id) => document.getElementById(id);

const dom = {
  screenMain: $('screen-main'),
  screenCombat: $('screen-combat'),
  screenResult: $('screen-result'),
  bottomNav: $('bottom-nav'),

  sectionFight: $('section-fight'),
  sectionBank: $('section-bank'),
  sectionShop: $('section-shop'),
  sectionSettings: $('section-settings'),

  fightContent: $('fight-content'),
  bankCards: $('bank-cards'),
  btnBattle: $('btn-battle'),
  btnSave: $('btn-save'),
  btnRestart: $('btn-restart'),

  enemyName: $('enemy-name'),
  enemyHpText: $('enemy-hp-text'),
  enemyHpFill: $('enemy-hp-fill'),
  enemyEmoji: $('enemy-emoji'),
  enemyArea: $('enemy-area'),
  playerName: $('player-name'),
  playerHpText: $('player-hp-text'),
  playerHpFill: $('player-hp-fill'),
  playerEmoji: $('player-emoji'),
  playerArea: $('player-area'),
  attackMenu: $('attack-menu'),
  logMessage: $('log-message'),
  resultTitle: $('result-title'),
  resultEmoji: $('result-emoji'),
  resultSub: $('result-sub')
};

/* ===== UTILITY ===== */
function getFishById(id) {
  return FISH_TYPES.find(f => f.id === id);
}

function randomFish() {
  return FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)];
}

function createFishInstance(type) {
  return { type, currentHp: type.maxHp, maxHp: type.maxHp };
}

function clamp(val, min, max) {
  return Math.min(max, Math.max(min, val));
}

/* ===== SCREEN MANAGEMENT ===== */
function showScreen(screenName) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screenMap = { main: dom.screenMain, combat: dom.screenCombat, result: dom.screenResult };
  if (screenMap[screenName]) screenMap[screenName].classList.add('active');
  state.screen = screenName;
}

/* ===== NAVEGACIÓN ENTRE SECCIONES ===== */
function showSection(sectionId) {
  const sections = ['fight', 'bank', 'shop', 'settings'];
  sections.forEach(id => {
    const el = document.getElementById(`section-${id}`);
    const tab = document.querySelector(`[data-tab="${id}"]`);
    if (el) el.classList.toggle('active', id === sectionId);
    if (tab) tab.classList.toggle('active', id === sectionId);
  });
  state.activeSection = sectionId;
}

/* ===== PERSISTENCIA (localStorage) ===== */
function saveGame() {
  if (state.selectedFishId) {
    localStorage.setItem('fba_selectedFish', state.selectedFishId);
  }
  alert('¡Progreso guardado!');
}

function autoSaveSelection() {
  if (state.selectedFishId) {
    localStorage.setItem('fba_selectedFish', state.selectedFishId);
  }
}

function loadSavedSelection() {
  const saved = localStorage.getItem('fba_selectedFish');
  if (saved && getFishById(saved)) {
    state.selectedFishId = saved;
  }
}

/* ===== SECCIÓN: LUCHAR ===== */
function renderFightContent() {
  const fish = state.selectedFishId ? getFishById(state.selectedFishId) : null;

  if (!fish) {
    dom.fightContent.innerHTML = `
      <div class="fight-empty">
        <p style="font-size:3rem;margin-bottom:0.5rem;">🐟</p>
        <p>Ve al <strong>Banco</strong> y selecciona un pez para la batalla</p>
      </div>
    `;
    dom.btnBattle.disabled = true;
    return;
  }

  const attacksHtml = fish.attacks.map(a =>
    `<span class="fight-card-attack">${a.emoji} ${a.name} (${a.damage} dmg)</span>`
  ).join('');

  dom.fightContent.innerHTML = `
    <div class="fight-card">
      <span class="fight-card-emoji">${fish.emoji}</span>
      <div class="fight-card-name">${fish.name}</div>
      <div class="fight-card-hp">❤️ ${fish.maxHp} HP</div>
      <div class="fight-card-attacks">${attacksHtml}</div>
    </div>
  `;

  dom.btnBattle.disabled = false;
}

/* ===== SECCIÓN: BANCO ===== */
function renderBank() {
  dom.bankCards.innerHTML = '';

  FISH_TYPES.forEach(fish => {
    const card = document.createElement('div');
    card.className = 'fish-card';
    card.dataset.fishId = fish.id;
    if (state.selectedFishId === fish.id) card.classList.add('selected');

    const attacksHtml = fish.attacks.map(a =>
      `<span class="fish-card-attack">${a.emoji} ${a.name} (${a.damage})</span>`
    ).join('');

    const badge = state.selectedFishId === fish.id
      ? '<span class="fish-card-badge">ACTIVO</span>'
      : '';

    card.innerHTML = `
      <div class="fish-card-emoji">${fish.emoji}</div>
      <div class="fish-card-info">
        <div class="fish-card-name">${fish.name} ${badge}</div>
        <div class="fish-card-hp">❤️ ${fish.maxHp} HP</div>
        <div class="fish-card-attacks">${attacksHtml}</div>
      </div>
    `;

    card.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      selectFish(fish.id);
    });

    dom.bankCards.appendChild(card);
  });
}

function selectFish(fishId) {
  if (state.isAnimating) return;
  state.selectedFishId = fishId;
  renderBank();
  renderFightContent();
  autoSaveSelection();
  updateBattleButton();
}

function updateBattleButton() {
  dom.btnBattle.disabled = !state.selectedFishId;
}

/* ===== COMBATE ===== */
function initCombat() {
  const playerFish = getFishById(state.selectedFishId);
  const enemyFish = randomFish();

  state.player = createFishInstance(playerFish);
  state.enemy = createFishInstance(enemyFish);
  state.isPlayerTurn = true;
  state.gameOver = false;
  state.isAnimating = false;

  renderCombat();
  showScreen('combat');
  dom.logMessage.textContent = '¡Comienza la batalla! Ataca primero.';
}

function renderCombat() {
  const p = state.player;
  const e = state.enemy;

  dom.playerName.textContent = p.type.name;
  dom.playerEmoji.textContent = p.type.emoji;
  dom.enemyName.textContent = e.type.name;
  dom.enemyEmoji.textContent = e.type.emoji;

  updateHpBars();
  renderAttackButtons();
}

function renderAttackButtons() {
  dom.attackMenu.innerHTML = '';
  const attacks = state.player.type.attacks;

  attacks.forEach((atk, index) => {
    const btn = document.createElement('button');
    btn.className = 'btn-attack';
    btn.dataset.index = index;
    btn.innerHTML = `
      <span class="atk-emoji">${atk.emoji}</span>
      <span class="atk-name">${atk.name}</span>
      <span class="atk-dmg">${atk.damage} de daño</span>
    `;

    btn.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      playerAttack(index);
    });

    dom.attackMenu.appendChild(btn);
  });

  updateAttackButtons();
}

function updateAttackButtons() {
  const buttons = dom.attackMenu.querySelectorAll('.btn-attack');
  const canAttack = state.isPlayerTurn && !state.gameOver && !state.isAnimating;
  buttons.forEach(btn => {
    btn.disabled = !canAttack;
    btn.classList.toggle('disabled', !canAttack);
  });
}

function updateHpBars() {
  const p = state.player;
  const e = state.enemy;

  const pPct = (p.currentHp / p.maxHp) * 100;
  const ePct = (e.currentHp / e.maxHp) * 100;

  dom.playerHpFill.style.width = clamp(pPct, 0, 100) + '%';
  dom.enemyHpFill.style.width = clamp(ePct, 0, 100) + '%';

  dom.playerHpFill.style.background = hpColor(pPct);
  dom.enemyHpFill.style.background = hpColor(ePct);

  dom.playerHpText.textContent = `${Math.ceil(p.currentHp)}/${p.maxHp}`;
  dom.enemyHpText.textContent = `${Math.ceil(e.currentHp)}/${e.maxHp}`;
}

function hpColor(pct) {
  if (pct > 60) return '#4caf50';
  if (pct > 30) return '#ff9800';
  return '#f44336';
}

function setLogMessage(msg, isImportant) {
  dom.logMessage.textContent = msg;
  dom.logMessage.style.fontWeight = isImportant ? '700' : '400';
}

/* ===== ATAQUES ===== */
function playerAttack(index) {
  if (!state.isPlayerTurn || state.gameOver || state.isAnimating) return;
  state.isAnimating = true;
  updateAttackButtons();

  const atk = state.player.type.attacks[index];
  const dmg = atk.damage;

  state.enemy.currentHp = Math.max(0, state.enemy.currentHp - dmg);
  setLogMessage(`¡${state.player.type.name} usa ${atk.name}! -${dmg} HP`, true);

  animateHit(dom.enemyArea);
  updateHpBars();

  if (state.enemy.currentHp <= 0) {
    state.gameOver = true;
    setTimeout(() => showResult(true), 800);
    return;
  }

  state.isPlayerTurn = false;
  setTimeout(doEnemyTurn, 1200);
}

function doEnemyTurn() {
  if (state.gameOver) return;

  const atk = state.enemy.type.attacks[Math.floor(Math.random() * state.enemy.type.attacks.length)];
  const dmg = atk.damage;

  state.player.currentHp = Math.max(0, state.player.currentHp - dmg);
  setLogMessage(`¡${state.enemy.type.name} usa ${atk.name}! -${dmg} HP`, true);

  animateHit(dom.playerArea);
  updateHpBars();

  if (state.player.currentHp <= 0) {
    state.gameOver = true;
    setTimeout(() => showResult(false), 800);
    return;
  }

  state.isPlayerTurn = true;
  state.isAnimating = false;
  setLogMessage('¡Tu turno! Elige un ataque.');
  updateAttackButtons();
}

function animateHit(target) {
  target.classList.remove('shake', 'flash-damage');
  void target.offsetWidth;
  target.classList.add('shake');
  target.classList.add('flash-damage');
  setTimeout(() => {
    target.classList.remove('shake', 'flash-damage');
  }, 500);
}

/* ===== RESULTADO ===== */
function showResult(victory) {
  showScreen('result');

  dom.resultTitle.textContent = victory ? '¡VICTORIA!' : 'DERROTA';
  dom.resultTitle.className = 'result-title ' + (victory ? 'victory' : 'defeat');
  dom.resultEmoji.textContent = victory ? '🏆' : '💀';
  dom.resultSub.textContent = victory
    ? `¡${state.player.type.name} ha vencido a ${state.enemy.type.name}!`
    : `${state.enemy.type.name} ha derrotado a ${state.player.type.name}...`;
}

/* ===== REINICIO ===== */
function resetGame() {
  state.player = null;
  state.enemy = null;
  state.isPlayerTurn = true;
  state.gameOver = false;
  state.isAnimating = false;

  renderFightContent();
  renderBank();
  showSection('fight');
  showScreen('main');
}

/* ===== EVENTOS ===== */
function setupEvents() {
  dom.btnBattle.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if (!state.selectedFishId || state.isAnimating) return;
    initCombat();
  });

  dom.btnRestart.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    resetGame();
  });

  dom.btnSave.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    saveGame();
  });

  dom.bottomNav.addEventListener('pointerdown', (e) => {
    const tab = e.target.closest('.nav-tab');
    if (!tab) return;
    e.preventDefault();
    const sectionId = tab.dataset.tab;
    if (sectionId) showSection(sectionId);
  });
}

/* ===== INICIALIZACIÓN ===== */
function init() {
  loadSavedSelection();
  setupEvents();
  renderFightContent();
  renderBank();
  showSection('fight');
  showScreen('main');
}

document.addEventListener('DOMContentLoaded', init);
