/* ===== RARITY CONFIG ===== */
const RARITY_CONFIG = {
  common:    { label: 'COMÚN',    css: 'common' },
  rare:      { label: 'RARO',     css: 'rare' },
  epic:      { label: 'ÉPICO',    css: 'epic' },
  legendary: { label: 'LEGENDARIO',  css: 'legendary' }
};
const RARITY_ORDER = { common: 0, rare: 1, epic: 2, legendary: 3 };

/* ===== FISH DATA ===== */
const FISH_TYPES = [
  {
    id: 'clownfish',
    name: 'Pez Payaso',
    rarity: 'common',
    imgPath: 'img/payaso.png',
    emoji: '🐠',
    maxHp: 12, atk: 4, def: 5, spa: 4, spd: 5, spe: 4,
    growth: { maxHp: 1.2, atk: 0.4, def: 0.5, spa: 0.4, spd: 0.5, spe: 0.4 },
    attacks: [
      { name: 'Placaje Acuático', power: 20, emoji: '🌊', categoria: 'Fisico' },
      { name: 'Burbuja', power: 20, emoji: '🫧', categoria: 'Especial' }
    ],
    passive: {
      name: 'Piel Escurridiza',
      description: '30% de probabilidad de esquivar por completo cualquier ataque físico del rival.'
    }
  },
  {
    id: 'pufferfish',
    name: 'Pez Globo',
    rarity: 'rare',
    imgPath: 'img/globo.png',
    emoji: '🐡',
    maxHp: 14, atk: 6, def: 4, spa: 5, spd: 3, spe: 1,
    growth: { maxHp: 1.5, atk: 0.6, def: 0.4, spa: 0.5, spd: 0.3, spe: 0.1 },
    attacks: [
      { name: 'Pinchazo', power: 25, emoji: '📍', categoria: 'Fisico' },
      { name: 'Disparo de Agua', power: 25, emoji: '💦', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Púas Tóxicas',
      description: '30% de probabilidad de envenenar al atacante al recibir un ataque físico.'
    }
  },
  {
    id: 'salmonete',
    name: 'Salmonete',
    rarity: 'common',
    imgPath: 'img/salmonete.png',
    emoji: '🐟',
    maxHp: 10, atk: 4, def: 3, spa: 2, spd: 3, spe: 6,
    growth: { maxHp: 1.0, atk: 0.4, def: 0.3, spa: 0.2, spd: 0.3, spe: 0.6 },
    attacks: [
      { name: 'Placaje Acuático', power: 20, emoji: '🌊', categoria: 'Fisico' },
      { name: 'Disparo de Arena', power: 15, emoji: '🏖️', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'precision_reducida', turns: 2 } }
    ],
    passive: {
      name: 'Barbillones',
      description: 'Aumenta su ataque físico en +0.5 al inicio del combate.'
    }
  },
  {
    id: 'blenio',
    name: 'Blenio',
    rarity: 'common',
    imgPath: 'img/blenio.png',
    emoji: '🐍',
    maxHp: 11, atk: 3, def: 4, spa: 3, spd: 4, spe: 5,
    growth: { maxHp: 1.1, atk: 0.3, def: 0.4, spa: 0.3, spd: 0.4, spe: 0.5 },
    attacks: [
      { name: 'Placaje Acuático', power: 20, emoji: '🌊', categoria: 'Fisico' },
      { name: 'Disparo de Agua', power: 25, emoji: '💦', categoria: 'Especial' }
    ],
    passive: {
      name: 'Anfibio',
      description: 'Aumenta un 5% su probabilidad de esquivar ataques físicos de forma pasiva.'
    }
  },
  {
    id: 'cabracho',
    name: 'Cabracho',
    rarity: 'rare',
    imgPath: 'img/cabracho.png',
    emoji: '🦎',
    maxHp: 13, atk: 5, def: 7, spa: 1, spd: 5, spe: 2,
    growth: { maxHp: 1.3, atk: 0.5, def: 0.7, spa: 0.1, spd: 0.5, spe: 0.2 },
    attacks: [
      { name: 'Mordisco', power: 25, emoji: '🦷', categoria: 'Fisico' },
      { name: 'Disparo de Agua', power: 25, emoji: '💦', categoria: 'Especial' }
    ],
    passive: {
      name: 'Mimetismo Rocoso',
      description: 'El primer golpe físico recibido en combate inflige un 50% menos de daño.'
    }
  },
  {
    id: 'anemona',
    name: 'Anémona de Mar',
    rarity: 'rare',
    imgPath: 'img/anemona_de_mar.png',
    emoji: '🪸',
    maxHp: 13, atk: 2, def: 5, spa: 6, spd: 6, spe: 1,
    growth: { maxHp: 1.3, atk: 0.2, def: 0.5, spa: 0.6, spd: 0.6, spe: 0.1 },
    attacks: [
      { name: 'Látigo de Alga', power: 20, emoji: '🌿', categoria: 'Especial' },
      { name: 'Tentáculo Urticante', power: 25, emoji: '🪸', categoria: 'Especial', efecto: { probabilidad: 0.2, estado: 'paralizado' } }
    ],
    passive: {
      name: 'Tentáculos Pegajosos',
      description: '15% de probabilidad de atrapar al rival tras recibir un ataque físico, impidiéndole cambiar de pez el siguiente turno.'
    }
  },
  {
    id: 'cangrejo',
    name: 'Cangrejo Ermitaño',
    rarity: 'common',
    imgPath: 'img/cangrejo_ermitano.png',
    emoji: '🦀',
    maxHp: 15, atk: 4, def: 7, spa: 1, spd: 4, spe: 2,
    growth: { maxHp: 1.5, atk: 0.4, def: 0.7, spa: 0.1, spd: 0.4, spe: 0.2 },
    attacks: [
      { name: 'Pinza de Concha', power: 20, emoji: '🦀', categoria: 'Fisico' },
      { name: 'Refugio en Concha', power: 0, emoji: '🐚', categoria: 'Efecto', efecto: { estado: 'def_boost', turns: 2, amount: 2 } }
    ],
    passive: {
      name: 'Coraza Prestada',
      description: 'El primer ataque físico recibido en combate ve su daño reducido a la mitad (-50%).'
    }
  },
  {
    id: 'pulpo',
    name: 'Pulpo de Roca',
    rarity: 'rare',
    imgPath: 'img/pulpo_de_roca.png',
    emoji: '🐙',
    maxHp: 11, atk: 5, def: 4, spa: 5, spd: 4, spe: 6,
    growth: { maxHp: 1.1, atk: 0.5, def: 0.4, spa: 0.5, spd: 0.4, spe: 0.6 },
    attacks: [
      { name: 'Golpe de Tentáculo', power: 20, emoji: '🐙', categoria: 'Fisico' },
      { name: 'Chorro de Tinta', power: 15, emoji: '🖤', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'precision_reducida', turns: 2 } }
    ],
    passive: {
      name: 'Mimetismo de Roca',
      description: '10% de probabilidad de esquivar cualquier ataque del rival, tanto físico como especial.'
    }
  },
  {
    id: 'lenguado',
    name: 'Lenguado',
    rarity: 'common',
    imgPath: 'img/lenguado.png',
    emoji: '🥞',
    maxHp: 10, atk: 4, def: 5, spa: 3, spd: 3, spe: 5,
    growth: { maxHp: 1.0, atk: 0.4, def: 0.5, spa: 0.3, spd: 0.3, spe: 0.5 },
    attacks: [
      { name: 'Coletazo Plano', power: 20, emoji: '🥞', categoria: 'Fisico' },
      { name: 'Sacudida de Arena', power: 25, emoji: '🏖️', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Mimetismo Plano',
      description: '15% de probabilidad de esquivar cualquier ataque físico del rival camuflándose con la arena.'
    }
  },
  {
    id: 'sepia',
    name: 'Sepia',
    rarity: 'rare',
    imgPath: 'img/sepia.png',
    emoji: '🦑',
    maxHp: 11, atk: 3, def: 4, spa: 6, spd: 5, spe: 5,
    growth: { maxHp: 1.1, atk: 0.3, def: 0.4, spa: 0.6, spd: 0.5, spe: 0.5 },
    attacks: [
      { name: 'Sifón de Agua', power: 20, emoji: '💦', categoria: 'Especial' },
      { name: 'Abrazo de Tentáculos', power: 25, emoji: '🦑', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'spe_reduction', turns: 2, amount: 1 } }
    ],
    passive: {
      name: 'Hipnosis Cromática',
      description: 'Al entrar al combate, el primer ataque especial del rival tiene un 25% de probabilidad de fallar.'
    }
  },
  {
    id: 'quisquilla',
    name: 'Quisquilla',
    rarity: 'rare',
    imgPath: 'img/quisquilla.png',
    emoji: '🦐',
    maxHp: 8, atk: 5, def: 3, spa: 3, spd: 3, spe: 9,
    growth: { maxHp: 0.8, atk: 0.5, def: 0.3, spa: 0.3, spd: 0.3, spe: 0.9 },
    attacks: [
      { name: 'Coletazo Elástico', power: 20, emoji: '🦐', categoria: 'Fisico' },
      { name: 'Impulso de Espuma', power: 15, emoji: '🫧', categoria: 'Fisico', selfBuff: { stat: 'spe', amount: 1, turns: 2 } }
    ],
    passive: {
      name: 'Salto Retráctil',
      description: '20% de probabilidad de esquivar ataques físicos del rival.'
    }
  },
  {
    id: 'pez_aguja',
    name: 'Pez Aguja',
    rarity: 'common',
    imgPath: 'img/pez_aguja.png',
    emoji: '🪡',
    maxHp: 10, atk: 6, def: 4, spa: 2, spd: 3, spe: 7,
    growth: { maxHp: 1.0, atk: 0.6, def: 0.4, spa: 0.2, spd: 0.3, spe: 0.7 },
    attacks: [
      { name: 'Estocada Rápida', power: 20, emoji: '🗡️', categoria: 'Fisico' },
      { name: 'Dentellada de Tijera', power: 25, emoji: '✂️', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Punta Perforante',
      description: 'Los ataques físicos ignoran un 20% de la Defensa Física del rival.'
    }
  },
  {
    id: 'medusa_aguamala',
    name: 'Medusa Aguamala',
    rarity: 'common',
    imgPath: 'img/medusa_aguamala.png',
    emoji: '🧫',
    maxHp: 11, atk: 1, def: 3, spa: 5, spd: 6, spe: 2,
    growth: { maxHp: 1.1, atk: 0.1, def: 0.3, spa: 0.5, spd: 0.6, spe: 0.2 },
    attacks: [
      { name: 'Flujo de Corriente', power: 20, emoji: '🌊', categoria: 'Especial' },
      { name: 'Picadura Eléctrica', power: 25, emoji: '⚡', categoria: 'Especial', efecto: { probabilidad: 0.2, estado: 'paralizado' } }
    ],
    passive: {
      name: 'Filamentos Urticantes',
      description: '15% de probabilidad de paralizar al rival al recibir un ataque físico.'
    }
  },
  {
    id: 'estrella',
    name: 'Estrella de Mar',
    rarity: 'common',
    imgPath: 'img/estrella_de_mar.png',
    emoji: '⭐',
    maxHp: 14, atk: 3, def: 6, spa: 2, spd: 6, spe: 1,
    growth: { maxHp: 1.4, atk: 0.3, def: 0.6, spa: 0.2, spd: 0.6, spe: 0.1 },
    attacks: [
      { name: 'Presión de Ventosa', power: 20, emoji: '🔄', categoria: 'Fisico' },
      { name: 'Absorber Hidro', power: 15, emoji: '💧', categoria: 'Especial', drain: 0.5 }
    ],
    passive: {
      name: 'Regeneración Celular',
      description: 'Al final de cada turno, recupera +0.5 PS si su vida ha bajado del máximo.'
    }
  },
  {
    id: 'berberecho',
    name: 'Berberecho',
    rarity: 'common',
    imgPath: 'img/berberecho.png',
    emoji: '🐚',
    maxHp: 11, atk: 2, def: 8, spa: 1, spd: 5, spe: 1,
    growth: { maxHp: 1.1, atk: 0.2, def: 0.8, spa: 0.1, spd: 0.5, spe: 0.1 },
    attacks: [
      { name: 'Golpe de Concha', power: 20, emoji: '🐚', categoria: 'Fisico' },
      { name: 'Portazo de Calcio', power: 25, emoji: '🦪', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Cierre Hermético',
      description: 'Mientras tenga más del 50% de PS, es inmune a efectos de estado y reducción de estadísticas.'
    }
  },
  {
    id: 'anguila',
    name: 'Anguila de Arena',
    rarity: 'common',
    imgPath: 'img/anguila_de_arena.png',
    emoji: '🐍',
    maxHp: 9, atk: 6, def: 3, spa: 2, spd: 3, spe: 8,
    growth: { maxHp: 0.9, atk: 0.6, def: 0.3, spa: 0.2, spd: 0.3, spe: 0.8 },
    attacks: [
      { name: 'Embestida Fina', power: 15, emoji: '🏃', categoria: 'Fisico' },
      { name: 'Estocada de Pico', power: 25, emoji: '🗡️', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Fuga Serpenteante',
      description: 'Gana +1 de Velocidad al inicio del combate para golpear primero.'
    }
  },
  {
    id: 'pulpo_anillos_azules',
    name: 'Pulpo de Anillos Azules',
    rarity: 'epic',
    imgPath: 'img/pulpo_anillos_azules.png',
    emoji: '🐙',
    maxHp: 11, atk: 4, def: 3, spa: 9, spd: 5, spe: 9,
    growth: { maxHp: 1.1, atk: 0.4, def: 0.3, spa: 0.9, spd: 0.5, spe: 0.9 },
    attacks: [
      { name: 'Mimetismo de Coral', power: 0, emoji: '🪸', categoria: 'Efecto', efecto: { estado: 'dodge_boost', turns: 2, amount: 0.3 } },
      { name: 'Picadura Neurotóxica', power: 35, emoji: '💉', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'veneno_grave' } }
    ],
    passive: {
      name: 'Destello de Advertencia',
      description: 'Al bajar del 50% de PS, reduce el Ataque Físico del rival en un 20% el resto del combate.'
    }
  }
];

/* ===== CONSTANTS ===== */
const MAX_LEVEL = 12;

const ARENA_CONFIG = {
  1: { name: 'La Orilla', icon: '🏖️', minCups: 0, maxCups: 300, cssClass: 'arena-beach', winGold: 50, loseGold: 10, minLevel: 1, maxLevel: 3 },
  2: { name: 'Arrecife de Coral', icon: '🪸', minCups: 301, maxCups: 600, cssClass: 'arena-coral', winGold: 80, loseGold: 15, minLevel: 3, maxLevel: 6 },
  3: { name: 'Mar Abierto', icon: '🌊', minCups: 601, maxCups: 900, cssClass: 'arena-temple', winGold: 120, loseGold: 20, minLevel: 6, maxLevel: 9 },
  4: { name: 'Las Profundidades', icon: '🌌', minCups: 901, maxCups: Infinity, cssClass: 'arena-depths', winGold: 200, loseGold: 30, minLevel: 9, maxLevel: 12 }
};

/* ===== GAME STATE ===== */
const state = {
  screen: 'main',
  selectedFishId: null,
  activeSection: 'fight',
  coins: 100, diamonds: 0,
  cups: 0,
  currentArena: 1,
  unlockedFish: ['salmonete'],
  fishLevels: {},
  player: null,
  enemy: null,
  isPlayerTurn: true,
  gameOver: false,
  isAnimating: false,
  turnPhase: 'player_first'
};

/* ===== DOM HELPERS ===== */
const $ = id => document.getElementById(id);
const dom = {
  screenMain: $('screen-main'), screenCombat: $('screen-combat'), screenResult: $('screen-result'),
  bottomNav: $('bottom-nav'), coinDisplay: $('coin-display'), diamondDisplay: $('diamond-display'),
  sectionFight: $('section-fight'), sectionBank: $('section-bank'),
  sectionShop: $('section-shop'), sectionSettings: $('section-settings'),
  fightContent: $('fight-content'), bankCards: $('bank-cards'),   shopContent: $('shop-content'),
  cupsDisplay: $('cups-display'), resultCups: $('result-cups'),
  fishModal: $('fish-modal'), fishModalBody: $('fish-modal-body'),
  btnBattle: $('btn-battle'), btnSave: $('btn-save'), btnRestart: $('btn-restart'),
  enemyName: $('enemy-name'), enemyHpText: $('enemy-hp-text'), enemyHpFill: $('enemy-hp-fill'),
  enemyEmoji: $('enemy-emoji'), enemyArea: $('enemy-area'), enemySpd: $('enemy-spd'),
  playerName: $('player-name'), playerHpText: $('player-hp-text'), playerHpFill: $('player-hp-fill'),
  playerEmoji: $('player-emoji'), playerArea: $('player-area'), playerSpd: $('player-spd'),
  arenaDisplay: $('arena-display'), arenaModal: $('arena-modal'), arenaModalBody: $('arena-modal-body'),
  attackMenu: $('attack-menu'), logMessage: $('log-message'),
  resultTitle: $('result-title'), resultEmoji: $('result-emoji'), resultSub: $('result-sub'),
  saveTime: $('save-time'),
  chestModal: $('chest-modal'), chestModalBody: $('chest-modal-body')
};

/* ===== UTILITY ===== */
function getFishById(id) { return FISH_TYPES.find(f => f.id === id); }
function randomFish() { return FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)]; }
function randomArenaFish(arenaId) {
  const pool = ARENA_FISH[arenaId] || [];
  if (pool.length === 0) return randomFish();
  const entry = pool[Math.floor(Math.random() * pool.length)];
  return getFishById(entry.fishId) || randomFish();
}
function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }

