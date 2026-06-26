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
  },
  {
    id: 'pez_loro',
    name: 'Pez Loro',
    rarity: 'rare',
    imgPath: 'img/pez_loro.png',
    emoji: '🦜',
    maxHp: 12, atk: 7, def: 5, spa: 2, spd: 3, spe: 4,
    growth: { maxHp: 1.2, atk: 0.7, def: 0.5, spa: 0.2, spd: 0.3, spe: 0.4 },
    attacks: [
      { name: 'Mordisco de Pico', power: 55, emoji: '🦷', categoria: 'Fisico' },
      { name: 'Saco de Moco Protector', power: 0, emoji: '🛡️', categoria: 'Efecto', efecto: { estado: 'def_boost', turns: 3, amount: 2 } }
    ],
    passive: {
      name: 'Excreción de Arena',
      description: 'Al acertar Mordisco de Pico, aumenta su DEF +10% (máx. 3 veces por combate).'
    }
  },
  {
    id: 'morena',
    name: 'Morena de Arrecife',
    rarity: 'epic',
    imgPath: 'img/morena_arrecife.png',
    emoji: '🐍',
    maxHp: 11, atk: 7, def: 3, spa: 2, spd: 5, spe: 7,
    growth: { maxHp: 1.1, atk: 0.7, def: 0.3, spa: 0.2, spd: 0.5, spe: 0.7 },
    attacks: [
      { name: 'Mandíbula Oculta', power: 60, emoji: '👄', categoria: 'Fisico', efecto: { probabilidad: 0.2, estado: 'aturdido' } },
      { name: 'Intimidación Visual', power: 0, emoji: '😰', categoria: 'Efecto', efecto: { estado: 'atk_reduction', turns: 3, amount: 0.15 } }
    ],
    passive: {
      name: 'Cazadora Nocturna',
      description: 'Aumenta su Velocidad +20% durante los 2 primeros turnos del combate.'
    }
  },
  {
    id: 'camaron_pistola',
    name: 'Camarón Pistola',
    rarity: 'rare',
    imgPath: 'img/camaron_pistola.png',
    emoji: '🦐',
    maxHp: 9, atk: 3, def: 5, spa: 7, spd: 3, spe: 5,
    growth: { maxHp: 0.9, atk: 0.3, def: 0.5, spa: 0.7, spd: 0.3, spe: 0.5 },
    attacks: [
      { name: 'Disparo de Burbuja Sónica', power: 65, emoji: '💥', categoria: 'Especial', efecto: { probabilidad: 0.25, estado: 'aturdido' } },
      { name: 'Chispa Lumínica', power: 30, emoji: '💡', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'precision_reducida', turns: 2 } }
    ],
    passive: {
      name: 'Onda Expansiva',
      description: 'Al usar un ataque Especial, 50% de probabilidad de reducir la Velocidad del rival un -15% el siguiente turno.'
    }
  },
  {
    id: 'pez_cirujano',
    name: 'Pez Cirujano Azul',
    rarity: 'common',
    imgPath: 'img/pez_cirujano_azul.png',
    emoji: '🐟',
    maxHp: 10, atk: 5, def: 3, spa: 3, spd: 4, spe: 6,
    growth: { maxHp: 1.0, atk: 0.5, def: 0.3, spa: 0.3, spd: 0.4, spe: 0.6 },
    attacks: [
      { name: 'Corte de Bisturí', power: 35, emoji: '🔪', categoria: 'Fisico', efecto: { probabilidad: 1, estado: 'sangrado', turns: 3 } },
      { name: 'Ataque Ala-Delta', power: 30, emoji: '💨', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Reflejo Mucoso',
      description: 'Al recibir un ataque Especial, aumenta su Velocidad un 15% durante 2 turnos.'
    }
  },
  {
    id: 'pez_damisela',
    name: 'Pez Damisela Azul',
    rarity: 'common',
    imgPath: 'img/pez_damisela_azul.png',
    emoji: '🐟',
    maxHp: 7, atk: 4, def: 3, spa: 4, spd: 4, spe: 6,
    growth: { maxHp: 0.7, atk: 0.4, def: 0.3, spa: 0.4, spd: 0.4, spe: 0.6 },
    attacks: [
      { name: 'Mordisco Territorial', power: 40, emoji: '🦷', categoria: 'Fisico' },
      { name: 'Destello Azul', power: 0, emoji: '💡', categoria: 'Efecto', efecto: { estado: 'precision_reducida', turns: 2 } }
    ],
    passive: {
      name: 'Frenesí Protector',
      description: 'Si el rival falla por falta de precisión, aumenta tu Ataque Físico un +15% en tu próximo ataque.'
    }
  },
  {
    id: 'pez_ballesta',
    name: 'Pez Ballesta Picassiano',
    rarity: 'common',
    imgPath: 'img/pez_ballesta_picassiano.png',
    emoji: '🎨',
    maxHp: 8, atk: 5, def: 5, spa: 2, spd: 3, spe: 4,
    growth: { maxHp: 0.8, atk: 0.5, def: 0.5, spa: 0.2, spd: 0.3, spe: 0.4 },
    attacks: [
      { name: 'Dentellada de Coral', power: 45, emoji: '🦷', categoria: 'Fisico' },
      { name: 'Bloqueo de Gatillo', power: 0, emoji: '🔒', categoria: 'Efecto', efecto: { estado: 'def_boost', turns: 2, amount: 2 }, debuffImmune: true, debuffImmuneTurns: 2 }
    ],
    passive: {
      name: 'Piel de Cuero',
      description: 'Reduce a la mitad el daño recibido por sangrado o veneno (mínimo 1 PS).'
    }
  },
  {
    id: 'pez_mariposa',
    name: 'Pez Mariposa',
    rarity: 'common',
    imgPath: 'img/pez_mariposa.png',
    emoji: '🦋',
    maxHp: 8, atk: 2, def: 3, spa: 4, spd: 5, spe: 6,
    growth: { maxHp: 0.8, atk: 0.2, def: 0.3, spa: 0.4, spd: 0.5, spe: 0.6 },
    attacks: [
      { name: 'Picoteo Rápido', power: 35, emoji: '👄', categoria: 'Fisico' },
      { name: 'Falso Ojo', power: 0, emoji: '👁️', categoria: 'Efecto', efecto: { estado: 'def_boost', turns: 3, amount: 2 } }
    ],
    passive: {
      name: 'Quiebro Elegante',
      description: 'Reduce el daño del primer ataque Físico recibido en un 20%.'
    }
  },
  {
    id: 'pez_cofre',
    name: 'Pez Cofre Amarillo',
    rarity: 'common',
    imgPath: 'img/pez_cofre_amarillo.png',
    emoji: '🟨',
    maxHp: 9, atk: 3, def: 6, spa: 3, spd: 4, spe: 1,
    growth: { maxHp: 0.9, atk: 0.3, def: 0.6, spa: 0.3, spd: 0.4, spe: 0.1 },
    attacks: [
      { name: 'Embestida Cúbica', power: 40, emoji: '💥', categoria: 'Fisico' },
      { name: 'Burbujas de Presión', power: 35, emoji: '🫧', categoria: 'Especial' }
    ],
    passive: {
      name: 'Piel Toxínica',
      description: '30% de probabilidad de reducir el ATF del rival un 10% al recibir un ataque Físico.'
    }
  },
  {
    id: 'pez_leon',
    name: 'Pez León',
    rarity: 'rare',
    imgPath: 'img/pez_leon.png',
    emoji: '🦁',
    maxHp: 10, atk: 4, def: 4, spa: 7, spd: 4, spe: 3,
    growth: { maxHp: 1.0, atk: 0.4, def: 0.4, spa: 0.7, spd: 0.4, spe: 0.3 },
    attacks: [
      { name: 'Abanico de Espinas', power: 55, emoji: '🌊', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'envenenado' } },
      { name: 'Onda Venenosa', power: 45, emoji: '☠️', categoria: 'Especial', efecto: { estado: 'spe_reduction', turns: 2, amount: 1 } }
    ],
    passive: {
      name: 'Barrera de Agujas',
      description: 'Al recibir un ataque Físico, inflige 1 PS de daño fijo al atacante.'
    }
  },
  {
    id: 'pez_angel_emperador',
    name: 'Pez Ángel Emperador',
    rarity: 'rare',
    imgPath: 'img/pez_angel_emperador.png',
    emoji: '👑',
    maxHp: 10, atk: 5, def: 5, spa: 5, spd: 6, spe: 4,
    growth: { maxHp: 1.0, atk: 0.5, def: 0.5, spa: 0.5, spd: 0.6, spe: 0.4 },
    attacks: [
      { name: 'Embestida Real', power: 55, emoji: '👑', categoria: 'Fisico' },
      { name: 'Canto de Arrecife', power: 45, emoji: '🎵', categoria: 'Especial', efecto: { estado: 'spd_reduction', amount: 0.15 } }
    ],
    passive: {
      name: 'Escamas Majestuosas',
      description: 'Es inmune al estado alterado Sangrado.'
    }
  },
  {
    id: 'pez_piedra',
    name: 'Pez Piedra',
    rarity: 'rare',
    imgPath: 'img/pez_piedra.png',
    emoji: '🪨',
    maxHp: 12, atk: 7, def: 7, spa: 2, spd: 3, spe: 1,
    growth: { maxHp: 1.2, atk: 0.7, def: 0.7, spa: 0.2, spd: 0.3, spe: 0.1 },
    attacks: [
      { name: 'Fagocitar Sorpresa', power: 65, emoji: '🫧', categoria: 'Fisico' },
      { name: 'Espina Dorsal Neurotóxica', power: 40, emoji: '💉', categoria: 'Fisico', efecto: { probabilidad: 1, estado: 'envenenado' } }
    ],
    passive: {
      name: 'Mimetismo Absoluto',
      description: 'En el primer turno, es inmune a todo el daño.'
    }
  },
  {
    id: 'pez_espada',
    name: 'Pez Espada',
    rarity: 'rare',
    imgPath: 'img/pez_espada.png',
    emoji: '🗡️',
    maxHp: 10, atk: 14, def: 6, spa: 5, spd: 7, spe: 15,
    growth: { maxHp: 1.0, atk: 1.4, def: 0.6, spa: 0.5, spd: 0.7, spe: 1.5 },
    attacks: [
      { name: 'Perforación', power: 50, emoji: '🗡️', categoria: 'Fisico' },
      { name: 'Danza Acuática', power: 0, emoji: '💃', categoria: 'Efecto', selfBuff: { stat: 'spe', amount: 2, turns: 3 }, efecto: { probabilidad: 0.3, estado: 'precision_reducida', turns: 2 } }
    ],
    passive: {
      name: 'Estocada Veloz',
      description: 'Al inicio del combate, si su velocidad es mayor que la del rival, su primer ataque físico tiene un +20% de daño crítico.'
    }
  },
  {
    id: 'atun_rojo',
    name: 'Atún Rojo',
    rarity: 'common',
    imgPath: 'img/atun_rojo.png',
    emoji: '🐟',
    maxHp: 15, atk: 9, def: 12, spa: 4, spd: 11, spe: 6,
    growth: { maxHp: 1.5, atk: 0.9, def: 1.2, spa: 0.4, spd: 1.1, spe: 0.6 },
    attacks: [
      { name: 'Coletazo Sísmico', power: 60, emoji: '🌊', categoria: 'Fisico', efecto: { probabilidad: 0.15, estado: 'spe_reduction', turns: 2, amount: 1 } },
      { name: 'Corriente de Recuperación', power: 0, emoji: '💧', categoria: 'Efecto', selfHeal: { pct: 0.25, maxUses: 1 } }
    ],
    passive: {
      name: 'Resistencia Marina',
      description: 'Cuando su vida baja del 50%, su Defensa Física aumenta un +20% automáticamente el resto del combate.'
    }
  },
  {
    id: 'tiburon_martillo',
    name: 'Tiburón Martillo',
    rarity: 'epic',
    imgPath: 'img/tiburon_martillo.png',
    emoji: '🦈',
    maxHp: 11, atk: 13, def: 9, spa: 6, spd: 8, spe: 10,
    growth: { maxHp: 1.1, atk: 1.3, def: 0.9, spa: 0.6, spd: 0.8, spe: 1.0 },
    attacks: [
      { name: 'Golpe de Testa', power: 65, emoji: '💥', categoria: 'Fisico', efecto: { probabilidad: 0.2, estado: 'spe_reduction', turns: 1, amount: 15 } },
      { name: 'Frenesí de Caza', power: 0, emoji: '🔥', categoria: 'Efecto', selfBuff: { stat: 'atk', amount: 3, turns: 3 } }
    ],
    passive: {
      name: 'Sensor Electromagnético',
      description: 'Los ataques del Tiburón Martillo nunca pueden fallar y reduce la probabilidad de evasión del rival a la mitad.'
    }
  },
  {
    id: 'pez_volador',
    name: 'Pez Volador',
    rarity: 'common',
    imgPath: 'img/pez_volador.png',
    emoji: '🪽',
    maxHp: 8, atk: 3, def: 3, spa: 4, spd: 4, spe: 8,
    growth: { maxHp: 0.8, atk: 0.3, def: 0.3, spa: 0.4, spd: 0.4, spe: 0.8 },
    attacks: [
      { name: 'Planeo Evasivo', power: 0, emoji: '🪽', categoria: 'Efecto', efecto: { estado: 'dodge_boost', turns: 2, amount: 0.2 } },
      { name: 'Aletazo Veloz', power: 40, emoji: '💨', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Impulso de Huida',
      description: 'Si su vida baja del 30%, su velocidad aumenta un +20% extra automáticamente.'
    }
  },
  {
    id: 'remora',
    name: 'Rémora',
    rarity: 'common',
    imgPath: 'img/remora.png',
    emoji: '🦈',
    maxHp: 10, atk: 4, def: 5, spa: 3, spd: 5, spe: 4,
    growth: { maxHp: 1.0, atk: 0.4, def: 0.5, spa: 0.3, spd: 0.5, spe: 0.4 },
    attacks: [
      { name: 'Succión Parásita', power: 35, emoji: '🩸', categoria: 'Fisico', drain: 0.2 },
      { name: 'Placa Adhesiva', power: 0, emoji: '🦈', categoria: 'Efecto', efecto: { estado: 'spe_reduction', turns: 2, amount: 1 } }
    ],
    passive: {
      name: 'Escudo Remoto',
      description: 'Si lleva equipado un objeto defensivo, el efecto de ese objeto se duplica.'
    }
  },
  {
    id: 'barracuda',
    name: 'Barracuda',
    rarity: 'rare',
    imgPath: 'img/barracuda.png',
    emoji: '🐊',
    maxHp: 8, atk: 8, def: 3, spa: 3, spd: 3, spe: 8,
    growth: { maxHp: 0.8, atk: 0.8, def: 0.3, spa: 0.3, spd: 0.3, spe: 0.8 },
    attacks: [
      { name: 'Mandíbula Desgarradora', power: 60, emoji: '🦷', categoria: 'Fisico', efecto: { probabilidad: 1, estado: 'sangrado', turns: 3 } },
      { name: 'Acecho Brillante', power: 0, emoji: '✨', categoria: 'Efecto', selfBuff: { stat: 'crit', amount: 0.25, turns: 1 } }
    ],
    passive: {
      name: 'Frenesí Sangriento',
      description: 'Si el pez rival ya está sufriendo Sangrado, el ataque de la Barracuda aumenta un +20%.'
    }
  },
  {
    id: 'pez_vela',
    name: 'Pez Vela',
    rarity: 'epic',
    imgPath: 'img/pez_vela.png',
    emoji: '⛵',
    maxHp: 10, atk: 6, def: 4, spa: 5, spd: 5, spe: 10,
    growth: { maxHp: 1.0, atk: 0.6, def: 0.4, spa: 0.5, spd: 0.5, spe: 1.0 },
    attacks: [
      { name: 'Estocada de Aguja', power: 70, emoji: '🗡️', categoria: 'Fisico', ignoraDefensa: 0.3 },
      { name: 'Corte de Cresta', power: 55, emoji: '🌊', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'precision_reducida', turns: 2 } }
    ],
    passive: {
      name: 'Rompebarreras',
      description: 'Al ser tan rápido, en el primer turno del combate siempre ataca dos veces seguidas.'
    }
  },
  {
    id: 'carabela_portuguesa',
    name: 'Carabela Portuguesa',
    rarity: 'epic',
    imgPath: 'img/carabela_portuguesa.png',
    emoji: '🪼',
    maxHp: 8, atk: 2, def: 5, spa: 8, spd: 7, spe: 2,
    growth: { maxHp: 1.0, atk: 0.2, def: 0.5, spa: 0.8, spd: 0.7, spe: 0.2 },
    attacks: [
      { name: 'Látigo de Neurotoxinas', power: 60, emoji: '🧪', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'envenenado' } },
      { name: 'Sifón de Flotación', power: 0, emoji: '🎈', categoria: 'Efecto', selfBuff: { stat: 'spd', amount: 3, turns: 2 } }
    ],
    passive: {
      name: 'Tentáculos Flotantes',
      description: 'Cualquier rival que la ataque con un golpe Físico queda envenenado automáticamente durante 2 turnos.'
    }
  },
  {
    id: 'pez_linterna',
    name: 'Pez Linterna',
    rarity: 'common',
    imgPath: 'img/pez_linterna.png',
    emoji: '🏮',
    maxHp: 6, atk: 5, def: 4, spa: 8, spd: 6, spe: 7,
    growth: { maxHp: 0.6, atk: 0.5, def: 0.4, spa: 0.8, spd: 0.6, spe: 0.7 },
    attacks: [
      { name: 'Destello Ciego', power: 45, emoji: '💡', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'precision_reducida', turns: 2 } },
      { name: 'Aleta Brillante', power: 35, emoji: '✨', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Luz Guía',
      description: 'Sus ataques de tipo Especial nunca pueden fallar, ignorando la evasión del rival.'
    }
  },
  {
    id: 'pez_tripode',
    name: 'Pez Trípode',
    rarity: 'common',
    imgPath: 'img/pez_tripode.png',
    emoji: '🦯',
    maxHp: 8, atk: 4, def: 9, spa: 4, spd: 8, spe: 2,
    growth: { maxHp: 0.8, atk: 0.4, def: 0.9, spa: 0.4, spd: 0.8, spe: 0.2 },
    attacks: [
      { name: 'Anclaje', power: 0, emoji: '⚓', categoria: 'Efecto', efecto: { estado: 'def_boost', turns: 3, amount: 2 } },
      { name: 'Coletazo de Fangos', power: 50, emoji: '💩', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Inamovible',
      description: 'Es inmune a ser aturdido o ralentizado mientras tenga más del 50% de la vida.'
    }
  },
  {
    id: 'pez_demonio',
    name: 'Pez Demonio',
    rarity: 'rare',
    imgPath: 'img/pez_demonio.png',
    emoji: '🧛',
    maxHp: 7, atk: 11, def: 6, spa: 2, spd: 5, spe: 9,
    growth: { maxHp: 0.7, atk: 1.1, def: 0.6, spa: 0.2, spd: 0.5, spe: 0.9 },
    attacks: [
      { name: 'Mordisco de Agujas', power: 75, emoji: '🦷', categoria: 'Fisico', efecto: { probabilidad: 1, estado: 'sangrado', turns: 3 } },
      { name: 'Aletazo Cortante', power: 50, emoji: '🔪', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Mandíbula Traba',
      description: 'Si el rival está sufriendo Sangrado, se cura un 15% del daño que inflija con ataques físicos.'
    }
  },
  {
    id: 'tiburon_anguila',
    name: 'Tiburón Anguila',
    rarity: 'rare',
    imgPath: 'img/tiburon_anguila.png',
    emoji: '🐍',
    maxHp: 10, atk: 9, def: 7, spa: 4, spd: 6, spe: 7,
    growth: { maxHp: 1.0, atk: 0.9, def: 0.7, spa: 0.4, spd: 0.6, spe: 0.7 },
    attacks: [
      { name: 'Constricción Abisal', power: 65, emoji: '🔄', categoria: 'Fisico', efecto: { probabilidad: 0.2, estado: 'aturdido' } },
      { name: 'Coletazo Eléctrico', power: 50, emoji: '⚡', categoria: 'Especial' }
    ],
    passive: {
      name: 'Piel Ancestral',
      description: 'Reduce un 15% el daño recibido por estados alterados (veneno/sangrado).'
    }
  },
  {
    id: 'pez_vibora',
    name: 'Pez Víbora',
    rarity: 'rare',
    imgPath: 'img/pez_vibora.png',
    emoji: '🐍💀',
    maxHp: 6, atk: 12, def: 4, spa: 3, spd: 4, spe: 11,
    growth: { maxHp: 0.6, atk: 1.2, def: 0.4, spa: 0.3, spd: 0.4, spe: 1.1 },
    attacks: [
      { name: 'Estocada Invisible', power: 80, emoji: '🗡️', categoria: 'Fisico', ignoraDefensa: 0.2 },
      { name: 'Colmillo Relámpago', power: 55, emoji: '⚡', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Emboscada',
      description: 'En el primer turno de combate, su probabilidad de Golpe Crítico aumenta un +30%.'
    }
  },
  {
    id: 'tiburon_duende',
    name: 'Tiburón Duende',
    rarity: 'epic',
    imgPath: 'img/tiburon_duende.png',
    emoji: '👺',
    maxHp: 11, atk: 13, def: 8, spa: 3, spd: 7, spe: 5,
    growth: { maxHp: 1.1, atk: 1.3, def: 0.8, spa: 0.3, spd: 0.7, spe: 0.5 },
    attacks: [
      { name: 'Mandíbula Extensible', power: 95, emoji: '👄', categoria: 'Fisico', efecto: { probabilidad: 1, estado: 'spe_reduction', turns: 2, amount: 2 } },
      { name: 'Embestida Abisal', power: 60, emoji: '💥', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Sorpresa Abismal',
      description: 'Cuando usa Mandíbula Extensible, rompe instantáneamente cualquier escudo protector del rival.'
    }
  },
  {
    id: 'engullidor_negro',
    name: 'Engullidor Negro',
    rarity: 'epic',
    imgPath: 'img/engullidor_negro.png',
    emoji: '🕳️',
    maxHp: 13, atk: 7, def: 5, spa: 11, spd: 9, spe: 4,
    growth: { maxHp: 1.3, atk: 0.7, def: 0.5, spa: 1.1, spd: 0.9, spe: 0.4 },
    attacks: [
      { name: 'Fagocitosis', power: 85, emoji: '🌀', categoria: 'Especial', drain: 0.3 },
      { name: 'Tirón Gravitatorio', power: 50, emoji: '🌌', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'spe_reduction', turns: 2, amount: 1 } }
    ],
    passive: {
      name: 'Estómago Sin Fondo',
      description: 'Cada vez que derrota a un rival, recupera un 25% de sus PS máximos instantáneamente.'
    }
  },
  {
    id: 'kraken',
    name: 'Kraken',
    rarity: 'legendary',
    imgPath: 'img/kraken.png',
    emoji: '🦑',
    maxHp: 15, atk: 14, def: 9, spa: 5, spd: 10, spe: 4,
    growth: { maxHp: 1.5, atk: 1.4, def: 0.9, spa: 0.5, spd: 1.0, spe: 0.4 },
    attacks: [
      { name: 'Presión del Abismo', power: 110, emoji: '🌊', categoria: 'Fisico', efecto: { probabilidad: 0.3, estado: 'aturdido' } },
      { name: 'Tentáculos Opresores', power: 70, emoji: '🦑', categoria: 'Fisico', efecto: { probabilidad: 1, estado: 'atk_reduction', turns: 2, amount: 0.15 } }
    ],
    passive: {
      name: 'Kraken Desatado',
      description: 'Al bajar del 40% de vida, se limpia de estados alterados y su ataque sube un +30%.'
    }
  }
];

/* ===== ITEMS DATA ===== */
const ITEMS = [
  { id: 'fragmento_coral', name: 'Fragmento de Coral', rarity: 'common', imgPath: 'img/objetos/fragmento_coral.png', emoji: '🪸', description: 'Recupera 5% de los PS Máximos por turno.' },
  { id: 'diente_tiburon', name: 'Diente de Tiburón', rarity: 'rare', imgPath: 'img/objetos/diente_tiburon.png', emoji: '🦈', description: '+15% al daño físico infligido.' },
  { id: 'caparazon_tortuga', name: 'Caparazón de Tortuga', rarity: 'rare', imgPath: 'img/objetos/caparazon_tortuga.png', emoji: '🐢', description: 'Aumenta la Defensa Física del portador en un 15%.' },
  { id: 'tinta_concentrada', name: 'Tinta Concentrada', rarity: 'epic', imgPath: 'img/objetos/tinta_concentrada.png', emoji: '🐙', description: 'Reduce la precisión del rival un 20% los 2 primeros turnos.' },
  { id: 'aleta_voladora', name: 'Aleta de Pez Volador', rarity: 'epic', imgPath: 'img/objetos/aleta_pez.png', emoji: '⚡', description: '+10% a la Velocidad base del portador.' },
  { id: 'obj_concha_reforzada', name: 'Concha Reforzada', rarity: 'common', imgPath: 'img/objetos/concha_reforzada.png', emoji: '🐚', description: 'Un fragmento de concha gruesa que absorbe los impactos. Aumenta la Defensa Física un +10%.' },
  { id: 'obj_escama_brillante', name: 'Escama Brillante', rarity: 'common', imgPath: 'img/objetos/escama_brillante.png', emoji: '✨', description: 'Una escama pulida que refleja la luz. Aumenta la Velocidad un +10% y otorga +5% de Esquiva.' },
  { id: 'obj_coral_fuego', name: 'Coral de Fuego', rarity: 'rare', imgPath: 'img/objetos/coral_fuego.png', emoji: '🪸', description: 'Coral urticante. Los ataques Especiales ganan un 15% de probabilidad de infligir Veneno por 2 turnos.' },
  { id: 'obj_toxina_concentrada', name: 'Toxina Concentrada', rarity: 'epic', imgPath: 'img/objetos/toxina_concentrada.png', emoji: '🧪', description: 'Veneno puro. Los estados alterados (Veneno/Sangrado/Aturdir) causados por este pez no se pueden mitigar.' },
  { id: 'obj_perla_arrecife', name: 'Perla del Arrecife', rarity: 'epic', imgPath: 'img/objetos/perla_arrecife.png', emoji: '🔮', description: 'Joya mística. Al iniciar el combate, otorga al portador un Escudo protector equivalente al 20% de sus PS máximos.' }
];

const SHOP_ITEMS = [
  { itemId: 'fragmento_coral',   cost: 150, costType: 'coins' },
  { itemId: 'diente_tiburon',    cost: 400, costType: 'coins' },
  { itemId: 'caparazon_tortuga',  cost: 400, costType: 'coins' },
  { itemId: 'tinta_concentrada',  cost: 1000, costType: 'coins' },
  { itemId: 'aleta_voladora',    cost: 1000, costType: 'coins' },
  { itemId: 'obj_concha_reforzada',   cost: 150, costType: 'coins' },
  { itemId: 'obj_escama_brillante',   cost: 150, costType: 'coins' },
  { itemId: 'obj_coral_fuego',        cost: 450, costType: 'coins' },
  { itemId: 'obj_toxina_concentrada', cost: 1000, costType: 'coins' },
  { itemId: 'obj_perla_arrecife',     cost: 1200, costType: 'coins' }
];

const GEM_PACKS = [
  { id: 'small',  name: 'Bolsa de Oro Pequeña',  cost: 10,  reward: 250,  imgPath: 'img/oro_pequeno.png',  emoji: '📦' },
  { id: 'medium', name: 'Cofre de Oro Mediano',   cost: 50,  reward: 1500, imgPath: 'img/oro_mediano.png',   emoji: '📦' },
  { id: 'large',  name: 'Tesoro de Oro Grande',   cost: 100, reward: 3500, imgPath: 'img/oro_grande.png',   emoji: '📦' }
];

const DAILY_MISSIONS = [
  { id: 'win_battles', name: '🏆 Gana 3 Combates', desc: 'Gana combates en la arena', target: 3, reward: 100 },
  { id: 'fisico_attacks', name: '💪 5 Ataques Físicos', desc: 'Realiza ataques físicos en combate', target: 5, reward: 80 },
  { id: 'especial_attacks', name: '✨ 5 Ataques Especiales', desc: 'Realiza ataques especiales en combate', target: 5, reward: 80 },
  { id: 'play_battles', name: '⚔️ Buscando camorra', desc: 'Juega 3 partidas en total (ganadas o perdidas)', target: 3, reward: 80 },
  { id: 'top_arena_battles', name: '🗺️ Explorador de zonas', desc: 'Juega 2 partidas en la Arena más alta desbloqueada', target: 2, reward: 120 },
  { id: 'apply_stun', name: '😵 ¡Eso ha tenido que doler!', desc: 'Aplica el estado Aturdido 3 veces', target: 3, reward: 90 },
  { id: 'poison_bleed_damage', name: '☠️ Peces ponzoñosos', desc: 'Inflige daño por Veneno o Sangrado 5 veces', target: 5, reward: 100 },
  { id: 'passive_shield', name: '🛡️ ¡No me toques!', desc: 'Activa una habilidad pasiva de escudo o contraataque 2 veces', target: 2, reward: 90 },
  { id: 'reduce_precision', name: '👁️ Cegado por la luz', desc: 'Reduce la precisión de un rival 3 veces', target: 3, reward: 80 },
  { id: 'level_up_fish', name: '📈 Entrenamiento intensivo', desc: 'Sube de nivel a cualquier pez 1 vez', target: 1, reward: 150 },
  { id: 'earn_cups_fish', name: '🏅 Especialista', desc: 'Gana 15 copas individuales con un mismo pez', target: 15, reward: 200 }
];

const BATTLE_PASS_XP_PER_LEVEL = 100;
const BATTLE_PASS_XP_REWARDS = { victory: 25, defeat: 10, dailyMission: 50 };
const BATTLE_PASS_DURATION_DAYS = 30;
const BATTLE_PASS_TOTAL_LEVELS = 10;
const BATTLE_PASS_DURATION_MS = BATTLE_PASS_DURATION_DAYS * 24 * 60 * 60 * 1000;
const BATTLE_PASS_LEVELS = [
  {
    level: 1,
    free: { type: 'coins', amount: 100, label: '100 Monedas' },
    premium: { type: 'coins', amount: 300, label: '300 Monedas Extra' }
  },
  {
    level: 2,
    free: { type: 'item', label: 'Concha Común' },
    premium: { type: 'item', label: 'Diente de Tiburón' }
  },
  {
    level: 3,
    free: { type: 'coins', amount: 150, label: '150 Monedas' },
    premium: { type: 'coins', amount: 400, label: '400 Monedas Extra' }
  },
  {
    level: 4,
    free: { type: 'coins', amount: 200, label: '200 Monedas' },
    premium: { type: 'item', label: 'Anzuelo de la Suerte' }
  },
  {
    level: 5,
    free: { type: 'coins', amount: 250, label: '250 Monedas' },
    premium: { type: 'coins', amount: 600, label: '600 Monedas Extra' }
  },
  {
    level: 6,
    free: { type: 'item', label: 'Coral Defensivo' },
    premium: { type: 'item', label: 'Perla del Abismo' }
  },
  {
    level: 7,
    free: { type: 'coins', amount: 300, label: '300 Monedas' },
    premium: { type: 'coins', amount: 800, label: '800 Monedas Extra' }
  },
  {
    level: 8,
    free: { type: 'item', label: 'Concha Reforzada' },
    premium: { type: 'item', label: 'Tridente Roto' }
  },
  {
    level: 9,
    free: { type: 'coins', amount: 400, label: '400 Monedas' },
    premium: { type: 'coins', amount: 1200, label: '1200 Monedas Extra' }
  },
  {
    level: 10,
    free: { type: 'title', label: 'Guardián del Mar' },
    premium: { type: 'frame', label: 'Marco Cosmético Dorado' }
  }
];

const COLLECTION_MASTER_REWARD = { coins: 2000, diamonds: 30 };

/* ===== CONSTANTS ===== */
const MAX_LEVEL = 12;

const ARENA_CUP_CHANGES = {
  1: { win: 30, lose: -5 },
  2: { win: 30, lose: -10 },
  3: { win: 30, lose: -20 },
  4: { win: 30, lose: -25 }
};

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
  arenaMaxReached: 1,
  unlockedFish: ['salmonete'],
  fishLevels: {},
  fishCups: {},
  items: [],
  equippedItems: {},
  lastFreeClaim: null,
  missions: {},
  missionsActive: [],
  missionsClaimed: [],
  missionsBonusClaimed: false,
  missionsRefreshTime: null,
  nivel_pase: 0,
  xp_pase: 0,
  tiene_premium: false,
  paseInicioTemporada: Date.now(),
  paseRecompensasReclamadas: [],
  paseObjetos: [],
  titulosDesbloqueados: [],
  marcosDesbloqueados: [],
  achievements: {
    collectionMaster: {
      rewardedForTotal: 0
    }
  },
  player: null,
  enemy: null,
  isPlayerTurn: true,
  gameOver: false,
  isAnimating: false,
  turnPhase: 'player_first',
  muelle: null
};

/* ===== DOM HELPERS ===== */
const $ = id => document.getElementById(id);
const dom = {
  screenMain: $('screen-main'), screenCombat: $('screen-combat'), screenResult: $('screen-result'),
  bottomNav: $('bottom-nav'), coinDisplay: $('coin-display'), diamondDisplay: $('diamond-display'),
  sectionFight: $('section-fight'), sectionBank: $('section-bank'),
  sectionShop: $('section-shop'), sectionInventory: $('section-inventory'),
  sectionMuelle: $('section-muelle'),
  fightContent: $('fight-content'), bankCards: $('bank-cards'),   shopContent: $('shop-content'),
  cupsDisplay: $('cups-display'), resultCups: $('result-cups'),  fishModal: $('fish-modal'), fishModalBody: $('fish-modal-body'),
  btnBattle: $('btn-battle'), btnRestart: $('btn-restart'),
  enemyName: $('enemy-name'), enemyHpText: $('enemy-hp-text'), enemyHpFill: $('enemy-hp-fill'),
  enemyEmoji: $('enemy-emoji'), enemyArea: $('enemy-area'), enemySpd: $('enemy-spd'),
  playerName: $('player-name'), playerHpText: $('player-hp-text'), playerHpFill: $('player-hp-fill'),
  playerEmoji: $('player-emoji'), playerArea: $('player-area'), playerSpd: $('player-spd'),
  arenaDisplay: $('arena-display'), arenaModal: $('arena-modal'), arenaModalBody: $('arena-modal-body'),
  attackMenu: $('attack-menu'), logMessage: $('log-message'),
  resultTitle: $('result-title'), resultEmoji: $('result-emoji'), resultSub: $('result-sub'),
  chestModal: $('chest-modal'), chestModalBody: $('chest-modal-body'),
  inventoryContent: $('inventory-content'),
  equipModal: $('equip-modal'), equipModalBody: $('equip-modal-body'),
  missionsModal: $('missions-modal'), missionsModalBody: $('missions-modal-body'),
  battlePassModal: $('battle-pass-modal'), battlePassModalBody: $('battle-pass-modal-body'),
  itemModal: $('item-modal'), itemModalBody: $('item-modal-body'),
  profileModal: $('profile-modal'), profileModalBody: $('profile-modal-body'),
  battlePassBtn: $('battle-pass-btn')
};

function getEventTargetElement(target) {
  if (target instanceof Element) return target;
  if (target && target.parentElement instanceof Element) return target.parentElement;
  return null;
}

/* ===== UTILITY ===== */
function getFishById(id) { return FISH_TYPES.find(f => f.id === id); }
function randomFish() { return FISH_TYPES[Math.floor(Math.random() * FISH_TYPES.length)]; }

function getCollectionProgress() {
  const totalFish = FISH_TYPES.length;
  const unlockedFish = new Set(state.unlockedFish.filter(id => !!getFishById(id))).size;
  return { totalFish, unlockedFish };
}

function isCollectionMasterUnlocked() {
  const { totalFish, unlockedFish } = getCollectionProgress();
  return totalFish > 0 && unlockedFish === totalFish;
}

function checkCollectionMasterAchievement({ notify = true } = {}) {
  if (!isCollectionMasterUnlocked()) return false;
  const totalFish = FISH_TYPES.length;
  if (!state.achievements?.collectionMaster) {
    state.achievements = state.achievements || {};
    state.achievements.collectionMaster = { rewardedForTotal: 0 };
  }
  if (state.achievements.collectionMaster.rewardedForTotal === totalFish) return true;

  state.achievements.collectionMaster.rewardedForTotal = totalFish;
  state.coins += COLLECTION_MASTER_REWARD.coins;
  state.diamonds += COLLECTION_MASTER_REWARD.diamonds;
  updateCoinDisplay();
  updateDiamondDisplay();
  updateNotificationDots();

  if (notify) {
    alert(`🏅 ¡Logro desbloqueado: Maestro de la Colección!\nRecompensa: +${COLLECTION_MASTER_REWARD.coins} 🪙 y +${COLLECTION_MASTER_REWARD.diamonds} 💎`);
  }
  return true;
}

function getTrophyBadges() {
  const { totalFish, unlockedFish } = getCollectionProgress();
  const totalArenas = Object.keys(ARENA_CONFIG).length;
  const totalCups = getTotalCups();
  const cupTarget = 500;
  return [
    {
      id: 'collection_master',
      icon: '🏅',
      name: 'Maestro de la Colección',
      desc: `Desbloquea ${totalFish} peces`,
      progress: `${unlockedFish}/${totalFish} peces`,
      unlocked: isCollectionMasterUnlocked()
    },
    {
      id: 'arena_conqueror',
      icon: '🏟️',
      name: 'Conquistador de Arenas',
      desc: `Llega a la Arena ${totalArenas}`,
      progress: `Arena máxima: ${Math.min(state.arenaMaxReached, totalArenas)}/${totalArenas}`,
      unlocked: state.arenaMaxReached >= totalArenas
    },
    {
      id: 'cup_hunter',
      icon: '🏆',
      name: 'Cazador de Copas',
      desc: `Alcanza ${cupTarget} copas totales`,
      progress: `${Math.min(totalCups, cupTarget)}/${cupTarget} copas`,
      unlocked: totalCups >= cupTarget
    }
  ];
}

function getArenaFishPool(arenaId) {
  let pool = [...(ARENA_FISH[arenaId] || [])];
  if (arenaId === 2) {
    const prev = ARENA_FISH[1] || [];
    pool = [...prev, ...pool];
  }
  return pool;
}

function randomArenaFish(arenaId) {
  const pool = getArenaFishPool(arenaId);
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

function getFishCups(fishId) { return state.fishCups[fishId] || 0; }
function getTotalCups() { return state.unlockedFish.reduce((sum, id) => sum + getFishCups(id), 0); }

function getLeveledFishType(base, level) {
  const steps = level - 1;
  const mult = (v) => Math.round(v * Math.pow(1.20, steps));
  return {
    ...base,
    level,
    maxHp: mult(base.maxHp),
    atk: mult(base.atk),
    def: mult(base.def),
    spa: mult(base.spa),
    spd: mult(base.spd),
    spe: mult(base.spe)
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

/* ===== ITEM HELPERS ===== */
function getEquippedItemId(fishId) {
  return state.equippedItems[fishId] || null;
}
function hasEquippedItem(fishId, itemId) {
  return state.equippedItems[fishId] === itemId;
}

const DEFENSIVE_ITEMS = ['fragmento_coral', 'caparazon_tortuga', 'obj_concha_reforzada', 'obj_escama_brillante', 'obj_perla_arrecife'];

function hasEscudoRemotoPassive(fishId) {
  const base = getFishById(fishId);
  return base && base.passive && base.passive.name === 'Escudo Remoto';
}

function hasDefensiveItem(fishId) {
  return DEFENSIVE_ITEMS.some(id => hasEquippedItem(fishId, id));
}

function getItemMultiplier(fishId, itemId) {
  return hasEscudoRemotoPassive(fishId) && hasEquippedItem(fishId, itemId) ? 2 : 1;
}

/* ===== UPGRADE ===== */
const UPGRADE_BASE = { common: 50, rare: 100, epic: 250, legendary: 500 };

function getUpgradeCost(level, rarity) {
  if (level >= MAX_LEVEL) return null;
  const base = UPGRADE_BASE[rarity] || 100;
  return base * Math.pow(2, level - 1);
}

function upgradeFish(fishId) {
  const fish = getFishById(fishId);
  if (!fish) return;
  const level = getFishLevel(fishId);
  const cost = getUpgradeCost(level, fish.rarity);
  if (cost === null) { alert('¡Este pez ya está en el nivel máximo!'); return; }
  if (state.coins < cost) { alert('Monedas insuficientes'); return; }
  state.coins -= cost;
  state.fishLevels[fishId] = level + 1;
  updateCoinDisplay();
  trackMission('level_up_fish');
  showFishDetail(fishId);
}

/* ===== DAMAGE FORMULA ===== */
function calculateDamage(power, attacker, defender, categoria, attackerStatus, defenderBuffs, attackerAtkReduction, defenderSpdReduction, atk) {
  const atkDef = attackerStatus === 'quemado' && categoria === 'Fisico' ? Math.round(attacker.atk / 2) : attacker.atk;
  let A = categoria === 'Fisico' ? atkDef : attacker.spa;
  if (categoria === 'Fisico' && attackerAtkReduction) A = Math.round(A * (1 - attackerAtkReduction));
  let D = categoria === 'Fisico' ? defender.def : defender.spd;
  if (categoria === 'Especial' && defenderSpdReduction) D = Math.round(D * (1 - defenderSpdReduction));
  if (categoria === 'Fisico' && defenderBuffs?.defBoost) D += defenderBuffs.defBoost;
  if (categoria === 'Especial' && defenderBuffs?.spdBoost) D += defenderBuffs.spdBoost;
  if (categoria === 'Fisico') {
    const base = getFishById(attacker.id);
    if (base?.passive?.name === 'Punta Perforante') D = Math.max(1, Math.round(D * 0.8));
    if (atk?.ignoraDefensa) D = Math.max(1, Math.round(D * (1 - atk.ignoraDefensa)));
  }
  let dmg = ((((2 * attacker.level / 5) + 2) * power * (A / D)) / 50) + 2;
  let result = Math.max(1, Math.round(dmg));
  if (categoria === 'Fisico' && attacker.id === state.selectedFishId && hasEquippedItem(state.selectedFishId, 'diente_tiburon')) {
    result = Math.max(1, Math.round(result * 1.15));
    setLogMessage(`¡Diente de Tiburón potencia el ataque +15%!`, true);
  }
  const atkBase = getFishById(attacker.id);
  if (atkBase?.passive?.name === 'Frenesí Sangriento') {
    const defFighter = defender.id === state.player?.type?.id ? state.player : state.enemy;
    if (defFighter?.sangradoTurns > 0) {
      result = Math.round(result * 1.2);
      setLogMessage(`¡Frenesí Sangriento de Barracuda! Daño +20%`, true);
    }
  }
  const atkFighter = attacker.id === state.player?.type?.id ? state.player : state.enemy;
  if (atkFighter?.buffs?.critChance && Math.random() < atkFighter.buffs.critChance) {
    result = Math.round(result * 2);
    setLogMessage(`¡${attacker.name} asesta un GOLPE CRÍTICO! Daño x2`, true);
  }
  return result;
}

function getEffectiveSpeed(fighter) {
  let spe = fighter.type.spe;
  if (fighter.status === 'veneno_grave') spe = Math.round(spe * 0.9);
  if (fighter.debuff?.type === 'spe_reduction') spe = Math.max(1, spe - (fighter.debuff.amount || 1));
  if (fighter.buffs?.speBoost) spe += fighter.buffs.speBoost;
  if (fighter.impulsoHuidaActivo) spe = Math.round(spe * 1.2);
  return spe;
}

function checkStatusImmunity(fighter) {
  if (!fighter || fighter.currentHp <= 0) return false;
  if (fighter.buffs?.debuffImmuneTurns > 0) {
    setLogMessage(`¡${fighter.type?.name || fighter.name} es inmune a reducción de stats!`, true);
    return true;
  }
  const fishId = fighter.type?.id || fighter.id;
  const base = getFishById(fishId);
  if (!base || !base.passive) return false;
  if (base.passive.name === 'Cierre Hermético' && fighter.currentHp > fighter.maxHp / 2) {
    setLogMessage(`¡${fighter.type?.name || fighter.name} bloqueó el efecto con Cierre Hermético!`, true);
    return true;
  }
  if (base.passive.name === 'Inamovible' && fighter.currentHp > fighter.maxHp * 0.5) {
    setLogMessage(`¡${fighter.type?.name || fighter.name} es Inamovible y no se inmuta!`, true);
    return true;
  }
  return false;
}

function applySecondaryEffect(atk, defender) {
  const playerAttacking = defender === state.enemy;
  const hasToxina = playerAttacking && hasEquippedItem(state.selectedFishId, 'obj_toxina_concentrada');

  if (atk.categoria === 'Especial' && playerAttacking && hasEquippedItem(state.selectedFishId, 'obj_coral_fuego')) {
    if (defender.status === null && Math.random() < 0.15) {
      defender.status = 'envenenado';
      setLogMessage(`¡Coral de Fuego envenena a ${defender.type.name}!`, true);
    }
  }

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
  if (atk.efecto.estado === 'atk_reduction') {
    if (checkStatusImmunity(defender)) return;
    defender.atkReduction = atk.efecto.amount || 0.15;
    setLogMessage(`¡${defender.type.name} está intimidado! ATF -${Math.round((atk.efecto.amount || 0.15) * 100)}%`, true);
    return;
  }
  if (atk.efecto.estado === 'spd_reduction') {
    if (checkStatusImmunity(defender)) return;
    defender.spdReduction = atk.efecto.amount || 0.15;
    setLogMessage(`¡${defender.type.name} perdió defensa especial! DFE -${Math.round((atk.efecto.amount || 0.15) * 100)}%`, true);
    return;
  }
  if (atk.efecto.estado === 'sangrado') {
    if (!hasToxina) {
      if (checkStatusImmunity(defender)) return;
      const baseFish = getFishById(defender.type?.id || defender.id);
      if (baseFish?.passive?.name === 'Escamas Majestuosas') {
        setLogMessage(`¡${defender.type.name} es inmune al sangrado por sus Escamas Majestuosas!`, true);
        return;
      }
    }
    if (defender.sangradoTurns > 0) return;
    defender.sangradoTurns = (atk.efecto.turns || 3);
    setLogMessage(`¡${defender.type.name} está sangrando! -1 PS/turno`, true);
    return;
  }
  if (!hasToxina) {
    if (checkStatusImmunity(defender)) return;
  }
  if (defender.status !== null) return;
  if (Math.random() < atk.efecto.probabilidad) {
    defender.status = atk.efecto.estado;
    const labels = { paralizado: 'PAR', envenenado: 'ENV', quemado: 'QUE', aturdido: 'STN' };
    const label = labels[atk.efecto.estado] || atk.efecto.estado;
    setLogMessage(`¡${defender.type.name} queda ${label}!`, true);
  }
  if (atk.name === 'Látigo de Neurotoxinas' && Math.random() < 0.2) {
    defender.status = 'aturdido';
    setLogMessage(`¡${defender.type.name} queda aturdido por el dolor!`, true);
  }
}

function triggerPassive(defFighter, atkFighter, categoria) {
  const base = getFishById(defFighter.type.id);
  if (!base || !base.passive) return;
  if (base.passive.name === 'Púas Tóxicas' && categoria === 'Fisico') {
    if (atkFighter.status !== null) return;
    if (checkStatusImmunity(atkFighter)) return;
    if (Math.random() < 0.3) {
      atkFighter.status = 'envenenado';
      setLogMessage(`¡Púas Tóxicas de ${defFighter.type.name} ha envenenado al rival!`, true);
    }
  }
  if (base.passive.name === 'Tentáculos Pegajosos' && categoria === 'Fisico') {
    if (Math.random() < 0.15) {
      atkFighter.atrapado = true;
      setLogMessage(`¡${defFighter.type.name} atrapó a ${atkFighter.type.name} con sus Tentáculos Pegajosos!`, true);
    }
  }
  if (base.passive.name === 'Filamentos Urticantes' && categoria === 'Fisico') {
    if (atkFighter.status !== null) return;
    if (checkStatusImmunity(atkFighter)) return;
    if (Math.random() < 0.15) {
      atkFighter.status = 'paralizado';
      setLogMessage(`¡Filamentos Urticantes de ${defFighter.type.name} ha paralizado al rival!`, true);
    }
  }
  if (base.passive.name === 'Reflejo Mucoso' && categoria === 'Especial') {
    const existing = defFighter.buffs?.speBoost || 0;
    defFighter.buffs = { ...(defFighter.buffs || {}), speBoost: existing + Math.round(defFighter.type.spe * 0.15), speTurns: 2 };
    setLogMessage(`¡Reflejo Mucoso de ${defFighter.type.name}! SPE +15%`, true);
  }
  if (base.passive.name === 'Piel Toxínica' && categoria === 'Fisico') {
    if (Math.random() < 0.3) {
      atkFighter.atkReduction = 0.10;
      setLogMessage(`¡Piel Toxínica de ${defFighter.type.name}! ATF del rival -10%`, true);
    }
  }
  if (base.passive.name === 'Barrera de Agujas' && categoria === 'Fisico') {
    atkFighter.currentHp = Math.max(0, atkFighter.currentHp - 1);
    setLogMessage(`¡Barrera de Agujas de ${defFighter.type.name}! Inflige 1 PS de daño a ${atkFighter.type.name}.`, true);
  }
  if (base.passive.name === 'Tentáculos Flotantes' && categoria === 'Fisico') {
    if (atkFighter.status !== null) return;
    if (checkStatusImmunity(atkFighter)) return;
    atkFighter.status = 'envenenado';
    setLogMessage(`¡Tentáculos Flotantes de ${defFighter.type.name} envenenan a ${atkFighter.type.name}!`, true);
  }
}

function checkDodge(defenderFighter, categoria, attackerFighter) {
  const base = getFishById(defenderFighter.type.id);
  if (categoria === 'Especial' && attackerFighter) {
    const atkBase = getFishById(attackerFighter.type.id);
    if (atkBase?.passive?.name === 'Luz Guía') return false;
  }
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
  if (defenderFighter.type.id === state.selectedFishId && hasEquippedItem(state.selectedFishId, 'obj_escama_brillante')) {
    const mult = hasEscudoRemotoPassive(state.selectedFishId) ? 2 : 1;
    chance += 0.05 * mult;
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
    const base = getFishById(attacker.type.id);
    if (base?.passive?.name === 'Luz Guía') return false;
    setLogMessage(`¡${attacker.type.name} falló por la arena!`, true);
    return true;
  }
  return false;
}

function checkResistenciaMarina(fighter) {
  if (fighter.resistenciaMarinaActivo) return;
  const base = getFishById(fighter.type.id);
  if (base?.passive?.name !== 'Resistencia Marina') return;
  if (fighter.currentHp <= fighter.maxHp * 0.5) {
    fighter.resistenciaMarinaActivo = true;
    fighter.type.def = Math.round(fighter.type.def * 1.2);
    setLogMessage(`¡Resistencia Marina de ${fighter.type.name}! DEF +20%`, true);
  }
}

function checkKrakenDesatado(fighter) {
  if (fighter.krakenActivo) return;
  const base = getFishById(fighter.type.id);
  if (base?.passive?.name !== 'Kraken Desatado') return;
  if (fighter.currentHp <= fighter.maxHp * 0.4) {
    fighter.krakenActivo = true;
    fighter.status = null;
    fighter.type.atk = Math.round(fighter.type.atk * 1.3);
    setLogMessage(`¡Kraken Desatado de ${fighter.type.name}! Se limpia de estados y su ATF +30%`, true);
  }
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
  if (atk.selfHeal) {
    const atkName = atk.name;
    if (!user.selfHealUsed) user.selfHealUsed = {};
    if (user.selfHealUsed[atkName]) {
      setLogMessage(`¡${user.type.name} no puede usar ${atkName} de nuevo!`, true);
      return;
    }
    const heal = Math.max(1, Math.floor(user.maxHp * atk.selfHeal.pct));
    user.currentHp = Math.min(user.maxHp, user.currentHp + heal);
    user.selfHealUsed[atkName] = true;
    setLogMessage(`¡${user.type.name} usa ${atkName}! Recupera +${heal} PS`, true);
    return;
  }
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
  if (atk.debuffImmune) {
    user.buffs = { ...(user.buffs || {}), debuffImmuneTurns: atk.debuffImmuneTurns || 2 };
    setLogMessage(`¡${user.type.name} usó ${atk.name}! Inmune a reducción de stats`, true);
  }
}

function applySelfBuff(atk, user) {
  if (!atk.selfBuff) return;
  if (atk.selfBuff.stat === 'spe') {
    const existing = user.buffs?.speBoost || 0;
    user.buffs = { ...(user.buffs || {}), speBoost: existing + (atk.selfBuff.amount || 1), speTurns: atk.selfBuff.turns || 2 };
    setLogMessage(`¡${user.type.name} aumentó su velocidad +${atk.selfBuff.amount || 1}!`, true);
  }
  if (atk.selfBuff.stat === 'crit') {
    const chance = atk.selfBuff.amount || 0.25;
    user.buffs = { ...(user.buffs || {}), critChance: chance, critTurns: atk.selfBuff.turns || 1 };
    setLogMessage(`¡${user.type.name} se prepara para un golpe crítico! (+${Math.round(chance * 100)}%)`, true);
  }
  if (atk.selfBuff.stat === 'spd') {
    const existing = user.buffs?.spdBoost || 0;
    user.buffs = { ...(user.buffs || {}), spdBoost: existing + (atk.selfBuff.amount || 1), spdTurns: atk.selfBuff.turns || 2 };
    setLogMessage(`¡${user.type.name} aumentó su defensa especial +${atk.selfBuff.amount || 1}!`, true);
  }
}

function decrementBuffs(fighter) {
  if (!fighter.buffs) return;
  if (fighter.buffs.defTurns !== undefined) fighter.buffs.defTurns--;
  if (fighter.buffs.speTurns !== undefined) fighter.buffs.speTurns--;
  if (fighter.buffs.dodgeTurns !== undefined) fighter.buffs.dodgeTurns--;
  if (fighter.buffs.debuffImmuneTurns !== undefined) fighter.buffs.debuffImmuneTurns--;
  if (fighter.buffs.critTurns !== undefined) fighter.buffs.critTurns--;
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
  if (fighter.buffs.debuffImmuneTurns !== undefined && fighter.buffs.debuffImmuneTurns <= 0) {
    delete fighter.buffs.debuffImmuneTurns;
    setLogMessage(`${fighter.type.name} perdió la inmunidad a reducción de stats.`, true);
  }
  if (fighter.buffs.critTurns !== undefined && fighter.buffs.critTurns <= 0) {
    delete fighter.buffs.critChance;
    delete fighter.buffs.critTurns;
    setLogMessage(`${fighter.type.name} perdió la preparación de golpe crítico.`, true);
  }
  if (fighter.buffs.spdTurns !== undefined && fighter.buffs.spdTurns <= 0) {
    delete fighter.buffs.spdBoost;
    delete fighter.buffs.spdTurns;
    setLogMessage(`${fighter.type.name} perdió el bono de DEF especial.`, true);
  }
  if (!fighter.buffs.defBoost && !fighter.buffs.speBoost && !fighter.buffs.dodgeBoost && !fighter.buffs.debuffImmuneTurns && !fighter.buffs.critChance && !fighter.buffs.spdBoost) fighter.buffs = null;
}

function applyDefensivePassives(dmg, defender, categoria) {
  const base = getFishById(defender.type.id);
  if (base?.passive?.name === 'Mimetismo Absoluto' && defender.mimetismoAbsolutoActivo) {
    defender.mimetismoAbsolutoActivo = false;
    setLogMessage(`¡${defender.type.name} se esconde! Es inmune al daño en el primer turno.`, true);
    trackMission('passive_shield');
    return 0;
  }
  if (categoria !== 'Fisico') return dmg;
  if (base && base.passive) {
    if ((base.passive.name === 'Mimetismo Rocoso' || base.passive.name === 'Coraza Prestada') && !defender.mimetismoUsado) {
      defender.mimetismoUsado = true;
      setLogMessage(`¡${defender.type.name} activó ${base.passive.name} y redujo el daño a la mitad!`, true);
      trackMission('passive_shield');
      return Math.max(1, Math.round(dmg / 2));
    }
    if (base.passive.name === 'Quiebro Elegante' && !defender.quiebroUsado) {
      defender.quiebroUsado = true;
      dmg = Math.max(1, Math.round(dmg * 0.8));
      setLogMessage(`¡${defender.type.name} activó Quiebro Elegante! Daño físico -20%`, true);
      trackMission('passive_shield');
      return dmg;
    }
  }
  return dmg;
}

function applyStatusDamage(fighter) {
  if (fighter.currentHp <= 0) return;
  const isEnemy = fighter === state.enemy;
  const base = getFishById(fighter.type.id);
  const pielCuero = base && base.passive && base.passive.name === 'Piel de Cuero';
  const pielAncestral = base && base.passive && base.passive.name === 'Piel Ancestral';
  if (fighter.status === 'envenenado' || fighter.status === 'quemado') {
    let dmg = 1;
    if (pielCuero) dmg = Math.max(1, Math.floor(dmg / 2));
    if (pielAncestral) dmg = Math.max(1, Math.round(dmg * 0.85));
    if (fighter.shield > 0) {
      const absorbed = Math.min(fighter.shield, dmg);
      fighter.shield -= absorbed;
      dmg -= absorbed;
    }
    fighter.currentHp = Math.max(0, fighter.currentHp - dmg);
    if (isEnemy) trackMission('poison_bleed_damage');
    const labels = { envenenado: 'ENV', quemado: 'QUE' };
    setLogMessage(`${fighter.type.name} sufre daño por ${labels[fighter.status]} (-${dmg} PS)${pielCuero ? ' (Piel de Cuero reduce a la mitad)' : ''}${pielAncestral ? ' (Piel Ancestral -15%)' : ''}`, true);
  }
  if (fighter.status === 'veneno_grave') {
    let dmg = 2;
    if (pielCuero) dmg = Math.max(1, Math.floor(dmg / 2));
    if (pielAncestral) dmg = Math.max(1, Math.round(dmg * 0.85));
    if (fighter.shield > 0) {
      const absorbed = Math.min(fighter.shield, dmg);
      fighter.shield -= absorbed;
      dmg -= absorbed;
    }
    fighter.currentHp = Math.max(0, fighter.currentHp - dmg);
    if (isEnemy) trackMission('poison_bleed_damage');
    setLogMessage(`${fighter.type.name} sufre daño por Veneno Grave (-${dmg} PS)${pielCuero ? ' (Piel de Cuero reduce a la mitad)' : ''}${pielAncestral ? ' (Piel Ancestral -15%)' : ''}`, true);
  }
  if (fighter.sangradoTurns > 0) {
    let dmg = 1;
    if (pielCuero) dmg = Math.max(1, Math.floor(dmg / 2));
    if (pielAncestral) dmg = Math.max(1, Math.round(dmg * 0.85));
    if (fighter.shield > 0) {
      const absorbed = Math.min(fighter.shield, dmg);
      fighter.shield -= absorbed;
      dmg -= absorbed;
    }
    fighter.currentHp = Math.max(0, fighter.currentHp - dmg);
    fighter.sangradoTurns--;
    if (isEnemy) trackMission('poison_bleed_damage');
    setLogMessage(`${fighter.type.name} sufre daño por Sangrado (-${dmg} PS, ${fighter.sangradoTurns} turnos restantes)${pielCuero ? ' (Piel de Cuero reduce a la mitad)' : ''}${pielAncestral ? ' (Piel Ancestral -15%)' : ''}`, true);
  }
}

function triggerEstomagoSinFondo(fighter) {
  const base = getFishById(fighter.type.id);
  if (!base || base.passive?.name !== 'Estómago Sin Fondo') return;
  if (fighter.currentHp <= 0) return;
  const heal = Math.round(fighter.maxHp * 0.25);
  fighter.currentHp = Math.min(fighter.maxHp, fighter.currentHp + heal);
  setLogMessage(`¡Estómago Sin Fondo de ${fighter.type.name}! Recupera +${heal} PS al derrotar al rival.`, true);
}

function applyPassiveHealing(fighter) {
  if (fighter.currentHp <= 0 || fighter.currentHp >= fighter.maxHp) return;
  const base = getFishById(fighter.type.id);
  if (base && base.passive) {
    if (base.passive.name === 'Regeneración Celular') {
      const heal = 0.5;
      fighter.currentHp = Math.min(fighter.maxHp, fighter.currentHp + heal);
      setLogMessage(`¡${fighter.type.name} regeneró +${heal} PS! (${base.passive.name})`, true);
    }
  }
  if (fighter.type.id === state.selectedFishId && hasEquippedItem(state.selectedFishId, 'fragmento_coral')) {
    const mult = getItemMultiplier(state.selectedFishId, 'fragmento_coral');
    const heal = Math.max(1, Math.round(fighter.maxHp * 0.05 * mult));
    fighter.currentHp = Math.min(fighter.maxHp, fighter.currentHp + heal);
    setLogMessage(`¡${fighter.type.name} recupera +${heal} PS! (Fragmento de Coral${mult > 1 ? ' ×2 Escudo Remoto' : ''})`, true);
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

function checkImpulsoHuida(fighter) {
  if (fighter.currentHp <= 0 || fighter.impulsoHuidaActivo) return;
  const base = getFishById(fighter.type.id);
  if (!base || base.passive?.name !== 'Impulso de Huida') return;
  if (fighter.currentHp < fighter.maxHp * 0.3) {
    fighter.impulsoHuidaActivo = true;
    setLogMessage(`¡${fighter.type.name} activa Impulso de Huida! VEL +20%`, true);
  }
}

function triggerOnHitPassive(attacker, defender, atk, dmg) {
  const base = getFishById(attacker.type.id);
  if (!base || !base.passive) return;
  if (base.passive.name === 'Excreción de Arena' && atk.name === 'Mordisco de Pico') {
    if (!attacker.arenaCount) attacker.arenaCount = 0;
    if (attacker.arenaCount < 3) {
      attacker.arenaCount++;
      attacker.type.def = Math.round(attacker.type.def * 1.1);
      setLogMessage(`¡Excreción de Arena! DEF +10% (${attacker.arenaCount}/3)`, true);
    }
  }
  if (base.passive.name === 'Onda Expansiva' && atk.categoria === 'Especial') {
    if (Math.random() < 0.5) {
      const amount = Math.max(1, Math.round(defender.type.spe * 0.15));
      defender.debuff = { type: 'spe_reduction', turns: 1, amount };
      setLogMessage(`¡Onda Expansiva! Velocidad del rival -${amount}`, true);
    }
  }
  if (base.passive.name === 'Mandíbula Traba' && dmg && atk.categoria === 'Fisico' && defender.sangradoTurns > 0) {
    const heal = Math.max(1, Math.floor(dmg * 0.15));
    attacker.currentHp = Math.min(attacker.maxHp, attacker.currentHp + heal);
    setLogMessage(`¡Mandíbula Traba de ${attacker.type.name}! Absorbe +${heal} PS del sangrado.`, true);
  }
  if (base.passive.name === 'Sorpresa Abismal' && atk.name === 'Mandíbula Extensible' && defender.shield > 0) {
    defender.shield = 0;
    setLogMessage(`¡Sorpresa Abismal! ${attacker.type.name} destruye el escudo de ${defender.type.name}.`, true);
  }
}

function updateStatusDisplay() {
  const pStatus = state.player.status;
  const eStatus = state.enemy.status;
  dom.playerStatus = dom.playerStatus || document.getElementById('player-status');
  dom.enemyStatus = dom.enemyStatus || document.getElementById('enemy-status');
  const statusLabels = { paralizado: 'PAR', envenenado: 'ENV', quemado: 'QUE', veneno_grave: 'GRA', aturdido: 'STN' };

  let pText = '', pCls = 'status-tag';
  if (pStatus && statusLabels[pStatus]) { pText = `[${statusLabels[pStatus]}]`; pCls += ' ' + pStatus; }
  if (state.player.sangradoTurns > 0) pText += (pText ? ' ' : '') + '[SAN]';
  if (state.player.debuff) {
    if (!pCls.includes('status-tag ')) pCls += ' cegado';
    const icon = state.player.debuff.type === 'spe_reduction' ? '🐢' : '👁️‍🗨️';
    pText += (pText ? ' ' : '') + icon;
  }
  if (state.player.buffs?.defBoost) pText += (pText ? ' ' : '') + '🛡️';
  if (state.player.buffs?.speBoost) pText += (pText ? ' ' : '') + '⚡';
  if (state.player.buffs?.debuffImmuneTurns > 0) pText += (pText ? ' ' : '') + '🔒';
  dom.playerStatus.textContent = pText;
  dom.playerStatus.className = pCls;

  let eText = '', eCls = 'status-tag';
  if (eStatus && statusLabels[eStatus]) { eText = `[${statusLabels[eStatus]}]`; eCls += ' ' + eStatus; }
  if (state.enemy.sangradoTurns > 0) eText += (eText ? ' ' : '') + '[SAN]';
  if (state.enemy.debuff) {
    if (!eCls.includes('status-tag ')) eCls += ' cegado';
    const icon = state.enemy.debuff.type === 'spe_reduction' ? '🐢' : '👁️‍🗨️';
    eText += (eText ? ' ' : '') + icon;
  }
  if (state.enemy.buffs?.defBoost) eText += (eText ? ' ' : '') + '🛡️';
  if (state.enemy.buffs?.speBoost) eText += (eText ? ' ' : '') + '⚡';
  if (state.enemy.buffs?.debuffImmuneTurns > 0) eText += (eText ? ' ' : '') + '🔒';
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

/* ===== NOTIFICATIONS ===== */
function checkPendingNotifications() {
  const now = Date.now();
  const canClaimGift = !state.lastFreeClaim || (now - state.lastFreeClaim) > 86400000;

  const completed = DAILY_MISSIONS.filter(m => state.missionsActive.includes(m.id) && state.missions[m.id] >= m.target);
  const hasUnclaimed = completed.some(m => !state.missionsClaimed.includes(m.id));

  const allClaimed = state.missionsActive.every(id => state.missionsClaimed.includes(id));
  const bonusAvailable = allClaimed && !state.missionsBonusClaimed;

  return { dailyGift: canClaimGift, missions: hasUnclaimed || bonusAvailable };
}

function updateNotificationDots() {
  const { dailyGift, missions } = checkPendingNotifications();
  const dotGift = document.getElementById('dot-daily-gift');
  const dotMissions = document.getElementById('dot-missions');
  if (dotGift) dotGift.classList.toggle('visible', dailyGift);
  if (dotMissions) {
    const unclaimedCount = DAILY_MISSIONS.filter(m => state.missionsActive.includes(m.id) && state.missions[m.id] >= m.target && !state.missionsClaimed.includes(m.id)).length;
    dotMissions.classList.toggle('visible', missions);
    dotMissions.textContent = missions && unclaimedCount > 1 ? unclaimedCount : '';
  }
}

/* ===== PERSISTENCIA ===== */
const SAVE_KEY = 'fba_manual_save';

function getSaveData() {
  return {
    selectedFish: state.selectedFishId,
    coins: state.coins, diamonds: state.diamonds,
    cups: state.cups,
    currentArena: state.currentArena,
    arenaMaxReached: state.arenaMaxReached,
    unlockedFish: state.unlockedFish,
    fishLevels: state.fishLevels,
    fishCups: state.fishCups,
    items: state.items,
    equippedItems: state.equippedItems,
    lastFreeClaim: state.lastFreeClaim,
    missions: state.missions,
    missionsActive: state.missionsActive,
    missionsClaimed: state.missionsClaimed,
    missionsBonusClaimed: state.missionsBonusClaimed,
    missionsRefreshTime: state.missionsRefreshTime,
    nivel_pase: state.nivel_pase,
    xp_pase: state.xp_pase,
    tiene_premium: state.tiene_premium,
    paseInicioTemporada: state.paseInicioTemporada,
    paseRecompensasReclamadas: state.paseRecompensasReclamadas,
    paseObjetos: state.paseObjetos,
    titulosDesbloqueados: state.titulosDesbloqueados,
    marcosDesbloqueados: state.marcosDesbloqueados,
    achievements: state.achievements,
    timestamp: Date.now()
  };
}

function formatTimestamp(ts) {
  const d = new Date(ts);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} a las ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function ensureBattlePassState() {
  if (!Number.isFinite(state.nivel_pase) || state.nivel_pase < 0) state.nivel_pase = 0;
  if (!Number.isFinite(state.xp_pase) || state.xp_pase < 0) state.xp_pase = 0;
  if (typeof state.tiene_premium !== 'boolean') state.tiene_premium = false;
  if (!Number.isFinite(state.paseInicioTemporada) || state.paseInicioTemporada <= 0) state.paseInicioTemporada = Date.now();
  if (!Array.isArray(state.paseRecompensasReclamadas)) state.paseRecompensasReclamadas = [];
  state.paseRecompensasReclamadas = normalizeBattlePassClaimedRewards(state.paseRecompensasReclamadas);
  if (!Array.isArray(state.paseObjetos)) state.paseObjetos = [];
  if (!Array.isArray(state.titulosDesbloqueados)) state.titulosDesbloqueados = [];
  if (!Array.isArray(state.marcosDesbloqueados)) state.marcosDesbloqueados = [];
}

function getBattlePassRewardKey(level, track) {
  return `${level}:${track}`;
}

function normalizeBattlePassClaimedRewards(claimedRewards) {
  if (!Array.isArray(claimedRewards)) return [];
  const normalized = [];
  claimedRewards.forEach(entry => {
    if (Number.isInteger(entry) && entry > 0) {
      normalized.push(getBattlePassRewardKey(entry, 'free'));
      if (state.tiene_premium) normalized.push(getBattlePassRewardKey(entry, 'premium'));
      return;
    }
    if (typeof entry === 'string' && /^\d+:(free|premium)$/.test(entry)) {
      normalized.push(entry);
    }
  });
  return [...new Set(normalized)];
}

function isBattlePassRewardClaimed(level, track) {
  return state.paseRecompensasReclamadas.includes(getBattlePassRewardKey(level, track));
}

function getBattlePassEndTimestamp() {
  ensureBattlePassState();
  return state.paseInicioTemporada + BATTLE_PASS_DURATION_MS;
}

function getBattlePassRemainingMs(now = Date.now()) {
  return Math.max(0, getBattlePassEndTimestamp() - now);
}

function getBattlePassRemainingText() {
  const remaining = getBattlePassRemainingMs();
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  return `Termina en: ${days} días, ${hours} horas`;
}

function resetBattlePassSeason() {
  state.nivel_pase = 0;
  state.xp_pase = 0;
  state.tiene_premium = false;
  state.paseInicioTemporada = Date.now();
  state.paseRecompensasReclamadas = [];
}

function checkBattlePassSeasonExpiration() {
  ensureBattlePassState();
  if (getBattlePassRemainingMs() > 0) return false;
  resetBattlePassSeason();
  return true;
}

function getBattlePassLevelFromXp(xp) {
  return Math.min(BATTLE_PASS_TOTAL_LEVELS, Math.floor(xp / BATTLE_PASS_XP_PER_LEVEL));
}

function addBattlePassXp(amount) {
  checkBattlePassSeasonExpiration();
  if (!Number.isFinite(amount) || amount <= 0) return { added: 0, levelUp: false, level: state.nivel_pase, xp: state.xp_pase };
  const prevLevel = state.nivel_pase;
  state.xp_pase = Math.max(0, state.xp_pase + amount);
  state.nivel_pase = getBattlePassLevelFromXp(state.xp_pase);
  return { added: amount, levelUp: state.nivel_pase > prevLevel, level: state.nivel_pase, xp: state.xp_pase };
}

function addBattlePassXpFromCombat(victory) {
  return addBattlePassXp(victory ? BATTLE_PASS_XP_REWARDS.victory : BATTLE_PASS_XP_REWARDS.defeat);
}

function addBattlePassXpFromDailyMission() {
  return addBattlePassXp(BATTLE_PASS_XP_REWARDS.dailyMission);
}

function grantBattlePassReward(reward) {
  if (!reward) return null;
  if (reward.type === 'coins') {
    state.coins += reward.amount || 0;
    updateCoinDisplay();
    return reward.label;
  }
  if (reward.type === 'item') {
    if (!state.paseObjetos.includes(reward.label)) state.paseObjetos.push(reward.label);
    return reward.label;
  }
  if (reward.type === 'title') {
    if (!state.titulosDesbloqueados.includes(reward.label)) state.titulosDesbloqueados.push(reward.label);
    return reward.label;
  }
  if (reward.type === 'frame') {
    if (!state.marcosDesbloqueados.includes(reward.label)) state.marcosDesbloqueados.push(reward.label);
    return reward.label;
  }
  return null;
}

function claimBattlePassReward(level, track) {
  checkBattlePassSeasonExpiration();
  if (track !== 'free' && track !== 'premium') return { ok: false, reason: 'Tipo de recompensa inválido.' };
  if (!Number.isInteger(level)) return { ok: false, reason: 'Nivel inválido.' };
  const tier = BATTLE_PASS_LEVELS.find(l => l.level === level);
  if (!tier) return { ok: false, reason: 'Nivel fuera de rango.' };
  if (state.nivel_pase < level) return { ok: false, reason: 'Nivel aún no desbloqueado.' };
  if (track === 'premium' && !state.tiene_premium) return { ok: false, reason: 'Requiere Pase Premium.' };
  if (isBattlePassRewardClaimed(level, track)) return { ok: false, reason: 'Recompensa ya reclamada.' };
  const reward = grantBattlePassReward(tier[track]);
  state.paseRecompensasReclamadas.push(getBattlePassRewardKey(level, track));
  return { ok: true, rewards: reward ? [reward] : [] };
}

function claimBattlePassLevelRewards(level) {
  const claimed = [];
  const freeResult = claimBattlePassReward(level, 'free');
  if (freeResult.ok) claimed.push(...freeResult.rewards);
  if (state.tiene_premium) {
    const premiumResult = claimBattlePassReward(level, 'premium');
    if (premiumResult.ok) claimed.push(...premiumResult.rewards);
  }
  if (!claimed.length) return { ok: false, reason: freeResult.reason || 'Nivel ya reclamado.' };
  return { ok: true, rewards: claimed };
}

function claimAllAvailableBattlePassRewards() {
  checkBattlePassSeasonExpiration();
  const claimed = [];
  for (let level = 1; level <= state.nivel_pase; level++) {
    const result = claimBattlePassLevelRewards(level);
    if (result.ok) claimed.push({ level, rewards: result.rewards });
  }
  return claimed;
}

let battlePassTicker = null;
function startBattlePassTicker() {
  if (battlePassTicker) clearInterval(battlePassTicker);
  battlePassTicker = setInterval(() => {
    if (!checkBattlePassSeasonExpiration()) return;
    if (dom.profileModal?.classList.contains('open')) renderProfileModal();
    if (dom.battlePassModal?.classList.contains('open')) renderBattlePassModal();
  }, 60000);
}

function updateSaveTimestampDisplay() {
  const el = document.getElementById('profile-save-time');
  if (!el) return;
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) { el.textContent = 'Nunca guardado'; return; }
  try {
    const data = JSON.parse(raw);
    if (data.timestamp) {
      el.textContent = `Última vez guardado: ${formatTimestamp(data.timestamp)}`;
    } else {
      el.textContent = 'Nunca guardado';
    }
  } catch (e) {
    el.textContent = 'Nunca guardado';
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
    if (typeof data.arenaMaxReached === 'number') state.arenaMaxReached = data.arenaMaxReached;
    if (Array.isArray(data.unlockedFish) && data.unlockedFish.length > 0) state.unlockedFish = data.unlockedFish;
    if (data.fishLevels) state.fishLevels = data.fishLevels;
    if (data.fishCups) state.fishCups = data.fishCups;
    if (Array.isArray(data.items)) state.items = data.items;
    if (data.equippedItems) state.equippedItems = data.equippedItems;
    if (data.lastFreeClaim) state.lastFreeClaim = data.lastFreeClaim;
    if (data.missions) state.missions = data.missions;
    if (Array.isArray(data.missionsActive)) state.missionsActive = data.missionsActive;
    if (Array.isArray(data.missionsClaimed)) state.missionsClaimed = data.missionsClaimed;
    if (typeof data.missionsBonusClaimed === 'boolean') state.missionsBonusClaimed = data.missionsBonusClaimed;
    if (data.missionsRefreshTime) state.missionsRefreshTime = data.missionsRefreshTime;
    if (Number.isFinite(data.nivel_pase) && data.nivel_pase >= 0) state.nivel_pase = Math.floor(data.nivel_pase);
    if (Number.isFinite(data.xp_pase) && data.xp_pase >= 0) state.xp_pase = Math.floor(data.xp_pase);
    if (typeof data.tiene_premium === 'boolean') state.tiene_premium = data.tiene_premium;
    if (Number.isFinite(data.paseInicioTemporada) && data.paseInicioTemporada > 0) state.paseInicioTemporada = data.paseInicioTemporada;
    if (Array.isArray(data.paseRecompensasReclamadas)) state.paseRecompensasReclamadas = data.paseRecompensasReclamadas;
    if (Array.isArray(data.paseObjetos)) state.paseObjetos = data.paseObjetos;
    if (Array.isArray(data.titulosDesbloqueados)) state.titulosDesbloqueados = data.titulosDesbloqueados;
    if (Array.isArray(data.marcosDesbloqueados)) state.marcosDesbloqueados = data.marcosDesbloqueados;
    ensureBattlePassState();
    checkBattlePassSeasonExpiration();
    const savedAchievement = data.achievements?.collectionMaster;
    if (savedAchievement && Number.isFinite(savedAchievement.rewardedForTotal)) {
      state.achievements.collectionMaster.rewardedForTotal = Math.max(0, savedAchievement.rewardedForTotal);
    }
    if (data.selectedFish && getFishById(data.selectedFish) && state.unlockedFish.includes(data.selectedFish)) {
      state.selectedFishId = data.selectedFish;
    }
    checkCollectionMasterAchievement({ notify: false });
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
      if (newArena > state.arenaMaxReached) {
        state.arenaMaxReached = newArena;
        state.diamonds += 15;
        updateDiamondDisplay();
        showArenaRewardModal(newArena, newName);
      } else {
        alert(`🎉 ¡Has ascendido a la Arena ${newArena}: ${newName}.`);
      }
    } else {
      alert(`⚠️ ¡Has descendido a la Arena ${newArena}: ${newName}!`);
    }
  }
  updateArenaBackground();
}

function showArenaRewardModal(arenaId, arenaName) {
  dom.itemModalBody.innerHTML = `
    <div class="item-modal-header">
      <span class="item-modal-title">🏟️ Nueva Arena</span>
      <button class="item-modal-close" id="arena-reward-close-btn">✕</button>
    </div>
    <div class="item-preview" style="gap:0.5rem;padding:1rem 0;">
      <div style="font-size:4rem;line-height:1;">🏆</div>
      <div class="item-preview-name" style="font-size:1.3rem;">¡Arena ${arenaId}: ${arenaName}!</div>
      <div class="item-preview-desc" style="font-size:1.1rem;color:#ce93d8;">
        Has alcanzado una nueva Arena
      </div>
      <div style="background:rgba(255,200,0,0.1);border:1px solid rgba(255,200,0,0.25);border-radius:12px;padding:0.75rem 1.5rem;margin-top:0.5rem;">
        <span style="font-size:1.5rem;font-weight:900;color:#ffd700;">+15 💎</span>
      </div>
    </div>
    <div class="item-preview-actions">
      <button class="btn-primary item-buy-btn" id="arena-reward-ok-btn">¡Recibido!</button>
    </div>`;

  document.getElementById('arena-reward-ok-btn').addEventListener('pointerdown', e => {
    e.preventDefault();
    closeItemModal();
  });
  const closeBtn = document.getElementById('arena-reward-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeItemModal(); });

  dom.itemModal.classList.add('open');
  document.body.classList.add('modal-open');
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
    { fishId: 'pulpo_anillos_azules' },
    { fishId: 'pez_loro' },
    { fishId: 'morena' },
    { fishId: 'camaron_pistola' },
    { fishId: 'pez_cirujano' },
    { fishId: 'pez_damisela' },
    { fishId: 'pez_ballesta' },
    { fishId: 'pez_mariposa' },
    { fishId: 'pez_cofre' },
    { fishId: 'pez_leon' },
    { fishId: 'pez_angel_emperador' },
    { fishId: 'pez_piedra' }
  ],
    3: [
    { fishId: 'pez_espada' },
    { fishId: 'atun_rojo' },
    { fishId: 'tiburon_martillo' },
    { fishId: 'pez_volador' },
    { fishId: 'remora' },
    { fishId: 'barracuda' },
    { fishId: 'pez_vela' },
    { fishId: 'carabela_portuguesa' }
  ],
  4: [
    { fishId: 'pez_linterna' },
    { fishId: 'pez_tripode' },
    { fishId: 'pez_demonio' },
    { fishId: 'tiburon_anguila' },
    { fishId: 'pez_vibora' },
    { fishId: 'tiburon_duende' },
    { fishId: 'engullidor_negro' },
    { fishId: 'kraken' }
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
  const total = getTotalCups();
  if (dom.cupsDisplay) dom.cupsDisplay.textContent = `🏆 ${total}`;
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
  ['fight', 'bank', 'shop', 'inventory', 'muelle'].forEach(id => {
    const el = document.getElementById(`section-${id}`);
    const tab = document.querySelector(`[data-tab="${id}"]`);
    if (el) el.classList.toggle('active', id === sectionId);
    if (tab) tab.classList.toggle('active', id === sectionId);
  });
  state.activeSection = sectionId;
  if (sectionId === 'shop') renderShop();
  if (sectionId === 'bank') renderBank();
  if (sectionId === 'inventory') renderInventory();
  if (sectionId === 'muelle') renderMuelleSection();
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

/* ===== ARENA MAP ===== */
function buildArenaMap() {
  const map = {};
  Object.keys(ARENA_FISH).forEach(arenaId => {
    (ARENA_FISH[arenaId] || []).forEach(entry => {
      map[entry.fishId] = Number(arenaId);
    });
  });
  return map;
}
const ARENA_FISH_MAP = buildArenaMap();

/* ===== SECCIÓN: BANCO ===== */
function renderBank() {
  dom.bankCards.innerHTML = '';

  const rarityOrder = { common: 0, rare: 1, epic: 2, legendary: 3 };
  const arenaIds = Object.keys(ARENA_CONFIG).map(Number).sort((a, b) => a - b);
  const { totalFish, unlockedFish } = getCollectionProgress();
  const progressPct = totalFish > 0 ? Math.round((unlockedFish / totalFish) * 100) : 0;
  const isMasterUnlocked = isCollectionMasterUnlocked();
  const rewardClaimedForCurrentTotal = state.achievements?.collectionMaster?.rewardedForTotal === totalFish;

  const achievementCard = document.createElement('div');
  achievementCard.className = `collection-achievement ${isMasterUnlocked ? 'unlocked' : 'locked'}`;
  achievementCard.innerHTML = `
    <div class="collection-achievement-header">
      <div class="collection-achievement-title">🏅 Maestro de la Colección</div>
      <div class="collection-achievement-status">${isMasterUnlocked ? 'DESBLOQUEADO' : 'BLOQUEADO'}</div>
    </div>
    <div class="collection-achievement-progress">${unlockedFish}/${totalFish} peces (${progressPct}%)</div>
    <div class="collection-achievement-bar">
      <div class="collection-achievement-fill" style="width:${progressPct}%"></div>
    </div>
    <div class="collection-achievement-reward">
      Recompensa: +${COLLECTION_MASTER_REWARD.coins} 🪙 y +${COLLECTION_MASTER_REWARD.diamonds} 💎
      ${isMasterUnlocked && rewardClaimedForCurrentTotal ? '<span class="collection-achievement-claimed">✅ Reclamada</span>' : ''}
    </div>`;
  dom.bankCards.appendChild(achievementCard);

  const byArena = {};
  FISH_TYPES.forEach(f => {
    const arena = ARENA_FISH_MAP[f.id] || 1;
    if (!byArena[arena]) byArena[arena] = [];
    byArena[arena].push(f);
  });

  function createFishCard(fish, isUnlocked) {
    const level = getFishLevel(fish.id);
    const card = document.createElement('div');
    const r = getRarityConfig(fish);
    card.className = `fish-card-grid rarity-${r.css}`;
    if (!isUnlocked) card.classList.add('locked');
    card.dataset.fishId = fish.id;

    const levelHtml = isUnlocked ? `<span class="card-grid-level">Nv.${level}</span>` : '';
    const cupsHtml = isUnlocked ? `<span class="card-grid-cups">🏆${getFishCups(fish.id)}</span>` : '';
    const lockHtml = !isUnlocked ? '<span class="card-grid-lock">🔒</span>' : '';

    card.innerHTML = `
      ${levelHtml}
      ${cupsHtml}
      <div class="card-grid-img">
        <img src="${fish.imgPath}" alt="${fish.name}" class="fish-img" onerror="this.classList.add('img-broken')">
        <span class="img-fallback">${fish.emoji}</span>
      </div>
      ${lockHtml}`;

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

  arenaIds.forEach(id => {
    const fishList = (byArena[id] || []).sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]);
    if (fishList.length === 0) return;

    const cfg = ARENA_CONFIG[id];
    const section = document.createElement('div');
    section.className = 'bank-section';
    section.innerHTML = `<h3 class="bank-section-title">Arena ${id}: ${cfg.icon} ${cfg.name}</h3>`;
    const list = document.createElement('div');
    list.className = 'bank-section-list';
    fishList.forEach(f => list.appendChild(createFishCard(f, state.unlockedFish.includes(f.id))));
    section.appendChild(list);
    dom.bankCards.appendChild(section);
  });
}

/* ===== ATTACK CARD RENDERER ===== */
function getAttackEffectDescriptions(atk) {
  const parts = [];

  if (atk.drain) {
    const pct = Math.round(atk.drain * 100);
    parts.push({ text: `Absorbe ${pct}% del daño infligido como PS`, type: 'buff' });
  }

  if (atk.selfHeal) {
    const pct = Math.round(atk.selfHeal.pct * 100);
    const usesLabel = atk.selfHeal.maxUses === 1 ? ' (1 uso por combate)' : '';
    parts.push({ text: `Recupera ${pct}% de los PS máximos${usesLabel}`, type: 'buff' });
  }

  if (atk.selfBuff) {
    const labels = { spe: 'Velocidad' };
    const stat = labels[atk.selfBuff.stat] || atk.selfBuff.stat;
    parts.push({ text: `Aumenta tu ${stat} +${atk.selfBuff.amount} durante ${atk.selfBuff.turns} turnos`, type: 'buff' });
  }

  if (atk.efecto) {
    const e = atk.efecto;
    const prob = e.probabilidad && e.probabilidad < 1 ? `${Math.round(e.probabilidad * 100)}% ` : '';

    switch (e.estado) {
      case 'precision_reducida':
        parts.push({ text: `${prob}Reduce la precisión del rival un 20% (${e.turns || 2} turnos)`, type: 'debuff' });
        break;
      case 'spe_reduction':
        parts.push({ text: `${prob}Reduce la Velocidad del rival -${e.amount || 1} (${e.turns || 2} turnos)`, type: 'debuff' });
        break;
      case 'paralizado':
        parts.push({ text: `${prob}Probabilidad de paralizar al rival`, type: 'debuff' });
        break;
      case 'aturdido':
        parts.push({ text: `${prob}Probabilidad de aturdir al rival (pierde el turno)`, type: 'debuff' });
        break;
      case 'veneno_grave':
        parts.push({ text: `${prob}Envenena gravemente al rival (-2 PS por turno)`, type: 'debuff' });
        break;
      case 'atk_reduction':
        parts.push({ text: `Reduce el ATF del rival -${Math.round((e.amount || 0.15) * 100)}% (${e.turns || 3} turnos)`, type: 'debuff' });
        break;
      case 'sangrado':
        parts.push({ text: `${prob}Produce sangrado al rival (-1 PS por turno, ${e.turns || 3} turnos)`, type: 'debuff' });
        break;
      case 'spd_reduction':
        parts.push({ text: `Reduce la DFE del rival -${Math.round((e.amount || 0.15) * 100)}%`, type: 'debuff' });
        break;
      case 'def_boost':
        parts.push({ text: `Aumenta tu Defensa Física +${e.amount || 2} (${e.turns || 2} turnos)`, type: 'buff' });
        break;
      case 'dodge_boost':
        parts.push({ text: `Aumenta tu Evasión ${Math.round((e.amount || 0.3) * 100)}% (${e.turns || 2} turnos)`, type: 'buff' });
        break;
    }
  }

  if (atk.debuffImmune) {
    parts.push({ text: `Inmune a reducción de stats (${atk.debuffImmuneTurns || 2} turnos)`, type: 'buff' });
  }

  return parts;
}

function renderAttackCard(a) {
  const catEmoji = a.categoria === 'Fisico' ? '💪' : a.categoria === 'Efecto' ? '🔵' : '✨';
  const powerLabel = a.categoria === 'Efecto' ? '—' : `⚡ ${a.power}`;
  const effects = getAttackEffectDescriptions(a);
  const effectsHtml = effects.map(e =>
    `<div class="atk-effect atk-effect-${e.type}">✨ ${e.text}</div>`
  ).join('');

  return `
    <div class="attack-row">
      <div class="attack-row-top">
        <span class="attack-name">${a.emoji} ${a.name}</span>
        <span class="attack-power">${powerLabel}</span>
      </div>
      <div class="attack-row-mid">
        <span class="attack-category ${a.categoria.toLowerCase()}">${catEmoji} ${a.categoria}</span>
      </div>
      ${effectsHtml ? `<div class="attack-row-effects">${effectsHtml}</div>` : ''}
    </div>`;
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
  const isMaxLevel = level >= MAX_LEVEL;
  let rNextStats = null;
  if (!isMaxLevel) {
    const nextFish = getLeveledFishType(base, level + 1);
    rNextStats = roundFishStats(nextFish);
  }
  const statDefs = [
    { label: 'HP', value: rStats.maxHp, prop: 'maxHp', cls: 'hp', max: 300 },
    { label: 'ATK', value: rStats.atk, prop: 'atk', cls: 'atk', max: 100 },
    { label: 'DEF', value: rStats.def, prop: 'def', cls: 'def', max: 100 },
    { label: 'SPA', value: rStats.spa, prop: 'spa', cls: 'spa', max: 80 },
    { label: 'SPD', value: rStats.spd, prop: 'spd', cls: 'spd', max: 80 },
    { label: 'SPE', value: rStats.spe, prop: 'spe', cls: 'spe', max: 100 }
  ];
  const statsHtml = statDefs.map(s => {
    const nextVal = rNextStats ? rNextStats[s.prop] : null;
    return `
      <div class="stat-row">
        <span class="stat-label">${s.label}</span>
        <div class="stat-bar-bg"><div class="stat-bar-fill ${s.cls}" style="width:${clamp((s.value / s.max) * 100, 0, 100)}%"></div></div>
        <span class="stat-value">${s.value}${nextVal !== null ? ` <span class="stat-arrow">➡️</span> <span class="stat-next">${nextVal}</span>` : ''}</span>
      </div>`;
  }).join('');

  const attacksHtml = base.attacks.map(a => renderAttackCard(a)).join('');

  const badge = isSelected ? '<span class="fish-card-badge">ACTIVO</span>' : '';

  const upgradeCost = getUpgradeCost(level, base.rarity);
  const canAfford = upgradeCost !== null && state.coins >= upgradeCost;

  let upgradeHtml;
  if (upgradeCost === null) {
    upgradeHtml = '<p style="text-align:center;color:#ffd700;font-size:0.85rem;font-weight:700;">⭐ MÁXIMO LEVEL</p>';
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
    diamondChance: 0, diamondRange: [5, 5],
    fishChance: 0.8
  },
  silver: {
    id: 'silver', name: 'Plata', imgPath: 'img/cofre_plata.png',
    costType: 'coins', cost: 400,
    goldRange: [50, 100],
    diamondChance: 0.15, diamondRange: [5, 5],
    fishChance: 0.9
  },
  gold: {
    id: 'gold', name: 'Oro', imgPath: 'img/cofre_oro.png',
    costType: 'diamonds', cost: 60,
    goldRange: [150, 300],
    diamondChance: 0.3, diamondRange: [10, 10],
    fishChance: 1
  }
};

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const CHEST_RARITY_TABLE = {
  wood:   { common: 0.85, rare: 0.13, epic: 0.02, legendary: 0 },
  silver: { common: 0.70, rare: 0.24, epic: 0.058, legendary: 0.002 },
  gold:   { common: 0.50, rare: 0.35, epic: 0.13, legendary: 0.02 }
};

function rollChestRarity(chestId) {
  const table = CHEST_RARITY_TABLE[chestId] || CHEST_RARITY_TABLE.wood;
  const roll = Math.random();
  let cumulative = 0;
  for (const [rarity, chance] of Object.entries(table)) {
    cumulative += chance;
    if (roll < cumulative) return rarity;
  }
  return 'common';
}

function pickChestFish(chestId) {
  const pool = getArenaFishPool(state.currentArena)
    .map(e => getFishById(e.fishId))
    .filter(Boolean);
  if (pool.length === 0) return null;

  const targetRarity = rollChestRarity(chestId);

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

/* ===== SEEDED RNG ===== */
function getDateSeed() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const dateStr = `${y}-${m}-${day}`;
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    const char = dateStr.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

function createSeededRandom(seed) {
  let s = seed;
  return function() {
    s |= 0;
    s = s + 0x6D2B79F5 | 0;
    let t = Math.imul(s ^ s >>> 15, 1 | s);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function generateDailyOffers() {
  const pool = getArenaFishPool(state.currentArena)
    .map(e => getFishById(e.fishId))
    .filter(Boolean)
    .filter(f => !state.unlockedFish.includes(f.id));
  if (pool.length === 0) return [];
  const rng = createSeededRandom(getDateSeed());
  const shuffled = [...pool].sort(() => rng() - 0.5);
  return shuffled.slice(0, 2);
}

function getTimeToMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setDate(midnight.getDate() + 1);
  midnight.setHours(0, 0, 0, 0);
  return midnight.getTime() - now.getTime();
}

function formatCountdown(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

let offersCountdownInterval = null;

function updateOffersCountdown() {
  const el = document.getElementById('offers-countdown');
  if (!el) return;
  const ms = getTimeToMidnight();
  el.textContent = `⏳ ${formatCountdown(ms)}`;
}

function startOffersCountdown() {
  if (offersCountdownInterval) clearInterval(offersCountdownInterval);
  updateOffersCountdown();
  offersCountdownInterval = setInterval(updateOffersCountdown, 1000);
}

function renderShop() {
  dom.shopContent.innerHTML = '';

  /* ===== 1. REGALO DIARIO ===== */
  const giftTitle = document.createElement('h3');
  giftTitle.className = 'shop-section-title';
  giftTitle.textContent = '🎁 Regalo Diario';
  dom.shopContent.appendChild(giftTitle);

  const now = Date.now();
  const canClaim = !state.lastFreeClaim || (now - state.lastFreeClaim) > 86400000;
  const giftCard = document.createElement('div');
  giftCard.className = `daily-gift-card${canClaim ? '' : ' claimed'}`;
  const nextClaim = canClaim ? '' : `Próximo: ${formatTimeLeft(86400000 - (now - state.lastFreeClaim))}`;
  giftCard.innerHTML = `
    <div class="daily-gift-icon">🎁</div>
    <div class="daily-gift-info">
      <div class="daily-gift-title">${canClaim ? '¡Reclama tu regalo!' : 'Regalo reclamado'}</div>
      <div class="daily-gift-reward">🪙 50 monedas gratis</div>
      ${!canClaim ? `<div class="daily-gift-cooldown">${nextClaim}</div>` : ''}
    </div>
    ${canClaim ? '<button class="btn-buy daily-gift-btn">Reclamar</button>' : '<button class="btn-buy daily-gift-btn" disabled>✅</button>'}`;
  if (canClaim) {
    giftCard.querySelector('.daily-gift-btn').addEventListener('pointerdown', e => {
      e.preventDefault();
      claimFreeGift(50);
    });
  }
  dom.shopContent.appendChild(giftCard);

  updateNotificationDots();

  /* ===== 2. OFERTAS DEL DÍA ===== */
  const offers = generateDailyOffers();
  const offersTitle = document.createElement('h3');
  offersTitle.className = 'shop-section-title';
  offersTitle.innerHTML = '⭐ Ofertas del Día <span class="offers-countdown" id="offers-countdown"></span>';
  dom.shopContent.appendChild(offersTitle);

  if (offers.length > 0) {
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
  } else {
    const emptyMsg = document.createElement('p');
    emptyMsg.className = 'offers-empty';
    emptyMsg.textContent = '🎉 ¡Ya tienes todos los peces disponibles!';
    dom.shopContent.appendChild(emptyMsg);
  }

  startOffersCountdown();

  /* ===== 3. OBJETOS EQUIPABLES ===== */
  const itemsTitle = document.createElement('h3');
  itemsTitle.className = 'shop-section-title';
  itemsTitle.textContent = '🎒 Objetos Equipables';
  dom.shopContent.appendChild(itemsTitle);

  SHOP_ITEMS.forEach(entry => {
    const item = ITEMS.find(it => it.id === entry.itemId);
    if (!item) return;
    const alreadyOwned = state.items.includes(item.id);
    const canAfford = entry.costType === 'coins' ? state.coins >= entry.cost : state.diamonds >= entry.cost;
    const card = document.createElement('div');
    card.className = `chest-card${canAfford && !alreadyOwned ? '' : ' locked'}`;
    const r = item.rarity;
    card.innerHTML = `
      <div class="shop-item-img"><img class="item-img" src="${item.imgPath}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="item-img-fallback">${item.emoji}</span></div>
      <div class="chest-info">
        <div class="chest-name">${item.name}</div>
        <div class="chest-rewards"><span class="inv-card-rarity ${r}" style="font-size:0.6rem;padding:0.08rem 0.4rem">${r === 'common' ? 'COMÚN' : r === 'rare' ? 'RARO' : r === 'epic' ? 'ÉPICO' : 'LEYENDA'}</span></div>
        <div class="chest-cost">🪙 ${entry.cost}</div>
      </div>
      <button class="btn-buy chest-buy-btn" disabled style="opacity:0.6">${alreadyOwned ? '✅' : 'Ver'}</button>`;
    let tStartX, tStartY, tMoved;
    card.addEventListener('pointerdown', e => {
      tStartX = e.clientX; tStartY = e.clientY;
      tMoved = false;
      card.setPointerCapture(e.pointerId);
    });
    card.addEventListener('pointermove', e => {
      if (tStartX === undefined) return;
      if (Math.abs(e.clientX - tStartX) > 10 || Math.abs(e.clientY - tStartY) > 10) tMoved = true;
    });
    card.addEventListener('pointerup', e => {
      if (tMoved) return;
      e.preventDefault();
      openItemModal(item.id, entry.cost);
      tStartX = tStartY = undefined;
    });
    card.addEventListener('pointercancel', () => { tMoved = true; tStartX = tStartY = undefined; });
    dom.shopContent.appendChild(card);
  });

  /* ===== 4. COFRES ===== */
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

  /* ===== 5. BANCO DE GEMAS ===== */
  const gemTitle = document.createElement('h3');
  gemTitle.className = 'shop-section-title';
  gemTitle.textContent = '💎 Banco de Gemas';
  dom.shopContent.appendChild(gemTitle);

  GEM_PACKS.forEach(pack => {
    const canAfford = state.diamonds >= pack.cost;
    const card = document.createElement('div');
    card.className = `chest-card${canAfford ? '' : ' locked'}`;
    card.innerHTML = `
      <div class="shop-item-img"><img class="item-img" src="${pack.imgPath}" alt="${pack.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="item-img-fallback">${pack.emoji}</span></div>
      <div class="chest-info">
        <div class="chest-name">${pack.name}</div>
        <div class="chest-cost">💎 ${pack.cost} → 🪙 ${pack.reward}</div>
      </div>
      <button class="btn-buy chest-buy-btn" ${canAfford ? '' : 'disabled'}>Canjear</button>`;
    let tStartX, tStartY, tMoved;
    card.addEventListener('pointerdown', e => {
      tStartX = e.clientX; tStartY = e.clientY;
      tMoved = false;
      card.setPointerCapture(e.pointerId);
    });
    card.addEventListener('pointermove', e => {
      if (tStartX === undefined) return;
      if (Math.abs(e.clientX - tStartX) > 10 || Math.abs(e.clientY - tStartY) > 10) tMoved = true;
    });
    card.addEventListener('pointerup', e => {
      if (tMoved) return;
      e.preventDefault();
      openGemPackModal(pack);
      tStartX = tStartY = undefined;
    });
    card.addEventListener('pointercancel', () => { tMoved = true; tStartX = tStartY = undefined; });
    dom.shopContent.appendChild(card);
  });
}

function claimFreeGift(amount) {
  state.coins += amount;
  state.lastFreeClaim = Date.now();
  updateCoinDisplay();
  renderShop();
  updateNotificationDots();
}

function formatTimeLeft(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  return `${h}h ${m}m`;
}

/* ===== MISIONES DIARIAS ===== */
function selectDailyMissions() {
  const pool = [...DAILY_MISSIONS];
  const selected = [];
  for (let i = 0; i < 3; i++) {
    if (pool.length === 0) break;
    const idx = Math.floor(Math.random() * pool.length);
    selected.push(pool[idx].id);
    pool.splice(idx, 1);
  }
  state.missionsActive = selected;
  state.missions = {};
  selected.forEach(id => { state.missions[id] = 0; });
  state.missionsClaimed = [];
  state.missionsBonusClaimed = false;
  state.missionsRefreshTime = Date.now();
}

function checkMissionsRefresh() {
  const now = Date.now();
  if (!state.missionsRefreshTime || now - state.missionsRefreshTime >= 86400000) {
    selectDailyMissions();
  }
  updateNotificationDots();
}

function getCompletedMissions() {
  return DAILY_MISSIONS.filter(m => state.missionsActive.includes(m.id) && state.missions[m.id] >= m.target);
}

function getAllClaimed() {
  return state.missionsActive.every(id => state.missionsClaimed.includes(id));
}

function trackMission(id) {
  if (state.missionsClaimed.includes(id)) return;
  if (state.missions[id] === undefined) return;
  const mission = DAILY_MISSIONS.find(m => m.id === id);
  if (!mission) return;
  state.missions[id] = Math.min(state.missions[id] + 1, mission.target);
  updateMissionsButton();
}

function claimMission(id) {
  if (state.missionsClaimed.includes(id)) return;
  const mission = DAILY_MISSIONS.find(m => m.id === id);
  if (!mission || state.missions[id] < mission.target) return;
  state.missionsClaimed.push(id);
  state.coins += mission.reward;
  addBattlePassXpFromDailyMission();
  updateCoinDisplay();
  renderMissionsModal();
  updateMissionsButton();
  updateNotificationDots();
}

function getMissionsCountdown() {
  if (!state.missionsRefreshTime) return '';
  const elapsed = Date.now() - state.missionsRefreshTime;
  const remaining = Math.max(0, 86400000 - elapsed);
  const h = Math.floor(remaining / 3600000);
  const m = Math.floor((remaining % 3600000) / 60000);
  return `⏱ ${h}h ${m}m`;
}

function updateMissionsButton() {
  const btn = document.getElementById('missions-btn');
  if (!btn) return;
  checkMissionsRefresh();
  const claimed = state.missionsClaimed.length;
  const total = state.missionsActive.length;
  const progress = btn.querySelector('.missions-btn-progress');
  if (progress) {
    const countdown = total > 0 ? ` ${getMissionsCountdown()}` : '';
    progress.textContent = `Progreso: ${claimed}/${total}${countdown}`;
  }
}

function renderMissionsModal() {
  checkMissionsRefresh();
  const body = dom.missionsModalBody;
  if (!body) return;
  const completed = getCompletedMissions();
  const claimedCount = state.missionsClaimed.length;
  const total = state.missionsActive.length;
  const allClaimed = getAllClaimed();
  const pct = total > 0 ? (claimedCount / total) * 100 : 0;
  const countdown = getMissionsCountdown();

  const activeMissions = DAILY_MISSIONS.filter(m => state.missionsActive.includes(m.id));

  const missionCardsHtml = activeMissions.map(m => {
    const prog = state.missions[m.id] || 0;
    const isComplete = prog >= m.target;
    const isClaimed = state.missionsClaimed.includes(m.id);
    const pctInd = (prog / m.target) * 100;
    return `
      <div class="mission-card ${isComplete ? 'complete' : ''} ${isClaimed ? 'claimed' : ''}">
        <div class="mission-info">
          <div class="mission-name">${m.name}</div>
          <div class="mission-desc">${m.desc}</div>
          <div class="mission-progress">
            <div class="mission-progress-bar"><div class="mission-progress-fill" style="width:${pctInd}%"></div></div>
            <span class="mission-progress-text">${prog} / ${m.target}</span>
          </div>
        </div>
        <div class="mission-reward-section">
          <div class="mission-reward">🪙 ${m.reward}</div>
          ${isClaimed ? '<span class="mission-check">✅</span>' :
            isComplete ? '<button class="mission-claim-btn" data-mission-id="'+m.id+'">¡RECLAMAR!</button>' :
            '<button class="mission-claim-btn disabled" disabled>⏳</button>'}
        </div>
      </div>`;
  }).join('');

  body.innerHTML = `
    <div class="missions-modal-header">
      <span class="missions-modal-title">📋 Misiones Diarias</span>
      <button class="missions-modal-close" id="missions-modal-close-btn">✕</button>
    </div>
    <div class="missions-progress-section">
      <div class="missions-countdown">${countdown ? `Nuevas misiones en: ${countdown}` : ''}</div>
      <div class="missions-progress-label">Progreso: ${claimedCount}/${total}</div>
      <div class="missions-progress-bar"><div class="missions-progress-fill" style="width:${pct}%"></div></div>
      <div class="missions-bonus-chest ${allClaimed ? 'ready' : ''}">
        <span class="missions-chest-icon">${allClaimed ? '🎁' : '📦'}</span>
        <span class="missions-chest-label">${allClaimed ? '¡Bono Diario Listo!' : 'Completa las 3 misiones'}</span>
        ${allClaimed && !state.missionsBonusClaimed ? '<button class="missions-chest-btn" id="missions-claim-bonus">Reclamar</button>' : ''}
        ${state.missionsBonusClaimed ? '<span class="missions-chest-done">✅ Reclamado</span>' : ''}
      </div>
    </div>
    <div class="missions-list">
      ${missionCardsHtml}
    </div>`;

  body.querySelectorAll('.mission-claim-btn:not(.disabled)').forEach(btn => {
    btn.addEventListener('pointerdown', e => {
      e.preventDefault();
      claimMission(btn.dataset.missionId);
    });
  });

  const bonusBtn = document.getElementById('missions-claim-bonus');
  if (bonusBtn) {
    bonusBtn.addEventListener('pointerdown', e => {
      e.preventDefault();
      state.missionsBonusClaimed = true;
      state.coins += 200;
      updateCoinDisplay();
      renderMissionsModal();
      updateMissionsButton();
      updateNotificationDots();
    });
  }

  const closeBtn = document.getElementById('missions-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeMissionsModal(); });
  updateNotificationDots();
}

function openMissionsModal() {
  renderMissionsModal();
  dom.missionsModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeMissionsModal() {
  dom.missionsModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function renderProfileModal() {
  checkBattlePassSeasonExpiration();
  const body = dom.profileModalBody;
  if (!body) return;
  const { totalFish, unlockedFish } = getCollectionProgress();
  const totalCups = getTotalCups();
  const totalArenas = Object.keys(ARENA_CONFIG).length;
  const selectedFish = getFishById(state.selectedFishId);
  const badges = getTrophyBadges();
  body.innerHTML = `
    <div class="profile-modal-header">
      <span class="profile-modal-title">⚙️ Ajustes y Perfil</span>
      <button class="profile-modal-close" id="profile-modal-close-btn">✕</button>
    </div>
    <div class="profile-overview-grid">
      <div class="profile-stat-card">
        <span class="profile-stat-label">Pez activo</span>
        <strong class="profile-stat-value">${selectedFish ? selectedFish.name : 'Sin seleccionar'}</strong>
      </div>
      <div class="profile-stat-card">
        <span class="profile-stat-label">Colección</span>
        <strong class="profile-stat-value">${unlockedFish}/${totalFish}</strong>
      </div>
      <div class="profile-stat-card">
        <span class="profile-stat-label">Copas totales</span>
        <strong class="profile-stat-value">🏆 ${totalCups}</strong>
      </div>
      <div class="profile-stat-card">
        <span class="profile-stat-label">Arena máxima</span>
        <strong class="profile-stat-value">${Math.min(state.arenaMaxReached, totalArenas)}/${totalArenas}</strong>
      </div>
    </div>
    <div class="profile-wallet-row">
      <span class="profile-wallet-chip">🪙 ${state.coins}</span>
      <span class="profile-wallet-chip">💎 ${state.diamonds}</span>
    </div>
    <div class="profile-trophies-header">
      <span class="profile-trophies-title">🏅 Vitrina de Trofeos</span>
    </div>
    <div class="profile-trophy-grid">
      ${badges.map(badge => `
        <div class="profile-trophy-card ${badge.unlocked ? 'unlocked' : 'locked'}">
          <span class="profile-trophy-icon">${badge.icon}</span>
          <div class="profile-trophy-texts">
            <div class="profile-trophy-name">${badge.name}</div>
            <div class="profile-trophy-desc">${badge.desc}</div>
            <div class="profile-trophy-progress">${badge.progress}</div>
            <span class="profile-trophy-status">${badge.unlocked ? 'CONSEGUIDA' : 'BLOQUEADA'}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="profile-actions-section">
      <p id="profile-save-time" class="profile-save-time"></p>
      <button class="btn-primary" id="profile-save-btn">💾 Guardar Partida</button>
      <button class="btn-reset" id="profile-reset-btn">🗑️ Nueva Partida</button>
    </div>`;
  const closeBtn = document.getElementById('profile-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeProfileModal(); });
  const saveBtn = document.getElementById('profile-save-btn');
  if (saveBtn) saveBtn.addEventListener('pointerdown', e => { e.preventDefault(); saveGame(); updateSaveTimestampDisplay(); });
  const resetBtn = document.getElementById('profile-reset-btn');
  if (resetBtn) resetBtn.addEventListener('pointerdown', e => { e.preventDefault(); openResetModal(); });
  updateSaveTimestampDisplay();
}

function getBattlePassRewardUiState(level, track) {
  if (isBattlePassRewardClaimed(level, track)) {
    return { text: '✅ Reclamado', className: 'claimed', disabled: true };
  }
  if (state.nivel_pase < level) {
    return { text: '🔒 Bloqueado', className: 'locked', disabled: true };
  }
  if (track === 'premium' && !state.tiene_premium) {
    return { text: '🔒 Requiere Premium', className: 'locked', disabled: true };
  }
  return { text: 'Reclamar', className: 'claim', disabled: false };
}

const PRECIO_PASE_PREMIUM = 1000;

function comprarPasePremium() {
  if (state.tiene_premium) return;
  if (state.diamonds < PRECIO_PASE_PREMIUM) {
    alert('¡No tienes suficientes gemas! Necesitas 1000 gemas para activar el Pase Premium. ¡Sigue subiendo de arena y abriendo cofres! 💎');
    return;
  }
  state.diamonds -= PRECIO_PASE_PREMIUM;
  state.tiene_premium = true;
  updateDiamondDisplay();
  saveGame();
  alert('¡Gracias por tu compra! Pase Premium activado 🌊');
  renderBattlePassModal();
}

function renderBattlePassModal() {
  checkBattlePassSeasonExpiration();
  const body = dom.battlePassModalBody;
  if (!body) return;
  const battlePassXpCurrentLevel = state.nivel_pase >= BATTLE_PASS_TOTAL_LEVELS ? BATTLE_PASS_XP_PER_LEVEL : (state.xp_pase % BATTLE_PASS_XP_PER_LEVEL);
  const battlePassXpToNext = state.nivel_pase >= BATTLE_PASS_TOTAL_LEVELS ? 0 : (BATTLE_PASS_XP_PER_LEVEL - battlePassXpCurrentLevel);
  body.innerHTML = `
    <div class="battle-pass-modal-header">
      <span class="battle-pass-modal-title">🎟️ Pase de Batalla</span>
      <button class="battle-pass-modal-close" id="battle-pass-close-btn">✕</button>
    </div>
    <div class="battle-pass-premium-cta">
      ${state.tiene_premium
        ? '<span class="battle-pass-premium-active">👑 Premium Activo</span>'
        : `<button class="battle-pass-buy-btn" id="battle-pass-buy-btn">¡Hacerse Premium! 👑 (1000 💎)</button>`}
    </div>
    <div class="battle-pass-summary">
      <strong class="battle-pass-summary-main">Nivel ${state.nivel_pase}/${BATTLE_PASS_TOTAL_LEVELS} · XP ${battlePassXpCurrentLevel}/${BATTLE_PASS_XP_PER_LEVEL}</strong>
      <span class="battle-pass-summary-sub">${battlePassXpToNext > 0 ? `Faltan ${battlePassXpToNext} XP para el siguiente nivel` : 'Nivel máximo alcanzado'}</span>
      <span class="battle-pass-summary-sub">${state.tiene_premium ? 'Premium activo: Gratis + Premium habilitados' : 'Premium inactivo: solo Gratis habilitado'}</span>
      <span class="battle-pass-summary-sub">${getBattlePassRemainingText()}</span>
    </div>
    <div class="battle-pass-level-list">
      ${BATTLE_PASS_LEVELS.map(tier => {
        const freeUi = getBattlePassRewardUiState(tier.level, 'free');
        const premiumUi = getBattlePassRewardUiState(tier.level, 'premium');
        return `
          <div class="battle-pass-level-card ${state.nivel_pase >= tier.level ? 'unlocked' : 'locked'}">
            <div class="battle-pass-level-head">Nivel ${tier.level}</div>
            <div class="battle-pass-reward-row">
              <span class="battle-pass-reward-label">Gratis: ${tier.free.label}</span>
              <button class="battle-pass-claim-btn ${freeUi.className}" data-bp-claim data-level="${tier.level}" data-track="free" ${freeUi.disabled ? 'disabled' : ''}>${freeUi.text}</button>
            </div>
            <div class="battle-pass-reward-row">
              <span class="battle-pass-reward-label">Premium: ${tier.premium.label}</span>
              <button class="battle-pass-claim-btn ${premiumUi.className}" data-bp-claim data-level="${tier.level}" data-track="premium" ${premiumUi.disabled ? 'disabled' : ''}>${premiumUi.text}</button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  const closeBtn = document.getElementById('battle-pass-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeBattlePassModal(); });
  const buyPremiumBtn = document.getElementById('battle-pass-buy-btn');
  if (buyPremiumBtn) {
    buyPremiumBtn.addEventListener('pointerdown', e => {
      e.preventDefault();
      comprarPasePremium();
    });
  }
  body.querySelectorAll('[data-bp-claim]').forEach(btn => {
    btn.addEventListener('pointerdown', e => {
      e.preventDefault();
      if (btn.disabled) return;
      const level = parseInt(btn.dataset.level || '', 10);
      const track = btn.dataset.track;
      const result = claimBattlePassReward(level, track);
      if (!result.ok) {
        alert(result.reason);
        return;
      }
      renderBattlePassModal();
      renderProfileModal();
    });
  });
}

function openBattlePassModal() {
  renderBattlePassModal();
  dom.battlePassModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeBattlePassModal() {
  dom.battlePassModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function openProfileModal() {
  renderProfileModal();
  dom.profileModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeProfileModal() {
  dom.profileModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function buyDailyOfferFish(fishId, price) {
  if (state.unlockedFish.includes(fishId)) { alert('Ya tienes este pez.'); return; }
  if (state.coins < price) { alert('Monedas insuficientes'); return; }
  state.coins -= price;
  state.unlockedFish.push(fishId);
  updateCoinDisplay();
  renderBank();
  renderShop();
  checkCollectionMasterAchievement();
}

function buyItem(itemId, price) {
  if (state.items.includes(itemId)) { alert('Ya tienes este objeto.'); return; }
  if (state.coins < price) { alert('Monedas insuficientes'); return; }
  state.coins -= price;
  state.items.push(itemId);
  updateCoinDisplay();
  renderShop();
  renderInventory();
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
      checkCollectionMasterAchievement();
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
        const targetEl = getEventTargetElement(e.target);
        if (targetEl && targetEl.closest('.chest-reveal-step')) {
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

/* ===== SECCIÓN: OBJETOS ===== */
function renderInventory() {
  dom.inventoryContent.innerHTML = '';
  const ownedItems = ITEMS.filter(it => state.items.includes(it.id));
  if (ownedItems.length === 0) {
    dom.inventoryContent.innerHTML = `<div class="inv-empty"><p>📦 No tienes objetos</p><p class="inv-empty-sub">Consigue objetos en la Tienda</p></div>`;
    return;
  }
  const grid = document.createElement('div');
  grid.className = 'inv-grid';
  ownedItems.forEach(item => {
    const card = document.createElement('div');
    const r = item.rarity;
    card.className = `inv-card rarity-${r}`;
    const equippedOn = Object.entries(state.equippedItems).find(([fishId, itemId]) => itemId === item.id);
    const fishName = equippedOn ? getFishById(equippedOn[0])?.name || '???' : null;
    const fishImg = equippedOn ? getFishById(equippedOn[0])?.imgPath : null;
    const fishEmoji = equippedOn ? getFishById(equippedOn[0])?.emoji : null;
    card.innerHTML = `
      <div class="inv-card-img"><img class="item-img" src="${item.imgPath}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="item-img-fallback">${item.emoji}</span></div>
      <div class="inv-card-name">${item.name}</div>
      <div class="inv-card-rarity ${r}">${r === 'common' ? 'COMÚN' : r === 'rare' ? 'RARO' : r === 'epic' ? 'ÉPICO' : 'LEYENDA'}</div>
      <div class="inv-card-status ${equippedOn ? 'equipped' : 'free'}">
        ${equippedOn
          ? `<span class="inv-equipped-info">🔗 ${imgTagSmall(fishImg, fishName, fishEmoji)} ${fishName}</span>`
          : '<span>📭 Libre</span>'}
      </div>`;
    card.addEventListener('pointerdown', e => {
      e.preventDefault();
      if (!equippedOn) {
        openEquipModal(item.id);
      } else {
        openUnequipModal(item.id, equippedOn[0]);
      }
    });
    grid.appendChild(card);
  });
  dom.inventoryContent.appendChild(grid);
}

function openEquipModal(itemId) {
  const item = ITEMS.find(it => it.id === itemId);
  if (!item) return;
  const ownedFish = FISH_TYPES.filter(f => state.unlockedFish.includes(f.id)).sort(sortByRarity);
  if (ownedFish.length === 0) {
    alert('No tienes peces para equipar este objeto.');
    return;
  }
  const fishItemsHtml = ownedFish.map(fish => {
    const alreadyEquipped = state.equippedItems[fish.id];
    const fishItem = alreadyEquipped ? ITEMS.find(it => it.id === alreadyEquipped) : null;
    const r = getRarityConfig(fish);
    return `
      <div class="equip-fish-item" data-fish-id="${fish.id}">
        <div class="equip-fish-img">${imgTagSmall(fish.imgPath, fish.name, fish.emoji)}</div>
        <div class="equip-fish-info">
          <span class="equip-fish-name">${fish.name}</span>
          <span class="rarity-badge ${r.css}">${r.label}</span>
        </div>
        <div class="equip-fish-current">${fishItem ? `🔗 ${fishItem.emoji} ${fishItem.name}` : '— Vacío'}</div>
      </div>`;
  }).join('');
  dom.equipModalBody.innerHTML = `
    <div class="equip-modal-header">
      <span class="equip-modal-title"><img class="item-img item-img-inline" src="${item.imgPath}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'" style="width:1.3rem;height:1.3rem;vertical-align:middle;display:inline-block"><span class="item-img-fallback" style="display:none">${item.emoji}</span> ${item.name}</span>
      <button class="equip-modal-close" id="equip-modal-close-btn">✕</button>
    </div>
    <div class="item-preview-desc" style="margin:-0.5rem 0 0.75rem 0;font-size:0.8rem;color:rgba(255,255,255,0.55);">${item.description}</div>
    <p class="equip-modal-desc">Selecciona un pez para equiparle este objeto:</p>
    <div class="equip-fish-list">
      ${fishItemsHtml}
    </div>`;
  dom.equipModal.classList.add('open');
  document.body.classList.add('modal-open');

  dom.equipModalBody.querySelectorAll('.equip-fish-item').forEach(el => {
    el.addEventListener('pointerdown', e => {
      e.preventDefault();
      const fishId = el.dataset.fishId;
      state.equippedItems[fishId] = itemId;
      closeEquipModal();
      renderInventory();
    });
  });

  const closeBtn = document.getElementById('equip-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeEquipModal(); });
}

function closeEquipModal() {
  dom.equipModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

/* ===== UNEQUIP MODAL ===== */
function openUnequipModal(itemId, fishId) {
  const item = ITEMS.find(it => it.id === itemId);
  const fish = getFishById(fishId);
  if (!item || !fish) return;
  const r = item.rarity;

  dom.equipModalBody.innerHTML = `
    <div class="equip-modal-header">
      <span class="equip-modal-title"><img class="item-img item-img-inline" src="${item.imgPath}" alt="${item.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'" style="width:1.3rem;height:1.3rem;vertical-align:middle;display:inline-block"><span class="item-img-fallback" style="display:none">${item.emoji}</span> ${item.name}</span>
      <button class="equip-modal-close" id="unequip-modal-close-btn">✕</button>
    </div>
    <div class="item-preview-desc" style="margin-bottom:0.75rem;font-size:0.8rem;color:rgba(255,255,255,0.55);">${item.description}</div>
    <div class="item-preview" style="gap:0.5rem;padding:0.75rem 0;">
      <div class="item-preview-img ${r}" style="width:4.5rem;height:4.5rem;"><img class="item-img" src="${item.imgPath}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="item-img-fallback">${item.emoji}</span></div>
      <div class="item-preview-name" style="font-size:1rem;">${item.name}</div>
      <div style="background:rgba(79,172,254,0.1);border:1px solid rgba(79,172,254,0.2);border-radius:10px;padding:0.5rem 1rem;display:flex;align-items:center;gap:0.5rem;">
        ${imgTagSmall(fish.imgPath, fish.name, fish.emoji)}
        <span style="font-size:0.85rem;font-weight:600;color:#64b5f6;">Equipado en: ${fish.name}</span>
      </div>
    </div>
    <div class="item-preview-actions" style="margin-top:0.25rem;">
      <button class="btn-primary item-buy-btn" id="unequip-confirm-btn" style="background:linear-gradient(135deg,#f44336,#e57373);">DESEQUIPAR</button>
    </div>`;

  document.getElementById('unequip-confirm-btn').addEventListener('pointerdown', e => {
    e.preventDefault();
    delete state.equippedItems[fishId];
    closeEquipModal();
    renderInventory();
  });

  const closeBtn = document.getElementById('unequip-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeEquipModal(); });

  dom.equipModal.classList.add('open');
  document.body.classList.add('modal-open');
}

/* ===== ITEM CONFIRM MODAL ===== */
function openItemModal(itemId, cost) {
  const item = ITEMS.find(it => it.id === itemId);
  if (!item) return;
  const r = item.rarity;
  const alreadyOwned = state.items.includes(item.id);
  const canAfford = state.coins >= cost;

  dom.itemModalBody.innerHTML = `
    <div class="item-modal-header">
      <span class="item-modal-title">${item.name}</span>
      <button class="item-modal-close" id="item-modal-close-btn">✕</button>
    </div>
    <div class="item-preview">
      <div class="item-preview-img ${r}">
        <img class="item-img" src="${item.imgPath}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
        <span class="item-img-fallback">${item.emoji}</span>
      </div>
      <div class="item-preview-name">${item.name}</div>
      <div><span class="inv-card-rarity ${r}">${r === 'common' ? 'COMÚN' : r === 'rare' ? 'RARO' : r === 'epic' ? 'ÉPICO' : 'LEYENDA'}</span></div>
      <div class="item-preview-desc">${item.description}</div>
      <div class="item-preview-cost">🪙 ${cost}</div>
    </div>
    <div class="item-preview-actions">
      <button class="btn-primary item-buy-btn" id="item-buy-btn" ${canAfford && !alreadyOwned ? '' : 'disabled'}>
        ${alreadyOwned ? '✅ Ya poseído' : canAfford ? 'COMPRAR 🪙 ' + cost : 'Oro insuficiente'}
      </button>
    </div>`;

  const buyBtn = document.getElementById('item-buy-btn');
  if (buyBtn && canAfford && !alreadyOwned) {
    buyBtn.addEventListener('pointerdown', e => {
      e.preventDefault();
      buyItem(item.id, cost);
      closeItemModal();
    });
  }

  const closeBtn = document.getElementById('item-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeItemModal(); });

  dom.itemModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeItemModal() {
  dom.itemModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

/* ===== GEM EXCHANGE ===== */
function openGemPackModal(pack) {
  const canAfford = state.diamonds >= pack.cost;

  dom.itemModalBody.innerHTML = `
    <div class="item-modal-header">
      <span class="item-modal-title">💎 Banco de Gemas</span>
      <button class="item-modal-close" id="gem-modal-close-btn">✕</button>
    </div>
    <div class="item-preview">
      <div class="item-preview-img" style="border:none;background:none;width:auto;height:auto;padding:0;"><img class="item-img" src="${pack.imgPath}" alt="${pack.name}" style="width:4rem;height:4rem;" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="item-img-fallback" style="font-size:3rem;">${pack.emoji}</span></div>
      <div class="item-preview-name">${pack.name}</div>
      <div class="item-preview-desc" style="font-size:0.95rem;">
        ¿Quieres canjear <strong>${pack.cost} 💎</strong> por <strong>${pack.reward} 🪙</strong>?
      </div>
      <div class="item-preview-cost" style="font-size:0.9rem;">
        Saldo actual: 💎 ${state.diamonds} → 🪙 ${state.coins + pack.reward}
      </div>
    </div>
    <div class="item-preview-actions">
      <button class="btn-primary item-buy-btn" id="gem-confirm-btn" ${canAfford ? '' : 'disabled'}>
        ${canAfford ? `✅ Canjear ${pack.cost} 💎` : '❌ Gemas insuficientes'}
      </button>
    </div>`;

  const confirmBtn = document.getElementById('gem-confirm-btn');
  if (confirmBtn && canAfford) {
    confirmBtn.addEventListener('pointerdown', e => {
      e.preventDefault();
      if (state.diamonds < pack.cost) return;
      state.diamonds -= pack.cost;
      state.coins += pack.reward;
      updateCoinDisplay();
      updateDiamondDisplay();
      showCoinReward(pack.reward);
      closeItemModal();
      renderShop();
      renderInventory();
    });
  }

  const closeBtn = document.getElementById('gem-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeItemModal(); });

  dom.itemModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function showCoinReward(amount) {
  const el = document.createElement('div');
  el.className = 'coin-reward';
  el.textContent = `+${amount} 🪙`;
  document.getElementById('app').appendChild(el);
  requestAnimationFrame(() => el.classList.add('coin-reward-active'));
  setTimeout(() => el.remove(), 1500);
}

function imgTagSmall(src, alt, fallbackEmoji) {
  return `<div class="equip-img-wrap"><img class="equip-fish-thumb" src="${src}" alt="${alt}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'"><span class="equip-img-fallback">${fallbackEmoji || '🐟'}</span></div>`;
}

/* ===== COMBATE ===== */
function initCombat() {
  const playerFishId = state.selectedFishId;
  const playerBase = getFishById(playerFishId);
  const playerLevel = getFishLevel(playerFishId);
  const playerType = roundFishStats(getLeveledFishType(playerBase, playerLevel));

  const playerBaseFish = getFishById(playerFishId);
  // Enemy generation based on current arena (global), not individual fish cups
  const arenaCfg = getArenaConfig(state.currentArena);
  const enemyLevel = arenaCfg.minLevel + Math.floor(Math.random() * (arenaCfg.maxLevel - arenaCfg.minLevel + 1));
  const enemyBase = randomArenaFish(state.currentArena);
  const enemyType = roundFishStats(getLeveledFishType(enemyBase, enemyLevel));

  if (playerBaseFish?.passive?.name === 'Barbillones') playerType.atk += 0.5;
  if (enemyBase?.passive?.name === 'Barbillones') enemyType.atk += 0.5;
  if (playerBaseFish?.passive?.name === 'Fuga Serpenteante') playerType.spe += 1;
  if (enemyBase?.passive?.name === 'Fuga Serpenteante') enemyType.spe += 1;
  state.player = { type: playerType, currentHp: playerType.maxHp, maxHp: playerType.maxHp, status: null, shield: 0, mimetismoUsado: false, hipnosisUsado: false, destelloActivado: false, atkReduction: null, spdReduction: null, debuff: null, buffs: null, sangradoTurns: 0, frenesiActivo: false, quiebroUsado: false, mimetismoAbsolutoActivo: false, resistenciaMarinaActivo: false, impulsoHuidaActivo: false, rompebarrerasActivo: false, krakenActivo: false, selfHealUsed: {} };
  state.enemy = { type: enemyType, currentHp: enemyType.maxHp, maxHp: enemyType.maxHp, status: null, shield: 0, mimetismoUsado: false, hipnosisUsado: false, destelloActivado: false, atkReduction: null, spdReduction: null, debuff: null, buffs: null, sangradoTurns: 0, frenesiActivo: false, quiebroUsado: false, mimetismoAbsolutoActivo: false, resistenciaMarinaActivo: false, impulsoHuidaActivo: false, rompebarrerasActivo: false, krakenActivo: false, selfHealUsed: {} };
  state.isPlayerTurn = true;
  state.gameOver = false;
  state.isAnimating = false;
  state.turnPhase = 'player_first';
  state.isFirstEnemyTurn = true;

  if (playerBaseFish?.passive?.name === 'Mimetismo Absoluto') state.player.mimetismoAbsolutoActivo = true;
  if (enemyBase?.passive?.name === 'Mimetismo Absoluto') state.enemy.mimetismoAbsolutoActivo = true;

  if (playerBaseFish?.passive?.name === 'Rompebarreras') state.player.rompebarrerasActivo = true;
  if (enemyBase?.passive?.name === 'Rompebarreras') state.enemy.rompebarrerasActivo = true;

  if (playerBaseFish?.passive?.name === 'Emboscada') {
    state.player.buffs = { ...(state.player.buffs || {}), critChance: 0.3, critTurns: 1 };
    setLogMessage(`¡${playerBaseFish.name} se oculta para una Emboscada! +30% crítico en el primer turno`, true);
  }
  if (enemyBase?.passive?.name === 'Emboscada') {
    state.enemy.buffs = { ...(state.enemy.buffs || {}), critChance: 0.3, critTurns: 1 };
    setLogMessage(`¡${enemyBase.name} se oculta para una Emboscada! +30% crítico en el primer turno`, true);
  }

  if (hasEquippedItem(state.selectedFishId, 'aleta_voladora')) {
    state.player.type.spe = Math.round(state.player.type.spe * 1.1);
    setLogMessage(`¡Aleta de Pez Volador aumenta la velocidad! (+10%)`, true);
  }
  if (hasEquippedItem(state.selectedFishId, 'obj_escama_brillante')) {
    const mult = getItemMultiplier(state.selectedFishId, 'obj_escama_brillante');
    state.player.type.spe = Math.round(state.player.type.spe * (1 + 0.1 * mult));
    setLogMessage(`¡Escama Brillante aumenta la velocidad! (+${10 * mult}%)${mult > 1 ? ' (×2 Escudo Remoto)' : ''}`, true);
  }
  if (hasEquippedItem(state.selectedFishId, 'obj_concha_reforzada')) {
    const mult = getItemMultiplier(state.selectedFishId, 'obj_concha_reforzada');
    state.player.type.def = Math.round(state.player.type.def * (1 + 0.1 * mult));
    setLogMessage(`¡Concha Reforzada aumenta la defensa! (+${10 * mult}%)${mult > 1 ? ' (×2 Escudo Remoto)' : ''}`, true);
  }
  if (hasEquippedItem(state.selectedFishId, 'obj_perla_arrecife')) {
    const mult = getItemMultiplier(state.selectedFishId, 'obj_perla_arrecife');
    const shield = Math.max(1, Math.round(state.player.maxHp * 0.2 * mult));
    state.player.shield = shield;
    setLogMessage(`¡Perla del Arrecife otorga ${shield} PS de escudo!${mult > 1 ? ' (×2 Escudo Remoto)' : ''}`, true);
  }
  if (hasEquippedItem(state.selectedFishId, 'caparazon_tortuga')) {
    const mult = getItemMultiplier(state.selectedFishId, 'caparazon_tortuga');
    state.player.type.def = Math.round(state.player.type.def * (1 + 0.15 * mult));
    setLogMessage(`¡Caparazón de Tortuga aumenta la defensa! (+${15 * mult}%)${mult > 1 ? ' (×2 Escudo Remoto)' : ''}`, true);
  }
  if (hasEquippedItem(state.selectedFishId, 'tinta_concentrada')) {
    state.enemy.debuff = { type: 'precision_reducida', turns: 2 };
    setLogMessage(`¡Tinta Concentrada reduce la precisión del rival!`, true);
  }

  if (enemyBase?.passive?.name === 'Cazadora Nocturna') {
    const bonus = Math.max(1, Math.round(enemyType.spe * 0.2));
    state.enemy.buffs = { speBoost: bonus, speTurns: 2 };
    setLogMessage(`¡Morena activa Cazadora Nocturna! SPE +${bonus}`, true);
  }
  if (playerBaseFish?.passive?.name === 'Cazadora Nocturna') {
    const bonus = Math.max(1, Math.round(playerType.spe * 0.2));
    state.player.buffs = { speBoost: bonus, speTurns: 2 };
    setLogMessage(`¡Morena activa Cazadora Nocturna! SPE +${bonus}`, true);
  }

  renderCombat();
  showScreen('combat');
  dom.enemySpd.textContent = `SPE: ${state.enemy.type.spe}`;
  dom.playerSpd.textContent = `SPE: ${state.player.type.spe}`;
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
  dom.playerHpText.textContent = `${Math.ceil(state.player.currentHp)}/${state.player.maxHp}${state.player.shield > 0 ? ` 🛡️${state.player.shield}` : ''}`;
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

function checkStun(fighter, name) {
  if (fighter.status === 'aturdido') {
    fighter.status = null;
    setLogMessage(`¡${name} está aturdido y pierde el turno!`, true);
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
    if (checkStun(state.player, state.player.type.name)) {
      state.isPlayerTurn = false; state.isAnimating = true;
      updateAttackButtons();
      applyStatusDamage(state.player); updateHpBars(); updateStatusDisplay();
      if (checkGameOver()) return;
      applyPassiveHealing(state.player);
      decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
      setTimeout(() => doEnemyAttack(), 1200);
    } else if (checkParalysis(state.player, state.player.type.name)) {
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
    if (checkStun(state.enemy, state.enemy.type.name)) {
      applyStatusDamage(state.enemy); updateHpBars(); updateStatusDisplay();
      if (checkGameOver()) return;
      applyPassiveHealing(state.enemy);
      decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
      setTimeout(() => startTurn(), 1200);
    } else if (checkParalysis(state.enemy, state.enemy.type.name)) {
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
    applySelfBuff(atk, state.player);
    applySecondaryEffect(atk, state.enemy);
    applyPassiveHealing(state.player);
    decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
    afterPlayerAction();
    return;
  }

  if (checkPrecision(state.player)) {
    applyPassiveHealing(state.player);
    decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
    afterPlayerAction();
    return;
  }
  if (checkDodge(state.enemy, atk.categoria, state.player)) {
    applyPassiveHealing(state.player);
    decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
    afterPlayerAction();
    return;
  }
  let dmg = calculateDamage(atk.power, state.player.type, state.enemy.type, atk.categoria, state.player.status, state.enemy.buffs, state.player.atkReduction, state.enemy.spdReduction, atk);
  if (state.player.frenesiActivo && atk.categoria === 'Fisico') {
    dmg = Math.round(dmg * 1.15);
    state.player.frenesiActivo = false;
    setLogMessage(`¡Frenesí Protector de ${state.player.type.name}! Daño +15%`, true);
  }
  dmg = applyDefensivePassives(dmg, state.enemy, atk.categoria);
  state.enemy.currentHp = Math.max(0, state.enemy.currentHp - dmg);
  checkResistenciaMarina(state.enemy);
  checkKrakenDesatado(state.enemy);
  if (atk.categoria === 'Fisico') trackMission('fisico_attacks');
  if (atk.categoria === 'Especial') trackMission('especial_attacks');
  setLogMessage(`¡${state.player.type.name} usa ${atk.name}! -${dmg} HP`, true);
  if (atk.drain) {
    const heal = Math.max(1, Math.floor(dmg * atk.drain));
    state.player.currentHp = Math.min(state.player.maxHp, state.player.currentHp + heal);
    setLogMessage(`¡${state.player.type.name} absorbió +${heal} PS!`, true);
  }
  animateHit(dom.enemyArea); updateHpBars();
  triggerOnHitPassive(state.player, state.enemy, atk, dmg);
  triggerPassive(state.enemy, state.player, atk.categoria);
  applySecondaryEffect(atk, state.enemy);
  if (atk.efecto?.estado === 'aturdido') trackMission('apply_stun');
  if (atk.efecto?.estado === 'precision_reducida') trackMission('reduce_precision');
  applySelfBuff(atk, state.player);
  checkDestelloAdvertencia(state.enemy, state.player);
  checkImpulsoHuida(state.enemy);
  if (state.enemy.currentHp <= 0) {
    triggerEstomagoSinFondo(state.player);
    state.gameOver = true; setTimeout(() => showResult(true), 800); return;
  }
  applyStatusDamage(state.player); updateHpBars(); updateStatusDisplay();
  checkKrakenDesatado(state.player);
  if (checkGameOver()) return;
  applyPassiveHealing(state.player);
  decrementDebuff(state.player); decrementBuffs(state.player); updateStatusDisplay();
  afterPlayerAction();
}

function afterPlayerAction() {
  if (state.player.rompebarrerasActivo) {
    state.player.rompebarrerasActivo = false;
    state.isPlayerTurn = true;
    state.isAnimating = false;
    updateAttackButtons();
    setLogMessage('¡Rompebarreras! Puedes atacar de nuevo.', true);
    return;
  }
  if (state.turnPhase === 'player_first') setTimeout(() => doEnemyAttack(), 1200);
  else setTimeout(() => startTurn(), 1000);
}

function afterEnemyAction() {
  if (state.enemy.rompebarrerasActivo) {
    state.enemy.rompebarrerasActivo = false;
    state.isAnimating = true;
    setTimeout(() => doEnemyAttack(), 800);
    return;
  }
  if (state.turnPhase === 'enemy_first') {
    state.isPlayerTurn = true; state.isAnimating = false; state.turnPhase = 'player_counter';
    setLogMessage('¡Contraataca! Elige un ataque.'); updateAttackButtons();
  } else setTimeout(() => startTurn(), 1000);
}

function chooseEnemyAttack() {
  const enemy = state.enemy;
  const player = state.player;
  const attacks = enemy.type.attacks;

  const bestStat = enemy.type.atk >= enemy.type.spa ? 'Fisico' : 'Especial';

  const sortedByPower = [...attacks].sort((a, b) => b.power - a.power);

  for (const atk of sortedByPower) {
    const dmg = calculateDamage(atk.power, enemy.type, player.type, atk.categoria, enemy.status, player.buffs, enemy.atkReduction, player.spdReduction, atk);
    if (dmg >= player.currentHp) return atk;
  }

  const buffAtk = attacks.find(a => a.categoria === 'Efecto' && a.efecto?.estado === 'def_boost' && !enemy.buffs);
  if (buffAtk) {
    const playerPhysicalAttacks = player.type.attacks.filter(a => a.categoria === 'Fisico').length;
    if (playerPhysicalAttacks > 0) return buffAtk;
  }

  const healAtk = attacks.find(a => a.selfHeal && !enemy.selfHealUsed?.[a.name] && enemy.currentHp <= enemy.maxHp * 0.5);
  if (healAtk) return healAtk;

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
    applySelfBuff(atk, state.enemy);
    applySecondaryEffect(atk, state.player);
    applyPassiveHealing(state.enemy);
    decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
    afterEnemyAction();
    return;
  }

  if (checkPrecision(state.enemy)) {
    const defBase = getFishById(state.player.type.id);
    if (defBase && defBase.passive && defBase.passive.name === 'Frenesí Protector') {
      state.player.frenesiActivo = true;
      setLogMessage(`¡Frenesí Protector de ${state.player.type.name}! ATF +15% en el próximo ataque`, true);
    }
    applyPassiveHealing(state.enemy);
    decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
    afterEnemyAction();
    return;
  }
  if (checkDodge(state.player, atk.categoria, state.enemy)) {
    applyPassiveHealing(state.enemy);
    decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
    afterEnemyAction();
    return;
  }
  let dmg = calculateDamage(atk.power, state.enemy.type, state.player.type, atk.categoria, state.enemy.status, state.player.buffs, state.enemy.atkReduction, state.player.spdReduction, atk);
  dmg = applyDefensivePassives(dmg, state.player, atk.categoria);
  if (state.player.shield > 0) {
    const absorbed = Math.min(state.player.shield, dmg);
    state.player.shield -= absorbed;
    if (absorbed > 0) setLogMessage(`¡El escudo de Perla del Arrecife absorbe ${absorbed} PS!`, true);
    dmg -= absorbed;
  }
  state.player.currentHp = Math.max(0, state.player.currentHp - dmg);
  checkResistenciaMarina(state.player);
  checkKrakenDesatado(state.player);
  if (dmg > 0) setLogMessage(`¡${state.enemy.type.name} usa ${atk.name}! -${dmg} HP`, true);
  if (atk.drain) {
    const heal = Math.max(1, Math.floor(dmg * atk.drain));
    state.enemy.currentHp = Math.min(state.enemy.maxHp, state.enemy.currentHp + heal);
    setLogMessage(`¡${state.enemy.type.name} absorbió +${heal} PS!`, true);
  }
  animateHit(dom.playerArea); updateHpBars();
  triggerOnHitPassive(state.enemy, state.player, atk, dmg);
  triggerPassive(state.player, state.enemy, atk.categoria);
  applySecondaryEffect(atk, state.player);
  applySelfBuff(atk, state.enemy);
  checkDestelloAdvertencia(state.player, state.enemy);
  checkImpulsoHuida(state.player);
  if (state.player.currentHp <= 0) {
    triggerEstomagoSinFondo(state.enemy);
    state.gameOver = true; setTimeout(() => showResult(false), 800); return;
  }
  applyStatusDamage(state.enemy); updateHpBars(); updateStatusDisplay();
  checkKrakenDesatado(state.enemy);
  if (checkGameOver()) return;
  applyPassiveHealing(state.enemy);
  decrementDebuff(state.enemy); decrementBuffs(state.enemy); updateStatusDisplay();
  afterEnemyAction();
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
  const arenaCups = ARENA_CUP_CHANGES[state.currentArena] || ARENA_CUP_CHANGES[1];
  const cupChange = victory ? arenaCups.win : arenaCups.lose;
  const fishId = state.selectedFishId;
  const preCups = getFishCups(fishId);
  const matchArena = getArenaForCups(preCups);
  state.coins += reward;
  state.fishCups[fishId] = Math.max(0, preCups + cupChange);
  state.cups = getTotalCups();
  updateCoinDisplay(); updateCupsDisplay();
  checkArenaChange();
  trackMission('play_battles');
  if (victory) trackMission('win_battles');
  addBattlePassXpFromCombat(victory);
  if (matchArena === state.arenaMaxReached) trackMission('top_arena_battles');
  if (cupChange > 0) {
    for (let i = 0; i < cupChange; i++) trackMission('earn_cups_fish');
  }
  showScreen('result');
  dom.resultTitle.textContent = victory ? '¡VICTORIA!' : 'DERROTA';
  dom.resultTitle.className = 'result-title ' + (victory ? 'victory' : 'defeat');
  dom.resultEmoji.textContent = victory ? '🏆' : '💀';
  dom.resultCups.textContent = `${victory ? '+' + arenaCups.win : arenaCups.lose} 🏆`;
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
  renderFightContent(); renderBank(); renderInventory();
  updateCoinDisplay(); updateDiamondDisplay();
  showSection('fight'); showScreen('main');
}

/* ===== REINICIO DE PARTIDA ===== */
function openResetModal() {
  const modal = document.getElementById('reset-modal');
  const input = document.getElementById('reset-confirm-input');
  const confirmBtn = document.getElementById('btn-reset-confirm');
  if (!modal || !input || !confirmBtn) return;

  input.value = '';
  confirmBtn.disabled = true;

  const handler = () => {
    confirmBtn.disabled = input.value !== 'REINICIAR';
  };
  input.addEventListener('input', handler);
  modal._inputHandler = handler;

  modal.classList.add('open');
  document.body.classList.add('modal-open');
  setTimeout(() => input.focus(), 100);
}

function closeResetModal() {
  const modal = document.getElementById('reset-modal');
  if (!modal) return;
  modal.classList.remove('open');
  if (!dom.profileModal.classList.contains('open')) {
    document.body.classList.remove('modal-open');
  }
  if (modal._inputHandler) {
    const input = document.getElementById('reset-confirm-input');
    if (input) input.removeEventListener('input', modal._inputHandler);
    delete modal._inputHandler;
  }
}

function resetAccount() {
  localStorage.removeItem('fba_manual_save');

  state.coins = 100;
  state.diamonds = 0;
  state.cups = 0;
  state.currentArena = 1;
  state.arenaMaxReached = 1;
  state.unlockedFish = ['salmonete'];
  state.fishLevels = {};
  state.fishCups = {};
  state.items = [];
  state.equippedItems = {};
  state.lastFreeClaim = null;
  state.missions = {};
  state.missionsActive = [];
  state.missionsClaimed = [];
  state.missionsBonusClaimed = false;
  state.missionsRefreshTime = null;
  state.nivel_pase = 0;
  state.xp_pase = 0;
  state.tiene_premium = false;
  state.paseInicioTemporada = Date.now();
  state.paseRecompensasReclamadas = [];
  state.paseObjetos = [];
  state.titulosDesbloqueados = [];
  state.marcosDesbloqueados = [];
  state.achievements = { collectionMaster: { rewardedForTotal: 0 } };
  state.selectedFishId = 'salmonete';
  state.player = null;
  state.enemy = null;
  state.isPlayerTurn = true;
  state.gameOver = false;

  location.reload();
}

/* ===== EL MUELLE DE LA SUERTE ===== */
const MUELLE_MIN_BET = 10;

function muelleShuffleBoard(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getMuelleFishPrize() {
  const locked = FISH_TYPES.filter(f => !state.unlockedFish.includes(f.id));
  const pool = locked.length > 0 ? locked : FISH_TYPES;
  return pool[Math.floor(Math.random() * pool.length)];
}

function getMuelleBootCount(round) {
  return Math.min(5 + Math.max(0, round - 1), 8);
}

function getMuelleRewardLayout(round) {
  const rewardsByRound = [
    ['x2', 'x2', 'x5', 'fish'],
    ['x2', 'x5', 'fish'],
    ['x2', 'x5'],
    ['x5']
  ];
  return rewardsByRound[Math.min(Math.max(0, round - 1), rewardsByRound.length - 1)];
}

function createMuelleBoard(round) {
  const rewards = getMuelleRewardLayout(round);
  const boots = Array.from({ length: getMuelleBootCount(round) }, () => 'boot');
  return muelleShuffleBoard([...rewards, ...boots]).map((type, index) => ({ index, type, revealed: false }));
}

function getMuelleBetValidation(rawValue) {
  const cleanValue = String(rawValue ?? '').replace(/\D/g, '');
  if (!cleanValue) {
    return {
      cleanValue,
      bet: null,
      isValid: false,
      message: `Introduce una apuesta entre ${MUELLE_MIN_BET} y ${state.coins} 🪙.`
    };
  }

  const bet = parseInt(cleanValue, 10);
  if (!Number.isFinite(bet) || bet < MUELLE_MIN_BET) {
    return {
      cleanValue,
      bet,
      isValid: false,
      message: `La apuesta mínima es de ${MUELLE_MIN_BET} 🪙.`
    };
  }

  if (bet > state.coins) {
    return {
      cleanValue,
      bet,
      isValid: false,
      message: `No puedes apostar más de ${state.coins} 🪙.`
    };
  }

  return {
    cleanValue,
    bet,
    isValid: true,
    message: `Apuesta válida: ${bet} 🪙.`
  };
}

function syncMuelleBetForm() {
  const input = document.getElementById('muelle-bet-input');
  const confirmBtn = document.getElementById('muelle-confirm-bet-btn');
  const error = document.getElementById('muelle-bet-error');
  if (!input || !confirmBtn || !error) return;

  const validation = getMuelleBetValidation(input.value);
  if (input.value !== validation.cleanValue) input.value = validation.cleanValue;
  confirmBtn.disabled = !validation.isValid;
  error.textContent = validation.message;
  error.classList.toggle('valid', validation.isValid);
}

function openMuelleBetModal() {
  const modal = document.getElementById('muelle-bet-modal');
  if (!modal) return;
  const body = document.getElementById('muelle-bet-modal-body');
  const hasCoins = state.coins >= MUELLE_MIN_BET;
  const defaultBet = hasCoins ? String(Math.min(25, state.coins)) : '';
  if (body) {
    body.innerHTML = `
      <div class="muelle-bet-header">
        <span class="muelle-bet-title">🎣 El Muelle de la Suerte</span>
        <button class="muelle-bet-close" id="muelle-bet-close-btn">✕</button>
      </div>
      <div class="muelle-bet-coins">Tienes: <strong>${state.coins} 🪙</strong></div>
      <p class="muelle-bet-hint">Escribe la cantidad exacta que quieres apostar.</p>
      <input type="text" id="muelle-bet-input" class="muelle-bet-input"
        inputmode="numeric" autocomplete="off" spellcheck="false"
        value="${defaultBet}" placeholder="${MUELLE_MIN_BET}–${state.coins}">
      <p class="muelle-bet-error" id="muelle-bet-error"></p>
      <button class="btn-primary muelle-confirm-bet-btn" id="muelle-confirm-bet-btn" ${hasCoins ? '' : 'disabled'}>
        🎣 ¡Lanzar el Sedal!
      </button>
      ${!hasCoins ? `<p class="muelle-no-coins">Necesitas al menos ${MUELLE_MIN_BET} 🪙 para jugar.</p>` : ''}
    `;
  }
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  if (hasCoins) syncMuelleBetForm();
}

function closeMuelleBetModal() {
  const modal = document.getElementById('muelle-bet-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function initMuelle(bet) {
  const round = 1;
  state.muelle = {
    active: true,
    bet: bet,
    round,
    accumulated: 0,
    lostAmount: 0,
    fishPrize: getMuelleFishPrize(),
    fishAlreadyOwned: false,
    holes: createMuelleBoard(round),
    waiting: false,
    lastReveal: null,
    over: false,
    result: null
  };
  state.coins -= bet;
  updateCoinDisplay();
  renderMuelleSection();
}

function renderMuelleSection() {
  const el = document.getElementById('muelle-content');
  if (!el) return;
  const m = state.muelle;

  if (!m || !m.active) {
    el.innerHTML = `
      <div class="muelle-idle">
        <div class="muelle-idle-banner">🎣</div>
        <p class="muelle-idle-name">El Muelle de la Suerte</p>
        <p class="muelle-idle-desc">Apuesta monedas y pesca en los 9 agujeros del muelle.<br>Más de la mitad son botas y, si sigues pescando, la siguiente ronda se llena aún más de basura.</p>
        <div class="muelle-rules-grid">
          <div class="muelle-rule muelle-rule-x2"><span class="muelle-rule-icon">🪙</span><strong>x2</strong><span>Solo 2 agujeros al inicio</span></div>
          <div class="muelle-rule muelle-rule-x5"><span class="muelle-rule-icon">💰</span><strong>x5</strong><span>Premio grande en muy pocos huecos</span></div>
          <div class="muelle-rule muelle-rule-fish"><span class="muelle-rule-icon">🐟</span><strong>Pez</strong><span>×1 agujero</span></div>
          <div class="muelle-rule muelle-rule-boot"><span class="muelle-rule-icon">🥾</span><strong>Bota</strong><span>5 agujeros o más</span></div>
        </div>
        <button class="btn-primary muelle-play-btn" id="muelle-play-btn">¡Ir al Muelle!</button>
      </div>`;
    return;
  }

  const holesHtml = m.holes.map((h, i) => {
    if (!h.revealed) {
      const inactive = m.waiting || m.over ? ' muelle-hole-inactive' : '';
      return `<button class="muelle-hole muelle-hole-hidden${inactive}" data-hole="${i}"><span class="muelle-hole-icon">🌊</span></button>`;
    }
    const isLatest = i === m.lastReveal ? ' muelle-hole-latest' : '';
    if (h.type === 'boot') {
      return `<button class="muelle-hole muelle-hole-boot muelle-hole-revealed${isLatest}" disabled><span class="muelle-hole-icon">🥾</span><span class="muelle-hole-label">¡Bota!</span></button>`;
    }
    if (h.type === 'x5') {
      return `<button class="muelle-hole muelle-hole-x5 muelle-hole-revealed${isLatest}" disabled><span class="muelle-hole-icon">💰</span><span class="muelle-hole-label">x5</span></button>`;
    }
    if (h.type === 'x2') {
      return `<button class="muelle-hole muelle-hole-x2 muelle-hole-revealed${isLatest}" disabled><span class="muelle-hole-icon">🪙</span><span class="muelle-hole-label">x2</span></button>`;
    }
    return `<button class="muelle-hole muelle-hole-fish muelle-hole-revealed${isLatest}" disabled><span class="muelle-hole-icon">🐟</span><span class="muelle-hole-label">${m.fishPrize ? m.fishPrize.name : 'Pez'}</span></button>`;
  }).join('');

  let statusHtml = '';
  let actionsHtml = '';

  if (m.over) {
    if (m.result === 'bust') {
      const lostMsg = m.lostAmount > 0
        ? `las <strong>${m.lostAmount} 🪙</strong> acumuladas`
        : `tu apuesta de <strong>${m.bet} 🪙</strong>`;
      statusHtml = `<div class="muelle-result muelle-result-bust">🥾 ¡Pescaste una bota! Perdiste ${lostMsg}.</div>`;
    } else {
      const fishMsg = (m.result === 'fish' && m.fishPrize)
        ? (m.fishAlreadyOwned
            ? ` (${m.fishPrize.name} ya era tuyo: +${Math.round(m.bet * 1.5)} 🪙)`
            : ` + 🐟 ${m.fishPrize.name} añadido`)
        : '';
      statusHtml = `<div class="muelle-result muelle-result-win">🎉 ¡Ganaste <strong>${m.accumulated} 🪙</strong>${fishMsg}!</div>`;
    }
    actionsHtml = `<button class="btn-primary muelle-newgame-btn" id="muelle-newgame-btn">¡Jugar de Nuevo!</button>`;
  } else if (m.waiting) {
    const lastHole = m.holes[m.lastReveal];
    let prizeMsg = '';
    if (lastHole) {
      if (lastHole.type === 'x2') prizeMsg = `¡x2! +<strong>${m.bet * 2} 🪙</strong>`;
      else if (lastHole.type === 'x5') prizeMsg = `¡x5! +<strong>${m.bet * 5} 🪙</strong>`;
      else if (lastHole.type === 'fish') {
        if (m.fishAlreadyOwned) prizeMsg = `${m.fishPrize.name} ya era tuyo: +<strong>${Math.round(m.bet * 1.5)} 🪙</strong>`;
        else prizeMsg = `¡Pescaste a <strong>${m.fishPrize.name}</strong>! Añadido a tu colección 🐟`;
      }
    }
    statusHtml = `
      <div class="muelle-status-msg">${prizeMsg}</div>
      <div class="muelle-accumulated">Acumulado: <strong>${m.accumulated} 🪙</strong></div>`;
    actionsHtml = `
      <div class="muelle-decision">
        <button class="muelle-cashout-btn" id="muelle-cashout-btn">💰 Retirarse (${m.accumulated} 🪙)</button>
        <button class="muelle-continue-btn" id="muelle-continue-btn">🎣 Seguir Pescando</button>
      </div>`;
  } else {
    statusHtml = `<div class="muelle-accumulated">Acumulado: <strong>${m.accumulated} 🪙</strong></div>
      <p class="muelle-prompt">Toca un agujero para pescar</p>`;
  }

  el.innerHTML = `
    <div class="muelle-game">
      <div class="muelle-game-stats">Ronda <strong>${m.round}</strong> · Apuesta: <strong>${m.bet} 🪙</strong> · Botas: <strong>${m.holes.filter(h => h.type === 'boot').length}/9</strong></div>
      <div class="muelle-board" id="muelle-board">${holesHtml}</div>
      ${statusHtml}
      ${actionsHtml}
    </div>`;
}

function revealMuelleHole(index) {
  const m = state.muelle;
  if (!m || !m.active || m.over || m.waiting) return;
  const hole = m.holes[index];
  if (!hole || hole.revealed) return;

  hole.revealed = true;
  m.lastReveal = index;

  if (hole.type === 'boot') {
    m.lostAmount = m.accumulated;
    state.coins -= m.accumulated;
    m.accumulated = 0;
    updateCoinDisplay();
    m.over = true;
    m.result = 'bust';
    renderMuelleSection();
    return;
  }

  if (hole.type === 'x2') {
    const gain = m.bet * 2;
    m.accumulated += gain;
    state.coins += gain;
  } else if (hole.type === 'x5') {
    const gain = m.bet * 5;
    m.accumulated += gain;
    state.coins += gain;
  } else if (hole.type === 'fish') {
    if (!state.unlockedFish.includes(m.fishPrize.id)) {
      state.unlockedFish.push(m.fishPrize.id);
      m.fishAlreadyOwned = false;
    } else {
      m.fishAlreadyOwned = true;
      const gain = Math.round(m.bet * 1.5);
      m.accumulated += gain;
      state.coins += gain;
    }
  }
  updateCoinDisplay();

  const allPrizesFound = m.holes.filter(h => h.type !== 'boot').every(h => h.revealed);
  if (allPrizesFound) {
    m.over = true;
    m.result = hole.type === 'fish' ? 'fish' : 'win';
    renderMuelleSection();
    return;
  }

  m.waiting = true;
  renderMuelleSection();
}

function muelleCashOut() {
  const m = state.muelle;
  if (!m || !m.active || m.over || !m.waiting) return;
  const lastHole = m.holes[m.lastReveal];
  m.over = true;
  m.result = (lastHole && lastHole.type === 'fish') ? 'fish' : 'win';
  m.waiting = false;
  renderMuelleSection();
}

function muelleContinue() {
  const m = state.muelle;
  if (!m || !m.active || m.over || !m.waiting) return;
  m.round += 1;
  m.holes = createMuelleBoard(m.round);
  m.waiting = false;
  m.lastReveal = null;
  m.fishAlreadyOwned = false;
  renderMuelleSection();
}

function endMuelle() {
  state.muelle = null;
  renderMuelleSection();
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
  dom.equipModal.addEventListener('pointerdown', e => {
    if (e.target === dom.equipModal || e.target.classList.contains('equip-modal-backdrop')) {
      e.preventDefault(); closeEquipModal();
    }
  });
  dom.arenaModal.addEventListener('pointerdown', e => {
    if (e.target === dom.arenaModal || e.target.classList.contains('arena-modal-backdrop')) {
      e.preventDefault(); closeArenaModal();
    }
  });
  dom.btnRestart.addEventListener('pointerdown', e => { e.preventDefault(); resetGame(); });
  const resetModal = document.getElementById('reset-modal');
  if (resetModal) {
    resetModal.addEventListener('pointerdown', e => {
      if (e.target === resetModal || e.target.classList.contains('reset-modal-backdrop')) {
        e.preventDefault(); closeResetModal();
      }
    });
    const resetConfirmBtn = document.getElementById('btn-reset-confirm');
    if (resetConfirmBtn) resetConfirmBtn.addEventListener('pointerdown', e => {
      e.preventDefault();
      if (resetConfirmBtn.disabled) return;
      resetAccount();
    });
    const resetCloseBtn = document.getElementById('reset-modal-close-btn');
    if (resetCloseBtn) resetCloseBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeResetModal(); });
  }
  const missionsBtn = document.getElementById('missions-btn');
  if (missionsBtn) missionsBtn.addEventListener('pointerdown', e => { e.preventDefault(); openMissionsModal(); });
  const profileBtn = document.getElementById('profile-btn');
  if (profileBtn) profileBtn.addEventListener('pointerdown', e => { e.preventDefault(); openProfileModal(); });
  if (dom.battlePassBtn) dom.battlePassBtn.addEventListener('pointerdown', e => { e.preventDefault(); openBattlePassModal(); });
  dom.missionsModal.addEventListener('pointerdown', e => {
    if (e.target === dom.missionsModal || e.target.classList.contains('missions-modal-backdrop')) {
      e.preventDefault(); closeMissionsModal();
    }
  });
  dom.profileModal.addEventListener('pointerdown', e => {
    if (e.target === dom.profileModal || e.target.classList.contains('profile-modal-backdrop')) {
      e.preventDefault(); closeProfileModal();
    }
  });
  dom.battlePassModal.addEventListener('pointerdown', e => {
    if (e.target === dom.battlePassModal || e.target.classList.contains('battle-pass-modal-backdrop')) {
      e.preventDefault(); closeBattlePassModal();
    }
  });
  dom.itemModal.addEventListener('pointerdown', e => {
    if (e.target === dom.itemModal || e.target.classList.contains('item-modal-backdrop')) {
      e.preventDefault(); closeItemModal();
    }
  });
  dom.bottomNav.addEventListener('pointerdown', e => {
    const targetEl = getEventTargetElement(e.target);
    const tab = targetEl ? targetEl.closest('.nav-tab') : null;
    if (!tab) return;
    e.preventDefault();
    const id = tab.dataset.tab;
    if (id) showSection(id);
  });
  const muelleContent = document.getElementById('muelle-content');
  if (muelleContent) {
    muelleContent.addEventListener('pointerdown', e => {
      const targetEl = getEventTargetElement(e.target);
      if (!targetEl) return;
      if (targetEl.closest('#muelle-play-btn')) { e.preventDefault(); openMuelleBetModal(); return; }
      const hole = targetEl.closest('.muelle-hole[data-hole]');
      if (hole && !hole.disabled && !hole.classList.contains('muelle-hole-inactive')) {
        e.preventDefault(); revealMuelleHole(parseInt(hole.dataset.hole, 10)); return;
      }
      if (targetEl.closest('#muelle-cashout-btn')) { e.preventDefault(); muelleCashOut(); return; }
      if (targetEl.closest('#muelle-continue-btn')) { e.preventDefault(); muelleContinue(); return; }
      if (targetEl.closest('#muelle-newgame-btn')) { e.preventDefault(); endMuelle(); return; }
    });
  }
  const muelleBetModal = document.getElementById('muelle-bet-modal');
  if (muelleBetModal) {
    muelleBetModal.addEventListener('pointerdown', e => {
      const targetEl = getEventTargetElement(e.target);
      if (e.target === muelleBetModal || e.target.classList.contains('muelle-bet-modal-backdrop')) {
        e.preventDefault(); closeMuelleBetModal(); return;
      }
      if (!targetEl) return;
      if (targetEl.closest('#muelle-bet-close-btn')) { e.preventDefault(); closeMuelleBetModal(); return; }
      const confirmBtn = targetEl.closest('#muelle-confirm-bet-btn');
      if (confirmBtn) {
        e.preventDefault();
        if (confirmBtn.disabled) return;
        const input = document.getElementById('muelle-bet-input');
        const validation = getMuelleBetValidation(input ? input.value : '');
        if (input && input.value !== validation.cleanValue) input.value = validation.cleanValue;
        if (!validation.isValid || validation.bet === null) {
          syncMuelleBetForm();
          return;
        }
        closeMuelleBetModal();
        initMuelle(validation.bet);
        return;
      }
    });
    muelleBetModal.addEventListener('input', e => {
      const targetEl = getEventTargetElement(e.target);
      if (!targetEl || targetEl.id !== 'muelle-bet-input') return;
      syncMuelleBetForm();
    });
    muelleBetModal.addEventListener('keydown', e => {
      const targetEl = getEventTargetElement(e.target);
      if (!targetEl || targetEl.id !== 'muelle-bet-input' || e.key !== 'Enter') return;
      e.preventDefault();
      const validation = getMuelleBetValidation(targetEl.value);
      if (targetEl.value !== validation.cleanValue) targetEl.value = validation.cleanValue;
      if (!validation.isValid || validation.bet === null) {
        syncMuelleBetForm();
        return;
      }
      closeMuelleBetModal();
      initMuelle(validation.bet);
    });
  }
}

/* ===== INIT ===== */
const UPDATE_POPUP_KEY = 'actualizacion_v1_1_vista';

function hasVeteranProgressForUpdatePopup() {
  const legacyCoins = localStorage.getItem('monedas');
  if (legacyCoins !== null) return true;
  if (!hasManualSave()) return false;
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    return typeof data.coins === 'number';
  } catch (e) {
    return false;
  }
}

function checkUpdatePopup() {
  const yaVisto = localStorage.getItem(UPDATE_POPUP_KEY) === 'true';
  if (yaVisto) return;

  const esVeterano = hasVeteranProgressForUpdatePopup();
  if (!esVeterano) {
    localStorage.setItem(UPDATE_POPUP_KEY, 'true');
    return;
  }

  const modal = document.getElementById('update-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.classList.add('modal-open');

  function cerrar() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    localStorage.setItem(UPDATE_POPUP_KEY, 'true');
  }

  document.getElementById('update-modal-close-btn').addEventListener('click', cerrar, { once: true });
  modal.querySelector('.update-modal-backdrop').addEventListener('click', cerrar, { once: true });
}

function init() {
  loadGame();
  checkUpdatePopup();
  ensureBattlePassState();
  checkBattlePassSeasonExpiration();
  startBattlePassTicker();
  checkMissionsRefresh();
  setupEvents();
  renderFightContent();
  renderBank();
  renderInventory();
  updateCoinDisplay();
  updateDiamondDisplay();
  updateCupsDisplay();
  updateArenaDisplay();
  updateArenaBackground();
  updateSaveTimestampDisplay();
  updateMissionsButton();
  updateNotificationDots();
  showSection('fight');
  showScreen('main');
}

document.addEventListener('DOMContentLoaded', init);