function getRarityConfig(fishOrId) {
  const fish = typeof fishOrId === 'string' ? getFishById(fishOrId) : fishOrId;
  return RARITY_CONFIG[fish.rarity] || RARITY_CONFIG.common;
}

function rarityBadgeHtml(fish) {
  const r = getRarityConfig(fish);
  return `<span class="rarity-badge ${r.css}">${r.label}</span>`;
}

function sortByRarity(a, b) { return RARITY_ORDER[a.rarity] - RARITY_ORDER[b.rarity]; }

/* ===== LEVEL SYSTEM ===== */
function getFishLevel(fishId) { return state.fishLevels[fishId] || 1; }

function getLeveledFishType(base, level) {
  const g = base.growth;
  const steps = level - 1;
  return {
    ...base,
    level,
    maxHp: base.maxHp + g.maxHp * steps,
    atk: base.atk + g.atk * steps,
    def: base.def + g.def * steps,
    spa: base.spa + g.spa * steps,
    spd: base.spd + g.spd * steps,
    spe: base.spe + g.spe * steps
  };
}

function roundFishStats(fish) {
  return {
    ...fish,
    maxHp: Math.round(fish.maxHp),
    atk: Math.round(fish.atk),
    def: Math.round(fish.def),
    spa: Math.round(fish.spa),
    spd: Math.round(fish.spd),
    spe: Math.round(fish.spe)
  };
}

function getUpgradeCost(level) {
  if (level >= MAX_LEVEL) return null;
  return 100 * Math.pow(2, level - 1);
}

function upgradeFish(fishId) {
  const level = getFishLevel(fishId);
  const cost = getUpgradeCost(level);
  if (cost === null) { alert('¡Este pez ya está en el nivel máximo!'); return; }
  if (state.coins < cost) { alert('Monedas insuficientes'); return; }
  state.coins -= cost;
  state.fishLevels[fishId] = level + 1;
  updateCoinDisplay();
  showFishDetail(fishId);
}

/* ===== DAMAGE FORMULA ===== */
function calculateDamage(power, attacker, defender, categoria, attackerStatus, defenderBuffs, attackerAtkReduction) {
  const atkDef = attackerStatus === 'quemado' && categoria === 'Fisico' ? Math.round(attacker.atk / 2) : attacker.atk;
  let A = categoria === 'Fisico' ? atkDef : attacker.spa;
  if (categoria === 'Fisico' && attackerAtkReduction) A = Math.round(A * (1 - attackerAtkReduction));
  let D = categoria === 'Fisico' ? defender.def : defender.spd;
  if (categoria === 'Fisico' && defenderBuffs?.defBoost) D += defenderBuffs.defBoost;
  if (categoria === 'Fisico') {
    const base = getFishById(attacker.id);
    if (base?.passive?.name === 'Punta Perforante') D = Math.max(1, Math.round(D * 0.8));
  }
  const dmg = ((((2 * attacker.level / 5) + 2) * power * (A / D)) / 50) + 2;
  return Math.max(1, Math.round(dmg));
}

function getEffectiveSpeed(fighter) {
  let spe = fighter.type.spe;
  if (fighter.status === 'veneno_grave') spe = Math.round(spe * 0.9);
  if (fighter.debuff?.type === 'spe_reduction') spe = Math.max(1, spe - (fighter.debuff.amount || 1));
  if (fighter.buffs?.speBoost) spe += fighter.buffs.speBoost;
  return spe;
}

function checkStatusImmunity(fighter) {
  if (!fighter || fighter.currentHp <= 0) return false;
  const fishId = fighter.type?.id || fighter.id;
  const base = getFishById(fishId);
  if (!base || !base.passive) return false;
  if (base.passive.name === 'Cierre Hermético' && fighter.currentHp > fighter.maxHp / 2) {
    setLogMessage(`¡${fighter.type?.name || fighter.name} bloqueó el efecto con Cierre Hermético!`, true);
    return true;
  }
  return false;
}

function applySecondaryEffect(atk, defender) {
  if (!atk.efecto) return;
  if (atk.efecto.estado === 'precision_reducida' || atk.efecto.estado === 'spe_reduction') {
    if (checkStatusImmunity(defender)) return;
    if (atk.efecto.estado === 'precision_reducida') {
      defender.debuff = { type: 'precision_reducida', turns: atk.efecto.turns || 2 };
      setLogMessage(`¡${defender.type.name} tiene precisión reducida!`, true);
    } else {
      defender.debuff = { type: 'spe_reduction', turns: atk.efecto.turns || 2, amount: atk.efecto.amount || 1 };
      setLogMessage(`¡${defender.type.name} redujo su velocidad -${atk.efecto.amount || 1}!`, true);
    }
    return;
  }
  if (checkStatusImmunity(defender)) return;
  if (defender.status !== null) return;
  if (Math.random() < atk.efecto.probabilidad) {
    defender.status = atk.efecto.estado;
    const labels = { paralizado: 'PAR', envenenado: 'ENV', quemado: 'QUE' };
    setLogMessage(`¡${defender.type.name} queda ${atk.efecto.estado}!`, true);
  }
}

function triggerPassive(defender, attacker, categoria) {
  const base = getFishById(defender.id);
  if (!base || !base.passive) return;
  if (base.passive.name === 'Púas Tóxicas' && categoria === 'Fisico') {
    if (attacker.status !== null) return;
    if (checkStatusImmunity(attacker)) return;
    if (Math.random() < 0.3) {
      attacker.status = 'envenenado';
      setLogMessage(`¡Púas Tóxicas de ${defender.name} ha envenenado al rival!`, true);
    }
  }
  if (base.passive.name === 'Tentáculos Pegajosos' && categoria === 'Fisico') {
    if (Math.random() < 0.15) {
      attacker.atrapado = true;
      setLogMessage(`¡${defender.name} atrapó a ${attacker.name} con sus Tentáculos Pegajosos!`, true);
    }
  }
  if (base.passive.name === 'Filamentos Urticantes' && categoria === 'Fisico') {
    if (attacker.status !== null) return;
    if (checkStatusImmunity(attacker)) return;
    if (Math.random() < 0.15) {
      attacker.status = 'paralizado';
      setLogMessage(`¡Filamentos Urticantes de ${defender.name} ha paralizado al rival!`, true);
    }
  }
}

function checkDodge(defenderFighter, categoria) {
  const base = getFishById(defenderFighter.type.id);
  let chance = 0;
  if (base?.passive) {
    if (categoria === 'Fisico') {
      if (base.passive.name === 'Piel Escurridiza') chance = 0.3;
      if (base.passive.name === 'Anfibio') chance = 0.05;
      if (base.passive.name === 'Mimetismo Plano') chance = 0.15;
      if (base.passive.name === 'Salto Retráctil') chance = 0.2;
    }
    if (base.passive.name === 'Mimetismo de Roca') chance = 0.1;
    if (base.passive.name === 'Hipnosis Cromática' && categoria === 'Especial' && !defenderFighter.hipnosisUsado) {
      defenderFighter.hipnosisUsado = true;
      if (Math.random() < 0.25) {
        setLogMessage(`¡${defenderFighter.type.name} activó Hipnosis Cromática y el ataque falló!`, true);
        return true;
      }
    }
  }
  if (defenderFighter.buffs?.dodgeBoost) chance += defenderFighter.buffs.dodgeBoost;
  if (chance > 0 && Math.random() < chance) {
    const src = base?.passive?.name || 'con evasión aumentada';
    setLogMessage(`¡${defenderFighter.type.name} activó ${src} y esquivó el ataque!`, true);
    return true;
  }
  return false;
}

function checkPrecision(attacker) {
  if (attacker.debuff && attacker.debuff.type === 'precision_reducida' && Math.random() < 0.2) {
    setLogMessage(`¡${attacker.type.name} falló por la arena!`, true);
    return true;
  }
  return false;
}

function decrementDebuff(fighter) {
  if (!fighter.debuff) return;
  fighter.debuff.turns--;
  if (fighter.debuff.turns <= 0) {
    const type = fighter.debuff.type;
    fighter.debuff = null;
    if (type === 'spe_reduction') setLogMessage(`${fighter.type.name} recuperó la velocidad.`, true);
    else setLogMessage(`${fighter.type.name} recuperó la precisión.`, true);
  }
}

function applyBuff(atk, user) {
  if (!atk.efecto) return;
  if (atk.efecto.estado === 'def_boost') {
    const existing = user.buffs?.defBoost || 0;
    user.buffs = { ...(user.buffs || {}), defBoost: existing + (atk.efecto.amount || 2), defTurns: atk.efecto.turns || 2 };
    setLogMessage(`¡${user.type.name} usó ${atk.name}! DEF +${atk.efecto.amount || 2}`, true);
  }
  if (atk.efecto.estado === 'dodge_boost') {
    user.buffs = { ...(user.buffs || {}), dodgeBoost: atk.efecto.amount || 0.3, dodgeTurns: atk.efecto.turns || 2 };
    setLogMessage(`¡${user.type.name} usó ${atk.name}! Evasión +${Math.round((atk.efecto.amount || 0.3) * 100)}%`, true);
  }
}

function applySelfBuff(atk, user) {
  if (!atk.selfBuff) return;
  if (atk.selfBuff.stat === 'spe') {
    const existing = user.buffs?.speBoost || 0;
    user.buffs = { ...(user.buffs || {}), speBoost: existing + (atk.selfBuff.amount || 1), speTurns: atk.selfBuff.turns || 2 };
    setLogMessage(`¡${user.type.name} aumentó su velocidad +${atk.selfBuff.amount || 1}!`, true);
  }
}

function decrementBuffs(fighter) {
  if (!fighter.buffs) return;
  if (fighter.buffs.defTurns !== undefined) fighter.buffs.defTurns--;
  if (fighter.buffs.speTurns !== undefined) fighter.buffs.speTurns--;
  if (fighter.buffs.dodgeTurns !== undefined) fighter.buffs.dodgeTurns--;
  if (fighter.buffs.defTurns !== undefined && fighter.buffs.defTurns <= 0) {
    delete fighter.buffs.defBoost;
    delete fighter.buffs.defTurns;
    setLogMessage(`${fighter.type.name} perdió el bono de DEF.`, true);
  }
  if (fighter.buffs.speTurns !== undefined && fighter.buffs.speTurns <= 0) {
    delete fighter.buffs.speBoost;
    delete fighter.buffs.speTurns;
    setLogMessage(`${fighter.type.name} perdió el bono de SPE.`, true);
  }
  if (fighter.buffs.dodgeTurns !== undefined && fighter.buffs.dodgeTurns <= 0) {
    delete fighter.buffs.dodgeBoost;
    delete fighter.buffs.dodgeTurns;
    setLogMessage(`${fighter.type.name} perdió el bono de evasión.`, true);
  }
  if (!fighter.buffs.defBoost && !fighter.buffs.speBoost && !fighter.buffs.dodgeBoost) fighter.buffs = null;
}

function applyDefensivePassives(dmg, defender, categoria) {
  if (categoria !== 'Fisico') return dmg;
  const base = getFishById(defender.type.id);
  if (!base || !base.passive) return dmg;
  if ((base.passive.name === 'Mimetismo Rocoso' || base.passive.name === 'Coraza Prestada') && !defender.mimetismoUsado) {
    defender.mimetismoUsado = true;
    setLogMessage(`¡${defender.type.name} activó ${base.passive.name} y redujo el daño a la mitad!`, true);
    return Math.max(1, Math.round(dmg / 2));
  }
  return dmg;
}

function applyStatusDamage(fighter) {
  if (!fighter.status || fighter.currentHp <= 0) return;
  if (fighter.status === 'envenenado' || fighter.status === 'quemado') {
    fighter.currentHp = Math.max(0, fighter.currentHp - 1);
    const labels = { envenenado: 'ENV', quemado: 'QUE' };
    setLogMessage(`${fighter.type.name} sufre daño por ${labels[fighter.status]} (-1 PS)`, true);
  }
  if (fighter.status === 'veneno_grave') {
    fighter.currentHp = Math.max(0, fighter.currentHp - 2);
    setLogMessage(`${fighter.type.name} sufre daño por Veneno Grave (-2 PS)`, true);
  }
}

function applyPassiveHealing(fighter) {
  if (fighter.currentHp <= 0 || fighter.currentHp >= fighter.maxHp) return;
  const base = getFishById(fighter.type.id);
  if (!base || !base.passive) return;
  if (base.passive.name === 'Regeneración Celular') {
    const heal = 0.5;
    fighter.currentHp = Math.min(fighter.maxHp, fighter.currentHp + heal);
    setLogMessage(`¡${fighter.type.name} regeneró +${heal} PS! (${base.passive.name})`, true);
  }
}

function checkDestelloAdvertencia(defender, attacker) {
  if (defender.currentHp <= 0 || defender.destelloActivado) return;
  const base = getFishById(defender.type.id);
  if (!base || base.passive?.name !== 'Destello de Advertencia') return;
  if (defender.currentHp < defender.maxHp / 2) {
    defender.destelloActivado = true;
    attacker.atkReduction = 0.2;
    setLogMessage(`¡Los anillos de ${defender.type.name} brillan! ATF del rival -20%`, true);
  }
}

function updateStatusDisplay() {
  const pStatus = state.player.status;
  const eStatus = state.enemy.status;
  dom.playerStatus = dom.playerStatus || document.getElementById('player-status');
  dom.enemyStatus = dom.enemyStatus || document.getElementById('enemy-status');
  const statusLabels = { paralizado: 'PAR', envenenado: 'ENV', quemado: 'QUE', veneno_grave: 'GRA' };

  let pText = '', pCls = 'status-tag';
  if (pStatus && statusLabels[pStatus]) { pText = `[${statusLabels[pStatus]}]`; pCls += ' ' + pStatus; }
  if (state.player.debuff) {
    if (!pCls.includes('status-tag ')) pCls += ' cegado';
    const icon = state.player.debuff.type === 'spe_reduction' ? '🐢' : '👁️‍🗨️';
    pText += (pText ? ' ' : '') + icon;
  }
  if (state.player.buffs?.defBoost) pText += (pText ? ' ' : '') + '🛡️';
  if (state.player.buffs?.speBoost) pText += (pText ? ' ' : '') + '⚡';
  dom.playerStatus.textContent = pText;
  dom.playerStatus.className = pCls;

  let eText = '', eCls = 'status-tag';
  if (eStatus && statusLabels[eStatus]) { eText = `[${statusLabels[eStatus]}]`; eCls += ' ' + eStatus; }
  if (state.enemy.debuff) {
    if (!eCls.includes('status-tag ')) eCls += ' cegado';
    const icon = state.enemy.debuff.type === 'spe_reduction' ? '🐢' : '👁️‍🗨️';
    eText += (eText ? ' ' : '') + icon;
  }
  if (state.enemy.buffs?.defBoost) eText += (eText ? ' ' : '') + '🛡️';
  if (state.enemy.buffs?.speBoost) eText += (eText ? ' ' : '') + '⚡';
  dom.enemyStatus.textContent = eText;
  dom.enemyStatus.className = eCls;
}

/* ===== IMAGE HELPER ===== */
function imgTag(path, alt, fallbackEmoji) {
  return `<div class="img-wrap">
    <img src="${path}" alt="${alt}" class="fish-img" onerror="this.classList.add('img-broken')">
    <span class="img-fallback">${fallbackEmoji}</span>
  </div>`;
}

/* ===== PERSISTENCIA ===== */
const SAVE_KEY = 'fba_manual_save';

function getSaveData() {
  return {
    selectedFish: state.selectedFishId,
    coins: state.coins, diamonds: state.diamonds,
    cups: state.cups,
    currentArena: state.currentArena,
    unlockedFish: state.unlockedFish,
    fishLevels: state.fishLevels,
    timestamp: Date.now()
  };
}

function formatTimestamp(ts) {
  const d = new Date(ts);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} a las ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function updateSaveTimestampDisplay() {
  if (!dom.saveTime) return;
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) { dom.saveTime.textContent = 'Nunca guardado'; return; }
  try {
    const data = JSON.parse(raw);
    if (data.timestamp) {
      dom.saveTime.textContent = `Última vez guardado: ${formatTimestamp(data.timestamp)}`;
    } else {
      dom.saveTime.textContent = 'Nunca guardado';
    }
  } catch (e) {
    dom.saveTime.textContent = 'Nunca guardado';
  }
}

function saveGame() {
  const data = getSaveData();
  localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  updateSaveTimestampDisplay();
}

function hasManualSave() {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    return !!data.timestamp;
  } catch (e) { return false; }
}

function loadGame() {
  if (!hasManualSave()) return;
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (typeof data.coins === 'number' && data.coins >= 0) state.coins = data.coins;
    if (typeof data.diamonds === 'number' && data.diamonds >= 0) state.diamonds = data.diamonds;
    if (typeof data.cups === 'number' && data.cups >= 0) state.cups = data.cups;
    if (typeof data.currentArena === 'number') state.currentArena = data.currentArena;
    if (Array.isArray(data.unlockedFish) && data.unlockedFish.length > 0) state.unlockedFish = data.unlockedFish;
    if (data.fishLevels) state.fishLevels = data.fishLevels;
    if (data.selectedFish && getFishById(data.selectedFish) && state.unlockedFish.includes(data.selectedFish)) {
      state.selectedFishId = data.selectedFish;
    }
  } catch (e) {}
}

/* ===== ARENA SYSTEM ===== */
function getArenaConfig(arenaId) { return ARENA_CONFIG[arenaId] || ARENA_CONFIG[1]; }

function getArenaForCups(cups) {
  if (cups >= 901) return 4;
  if (cups >= 601) return 3;
  if (cups >= 301) return 2;
  return 1;
}

function checkArenaChange() {
  const newArena = getArenaForCups(state.cups);
  if (newArena !== state.currentArena) {
    const old = state.currentArena;
    state.currentArena = newArena;
    updateArenaDisplay();
    const oldName = getArenaConfig(old).name;
    const newName = getArenaConfig(newArena).name;
    if (newArena > old) {
      alert(`🎉 ¡Felicidades! Has ascendido a la Arena ${newArena}: ${newName}.`);
    } else {
      alert(`⚠️ ¡Has descendido a la Arena ${newArena}: ${newName}!`);
    }
  }
  updateArenaBackground();
}

function updateArenaDisplay() {
  if (!dom.arenaDisplay) return;
  const cfg = getArenaConfig(state.currentArena);
  dom.arenaDisplay.innerHTML = `${cfg.icon} Arena ${state.currentArena}: ${cfg.name}`;
}

function updateArenaBackground() {
  const cfg = getArenaConfig(state.currentArena);
  document.getElementById('app').className = cfg.cssClass;
}

/* ===== ARENA MODAL ===== */
const ARENA_FISH = {
  1: [
    { fishId: 'clownfish' },
    { fishId: 'pufferfish' },
    { fishId: 'salmonete' },
    { fishId: 'blenio' },
    { fishId: 'cabracho' },
    { fishId: 'anemona' },
    { fishId: 'cangrejo' },
    { fishId: 'lenguado' },
    { fishId: 'pulpo' },
    { fishId: 'sepia' },
    { fishId: 'quisquilla' },
    { fishId: 'berberecho' },
    { fishId: 'pez_aguja' },
    { fishId: 'medusa_aguamala' },
    { fishId: 'anguila' }
  ],
  2: [
    { fishId: 'pulpo_anillos_azules' }
  ]
};

function renderArenaModal() {
  const body = dom.arenaModalBody;
  if (!body) return;
  let html = `
    <div class="arena-modal-header">
      <span class="arena-modal-title">🏟️ Progreso de Arenas</span>
      <button class="arena-modal-close" id="arena-modal-close-btn">✕</button>
    </div>`;
  Object.keys(ARENA_CONFIG).forEach(arenaId => {
    const id = Number(arenaId);
    const cfg = ARENA_CONFIG[id];
    const isUnlocked = state.currentArena >= id;
    const blockClass = 'arena-block' + (isUnlocked ? '' : ' locked');
    const statusClass = isUnlocked ? 'unlocked' : 'locked';
    const statusText = isUnlocked ? '✓ Desbloqueada' : '🔒 Bloqueada';
    const rangeText = cfg.maxCups === Infinity ? `${cfg.minCups}+` : `${cfg.minCups} - ${cfg.maxCups}`;
    html += `<div class="${blockClass}">
      <div class="arena-block-header">
        <span class="arena-block-name">${cfg.icon} Arena ${id}: ${cfg.name}</span>
        <span class="arena-block-range">(${rangeText} 🏆)</span>
        <span class="arena-block-status ${statusClass}">${statusText}</span>
      </div>
      <div class="arena-rewards">🪙 ${cfg.winGold} por victoria / ${cfg.loseGold} por derrota</div>
      <div class="arena-fish-list">`;
    const arenaFish = (ARENA_FISH[id] || [])
      .map(entry => getFishById(entry.fishId))
      .filter(Boolean)
      .sort(sortByRarity);
    arenaFish.forEach(fish => {
      const playerOwns = state.unlockedFish.includes(fish.id);
      let itemClass = 'arena-fish-item';
      if (!isUnlocked) itemClass += ' arena-locked';
      else if (!playerOwns) itemClass += ' not-owned';
      html += `<div class="${itemClass}" data-fish-id="${fish.id}">
        <img src="${fish.imgPath}" alt="${fish.name}" class="arena-fish-img">
        <span class="fish-name">${fish.name}</span>
        ${rarityBadgeHtml(fish)}
      </div>`;
    });
    html += `</div></div>`;
  });
  body.innerHTML = html;

  body.querySelectorAll('.arena-fish-item').forEach(el => {
    el.addEventListener('pointerdown', e => {
      e.preventDefault();
      const fishId = el.dataset.fishId;
      if (el.classList.contains('arena-locked')) {
        const arenaBlock = el.closest('.arena-block');
        const nameEl = arenaBlock?.querySelector('.arena-block-name');
        alert(`🔒 Se desbloquea al alcanzar ${nameEl?.textContent || 'una arena superior'}`);
      } else {
        showFishDetail(fishId);
      }
    });
  });

  const closeBtn = document.getElementById('arena-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeArenaModal(); });
}

function openArenaModal() {
  renderArenaModal();
  dom.arenaModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeArenaModal() {
  dom.arenaModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

/* ===== MONEDAS ===== */
function updateCoinDisplay() {
  if (dom.coinDisplay) dom.coinDisplay.textContent = `🪙 ${state.coins}`;
}
function updateDiamondDisplay() {
  if (dom.diamondDisplay) dom.diamondDisplay.textContent = `💎 ${state.diamonds}`;
}

/* ===== COPAS ===== */
function updateCupsDisplay() {
  if (dom.cupsDisplay) dom.cupsDisplay.textContent = `🏆 ${state.cups}`;
}

/* ===== SCREEN MANAGEMENT ===== */
function showScreen(screenName) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const map = { main: dom.screenMain, combat: dom.screenCombat, result: dom.screenResult };
  if (map[screenName]) map[screenName].classList.add('active');
  state.screen = screenName;
}

/* ===== NAVEGACIÓN ===== */
function showSection(sectionId) {
  ['fight', 'bank', 'shop', 'settings'].forEach(id => {
    const el = document.getElementById(`section-${id}`);
    const tab = document.querySelector(`[data-tab="${id}"]`);
    if (el) el.classList.toggle('active', id === sectionId);
    if (tab) tab.classList.toggle('active', id === sectionId);
  });
  state.activeSection = sectionId;
  if (sectionId === 'shop') renderShop();
  if (sectionId === 'bank') renderBank();
}

/* ===== SECCIÓN: LUCHAR ===== */
function renderFightContent() {
  const fishId = state.selectedFishId;
  const base = fishId ? getFishById(fishId) : null;
  if (!base) {
    dom.fightContent.innerHTML = `
      <div class="fight-empty">
        <p style="font-size:3rem;margin-bottom:0.5rem;">🐟</p>
        <p>Ve al <strong>Banco</strong> y selecciona un pez para la batalla</p>
      </div>`;
    dom.btnBattle.disabled = true;
    return;
  }

  const level = getFishLevel(fishId);
  const fish = getLeveledFishType(base, level);
  const rarity = getRarityConfig(base);

  const attacksHtml = fish.attacks.map(a =>
    `<span class="fight-card-attack">${a.emoji} ${a.name}${a.categoria === 'Efecto' ? '' : ` (Poder: ${a.power})`}</span>`
  ).join('');

  dom.fightContent.innerHTML = `
    <div class="fight-card">
      ${imgTag(fish.imgPath, fish.name, fish.emoji)}
      <div class="fight-card-name">${fish.name}</div>
      <span class="level-badge">Nivel ${level}</span>
      ${rarityBadgeHtml(base)}
      <div class="fight-card-hp" style="margin-top:0.5rem">❤️ ${Math.round(fish.maxHp)} HP</div>
      <div class="fight-card-attacks">${attacksHtml}</div>
    </div>`;

  dom.btnBattle.disabled = false;
}

/* ===== SECCIÓN: BANCO ===== */
function renderBank() {
  dom.bankCards.innerHTML = '';

  const owned = FISH_TYPES.filter(f => state.unlockedFish.includes(f.id)).sort(sortByRarity);
  const unowned = FISH_TYPES.filter(f => !state.unlockedFish.includes(f.id)).sort(sortByRarity);

  function createFishCard(fish, isUnlocked) {
    const level = getFishLevel(fish.id);
    const card = document.createElement('div');
    const r = getRarityConfig(fish);
    card.className = `fish-card rarity-${r.css}`;
    if (!isUnlocked) card.classList.add('locked');
    card.dataset.fishId = fish.id;

    const attacksHtml = fish.attacks.map(a =>
      `<span class="fish-card-attack">${a.emoji} ${a.name}</span>`
    ).join('');

    const lockDisplay = !isUnlocked ? '<span class="lock-icon">🔒</span>' : '';

    card.innerHTML = `
      <div class="img-wrap">
        <img src="${fish.imgPath}" alt="${fish.name}" class="fish-img" onerror="this.classList.add('img-broken')">
        ${lockDisplay}
      </div>
      <div class="fish-card-info">
        <div class="fish-card-name">
          ${fish.name}
          <span class="card-level">Lv.${level}</span>
          ${rarityBadgeHtml(fish)}
        </div>
        <div class="fish-card-attacks">${attacksHtml}</div>
      </div>
      <span class="card-arrow">›</span>`;

    let touchStartX, touchStartY, touchMoved = false;
    card.addEventListener('pointerdown', e => {
      touchStartX = e.clientX;
      touchStartY = e.clientY;
      touchMoved = false;
      card.setPointerCapture(e.pointerId);
    });
    card.addEventListener('pointermove', e => {
      if (touchStartX === undefined) return;
      const dx = Math.abs(e.clientX - touchStartX);
      const dy = Math.abs(e.clientY - touchStartY);
      if (dx > 10 || dy > 10) touchMoved = true;
    });
    card.addEventListener('pointerup', e => {
      if (touchMoved) return;
      e.preventDefault();
      showFishDetail(fish.id);
      touchStartX = touchStartY = undefined;
    });
    card.addEventListener('pointercancel', () => { touchMoved = true; touchStartX = touchStartY = undefined; });
    return card;
  }

  if (owned.length > 0) {
    const section = document.createElement('div');
    section.className = 'bank-section';
    section.innerHTML = '<h3 class="bank-section-title">Mis Peces Desbloqueados</h3>';
    const list = document.createElement('div');
    list.className = 'bank-section-list';
    owned.forEach(f => list.appendChild(createFishCard(f, true)));
    section.appendChild(list);
    dom.bankCards.appendChild(section);
  }

  if (unowned.length > 0) {
    const section = document.createElement('div');
    section.className = 'bank-section';
    section.innerHTML = '<h3 class="bank-section-title">Peces por Desbloquear</h3>';
    const list = document.createElement('div');
    list.className = 'bank-section-list';
    unowned.forEach(f => list.appendChild(createFishCard(f, false)));
    section.appendChild(list);
    dom.bankCards.appendChild(section);
  }
}

function showFishDetail(fishId) {
  const base = getFishById(fishId);
  if (!base) return;

  const level = getFishLevel(fishId);
  const fish = getLeveledFishType(base, level);
  const isUnlocked = state.unlockedFish.includes(fishId);
  const isSelected = state.selectedFishId === fishId;
  const r = getRarityConfig(base);

  const rStats = roundFishStats(fish);
  const statsHtml = [
    { label: 'HP', value: rStats.maxHp, cls: 'hp', max: 300 },
    { label: 'ATK', value: rStats.atk, cls: 'atk', max: 100 },
    { label: 'DEF', value: rStats.def, cls: 'def', max: 100 },
    { label: 'SPA', value: rStats.spa, cls: 'spa', max: 80 },
    { label: 'SPD', value: rStats.spd, cls: 'spd', max: 80 },
    { label: 'SPE', value: rStats.spe, cls: 'spe', max: 100 }
  ].map(s => `
    <div class="stat-row">
      <span class="stat-label">${s.label}</span>
      <div class="stat-bar-bg"><div class="stat-bar-fill ${s.cls}" style="width:${clamp((s.value / s.max) * 100, 0, 100)}%"></div></div>
      <span class="stat-value">${s.value}</span>
    </div>`).join('');

  const attacksHtml = base.attacks.map(a => {
    const catEmoji = a.categoria === 'Fisico' ? '💪' : a.categoria === 'Efecto' ? '🔵' : '✨';
    const powerLabel = a.categoria === 'Efecto' ? '✨ Efecto' : `⚡ ${a.power}`;
    return `
    <div class="attack-row">
      <span class="attack-name">${a.emoji} ${a.name}</span>
      <span class="attack-category ${a.categoria.toLowerCase()}">${catEmoji} ${a.categoria}</span>
      <span class="attack-power">${powerLabel}</span>
    </div>`;
  }).join('');

  const badge = isSelected ? '<span class="fish-card-badge">ACTIVO</span>' : '';

  const upgradeCost = getUpgradeCost(level);
  const canAfford = upgradeCost !== null && state.coins >= upgradeCost;

  let upgradeHtml;
  if (upgradeCost === null) {
    upgradeHtml = '<p style="text-align:center;color:#ffd700;font-size:0.85rem;font-weight:700;">⭐ NIVEL MÁXIMO</p>';
  } else {
    upgradeHtml = `
      <button class="btn-upgrade" data-fish-id="${fishId}" ${canAfford ? '' : 'disabled'}>
        ⬆ Mejorar 🪙 ${upgradeCost}
      </button>
      ${!canAfford ? '<p style="text-align:center;color:rgba(255,255,255,0.35);font-size:0.75rem;margin-top:0.2rem;">Monedas insuficientes</p>' : ''}`;
  }

  const detailHeaderClass = 'fish-detail-header' + (isUnlocked ? '' : ' locked-fish');

  dom.fishModalBody.innerHTML = `
    <div class="fish-detail">
      <div class="${detailHeaderClass}">
        ${imgTag(base.imgPath, base.name, base.emoji)}
        <div class="fish-detail-title">
          <h3>${base.name}</h3>
          <span class="level-badge">Nivel ${level}</span>
          ${rarityBadgeHtml(base)}
          ${badge}
        </div>
      </div>
      <div class="stats-section">${statsHtml}</div>
      <div class="attacks-section">
        <h4>Ataques</h4>
        ${attacksHtml}
      </div>
      ${base.passive ? `
      <div class="passive-section">
        <h4>🧬 Habilidad Pasiva</h4>
        <div class="passive-entry">
          <span class="passive-name">${base.passive.name}</span>
          <span class="passive-desc">${base.passive.description}</span>
        </div>
      </div>` : ''}
      <div class="detail-actions">
        ${isUnlocked
          ? (isSelected
              ? '<p style="text-align:center;color:rgba(255,255,255,0.4);font-size:0.9rem;">✅ Este pez ya está activo</p>'
              : `<button class="btn-primary btn-select" data-fish-id="${fishId}">Seleccionar para luchar</button>`)
          : '<p class="locked-text">❌ Bloqueo: Consigue este pez en los cofres de la Tienda</p>'}
        ${isUnlocked ? upgradeHtml : ''}
        <button class="btn-secondary btn-close-modal">Cerrar</button>
      </div>
    </div>`;

  const selBtn = dom.fishModalBody.querySelector('.btn-select');
  if (selBtn) selBtn.addEventListener('pointerdown', e => { e.preventDefault(); selectFish(fishId); renderBank(); closeFishModal(); });

  const upgBtn = dom.fishModalBody.querySelector('.btn-upgrade');
  if (upgBtn && !upgBtn.disabled) upgBtn.addEventListener('pointerdown', e => { e.preventDefault(); upgradeFish(fishId); });

  dom.fishModalBody.querySelector('.btn-close-modal').addEventListener('pointerdown', e => { e.preventDefault(); closeFishModal(); });

  openFishModal();
}

/* ===== FISH DETAIL MODAL ===== */
function openFishModal() { dom.fishModal.classList.add('open'); document.body.classList.add('modal-open'); }
function closeFishModal() { dom.fishModal.classList.remove('open'); document.body.classList.remove('modal-open'); }
dom.fishModal.addEventListener('pointerdown', e => {
  if (e.target === dom.fishModal || e.target.classList.contains('fish-modal-backdrop')) {
    e.preventDefault(); closeFishModal();
  }
});

function selectFish(fishId) {
  if (state.isAnimating) return;
  if (!state.unlockedFish.includes(fishId)) return;
  state.selectedFishId = fishId;
  renderFightContent();
  updateBattleButton();
}

function updateBattleButton() {
  const id = state.selectedFishId;
  dom.btnBattle.disabled = !id || !state.unlockedFish.includes(id);
}

/* ===== TIENDA ===== */
const CHEST_TYPES = {
  wood: {
    id: 'wood', name: 'Madera', imgPath: 'img/cofre_madera.png',
    costType: 'coins', cost: 150,
    goldRange: [20, 50],
    diamondChance: 0, diamondRange: [1, 1],
    fishChance: 0.6
  },
  silver: {
    id: 'silver', name: 'Plata', imgPath: 'img/cofre_plata.png',
    costType: 'coins', cost: 400,
    goldRange: [100, 200],
    diamondChance: 0.1, diamondRange: [2, 5],
    fishChance: 0.8
  },
  gold: {
    id: 'gold', name: 'Oro', imgPath: 'img/cofre_oro.png',
    costType: 'diamonds', cost: 60,
    goldRange: [400, 600],
    diamondChance: 1, diamondRange: [5, 10],
    fishChance: 1
  }
};

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickChestFish(chestId) {
  const pool = (ARENA_FISH[state.currentArena] || [])
    .map(e => getFishById(e.fishId))
    .filter(Boolean);
  if (pool.length === 0) return null;

  let targetRarity;
  const roll = Math.random();

  if (chestId === 'gold') {
    if (roll < 0.5) targetRarity = 'epic';
    else if (roll < 0.75) targetRarity = 'legendary';
    else targetRarity = 'rare';
  } else if (chestId === 'silver') {
    if (roll < 0.05) targetRarity = 'epic';
    else targetRarity = roll < 0.5 ? 'common' : 'rare';
  } else {
    targetRarity = roll < 0.5 ? 'common' : 'rare';
  }

  let candidates = pool.filter(f => f.rarity === targetRarity);
  if (candidates.length === 0) candidates = pool;

  const unowned = candidates.filter(f => !state.unlockedFish.includes(f.id));
  if (unowned.length > 0) return unowned[Math.floor(Math.random() * unowned.length)];

  const isPremium = chestId === 'gold';
  return {
    compensation: true,
    gold: isPremium ? 0 : 100,
    diamonds: isPremium ? 15 : 0
  };
}

function generateDailyOffers() {
  const pool = (ARENA_FISH[state.currentArena] || [])
    .map(e => getFishById(e.fishId))
    .filter(Boolean)
    .filter(f => !state.unlockedFish.includes(f.id));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 2);
}

function renderShop() {
  dom.shopContent.innerHTML = '';

  const chestsTitle = document.createElement('h3');
  chestsTitle.className = 'shop-section-title';
  chestsTitle.textContent = '🎁 Cofres';
  dom.shopContent.appendChild(chestsTitle);

  Object.values(CHEST_TYPES).forEach(chest => {
    const canAfford = chest.costType === 'coins' ? state.coins >= chest.cost : state.diamonds >= chest.cost;
    const card = document.createElement('div');
    card.className = `chest-card${canAfford ? '' : ' locked'}`;
    const rewardTags = [`🟡 ${chest.goldRange[0]}-${chest.goldRange[1]}`];
    if (chest.diamondChance > 0) rewardTags.push(`💎 ${chest.diamondChance >= 1 ? `${chest.diamondRange[0]}-${chest.diamondRange[1]}` : '?'}`);
    if (chest.fishChance > 0) rewardTags.push(`🐟 ${Math.round(chest.fishChance * 100)}%`);
    card.innerHTML = `
      <img src="${chest.imgPath}" alt="Cofre ${chest.name}" class="chest-img">
      <div class="chest-info">
        <div class="chest-name">Cofre de ${chest.name}</div>
        <div class="chest-rewards">${rewardTags.join(' ')}</div>
        <div class="chest-cost">${chest.costType === 'coins' ? '🪙' : '💎'} ${chest.cost}</div>
      </div>
      <button class="btn-buy chest-buy-btn" ${canAfford ? '' : 'disabled'}>Abrir</button>`;
    if (canAfford) {
      card.querySelector('.chest-buy-btn').addEventListener('pointerdown', e => {
        e.preventDefault();
        openChest(chest.id);
      });
    }
    dom.shopContent.appendChild(card);
  });

  const offers = generateDailyOffers();
  if (offers.length > 0) {
    const offersTitle = document.createElement('h3');
    offersTitle.className = 'shop-section-title';
    offersTitle.textContent = '⭐ Ofertas del Día';
    dom.shopContent.appendChild(offersTitle);

    offers.forEach(fish => {
      const price = fish.rarity === 'common' ? 300 : 800;
      const canAfford = state.coins >= price;
      const r = getRarityConfig(fish);
      const card = document.createElement('div');
      card.className = `daily-offer rarity-${r.css}`;
      card.innerHTML = `
        <img src="${fish.imgPath}" alt="${fish.name}" class="daily-offer-img">
        <div class="daily-offer-info">
          <span class="daily-offer-name">${fish.name}</span>
          ${rarityBadgeHtml(fish)}
        </div>
        <div class="daily-offer-price">🪙 ${price}</div>
        <button class="btn-buy daily-buy-btn" ${canAfford ? '' : 'disabled'}>Comprar</button>`;
      if (canAfford) {
        card.querySelector('.daily-buy-btn').addEventListener('pointerdown', e => {
          e.preventDefault();
          buyDailyOfferFish(fish.id, price);
        });
      }
      dom.shopContent.appendChild(card);
    });
  }
}

function buyDailyOfferFish(fishId, price) {
  if (state.unlockedFish.includes(fishId)) { alert('Ya tienes este pez.'); return; }
  if (state.coins < price) { alert('Monedas insuficientes'); return; }
  state.coins -= price;
  state.unlockedFish.push(fishId);
  updateCoinDisplay();
  renderBank();
  renderShop();
}

function openChest(chestId) {
  const chest = CHEST_TYPES[chestId];
  if (!chest) return;

  if (chest.costType === 'coins') {
    if (state.coins < chest.cost) return;
    state.coins -= chest.cost;
  } else {
    if (state.diamonds < chest.cost) return;
    state.diamonds -= chest.cost;
  }
  updateCoinDisplay();
  updateDiamondDisplay();
  renderShop();

  const goldAmount = randInt(chest.goldRange[0], chest.goldRange[1]);
  let diamondAmount = 0;
  if (chest.diamondChance > 0 && Math.random() < chest.diamondChance) {
    diamondAmount = randInt(chest.diamondRange[0], chest.diamondRange[1]);
  }
  let fish = null;
  let compensation = null;
  if (Math.random() < chest.fishChance) {
    const result = pickChestFish(chestId);
    if (result && result.compensation) {
      compensation = result;
    } else {
      fish = result;
    }
  }

  showChestReveal(chest, goldAmount, diamondAmount, fish, compensation);
}

function showChestReveal(chest, gold, diamonds, fish, compensation) {
  const body = dom.chestModalBody;
  if (!body) return;

  state.coins += gold;
  updateCoinDisplay();
  if (diamonds > 0) { state.diamonds += diamonds; updateDiamondDisplay(); }

  let compensationData = null;
  if (compensation) {
    compensationData = compensation;
    if (compensation.gold > 0) { state.coins += compensation.gold; updateCoinDisplay(); }
    if (compensation.diamonds > 0) { state.diamonds += compensation.diamonds; updateDiamondDisplay(); }
  }

  const fishData = fish ? { fish, isNew: !state.unlockedFish.includes(fish.id), r: getRarityConfig(fish) } : null;
  if (fishData) {
    if (fishData.isNew) {
      state.unlockedFish.push(fish.id);
      renderBank();
    } else {
      const lvl = getFishLevel(fish.id);
      if (lvl < 10) state.fishLevels[fish.id] = lvl + 1;
    }
  }

  let currentStep = 0;
  const steps = [];

  steps.push(`<div class="chest-reveal-icon chest-vibrate"><img src="${chest.imgPath}" alt="Cofre ${chest.name}" class="chest-reveal-img"></div>
    <p class="chest-reveal-text">¡Cofre de ${chest.name}!</p>
    <p class="chest-reveal-hint">Toca para abrir</p>`);

  steps.push(`<div class="chest-reveal-icon">🪙</div>
    <p class="chest-reveal-text">¡+${gold} <strong class="gold-text">Monedas</strong>!</p>`);

  if (diamonds > 0) {
    steps.push(`<div class="chest-reveal-icon">💎</div>
      <p class="chest-reveal-text">¡+${diamonds} <strong class="diamond-text">Diamantes</strong>!</p>`);
  }

  if (compensationData) {
    const icon = compensationData.gold > 0 ? '🪙' : '💎';
    const amount = compensationData.gold > 0 ? `${compensationData.gold} Monedas` : `${compensationData.diamonds} Diamantes`;
    steps.push(`<div class="chest-reveal-icon">${icon}</div>
      <p class="chest-reveal-text">¡Colección completa de esta rareza!<br>Compensación: +${amount}</p>`);
  }

  if (fishData) {
    steps.push(`<div class="chest-reveal-icon rarity-glow ${fishData.r.css}"><img src="${fish.imgPath}" alt="${fish.name}" class="reveal-fish-img"></div>
      <p class="chest-reveal-text">${fishData.isNew ? '¡Nuevo pez!' : '¡Sube de nivel!'} <strong class="${fishData.r.css}-text">${fish.name}</strong></p>`);
  }

  function renderStep() {
    body.innerHTML = `<div class="chest-reveal-step">${steps[currentStep]}</div>`;
    if (currentStep === steps.length - 1) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'btn-primary chest-close-btn';
      closeBtn.textContent = 'Cerrar';
      closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeChestModal(); renderShop(); });
      body.querySelector('.chest-reveal-step').after(closeBtn);
    } else {
      body.addEventListener('pointerdown', function handler(e) {
        if (e.target.closest('.chest-reveal-step')) {
          e.preventDefault();
          body.removeEventListener('pointerdown', handler);
          currentStep++;
          renderStep();
        }
      });
    }
  }

  dom.chestModal.classList.add('open');
  document.body.classList.add('modal-open');
  renderStep();
}

function closeChestModal() {
  dom.chestModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

/* ===== COMBATE ===== */
function initCombat() {
  const playerFishId = state.selectedFishId;
  const playerBase = getFishById(playerFishId);
  const playerLevel = getFishLevel(playerFishId);
  const playerType = roundFishStats(getLeveledFishType(playerBase, playerLevel));
  const arenaCfg = getArenaConfig(state.currentArena);
  const enemyLevel = arenaCfg.minLevel + Math.floor(Math.random() * (arenaCfg.maxLevel - arenaCfg.minLevel + 1));
  const enemyBase = randomArenaFish(state.currentArena);
  const enemyType = roundFishStats(getLeveledFishType(enemyBase, enemyLevel));

  const playerBaseFish = getFishById(playerFishId);
  if (playerBaseFish?.passive?.name === 'Barbillones') playerType.atk += 0.5;
  if (enemyBase?.passive?.name === 'Barbillones') enemyType.atk += 0.5;
  if (playerBaseFish?.passive?.name === 'Fuga Serpenteante') playerType.spe += 1;
  if (enemyBase?.passive?.name === 'Fuga Serpenteante') enemyType.spe += 1;
  state.player = { type: playerType, currentHp: playerType.maxHp, maxHp: playerType.maxHp, status: null, mimetismoUsado: false, hipnosisUsado: false, destelloActivado: false, atkReduction: null, debuff: null, buffs: null };
  state.enemy = { type: enemyType, currentHp: enemyType.maxHp, maxHp: enemyType.maxHp, status: null, mimetismoUsado: false, hipnosisUsado: false, destelloActivado: false, atkReduction: null, debuff: null, buffs: null };
  state.isPlayerTurn = true;
  state.gameOver = false;
  state.isAnimating = false;
  state.turnPhase = 'player_first';
  state.isFirstEnemyTurn = true;

  renderCombat();
  showScreen('combat');
  dom.enemySpd.textContent = `SPE: ${enemyType.spe}`;
  dom.playerSpd.textContent = `SPE: ${playerType.spe}`;
  dom.logMessage.textContent = '¡Comienza la batalla!';
  setTimeout(() => startTurn(), 600);
}

function renderCombat() {
  const p = state.player.type;
  const e = state.enemy.type;
  const pLevel = getFishLevel(state.selectedFishId);
  const r = getRarityConfig(p);

  dom.playerName.textContent = `${p.name}  Lv.${pLevel}`;
  dom.playerEmoji.innerHTML = imgTag(p.imgPath, p.name, p.emoji);
  dom.enemyName.textContent = `${e.name}  Lv.${e.level}`;
  dom.enemyEmoji.innerHTML = imgTag(e.imgPath, e.name, e.emoji);
  updateHpBars();
  renderAttackButtons();
  updateStatusDisplay();
}

function renderAttackButtons() {
  dom.attackMenu.innerHTML = '';
  state.player.type.attacks.forEach((atk, index) => {
    const btn = document.createElement('button');
    btn.className = 'btn-attack';
    btn.dataset.index = index;
    const powerLabel = atk.categoria === 'Efecto' ? '✨ Efecto' : `⚡ ${atk.power}`;
    btn.innerHTML = `<span class="atk-emoji">${atk.emoji}</span><span class="atk-name">${atk.name}</span><span class="atk-power">${powerLabel}</span>`;
    btn.addEventListener('pointerdown', e => { e.preventDefault(); playerAttack(index); });
    dom.attackMenu.appendChild(btn);
  });
  updateAttackButtons();
}

function updateAttackButtons() {
  const btns = dom.attackMenu.querySelectorAll('.btn-attack');
  const can = state.isPlayerTurn && !state.gameOver && !state.isAnimating;
  btns.forEach(b => { b.disabled = !can; b.classList.toggle('disabled', !can); });
}

function updateHpBars() {
  const pPct = (state.player.currentHp / state.player.maxHp) * 100;
  const ePct = (state.enemy.currentHp / state.enemy.maxHp) * 100;
  dom.playerHpFill.style.width = clamp(pPct, 0, 100) + '%';
  dom.enemyHpFill.style.width = clamp(ePct, 0, 100) + '%';
  dom.playerHpFill.style.background = hpColor(pPct);
  dom.enemyHpFill.style.background = hpColor(ePct);
  dom.playerHpText.textContent = `${Math.ceil(state.player.currentHp)}/${state.player.maxHp}`;
  dom.enemyHpText.textContent = `${Math.ceil(state.enemy.currentHp)}/${state.enemy.maxHp}`;
}

function hpColor(pct) { return pct > 60 ? '#4caf50' : pct > 30 ? '#ff9800' : '#f44336'; }

function setLogMessage(msg, important) {
  dom.logMessage.textContent = msg;
  dom.logMessage.style.fontWeight = important ? '700' : '400';
}

/* ===== TURNOS ===== */
function checkParalysis(fighter, name) {
  if (fighter.status === 'paralizado' && Math.random() < 0.5) {
    setLogMessage(`¡${name} está paralizado y no puede atacar!`, true);
    return true;
  }
  return false;
}

function startTurn() {
  if (state.gameOver) return;
  state.isAnimating = false;
  updateStatusDisplay();
  const ps = getEffectiveSpeed(state.player), es = getEffectiveSpeed(state.enemy);
  const pPar = state.player.status === 'paralizado';
  const ePar = state.enemy.status === 'paralizado';
  let playerFirst;
  if (pPar && !ePar) playerFirst = false;
  else if (ePar && !pPar) playerFirst = true;
  else playerFirst = ps >= es;
  let turnMsg;
  if (ePar && !pPar) turnMsg = ' (enemigo paralizado pierde iniciativa)';
  else if (pPar && !ePar) turnMsg = ' (estás paralizado, pierdes iniciativa)';
  else turnMsg = ps > es ? ` (${ps} SPE vs ${es} SPE)` : ' (misma velocidad)';
  if (playerFirst) {
    state.turnPhase = 'player_first'; state.isPlayerTurn = true;
    setLogMessage(`¡Tu turno!${turnMsg}`);
    updateAttackButtons();
    if (checkParalysis(state.player, state.player.type.name)) {
      state.isPlayerTurn = false; state.isAnimating = true;
      updateAttackButtons();
      applyStatusDamage(state.player); updateHpBars(); updateStatusDisplay();
      if (checkGameOver()) return;
      applyPassiveHealing(state.player);
      decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
      setTimeout(() => doEnemyAttack(), 1200);
    }
  } else {
    state.turnPhase = 'enemy_first'; state.isPlayerTurn = false; state.isAnimating = true;
    updateAttackButtons();
    setLogMessage(`¡${state.enemy.type.name} ataca primero!${turnMsg}`, true);
    if (checkParalysis(state.enemy, state.enemy.type.name)) {
      applyStatusDamage(state.enemy); updateHpBars(); updateStatusDisplay();
      if (checkGameOver()) return;
      applyPassiveHealing(state.enemy);
      decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
      setTimeout(() => startTurn(), 1200);
    } else {
      setTimeout(() => doEnemyAttack(), 1200);
    }
  }
}

function playerAttack(index) {
  if (!state.isPlayerTurn || state.gameOver || state.isAnimating) return;
  state.isAnimating = true; state.isPlayerTurn = false;
  updateAttackButtons();
  const atk = state.player.type.attacks[index];

  if (atk.categoria === 'Efecto') {
    applyBuff(atk, state.player);
    applyPassiveHealing(state.player);
    decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
    if (state.turnPhase === 'player_first') setTimeout(() => doEnemyAttack(), 1200);
    else setTimeout(() => startTurn(), 1000);
    return;
  }

  if (checkPrecision(state.player)) {
    applyPassiveHealing(state.player);
    decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
    if (state.turnPhase === 'player_first') setTimeout(() => doEnemyAttack(), 1200);
    else setTimeout(() => startTurn(), 1000);
    return;
  }
  if (checkDodge(state.enemy, atk.categoria)) {
    applyPassiveHealing(state.player);
    decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
    if (state.turnPhase === 'player_first') setTimeout(() => doEnemyAttack(), 1200);
    else setTimeout(() => startTurn(), 1000);
    return;
  }
  let dmg = calculateDamage(atk.power, state.player.type, state.enemy.type, atk.categoria, state.player.status, state.enemy.buffs, state.player.atkReduction);
  dmg = applyDefensivePassives(dmg, state.enemy, atk.categoria);
  state.enemy.currentHp = Math.max(0, state.enemy.currentHp - dmg);
  setLogMessage(`¡${state.player.type.name} usa ${atk.name}! -${dmg} HP`, true);
  if (atk.drain) {
    const heal = Math.max(1, Math.floor(dmg * atk.drain));
    state.player.currentHp = Math.min(state.player.maxHp, state.player.currentHp + heal);
    setLogMessage(`¡${state.player.type.name} absorbió +${heal} PS!`, true);
  }
  animateHit(dom.enemyArea); updateHpBars();
  triggerPassive(state.enemy.type, state.player, atk.categoria);
  applySecondaryEffect(atk, state.enemy);
  applySelfBuff(atk, state.player);
  checkDestelloAdvertencia(state.enemy, state.player);
  if (state.enemy.currentHp <= 0) { state.gameOver = true; setTimeout(() => showResult(true), 800); return; }
  applyStatusDamage(state.player); updateHpBars(); updateStatusDisplay();
  if (checkGameOver()) return;
  applyPassiveHealing(state.player);
  decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
  if (state.turnPhase === 'player_first') setTimeout(() => doEnemyAttack(), 1200);
  else setTimeout(() => startTurn(), 1000);
}

function chooseEnemyAttack() {
  const enemy = state.enemy;
  const player = state.player;
  const attacks = enemy.type.attacks;

  const bestStat = enemy.type.atk >= enemy.type.spa ? 'Fisico' : 'Especial';

  const sortedByPower = [...attacks].sort((a, b) => b.power - a.power);

  for (const atk of sortedByPower) {
    const dmg = calculateDamage(atk.power, enemy.type, player.type, atk.categoria, enemy.status, player.buffs, enemy.atkReduction);
    if (dmg >= player.currentHp) return atk;
  }

  const buffAtk = attacks.find(a => a.categoria === 'Efecto' && a.efecto?.estado === 'def_boost' && !enemy.buffs);
  if (buffAtk) {
    const playerPhysicalAttacks = player.type.attacks.filter(a => a.categoria === 'Fisico').length;
    if (playerPhysicalAttacks > 0) return buffAtk;
  }

  const statusAtk = attacks.find(atk => {
    if (!atk.efecto) return false;
    if (atk.efecto.estado === 'precision_reducida') return !player.debuff;
    return !player.status || player.status !== atk.efecto.estado;
  });
  if (statusAtk && state.isFirstEnemyTurn) {
    state.isFirstEnemyTurn = false;
    return statusAtk;
  }
  state.isFirstEnemyTurn = false;

  const bestAttacks = attacks.filter(a => a.categoria === bestStat).sort((a, b) => b.power - a.power);
  if (bestAttacks.length > 0) return bestAttacks[0];

  return sortedByPower[0];
}

function doEnemyAttack() {
  if (state.gameOver) return;
  const atk = chooseEnemyAttack();

  if (atk.categoria === 'Efecto') {
    applyBuff(atk, state.enemy);
    applyPassiveHealing(state.enemy);
    decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
    if (state.turnPhase === 'enemy_first') {
      state.isPlayerTurn = true; state.isAnimating = false; state.turnPhase = 'player_counter';
      setLogMessage('¡Contraataca! Elige un ataque.'); updateAttackButtons();
    } else setTimeout(() => startTurn(), 1000);
    return;
  }

  if (checkPrecision(state.enemy)) {
    applyPassiveHealing(state.enemy);
    decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
    if (state.turnPhase === 'enemy_first') {
      state.isPlayerTurn = true; state.isAnimating = false; state.turnPhase = 'player_counter';
      setLogMessage('¡Contraataca! Elige un ataque.'); updateAttackButtons();
    } else setTimeout(() => startTurn(), 1000);
    return;
  }
  if (checkDodge(state.player, atk.categoria)) {
    applyPassiveHealing(state.enemy);
    decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
    if (state.turnPhase === 'enemy_first') {
      state.isPlayerTurn = true; state.isAnimating = false; state.turnPhase = 'player_counter';
      setLogMessage('¡Contraataca! Elige un ataque.'); updateAttackButtons();
    } else setTimeout(() => startTurn(), 1000);
    return;
  }
  let dmg = calculateDamage(atk.power, state.enemy.type, state.player.type, atk.categoria, state.enemy.status, state.player.buffs, state.enemy.atkReduction);
  dmg = applyDefensivePassives(dmg, state.player, atk.categoria);
  state.player.currentHp = Math.max(0, state.player.currentHp - dmg);
  setLogMessage(`¡${state.enemy.type.name} usa ${atk.name}! -${dmg} HP`, true);
  if (atk.drain) {
    const heal = Math.max(1, Math.floor(dmg * atk.drain));
    state.enemy.currentHp = Math.min(state.enemy.maxHp, state.enemy.currentHp + heal);
    setLogMessage(`¡${state.enemy.type.name} absorbió +${heal} PS!`, true);
  }
  animateHit(dom.playerArea); updateHpBars();
  triggerPassive(state.player.type, state.enemy, atk.categoria);
  applySecondaryEffect(atk, state.player);
  applySelfBuff(atk, state.enemy);
  checkDestelloAdvertencia(state.player, state.enemy);
  if (state.player.currentHp <= 0) { state.gameOver = true; setTimeout(() => showResult(false), 800); return; }
  applyStatusDamage(state.enemy); updateHpBars(); updateStatusDisplay();
  if (checkGameOver()) return;
  applyPassiveHealing(state.enemy);
  decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
  if (state.turnPhase === 'enemy_first') {
    state.isPlayerTurn = true; state.isAnimating = false; state.turnPhase = 'player_counter';
    setLogMessage('¡Contraataca! Elige un ataque.'); updateAttackButtons();
  } else setTimeout(() => startTurn(), 1000);
}

function animateHit(target) {
  target.classList.remove('shake', 'flash-damage');
  void target.offsetWidth;
  target.classList.add('shake', 'flash-damage');
  setTimeout(() => target.classList.remove('shake', 'flash-damage'), 500);
}

function checkGameOver() {
  if (state.enemy.currentHp <= 0) { state.gameOver = true; setTimeout(() => showResult(true), 800); return true; }
  if (state.player.currentHp <= 0) { state.gameOver = true; setTimeout(() => showResult(false), 800); return true; }
  return false;
}

/* ===== RESULTADO ===== */
function showResult(victory) {
  const arena = getArenaConfig(state.currentArena);
  const reward = victory ? arena.winGold : arena.loseGold;
  const cupChange = victory ? 30 : -1;
  state.coins += reward;
  state.cups = Math.max(0, state.cups + cupChange);
  updateCoinDisplay(); updateCupsDisplay();
  checkArenaChange();
  showScreen('result');
  dom.resultTitle.textContent = victory ? '¡VICTORIA!' : 'DERROTA';
  dom.resultTitle.className = 'result-title ' + (victory ? 'victory' : 'defeat');
  dom.resultEmoji.textContent = victory ? '🏆' : '💀';
  dom.resultCups.textContent = victory ? '+30 🏆' : '-1 🏆';
  dom.resultCups.style.color = victory ? '#4facfe' : '#f44336';
  dom.resultSub.textContent = victory
    ? `¡${state.player.type.name} ha vencido a ${state.enemy.type.name}! +${reward} 🪙`
    : `${state.enemy.type.name} ha derrotado a ${state.player.type.name}... +${reward} 🪙`;
}

/* ===== REINICIO ===== */
function resetGame() {
  state.player = null; state.enemy = null;
  state.isPlayerTurn = true; state.gameOver = false; state.isAnimating = false;
  state.turnPhase = 'player_first';
  renderFightContent(); renderBank(); updateCoinDisplay(); updateDiamondDisplay();
  showSection('fight'); showScreen('main');
}

/* ===== EVENTOS ===== */
function setupEvents() {
  dom.btnBattle.addEventListener('pointerdown', e => {
    e.preventDefault();
    if (!state.selectedFishId || state.isAnimating) return;
    if (!state.unlockedFish.includes(state.selectedFishId)) return;
    initCombat();
  });
  dom.arenaDisplay.addEventListener('pointerdown', e => { e.preventDefault(); openArenaModal(); });
  dom.arenaModal.addEventListener('pointerdown', e => {
    if (e.target === dom.arenaModal || e.target.classList.contains('arena-modal-backdrop')) {
      e.preventDefault(); closeArenaModal();
    }
  });
  dom.btnRestart.addEventListener('pointerdown', e => { e.preventDefault(); resetGame(); });
  dom.btnSave.addEventListener('pointerdown', e => { e.preventDefault(); saveGame(); });
  dom.bottomNav.addEventListener('pointerdown', e => {
    const tab = e.target.closest('.nav-tab');
    if (!tab) return;
    e.preventDefault();
    const id = tab.dataset.tab;
    if (id) showSection(id);
  });
}

/* ===== INIT ===== */
function init() {
  loadGame();
  setupEvents();
  renderFightContent();
  renderBank();
  updateCoinDisplay();
  updateDiamondDisplay();
  updateCupsDisplay();
  updateArenaDisplay();
  updateArenaBackground();
  updateSaveTimestampDisplay();
  showSection('fight');
  showScreen('main');
}

document.addEventListener('DOMContentLoaded', init);
