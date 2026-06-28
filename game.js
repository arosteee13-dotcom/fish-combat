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
    imgPath: 'img/peces/payaso.png',
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
    imgPath: 'img/peces/globo.png',
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
    imgPath: 'img/peces/salmonete.png',
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
    imgPath: 'img/peces/blenio.png',
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
    imgPath: 'img/peces/cabracho.png',
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
    imgPath: 'img/peces/anemona_de_mar.png',
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
    imgPath: 'img/peces/cangrejo_ermitano.png',
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
    imgPath: 'img/peces/pulpo_de_roca.png',
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
    imgPath: 'img/peces/lenguado.png',
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
    imgPath: 'img/peces/sepia.png',
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
    imgPath: 'img/peces/quisquilla.png',
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
    imgPath: 'img/peces/pez_aguja.png',
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
    imgPath: 'img/peces/medusa_aguamala.png',
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
    imgPath: 'img/peces/estrella_de_mar.png',
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
    imgPath: 'img/peces/berberecho.png',
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
    imgPath: 'img/peces/anguila_de_arena.png',
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
    imgPath: 'img/peces/pulpo_anillos_azules.png',
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
    imgPath: 'img/peces/pez_loro.png',
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
    imgPath: 'img/peces/morena_arrecife.png',
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
    imgPath: 'img/peces/camaron_pistola.png',
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
    imgPath: 'img/peces/pez_cirujano_azul.png',
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
    imgPath: 'img/peces/pez_damisela_azul.png',
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
    imgPath: 'img/peces/pez_ballesta_picassiano.png',
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
    imgPath: 'img/peces/pez_mariposa.png',
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
    imgPath: 'img/peces/pez_cofre_amarillo.png',
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
    imgPath: 'img/peces/pez_leon.png',
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
    imgPath: 'img/peces/pez_angel_emperador.png',
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
    imgPath: 'img/peces/pez_piedra.png',
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
    imgPath: 'img/peces/pez_espada.png',
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
    imgPath: 'img/peces/atun_rojo.png',
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
    imgPath: 'img/peces/tiburon_martillo.png',
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
    imgPath: 'img/peces/pez_volador.png',
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
    imgPath: 'img/peces/remora.png',
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
    imgPath: 'img/peces/barracuda.png',
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
    imgPath: 'img/peces/pez_vela.png',
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
    imgPath: 'img/peces/carabela_portuguesa.png',
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
    imgPath: 'img/peces/pez_linterna.png',
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
    imgPath: 'img/peces/pez_tripode.png',
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
    imgPath: 'img/peces/pez_demonio.png',
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
    imgPath: 'img/peces/tiburon_anguila.png',
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
    imgPath: 'img/peces/pez_vibora.png',
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
    imgPath: 'img/peces/tiburon_duende.png',
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
    imgPath: 'img/peces/engullidor_negro.png',
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
    imgPath: 'img/peces/kraken.png',
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
  },
  {
    id: 'bacalao',
    name: 'Bacalao Ártico',
    rarity: 'common',
    imgPath: 'img/peces/bacalao_artico.png',
    emoji: '🐟',
    maxHp: 6, atk: 5, def: 4, spa: 4, spd: 5, spe: 12,
    growth: { maxHp: 0.6, atk: 0.5, def: 0.4, spa: 0.4, spd: 0.5, spe: 1.2 },
    attacks: [
      { name: 'Embestida Gélida', power: 30, emoji: '❄️', categoria: 'Fisico' },
      { name: 'Corriente Ártica', power: 40, emoji: '🌊', categoria: 'Fisico', efecto: { probabilidad: 0.1, estado: 'spe_reduction', turns: 2, amount: 1 } }
    ],
    passive: {
      name: 'Sangre Anticongelante',
      description: 'Al inicio del combate, obtiene inmunidad total contra estados de congelación o ralentización.'
    }
  },
  {
    id: 'pez_hielo',
    name: 'Pez Hielo Austral',
    rarity: 'common',
    imgPath: 'img/peces/pez_hielo_austral.png',
    emoji: '🧊',
    maxHp: 5, atk: 4, def: 6, spa: 7, spd: 8, spe: 10,
    growth: { maxHp: 0.5, atk: 0.4, def: 0.6, spa: 0.7, spd: 0.8, spe: 1.0 },
    attacks: [
      { name: 'Mordisco Pálido', power: 35, emoji: '🦷', categoria: 'Fisico' },
      { name: 'Destello Glacial', power: 45, emoji: '💡', categoria: 'Especial', efecto: { probabilidad: 0.3, estado: 'precision_reducida', turns: 2 } }
    ],
    passive: {
      name: 'Cuerpo Translúcido',
      description: 'Reduce un 15% el daño del primer ataque recibido en el combate.'
    }
  },
  {
    id: 'calamar_cristal',
    name: 'Calamar de Cristal',
    rarity: 'rare',
    imgPath: 'img/peces/calamar_cristal.png',
    emoji: '🦑',
    maxHp: 7, atk: 6, def: 5, spa: 10, spd: 7, spe: 11,
    growth: { maxHp: 0.7, atk: 0.6, def: 0.5, spa: 1.0, spd: 0.7, spe: 1.1 },
    attacks: [
      { name: 'Chorros de Tinta Fría', power: 50, emoji: '🖤', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'sangrado', turns: 2 } },
      { name: 'Constricción Abisal', power: 45, emoji: '🌀', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Manto de Escarcha',
      description: 'Cada vez que usa un ataque especial, aumenta su velocidad en +1 punto durante ese turno.'
    }
  },
  {
    id: 'narval',
    name: 'Narval',
    rarity: 'rare',
    imgPath: 'img/peces/narval.png',
    emoji: '🦄',
    maxHp: 12, atk: 14, def: 9, spa: 4, spd: 8, spe: 10,
    growth: { maxHp: 1.2, atk: 1.4, def: 0.9, spa: 0.4, spd: 0.8, spe: 1.0 },
    attacks: [
      { name: 'Perforación de Marfil', power: 65, emoji: '🗡️', categoria: 'Fisico' },
      { name: 'Onda de Choque', power: 40, emoji: '💥', categoria: 'Especial', efecto: { probabilidad: 0.3, estado: 'aturdido' } }
    ],
    passive: {
      name: 'Perforador de Hielo',
      description: 'Sus ataques físicos ignoran el 20% de la Defensa física del rival gracias a su colmillo.'
    }
  },
  {
    id: 'leopardo_marino',
    name: 'Leopardo Marino',
    rarity: 'epic',
    imgPath: 'img/peces/leopardo_marino.png',
    emoji: '🐆',
    maxHp: 13, atk: 16, def: 10, spa: 5, spd: 9, spe: 17,
    growth: { maxHp: 1.3, atk: 1.6, def: 1.0, spa: 0.5, spd: 0.9, spe: 1.7 },
    attacks: [
      { name: 'Desgarro Feroz', power: 75, emoji: '🦷', categoria: 'Fisico', efecto: { probabilidad: 1, estado: 'sangrado', turns: 3 } },
      { name: 'Frenesí Acuático', power: 55, emoji: '🌊', categoria: 'Fisico' }
    ],
    passive: {
      name: 'Cazador del Glaciar',
      description: 'Si la velocidad del Leopardo es mayor que la del rival, su probabilidad de golpe crítico aumenta un 15%.'
    }
  },
  {
    id: 'tiburon_groenlandia',
    name: 'Tiburón de Groenlandia',
    rarity: 'epic',
    imgPath: 'img/peces/tiburon_groenlandia.png',
    emoji: '🦈',
    maxHp: 20, atk: 14, def: 15, spa: 6, spd: 14, spe: 2,
    growth: { maxHp: 2.0, atk: 1.4, def: 1.5, spa: 0.6, spd: 1.4, spe: 0.2 },
    attacks: [
      { name: 'Mandíbula Ancestral', power: 70, emoji: '🦴', categoria: 'Fisico', efecto: { probabilidad: 1, estado: 'def_reduction', turns: 3, amount: 2 } },
      { name: 'Piel Blindada', power: 0, emoji: '🛡️', categoria: 'Efecto', selfBuff: { stat: 'spd', amount: 3, turns: 99 } }
    ],
    passive: {
      name: 'Longevidad Criogénica',
      description: 'Una masa de vida blindada. Recupera un 5% de su vida máxima al final de cada turno.'
    }
  },
  {
    id: 'orca',
    name: 'Orca',
    rarity: 'legendary',
    imgPath: 'img/peces/orca.png',
    emoji: '🐋',
    maxHp: 18, atk: 19, def: 14, spa: 12, spd: 12, spe: 16,
    growth: { maxHp: 1.8, atk: 1.9, def: 1.4, spa: 1.2, spd: 1.2, spe: 1.6 },
    attacks: [
      { name: 'Embestida Alfa', power: 85, emoji: '💥', categoria: 'Fisico' },
      { name: 'Canto Hidroacústico', power: 70, emoji: '🎵', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'atk_reduction', turns: 2, amount: 0.15 } }
    ],
    passive: {
      name: 'Estrategia de Manada',
      description: 'Cada ataque consecutivo que acierte con éxito aumenta su daño total en un +10% (acumulable hasta 3 veces).'
    }
  },
  {
    id: 'medusa_melena_artica',
    name: 'Medusa Melena de León Ártica',
    rarity: 'legendary',
    imgPath: 'img/peces/medusa_melena_artica.png',
    emoji: '🪼',
    maxHp: 16, atk: 4, def: 16, spa: 19, spd: 18, spe: 3,
    growth: { maxHp: 1.6, atk: 0.4, def: 1.6, spa: 1.9, spd: 1.8, spe: 0.3 },
    attacks: [
      { name: 'Aguijón Congelante', power: 90, emoji: '❄️', categoria: 'Especial', efecto: { probabilidad: 1, estado: 'spe_reduction', turns: 2, amount: 2 } },
      { name: 'Abrazo de la Melena', power: 75, emoji: '🫳', categoria: 'Fisico', drain: 0.2 }
    ],
    passive: {
      name: 'Tentáculos Kilométricos',
      description: 'Cualquier enemigo que ejecute un ataque físico contra la medusa recibe automáticamente un contragolpe de veneno que drena vida en cada turno.'
    }
  }
];

/* ===== ITEMS DATA ===== */
const ITEMS = [
  { id: 'fragmento_coral', name: 'Fragmento de Coral', rarity: 'common', imgPath: 'img/objetos/fragmento_coral.png', emoji: '🪸', description: 'Recupera 5% de los PS Máximos por turno.' },
  { id: 'diente_tiburon', name: 'Diente de Tiburón', rarity: 'rare', imgPath: 'img/objetos/diente_tiburon.png', emoji: '🦈', description: '+15% al daño físico infligido.' },
  { id: 'caparazon_tortuga', name: 'Caparazón de Tortuga', rarity: 'rare', imgPath: 'img/objetos/caparazon_tortuga.png', emoji: '🐢', description: 'Aumenta la Defensa Física del portador en un 20%.' },
  { id: 'tinta_concentrada', name: 'Tinta Concentrada', rarity: 'epic', imgPath: 'img/objetos/tinta_concentrada.png', emoji: '🐙', description: 'Reduce la precisión del rival un 40% los 2 primeros turnos.' },
  { id: 'aleta_voladora', name: 'Aleta de Pez Volador', rarity: 'epic', imgPath: 'img/objetos/aleta_pez.png', emoji: '⚡', description: '+30% a la Velocidad base del portador.' },
  { id: 'obj_concha_reforzada', name: 'Concha Reforzada', rarity: 'common', imgPath: 'img/objetos/concha_reforzada.png', emoji: '🐚', description: 'Un fragmento de concha gruesa que absorbe los impactos. Aumenta la Defensa Física un +10%.' },
  { id: 'obj_escama_brillante', name: 'Escama Brillante', rarity: 'common', imgPath: 'img/objetos/escama_brillante.png', emoji: '✨', description: 'Una escama pulida que refleja la luz. Aumenta la Velocidad un +10% y otorga +5% de Esquiva.' },
  { id: 'obj_coral_fuego', name: 'Coral de Fuego', rarity: 'rare', imgPath: 'img/objetos/coral_fuego.png', emoji: '🪸', description: 'Coral urticante. Los ataques Especiales ganan un 15% de probabilidad de infligir Veneno por 2 turnos.' },
  { id: 'obj_toxina_concentrada', name: 'Toxina Concentrada', rarity: 'epic', imgPath: 'img/objetos/toxina_concentrada.png', emoji: '🧪', description: 'Veneno puro y letal. Al equiparlo, todos los estados alterados que cause este pez (Veneno, Sangrado o Aturdimiento) ignoran por completo las defensas, inmunidades o curaciones del rival.' },
  { id: 'obj_perla_arrecife', name: 'Perla del Arrecife', rarity: 'epic', imgPath: 'img/objetos/perla_arrecife.png', emoji: '🔮', description: 'Joya mística. Al iniciar el combate, otorga al portador un Escudo protector equivalente al 20% de sus PS máximos.' },
  { id: 'concha_comun', name: 'Concha Común', rarity: 'common', imgPath: 'img/objetos/concha_comun.png', emoji: '🐚', description: 'Una concha resistente que ofrece protección básica. Reduce el daño físico recibido un 5%.' },
  { id: 'anzuelo_suerte', name: 'Anzuelo de la Suerte', rarity: 'rare', imgPath: 'img/objetos/anzuelo_suerte.png', emoji: '🎣', description: 'Un anzuelo bañado en buena fortuna. Aumenta la probabilidad de golpe crítico un 15%.' },
  { id: 'coral_defensivo', name: 'Coral Defensivo', rarity: 'common', imgPath: 'img/objetos/coral_defensivo.png', emoji: '🪸', description: 'Un coral duro como la piedra. Otorga un escudo del 10% de los PS máximos al iniciar el combate.' },
  { id: 'perla_abismo', name: 'Perla del Abismo', rarity: 'epic', imgPath: 'img/objetos/perla_abismo.png', emoji: '🌑', description: 'Una perla oscura nacida en las fosas más profundas. Aumenta la Defensa Especial un 30%.' },
  { id: 'tridente_roto', name: 'Tridente Roto', rarity: 'rare', imgPath: 'img/objetos/tridente_roto.png', emoji: '🔱', description: 'Un tridente astillado pero aún letal. Aumenta el Ataque Físico un 15%.' },
  { id: 'escama_basalto', name: 'Escama de Basalto', rarity: 'common', imgPath: 'img/objetos/escama_basalto.png', emoji: '🪨', description: 'Escama volcánica endurecida. Aumenta la Defensa Física un 10%.' },
  { id: 'fragmento_obsidiana', name: 'Fragmento de Obsidiana', rarity: 'rare', imgPath: 'img/objetos/fragmento_obsidiana.png', emoji: '🔶', description: 'Fragmento de roca ígnea. Aumenta el Ataque Físico un 15%.' },
  { id: 'anzuelo_termico', name: 'Anzuelo Térmico', rarity: 'rare', imgPath: 'img/objetos/anzuelo_termico.png', emoji: '🎣', description: 'Anzuelo forjado en magma. Aumenta la probabilidad de golpe crítico un 15%.' },
  { id: 'coral_azufre', name: 'Coral de Azufre', rarity: 'common', imgPath: 'img/objetos/coral_azufre.png', emoji: '🪸', description: 'Coral sulfuroso. Otorga un escudo del 10% de los PS máximos al iniciar el combate.' },
  { id: 'nucleo_magma', name: 'Núcleo de Magma', rarity: 'epic', imgPath: 'img/objetos/nucleo_magma.png', emoji: '🌋', description: 'Núcleo de fuego líquido. Reduce la precisión del rival un 30% los 2 primeros turnos.' },
  { id: 'coraza_lava', name: 'Coraza de Lava', rarity: 'rare', imgPath: 'img/objetos/coraza_lava.png', emoji: '🛡️', description: 'Armadura de lava petrificada. Aumenta la Defensa Especial un 20%.' },
  { id: 'tridente_ceniza', name: 'Tridente de Ceniza', rarity: 'rare', imgPath: 'img/objetos/tridente_ceniza.png', emoji: '🔱', description: 'Tridente envuelto en ceniza volcánica. Aumenta el Ataque Físico un 18%.' }
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
  { id: 'small',  name: 'Bolsa de Oro Pequeña',  cost: 10,  reward: 250,  imgPath: 'img/oro/oro_pequeno.png',  emoji: '📦' },
  { id: 'medium', name: 'Cofre de Oro Mediano',   cost: 50,  reward: 1500, imgPath: 'img/oro/oro_mediano.png',   emoji: '📦' },
  { id: 'large',  name: 'Tesoro de Oro Grande',   cost: 100, reward: 3500, imgPath: 'img/oro/oro_grande.png',   emoji: '📦' }
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
const BATTLE_PASS_TOTAL_LEVELS = 10;
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
    free: { type: 'coins', amount: 500, label: '500 Monedas' },
    premium: { type: 'coins', amount: 1500, label: '1500 Monedas Extra' }
  }
];

const BATTLE_PASS_LEVELS_JULY = [
  { level: 1, free: { type: 'coins', amount: 100, label: '100 Monedas' }, premium: { type: 'coins', amount: 300, label: '300 Monedas Extra' } },
  { level: 2, free: { type: 'item', label: 'Escama de Basalto' }, premium: { type: 'item', label: 'Fragmento de Obsidiana' } },
  { level: 3, free: { type: 'coins', amount: 150, label: '150 Monedas' }, premium: { type: 'coins', amount: 400, label: '400 Monedas Extra' } },
  { level: 4, free: { type: 'coins', amount: 200, label: '200 Monedas' }, premium: { type: 'item', label: 'Anzuelo Térmico' } },
  { level: 5, free: { type: 'coins', amount: 250, label: '250 Monedas' }, premium: { type: 'coins', amount: 600, label: '600 Monedas Extra' } },
  { level: 6, free: { type: 'item', label: 'Coral de Azufre' }, premium: { type: 'item', label: 'Núcleo de Magma' } },
  { level: 7, free: { type: 'coins', amount: 300, label: '300 Monedas' }, premium: { type: 'coins', amount: 800, label: '800 Monedas Extra' } },
  { level: 8, free: { type: 'item', label: 'Coraza de Lava' }, premium: { type: 'item', label: 'Tridente de Ceniza' } },
  { level: 9, free: { type: 'coins', amount: 400, label: '400 Monedas' }, premium: { type: 'coins', amount: 1200, label: '1200 Monedas Extra' } },
  { level: 10, free: { type: 'coins', amount: 500, label: '500 Monedas' }, premium: { type: 'coins', amount: 1500, label: '1500 Monedas Extra' } }
];

function getBattlePassLevels() {
  const month = new Date().getUTCMonth() + 1;
  return month >= 7 ? BATTLE_PASS_LEVELS_JULY : BATTLE_PASS_LEVELS;
}

const COLLECTION_MASTER_REWARD = { coins: 2000, diamonds: 30 };
const AUTH_ACCOUNTS_KEY = 'fba_accounts_registry';
const AUTH_SESSION_KEY = 'fba_auth_session';
const SAVE_KEY_PREFIX = 'fba_manual_save:';
const LEGACY_SAVE_KEY = 'fba_manual_save';
const GUEST_SAVE_KEY = 'fba_guest_save';
const CLOUD_EMAIL_DOMAIN = 'fisharena.local';
const PROGRESS_COLLECTION = 'usuarios';

/* ===== CONSTANTS ===== */
const MAX_LEVEL = 12;

const ACHIEVEMENTS = [
  {
    id: 'pescador', name: 'Pescador Experto', icon: '🎣',
    target: 16,
    label: 'Desbloquea los 16 peces de la Arena 1',
    progressLabel: 'Peces desbloqueados',
    reward: { coins: 200, diamonds: 25 }
  },
  {
    id: 'muelle', name: 'Señor del Muelle', icon: '🎰',
    target: 200,
    label: 'Gasta 200 tickets en el muelle',
    progressLabel: 'Tickets gastados',
    reward: { coins: 250, diamonds: 15 }
  },
  {
    id: 'gladiador', name: 'Gladiador del Mar', icon: '⚔️',
    target: 100,
    label: 'Gana 100 batallas',
    progressLabel: 'Batallas ganadas',
    reward: { coins: 200, diamonds: 30 }
  },
  {
    id: 'inversor', name: 'Inversor Marino', icon: '📈',
    target: 1,
    label: `Lleva cualquier pez al nivel máximo (${MAX_LEVEL})`,
    progressLabel: 'Nivel máximo alcanzado',
    reward: { coins: 200, diamonds: 20 }
  },
  {
    id: 'superviviente', name: 'Superviviente del Arrecife', icon: '🛡️',
    target: 20,
    label: 'Completa las 20 oleadas del Modo Supervivencia',
    progressLabel: 'Oleadas superadas',
    reward: { coins: 500, diamonds: 50 }
  },
  {
    id: 'achievement_rey_midas', name: 'Rey Midas', icon: '👑',
    target: 20,
    label: 'Completa las 20 oleadas de la Fiebre del Oro',
    progressLabel: 'Mejor marca en Fiebre del Oro',
    reward: { coins: 2000, diamonds: 50 }
  },
  {
    id: 'achievement_codicia_absoluta', name: 'Codicia Absoluta', icon: '💎',
    target: 20,
    label: 'Completa las 20 oleadas de la Mina de Gemas',
    progressLabel: 'Mejor marca en Mina de Gemas',
    reward: { coins: 0, diamonds: 200 }
  }
];

const ARENA_CUP_CHANGES = {
  1: { win: 30, lose: -5 },
  2: { win: 30, lose: -10 },
  3: { win: 30, lose: -20 },
  4: { win: 30, lose: -25 },
  5: { win: 30, lose: -30 }
};

const ARENA_CONFIG = {
  1: { name: 'La Orilla', icon: '🏖️', minCups: 0, maxCups: 300, cssClass: 'arena-beach', winGold: 50, loseGold: 10, minLevel: 1, maxLevel: 3 },
  2: { name: 'Arrecife de Coral', icon: '🪸', minCups: 300, maxCups: 600, cssClass: 'arena-coral', winGold: 80, loseGold: 15, minLevel: 3, maxLevel: 6 },
  3: { name: 'Mar Abierto', icon: '🌊', minCups: 600, maxCups: 900, cssClass: 'arena-temple', winGold: 120, loseGold: 20, minLevel: 6, maxLevel: 9 },
  4: { name: 'Las Profundidades', icon: '🌌', minCups: 900, maxCups: 1200, cssClass: 'arena-depths', winGold: 200, loseGold: 30, minLevel: 9, maxLevel: 12 },
  5: { name: 'Aguas Heladas', icon: '❄️', minCups: 1200, maxCups: Infinity, cssClass: 'arena-ice', winGold: 300, loseGold: 40, minLevel: 12, maxLevel: 15 }
};

/* ===== GAME STATE ===== */
const state = {
  screen: 'main',
  selectedFishId: null,
  activeSection: 'fight',
  lastSavedAt: null,
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
  lastResetDate: null,
  battlesPlayed: 0,
  battlesWon: 0,
  nivel_pase: 0,
  xp_pase: 0,
  tiene_premium: false,
  paseInicioTemporada: Date.now(),
  paseSeasonMonth: null,
  paseRecompensasReclamadas: [],
  paseObjetos: [],
  titulosDesbloqueados: [],
  shopRotation: null,
  achievements: {
    collectionMaster: {
      rewardedForTotal: 0
    },
    pescador: { claimed: false },
    muelle: { claimed: false },
    gladiador: { claimed: false },
    inversor: { claimed: false },
    superviviente: { claimed: false },
    achievement_rey_midas: { claimed: false },
    achievement_codicia_absoluta: { claimed: false }
  },
  ticketsSpentTotal: 0,
  battleMode: 'normal',
  survivalWave: 0,
  survivalMaxWaves: 0,
  lastSurvivalDate: null,
  lastGoldFeverDate: null,
  lastDiamondFeverDate: null,
  goldFeverMaxWaves: 0,
  diamondFeverMaxWaves: 0,
  feverWave: 0,
  feverMaxWaves: 0,
  player: null,
  enemy: null,
  isPlayerTurn: true,
  gameOver: false,
  isAnimating: false,
  turnPhase: 'player_first',
  muelle: null,
  tickets_muelle: 3,
  playerUsername: 'Jugador123',
  authSession: null
};

const FRIENDS_DEMO = [
  { id: 'FA-1042', username: 'AquaWolf', cups: 1420, online: true },
  { id: 'FA-2218', username: 'CoralNova', cups: 980, online: true },
  { id: 'FA-3301', username: 'MareaX', cups: 740, online: false },
  { id: 'FA-4410', username: 'TiburonRojo', cups: 125, online: false },
  { id: 'FA-5508', username: 'NeonReef', cups: 2150, online: true }
];

/* ===== DOM HELPERS ===== */
const $ = id => document.getElementById(id);
const dom = {
  screenMain: $('screen-main'), screenCombat: $('screen-combat'), screenResult: $('screen-result'),
  bottomNav: $('bottom-nav'), coinDisplay: $('coin-display'), diamondDisplay: $('diamond-display'),
  headerUserBox: $('header-user-box'), headerUserName: document.querySelector('.header-user-name'),
  actionFooter: document.querySelector('.action-footer'),
  mainHeader: document.querySelector('.main-header'),
  sectionFight: $('section-fight'), sectionBank: $('section-bank'),
  sectionShop: $('section-shop'), sectionInventory: $('section-inventory'),
  sectionMuelle: $('section-muelle'),
  fightContent: $('fight-content'), bankCards: $('bank-cards'),   shopContent: $('shop-content'),
  resultCups: $('result-cups'),  fishModal: $('fish-modal'), fishModalBody: $('fish-modal-body'),
  btnBattle: $('btn-battle'), btnRestart: $('btn-restart'),
  enemyName: $('enemy-name'), enemyHpText: $('enemy-hp-text'), enemyHpFill: $('enemy-hp-fill'),
  enemyEmoji: $('enemy-emoji'), enemyArea: $('enemy-area'), enemySpd: $('enemy-spd'),
  playerName: $('player-name'), playerHpText: $('player-hp-text'), playerHpFill: $('player-hp-fill'),
  playerEmoji: $('player-emoji'), playerArea: $('player-area'), playerSpd: $('player-spd'),
  arenaModal: $('arena-modal'), arenaModalBody: $('arena-modal-body'),
  attackMenu: $('attack-menu'), logMessage: $('log-message'),
  waveIndicator: $('wave-indicator'),
  resultTitle: $('result-title'), resultEmoji: $('result-emoji'), resultSub: $('result-sub'),
  chestModal: $('chest-modal'), chestModalBody: $('chest-modal-body'),
  inventoryContent: $('inventory-content'),
  equipModal: $('equip-modal'), equipModalBody: $('equip-modal-body'),
  missionsModal: $('missions-modal'), missionsModalBody: $('missions-modal-body'),
  battlePassModal: $('battle-pass-modal'), battlePassModalBody: $('battle-pass-modal-body'),
  itemModal: $('item-modal'), itemModalBody: $('item-modal-body'),
  profileModal: $('profile-modal'), profileModalBody: $('profile-modal-body'),
  settingsModal: $('settings-modal'), settingsModalBody: $('settings-modal-body'),
  authModal: $('auth-modal'), authModalBody: $('auth-modal-body'),
  usernameModal: $('username-modal'), usernameModalBody: $('username-modal-body')
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
      unlocked: isCollectionMasterUnlocked(),
      pct: totalFish > 0 ? Math.round((unlockedFish / totalFish) * 100) : 0
    },
    {
      id: 'arena_conqueror',
      icon: '🏟️',
      name: 'Conquistador de Arenas',
      desc: `Llega a la Arena ${totalArenas}`,
      progress: `Arena máxima: ${Math.min(state.arenaMaxReached, totalArenas)}/${totalArenas}`,
      unlocked: state.arenaMaxReached >= totalArenas,
      pct: totalArenas > 0 ? Math.round((Math.min(state.arenaMaxReached, totalArenas) / totalArenas) * 100) : 0
    },
    {
      id: 'cup_hunter',
      icon: '🏆',
      name: 'Cazador de Copas',
      desc: `Alcanza ${cupTarget} copas totales`,
      progress: `${Math.min(totalCups, cupTarget)}/${cupTarget} copas`,
      unlocked: totalCups >= cupTarget,
      pct: cupTarget > 0 ? Math.round((Math.min(totalCups, cupTarget) / cupTarget) * 100) : 0
  },
  {
    id: 'superviviente',
    icon: '🛡️',
    name: 'Superviviente del Arrecife',
    desc: `Completa las 20 oleadas del Modo Supervivencia`,
    progress: `${state.survivalMaxWaves}/20 oleadas`,
    unlocked: state.survivalMaxWaves >= 20,
    pct: Math.round((Math.min(state.survivalMaxWaves, 20) / 20) * 100)
  }
];
}

function getArenaFishPool(arenaId) {
  const pool = [];
  for (let id = 1; id <= arenaId; id++) {
    pool.push(...(ARENA_FISH[id] || []));
  }
  return pool;
}

function getArenaShowcasePool(arenaId) {
  return [...(ARENA_FISH[arenaId] || [])];
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
const UPGRADE_COST_TABLE = {
  common:   [0, 50, 150, 400, 1000, 2000, 4000, 8000, 15000, 30000, 60000, 120000],
  rare:     [0, 150, 350, 750, 1500, 3000, 6000, 12000, 22000, 45000, 90000, 180000],
  epic:     [0, 400, 900, 2000, 4500, 8000, 15000, 25000, 45000, 80000, 160000, 320000],
  legendary:[0, 1000, 2500, 5000, 10000, 18000, 30000, 50000, 80000, 120000, 240000, 480000]
};

function getUpgradeCost(level, rarity) {
  if (level >= MAX_LEVEL) return null;
  const table = UPGRADE_COST_TABLE[rarity] || UPGRADE_COST_TABLE.common;
  return table[level] || null;
}

async function upgradeFish(fishId) {
  const fish = getFishById(fishId);
  if (!fish) return;
  const level = getFishLevel(fishId);
  const cost = getUpgradeCost(level, fish.rarity);
  if (cost === null) { alert('¡Este pez ya está en el nivel máximo!'); return; }
  if (state.coins < cost) { alert('Monedas insuficientes'); return; }
  const prevCoins = state.coins;
  const prevLevel = state.fishLevels[fishId];
  state.coins -= cost;
  state.fishLevels[fishId] = level + 1;
  const saved = await forceCloudSave('upgrade_fish');
  if (!saved) {
    state.coins = prevCoins;
    state.fishLevels[fishId] = prevLevel;
    alert('No se pudo confirmar la mejora en la nube. Inténtalo de nuevo.');
    return;
  }
  updateCoinDisplay();
  trackMission('level_up_fish');
  showFishDetail(fishId);
  signalAchievementUpdate();
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
function normalizeAuthEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function normalizeAuthUsername(username) {
  return String(username || '').trim().replace(/\s+/g, ' ').slice(0, 24);
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getAccountsRegistry() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_ACCOUNTS_KEY) || '{}') || {};
  } catch (e) {
    return {};
  }
}

function generateLocalUid() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `fa_${crypto.randomUUID().replace(/-/g, '')}`;
  }
  return `fa_${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}

function ensureAccountUid(account) {
  if (!account) return null;
  if (typeof account.uid === 'string' && account.uid.trim()) return account.uid.trim();
  account.uid = generateLocalUid();
  return account.uid;
}

function setAccountsRegistry(registry) {
  localStorage.setItem(AUTH_ACCOUNTS_KEY, JSON.stringify(registry || {}));
}

function getStoredSession() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY) || 'null');
  } catch (e) {
    return null;
  }
}

function setStoredSession(session) {
  const next = session && session.email ? { email: normalizeAuthEmail(session.email), uid: String(session.uid || '').trim() || null } : null;
  if (next) {
    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(next));
  } else {
    localStorage.removeItem(AUTH_SESSION_KEY);
  }
  state.authSession = next;
  return next;
}

function getCurrentAuthEmail() {
  return getCurrentAuthUid();
}

function getCurrentAuthUid() {
  const sessionUid = normalizeAuthUsername(state.authSession?.uid || '');
  if (sessionUid) return sessionUid;
  if (isLocalSessionActive()) return normalizeAuthUsername(getLocalAuthUid() || getLocalAuthUsername());
  return '';
}

function getFirebaseAuth() {
  return isFirebaseAuthAvailable() ? window.firebase.auth() : null;
}

function getFirebaseCurrentUser() {
  return getFirebaseAuth()?.currentUser || null;
}

let firebaseAuthReadyPromise = null;

function waitForFirebaseAuthReady() {
  if (!isFirebaseAuthAvailable()) return Promise.resolve(null);
  if (firebaseAuthReadyPromise) return firebaseAuthReadyPromise;
  firebaseAuthReadyPromise = new Promise(resolve => {
    const auth = getFirebaseAuth();
    if (!auth || typeof auth.onAuthStateChanged !== 'function') {
      resolve(getFirebaseCurrentUser());
      return;
    }
    const unsubscribe = auth.onAuthStateChanged(user => {
      try { unsubscribe(); } catch (e) {}
      resolve(user || null);
    }, () => resolve(null));
  });
  return firebaseAuthReadyPromise;
}

function isFirebaseAuthAvailable() {
  return !!(window.firebase && typeof window.firebase.auth === 'function' && window.__FIREBASE_CONFIG__ && window.__FIREBASE_CONFIG__.projectId);
}

function isCloudSessionActive() {
  return !!getCurrentAuthUid();
}

function isGuestSessionActive() {
  return isLocalSessionActive() && !isCloudSessionActive();
}

function getCloudEmailForUsername(username) {
  const slug = normalizeAuthUsername(username).toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9._-]/g, '');
  return `${slug || 'player'}@${CLOUD_EMAIL_DOMAIN}`;
}

function getFirebaseErrorMessage(error) {
  const code = String(error?.code || '').toLowerCase();
  if (code.includes('weak-password')) return 'La contraseña debe tener al menos 6 caracteres.';
  if (code.includes('email-already-in-use')) return 'Ese usuario ya está registrado.';
  if (code.includes('invalid-email')) return 'El nombre de usuario no es válido.';
  if (code.includes('operation-not-allowed')) return 'Firebase Auth no está activado en este proyecto.';
  if (code.includes('network-request-failed')) return 'No hay conexión con Firebase.';
  if (code.includes('permission-denied')) return 'Firebase bloqueó el guardado. Revisa las reglas de Firestore.';
  if (String(error?.message || '').includes('Firebase Auth no está disponible')) return 'Firebase no está configurado en este entorno.';
  return String(error?.message || 'Error inesperado');
}

function getGuestSaveRaw() {
  try {
    return localStorage.getItem(GUEST_SAVE_KEY);
  } catch (e) {
    return null;
  }
}

function getCloudSaveKey(uid = getCurrentAuthUid()) {
  return uid ? `${SAVE_KEY_PREFIX}${uid}` : LEGACY_SAVE_KEY;
}

function firebaseProgressDoc(username) {
  if (!socialDb) return null;
  const docId = normalizeAuthUsername(username);
  if (!docId) return null;
  return socialDb.collection(PROGRESS_COLLECTION).doc(docId);
}

function getSaveKey() {
  if (isCloudSessionActive()) return getCloudSaveKey();
  if (isGuestSessionActive()) return GUEST_SAVE_KEY;
  return LEGACY_SAVE_KEY;
}

function getCurrentSaveRaw() {
  const key = getSaveKey();
  const raw = localStorage.getItem(key);
  if (raw) return raw;
  if (key === GUEST_SAVE_KEY) return getGuestSaveRaw() || localStorage.getItem(LEGACY_SAVE_KEY);
  if (!isCloudSessionActive() && key !== LEGACY_SAVE_KEY) return localStorage.getItem(LEGACY_SAVE_KEY);
  return null;
}

function getCurrentSaveData() {
  const raw = getCurrentSaveRaw();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function updateHeaderUsernameDisplay() {
  const username = state.playerUsername || 'Jugador123';
  if (dom.headerUserName) dom.headerUserName.textContent = username;
  if (dom.headerUserBox) dom.headerUserBox.setAttribute('aria-label', `Editar nombre de usuario: ${username}`);
}

function sanitizeForFirestore(obj) {
  if (obj === null || obj === undefined) return undefined;
  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean') return obj;
  if (Array.isArray(obj)) {
    const arr = obj.map(sanitizeForFirestore).filter(v => v !== undefined);
    return arr.length > 0 ? arr : undefined;
  }
  if (typeof obj === 'object') {
    const clean = {};
    for (const [key, value] of Object.entries(obj)) {
      const v = sanitizeForFirestore(value);
      if (v !== undefined) clean[key] = v;
    }
    return Object.keys(clean).length > 0 ? clean : undefined;
  }
  return undefined;
}

async function persistCloudSave(data) {
  if (!isFirebaseAvailable() || !initFirebaseIfNeeded()) return false;
  const auth = getFirebaseAuth();
  if (!auth || !auth.currentUser) return false;
  const username = normalizeAuthUsername(state.playerUsername || auth.currentUser.displayName || '');
  if (!username) return false;
  const profileRef = firebaseProgressDoc(username);
  if (!profileRef) return false;
  const localSavedAt = new Date();
  const cleanData = sanitizeForFirestore(data);
  if (!cleanData) return false;
  try {
    await socialDb.runTransaction(async transaction => {
      const snap = await transaction.get(profileRef);
      transaction.set(profileRef, {
        username,
        usernameLower: normalizeFriendSearch(username),
        saveData: cleanData,
        savedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    });
    const cachePayload = { ...data, savedAt: localSavedAt.toISOString() };
    localStorage.setItem(getCloudSaveKey(username), JSON.stringify(cachePayload));
    state.lastSavedAt = localSavedAt;
    return true;
  } catch (error) {
    console.error('Error exacto en Tienda:', error.code);
    console.error('Detalle persistCloudSave:', error.code, error.message);
    return false;
  }
}

function applyFreshGameState(username) {
  state.lastSavedAt = null;
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
  state.lastResetDate = null;
  state.nivel_pase = 0;
  state.xp_pase = 0;
  state.tiene_premium = false;
  state.paseInicioTemporada = Date.now();
  state.paseSeasonMonth = null;
  state.paseRecompensasReclamadas = [];
  state.paseObjetos = [];
  state.titulosDesbloqueados = [];
  state.shopRotation = null;
  state.achievements = { collectionMaster: { rewardedForTotal: 0 },
    pescador: { claimed: false }, muelle: { claimed: false },
    gladiador: { claimed: false }, inversor: { claimed: false },
    superviviente: { claimed: false },
    achievement_rey_midas: { claimed: false }, achievement_codicia_absoluta: { claimed: false }
  };
  state.battlesPlayed = 0;
  state.battlesWon = 0;
  state.tickets_muelle = 3;
  state.selectedFishId = 'salmonete';
  state.player = null;
  state.enemy = null;
  state.isPlayerTurn = true;
  state.gameOver = false;
  state.isAnimating = false;
  state.turnPhase = 'player_first';
  state.muelle = null;
  state.playerUsername = normalizeAuthUsername(username || state.playerUsername || 'Jugador123') || 'Jugador123';
  updateHeaderUsernameDisplay();
}

function normalizeSavedTimestamp(value) {
  if (!value) return null;
  if (typeof value.toDate === 'function') return value.toDate();
  if (value instanceof Date) return value;
  if (typeof value === 'number') return new Date(value);
  if (typeof value === 'string') {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
  return null;
}

function formatSavedTimestamp(value) {
  const d = normalizeSavedTimestamp(value);
  if (!d) return 'Nunca guardado';
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} - ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

async function saveGame({ manual = false } = {}) {
  if (!manual) return false;
  const data = getSaveData();
  const username = normalizeAuthUsername(state.playerUsername);
  if (username) localStorage.setItem(LOCAL_AUTH_USERNAME_KEY, username);
  const uid = getCurrentAuthUid();
  if (uid) {
    const saved = await persistCloudSave(data);
    if (saved) {
      updateSaveTimestampDisplay();
      return true;
    }
  }
  const localSavedAt = new Date();
  const key = getSaveKey();
  localStorage.setItem(key, JSON.stringify({ ...data, savedAt: localSavedAt.toISOString() }));
  state.lastSavedAt = localSavedAt;
  updateSaveTimestampDisplay();
  return true;
}

async function forceCloudSave(reason = '') {
  const data = getSaveData();
  const uid = getCurrentAuthUid();
  if (uid) {
    const saved = await persistCloudSave(data);
    if (saved) return true;
    const auth = getFirebaseAuth();
    if (auth && auth.currentUser) {
      console.error(`Error en guardado de tienda (${reason}): no se pudo persistir en Firestore`);
    }
  }
  const localSavedAt = new Date();
  const key = getSaveKey();
  localStorage.setItem(key, JSON.stringify({ ...data, savedAt: localSavedAt.toISOString() }));
  return true;
}

function scheduleAutosave() {}

function hasManualSave() {
  const data = getCurrentSaveData();
  return !!(data && data.timestamp);
}

function applySaveData(data) {
  if (!data || typeof data !== 'object') return false;
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
  if (data.lastResetDate) state.lastResetDate = data.lastResetDate;
  if (Number.isFinite(data.battlesPlayed) && data.battlesPlayed >= 0) state.battlesPlayed = Math.floor(data.battlesPlayed);
  if (Number.isFinite(data.battlesWon) && data.battlesWon >= 0) state.battlesWon = Math.floor(data.battlesWon);
  if (Number.isFinite(data.nivel_pase) && data.nivel_pase >= 0) state.nivel_pase = Math.floor(data.nivel_pase);
  if (Number.isFinite(data.xp_pase) && data.xp_pase >= 0) state.xp_pase = Math.floor(data.xp_pase);
  if (typeof data.tiene_premium === 'boolean') state.tiene_premium = data.tiene_premium;
  if (Number.isFinite(data.paseInicioTemporada) && data.paseInicioTemporada > 0) state.paseInicioTemporada = data.paseInicioTemporada;
  if (typeof data.paseSeasonMonth === 'string') state.paseSeasonMonth = data.paseSeasonMonth;
  if (Array.isArray(data.paseRecompensasReclamadas)) state.paseRecompensasReclamadas = data.paseRecompensasReclamadas;
  if (Array.isArray(data.paseObjetos)) {
    state.paseObjetos = data.paseObjetos;
    state.paseObjetos.forEach(label => {
      const matchedItem = ITEMS.find(it => it.name === label);
      if (matchedItem && !state.items.includes(matchedItem.id)) {
        state.items.push(matchedItem.id);
      }
    });
  }
  repairMissingBattlePassItems();
  if (Array.isArray(data.titulosDesbloqueados)) state.titulosDesbloqueados = data.titulosDesbloqueados;
  if (data.shopRotation && typeof data.shopRotation === 'object') state.shopRotation = data.shopRotation;
  if (typeof data.tickets_muelle === 'number' && data.tickets_muelle >= 0) state.tickets_muelle = data.tickets_muelle;
  ensureBattlePassState();
  checkBattlePassSeasonExpiration();
  const savedAchievement = data.achievements?.collectionMaster;
  if (savedAchievement && Number.isFinite(savedAchievement.rewardedForTotal)) {
    state.achievements.collectionMaster.rewardedForTotal = Math.max(0, savedAchievement.rewardedForTotal);
  }
  ['pescador', 'muelle', 'gladiador', 'inversor', 'superviviente', 'achievement_rey_midas', 'achievement_codicia_absoluta'].forEach(id => {
    const saved = data.achievements?.[id];
    if (saved) {
      if (Array.isArray(saved.phasesClaimed)) {
        state.achievements[id] = { claimed: saved.phasesClaimed.length > 0 };
      } else if (typeof saved.claimed === 'boolean') {
        state.achievements[id] = { claimed: saved.claimed };
      }
    }
  });
  if (typeof data.ticketsSpentTotal === 'number' && data.ticketsSpentTotal >= 0) state.ticketsSpentTotal = data.ticketsSpentTotal;
  if (typeof data.survivalMaxWaves === 'number' && data.survivalMaxWaves >= 0) state.survivalMaxWaves = data.survivalMaxWaves;
  if (typeof data.lastSurvivalDate === 'number' && data.lastSurvivalDate > 0) state.lastSurvivalDate = data.lastSurvivalDate;
  if (typeof data.lastGoldFeverDate === 'number' && data.lastGoldFeverDate > 0) state.lastGoldFeverDate = data.lastGoldFeverDate;
  if (typeof data.lastDiamondFeverDate === 'number' && data.lastDiamondFeverDate > 0) state.lastDiamondFeverDate = data.lastDiamondFeverDate;
  if (typeof data.feverMaxWaves === 'number' && data.feverMaxWaves >= 0) state.feverMaxWaves = data.feverMaxWaves;
  if (typeof data.goldFeverMaxWaves === 'number' && data.goldFeverMaxWaves >= 0) state.goldFeverMaxWaves = data.goldFeverMaxWaves;
  if (typeof data.diamondFeverMaxWaves === 'number' && data.diamondFeverMaxWaves >= 0) state.diamondFeverMaxWaves = data.diamondFeverMaxWaves;
  if (data.selectedFish && getFishById(data.selectedFish) && state.unlockedFish.includes(data.selectedFish)) {
    state.selectedFishId = data.selectedFish;
  }
  if (typeof data.playerUsername === 'string' && normalizeAuthUsername(data.playerUsername)) {
    state.playerUsername = normalizeAuthUsername(data.playerUsername);
    updateHeaderUsernameDisplay();
  }
  checkCollectionMasterAchievement({ notify: false });
  return true;
}

function getSaveData() {
  return {
    selectedFish: state.selectedFishId,
    playerUsername: state.playerUsername,
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
    lastResetDate: state.lastResetDate,
    battlesPlayed: state.battlesPlayed,
    battlesWon: state.battlesWon,
    nivel_pase: state.nivel_pase,
    xp_pase: state.xp_pase,
    tiene_premium: state.tiene_premium,
    paseInicioTemporada: state.paseInicioTemporada,
    paseSeasonMonth: state.paseSeasonMonth,
    paseRecompensasReclamadas: state.paseRecompensasReclamadas,
    paseObjetos: state.paseObjetos,
    titulosDesbloqueados: state.titulosDesbloqueados,
    shopRotation: state.shopRotation,
    achievements: state.achievements,
    ticketsSpentTotal: state.ticketsSpentTotal,
    survivalMaxWaves: state.survivalMaxWaves,
    lastSurvivalDate: state.lastSurvivalDate,
    lastGoldFeverDate: state.lastGoldFeverDate,
    lastDiamondFeverDate: state.lastDiamondFeverDate,
    feverMaxWaves: state.feverMaxWaves,
    goldFeverMaxWaves: state.goldFeverMaxWaves,
    diamondFeverMaxWaves: state.diamondFeverMaxWaves,
    tickets_muelle: state.tickets_muelle,
    timestamp: Date.now()
  };
}

function formatTimestamp(ts) {
  const d = new Date(ts);
  const pad = n => String(n).padStart(2, '0');
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} a las ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function updateSaveTimestampDisplay() {
  const el = document.getElementById('profile-save-time');
  if (!el) return;
  const data = getCurrentSaveData();
  const savedAt = state.lastSavedAt || data?.savedAt || data?.timestamp || null;
  el.textContent = `Última vez guardado: ${formatSavedTimestamp(savedAt)}`;
}

async function loadGame() {
  if (isCloudSessionActive()) {
    const uid = getCurrentAuthUid();
    if (!uid) return false;
    const username = normalizeAuthUsername(state.playerUsername || uid);
    const auth = getFirebaseAuth();
    const hasFirebaseAuth = !!(auth && auth.currentUser);

    if (!hasFirebaseAuth || !initFirebaseIfNeeded()) {
      const cached = localStorage.getItem(getCloudSaveKey(username));
      if (cached) {
        try {
          const cachedData = JSON.parse(cached);
          const loaded = applySaveData(cachedData);
          if (loaded) {
            state.playerUsername = username;
            state.lastSavedAt = normalizeSavedTimestamp(cachedData.savedAt || cachedData.timestamp) || null;
            updateHeaderUsernameDisplay();
            return true;
          }
        } catch (e) {}
      }
      applyFreshGameState(username);
      return true;
    }

    let profileRef = firebaseProgressDoc(username);
    if (!profileRef) return false;
    let snap = null;
    try {
      snap = await profileRef.get();
    } catch (e) {}
    if (!snap || !snap.exists) {
      if (username !== uid) {
        profileRef = firebaseProgressDoc(uid);
        if (profileRef) {
          try {
            snap = await profileRef.get();
          } catch (e) {}
        }
      }
    }
    try {
      const data = snap && snap.exists ? snap.data() : null;
      const saveData = data?.saveData || null;
      if (!saveData) {
        const localKey = getCloudSaveKey(username);
        const localRaw = localStorage.getItem(localKey);
        if (localRaw) {
          try {
            const localData = JSON.parse(localRaw);
            const loaded = applySaveData(localData);
            if (loaded) {
              state.playerUsername = username;
              state.lastSavedAt = normalizeSavedTimestamp(localData.savedAt || localData.timestamp) || null;
              updateHeaderUsernameDisplay();
              await persistCloudSave(getSaveData());
              return true;
            }
          } catch (e) {}
        }
        applyFreshGameState(username);
        const created = getSaveData();
        await persistCloudSave(created);
        localStorage.setItem(localKey, JSON.stringify(created));
        state.lastSavedAt = new Date();
        return true;
      }
      const loaded = applySaveData(saveData);
      if (loaded) {
        state.playerUsername = username;
        state.lastSavedAt = normalizeSavedTimestamp(data?.savedAt || data?.timestamp) || null;
        updateHeaderUsernameDisplay();
        localStorage.setItem(getCloudSaveKey(username), JSON.stringify(saveData));
      }
      return loaded;
    } catch (e) {
      const cached = localStorage.getItem(getCloudSaveKey(username));
      if (cached) {
        try {
          const cachedData = JSON.parse(cached);
          const loaded = applySaveData(cachedData);
          if (loaded) {
            state.playerUsername = username;
            state.lastSavedAt = normalizeSavedTimestamp(cachedData.savedAt || cachedData.timestamp) || null;
            updateHeaderUsernameDisplay();
            return true;
          }
        } catch (err) {}
      }
      applyFreshGameState(username);
      return true;
    }
  }
  const data = getCurrentSaveData();
  if (!data) return false;
  const loaded = applySaveData(data);
  if (loaded && normalizeAuthUsername(state.playerUsername)) {
    localStorage.setItem(LOCAL_AUTH_USERNAME_KEY, normalizeAuthUsername(state.playerUsername));
  }
  if (loaded && isGuestSessionActive() && localStorage.getItem(GUEST_SAVE_KEY) === null && localStorage.getItem(LEGACY_SAVE_KEY)) {
    localStorage.setItem(GUEST_SAVE_KEY, JSON.stringify(data));
  }
  return loaded;
}

async function syncCurrentSaveToFirebase() {
  if (!isCloudSessionActive()) return false;
  return persistCloudSave(getSaveData());
}

/* ===== FIRESTORE SOCIAL ===== */
const SOCIAL_COLLECTION = 'users';
let socialDb = null;
let socialDbReady = false;
let friendsModalUnsub = null;
let friendsModalUserUnsub = null;
let friendsModalUserCache = null;
let friendsModalState = { loading: false, error: '', success: '' };

function isFirebaseAvailable() {
  return !!(window.firebase && window.firebase.firestore && window.__FIREBASE_CONFIG__ && window.__FIREBASE_CONFIG__.projectId);
}

function initFirebaseIfNeeded() {
  if (!isFirebaseAvailable()) return false;
  if (!window.firebase.apps.length) {
    window.firebase.initializeApp(window.__FIREBASE_CONFIG__);
  }
  if (!socialDb) socialDb = window.firebase.firestore();
  if (!socialDbReady && socialDb?.settings) {
    try { socialDb.settings({ ignoreUndefinedProperties: true }); } catch (e) {}
    socialDbReady = true;
  }
  return true;
}

function firebaseUserDoc(uid) {
  if (!socialDb) return null;
  return socialDb.collection(SOCIAL_COLLECTION).doc(uid);
}

function normalizeFriendSearch(value) {
  return normalizeAuthUsername(value).toLowerCase();
}

function setFriendsFeedback(message = '', kind = 'info') {
  friendsModalState = { ...friendsModalState, error: kind === 'error' ? message : '', success: kind === 'success' ? message : '' };
  const el = document.getElementById('friends-feedback');
  if (!el) return;
  el.textContent = message;
  el.classList.toggle('is-error', kind === 'error');
  el.classList.toggle('is-success', kind === 'success');
}

async function ensureSocialUserProfile() {
  if (!initFirebaseIfNeeded()) return null;
  const uid = getCurrentAuthUid();
  if (!uid) return null;
  const username = normalizeAuthUsername(state.playerUsername || uid || '');
  const profileRef = firebaseUserDoc(uid);
  if (!profileRef) return null;
  try {
    const snapshot = await profileRef.get();
    if (!snapshot.exists) {
      await profileRef.set({
        uid,
        email: uid,
        username,
        usernameLower: normalizeFriendSearch(username),
        pendingRequests: [],
        friends: [],
        createdAt: window.firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } else {
      await profileRef.set({
        email: uid,
        username,
        usernameLower: normalizeFriendSearch(username),
        updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    }
    return profileRef;
  } catch (error) {
    return null;
  }
}

async function fetchUsersByUids(uids = []) {
  if (!initFirebaseIfNeeded()) return [];
  const cleanUids = [...new Set((uids || []).map(id => String(id || '').trim()).filter(Boolean))];
  if (!cleanUids.length) return [];
  const docs = await Promise.all(cleanUids.map(uid => firebaseUserDoc(uid)?.get()));
  return docs.filter(Boolean).filter(doc => doc.exists).map(doc => ({ id: doc.id, ...doc.data() }));
}

async function queryUserByUsername(username) {
  if (!initFirebaseIfNeeded()) return null;
  const normalized = normalizeFriendSearch(username);
  if (!normalized) return null;
  const snapshot = await socialDb.collection(SOCIAL_COLLECTION).where('usernameLower', '==', normalized).limit(1).get();
  if (snapshot.empty) return null;
  const doc = snapshot.docs[0];
  return { id: doc.id, ...doc.data() };
}

async function sendFriendRequestByUsername(username) {
  const senderUid = getCurrentAuthUid();
  const senderEmail = getCurrentAuthEmail();
  if (!senderUid || !senderEmail) {
    setFriendsFeedback('Debes iniciar sesión para enviar solicitudes.', 'error');
    return;
  }
  if (!initFirebaseIfNeeded()) {
    setFriendsFeedback('Firebase no está configurado en este entorno.', 'error');
    return;
  }
  const target = await queryUserByUsername(username);
  if (!target) {
    setFriendsFeedback('No se ha encontrado ningún usuario con ese nombre.', 'error');
    return;
  }
  if (target.id === senderUid) {
    setFriendsFeedback('No puedes enviarte una solicitud a ti mismo.', 'error');
    return;
  }
  await ensureSocialUserProfile();
  await firebaseUserDoc(target.id).set({
    pendingRequests: window.firebase.firestore.FieldValue.arrayUnion(senderUid),
    updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  setFriendsFeedback('¡Solicitud de amistad enviada!', 'success');
  return true;
}

async function acceptFriendRequest(requesterUid) {
  const currentUid = getCurrentAuthUid();
  if (!currentUid || !requesterUid || !initFirebaseIfNeeded()) return;
  const currentRef = firebaseUserDoc(currentUid);
  const requesterRef = firebaseUserDoc(requesterUid);
  if (!currentRef || !requesterRef) return;
  await currentRef.set({
    pendingRequests: window.firebase.firestore.FieldValue.arrayRemove(requesterUid),
    friends: window.firebase.firestore.FieldValue.arrayUnion(requesterUid),
    updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  await requesterRef.set({
    friends: window.firebase.firestore.FieldValue.arrayUnion(currentUid),
    updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  setFriendsFeedback('Solicitud aceptada.', 'success');
}

async function rejectFriendRequest(requesterUid) {
  const currentUid = getCurrentAuthUid();
  if (!currentUid || !requesterUid || !initFirebaseIfNeeded()) return;
  const currentRef = firebaseUserDoc(currentUid);
  if (!currentRef) return;
  await currentRef.set({
    pendingRequests: window.firebase.firestore.FieldValue.arrayRemove(requesterUid),
    updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  setFriendsFeedback('Solicitud rechazada.', 'info');
}

function stopFriendsRealtime() {
  if (friendsModalUnsub) { friendsModalUnsub(); friendsModalUnsub = null; }
  if (friendsModalUserUnsub) { friendsModalUserUnsub(); friendsModalUserUnsub = null; }
  friendsModalUserCache = null;
}

function renderFriendsModalContent({ friends = [], pendingRequests = [] } = {}) {
  const body = document.getElementById('friends-modal-body');
  if (!body) return;
  const feedbackText = friendsModalState.error || friendsModalState.success || (friendsModalState.loading ? 'Cargando solicitudes...' : '');
  const friendsRows = friends.length
    ? friends.map(friend => `
      <div class="friend-row">
        <div class="friend-user">
          <span class="friend-status-dot online"></span>
          <span class="friend-name">${escapeHtml(friend.username || 'Sin nombre')}</span>
        </div>
        <div class="friend-cups">UID ${escapeHtml(friend.id)}</div>
        <button class="friend-invite-btn" disabled>Amigo</button>
      </div>`).join('')
    : '<div class="friends-empty">Aún no tienes amigos agregados.</div>';
  const requestsRows = pendingRequests.length
    ? pendingRequests.map(req => `
      <div class="friend-row friend-request-row">
        <div class="friend-user">
          <span class="friend-status-dot online"></span>
          <span class="friend-name">${escapeHtml(req.username || req.id)}</span>
        </div>
        <div class="friend-cups">Solicitud</div>
        <div class="friend-request-actions">
          <button class="friend-accept-btn" data-uid="${escapeHtml(req.id)}">Aceptar</button>
          <button class="friend-reject-btn" data-uid="${escapeHtml(req.id)}">Rechazar</button>
        </div>
      </div>`).join('')
    : '<div class="friends-empty">Sin solicitudes pendientes.</div>';
  body.innerHTML = `
    <div class="friends-modal-header">
      <span class="friends-modal-title">👥 Amigos</span>
      <button class="friends-modal-close" id="friends-modal-close-btn">✕</button>
    </div>
    <div class="friends-search-row">
      <input id="friends-search-input" class="friends-search-input" type="text" placeholder="Buscar por Username exacto">
      <button id="friends-add-btn" class="friends-add-btn" aria-label="Añadir amigo">+</button>
    </div>
    <div id="friends-feedback" class="friends-feedback ${friendsModalState.error ? 'is-error' : friendsModalState.success ? 'is-success' : ''}">${escapeHtml(feedbackText)}</div>
    <div class="friends-section-title">Solicitudes</div>
    <div class="friends-list">${requestsRows}</div>
    <div class="friends-section-title">Amigos</div>
    <div class="friends-list">${friendsRows}</div>
    <div class="friends-hint">La búsqueda es exacta y no distingue mayúsculas/minúsculas.</div>
  `;
  const addBtn = document.getElementById('friends-add-btn');
  const searchInput = document.getElementById('friends-search-input');
  if (addBtn && searchInput) {
    addBtn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      const value = searchInput.value.trim();
      if (!value) {
        setFriendsFeedback('Nombre de usuario erróneo.', 'error');
        return;
      }
      try {
        await sendFriendRequestByUsername(value);
        searchInput.value = '';
      } catch (err) {
        setFriendsFeedback('No se ha encontrado ningún usuario con ese nombre.', 'error');
      }
    });
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
      }
    });
  }
  body.querySelectorAll('.friend-accept-btn').forEach(btn => {
    btn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      await acceptFriendRequest(btn.dataset.uid || '');
    });
  });
  body.querySelectorAll('.friend-reject-btn').forEach(btn => {
    btn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      await rejectFriendRequest(btn.dataset.uid || '');
    });
  });
  const closeBtn = document.getElementById('friends-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeFriendsModal(); });
}

async function refreshFriendsModalRealtime() {
  const uid = getCurrentAuthUid();
  if (!uid || !initFirebaseIfNeeded()) {
    friendsModalState = { loading: false, error: 'Firebase no está configurado en este entorno.', success: '' };
    renderFriendsModalContent();
    setFriendsFeedback('Firebase no está configurado en este entorno.', 'error');
    return;
  }
  friendsModalState = { loading: true, error: '', success: '' };
  renderFriendsModalContent();
  await ensureSocialUserProfile();
  stopFriendsRealtime();
  const profileRef = firebaseUserDoc(uid);
  friendsModalUserUnsub = profileRef.onSnapshot(async snap => {
    if (!snap.exists) {
      friendsModalState = { loading: false, error: '', success: '' };
      renderFriendsModalContent();
      return;
    }
    const data = snap.data() || {};
    const pending = await fetchUsersByUids(Array.isArray(data.pendingRequests) ? data.pendingRequests : []);
    const friends = await fetchUsersByUids(Array.isArray(data.friends) ? data.friends : []);
    friendsModalUserCache = data;
    friendsModalState = { loading: false, error: '', success: friendsModalState.success || '' };
    renderFriendsModalContent({ friends, pendingRequests: pending });
  });
}

function getAccountRecord(email) {
  const registry = getAccountsRegistry();
  return registry[normalizeAuthEmail(email)] || null;
}

function updateAccountRecord(email, patch) {
  const normalizedEmail = normalizeAuthEmail(email);
  if (!normalizedEmail) return null;
  const registry = getAccountsRegistry();
  const next = { ...(registry[normalizedEmail] || { email: normalizedEmail }), ...patch, email: normalizedEmail };
  registry[normalizedEmail] = next;
  setAccountsRegistry(registry);
  return next;
}

async function isUsernameTaken(username, exceptUid = null) {
  const normalized = normalizeFriendSearch(username);
  if (!normalized || !initFirebaseIfNeeded()) return false;
  const snapshot = await socialDb.collection(SOCIAL_COLLECTION).where('usernameLower', '==', normalized).limit(1).get();
  if (snapshot.empty) return false;
  return snapshot.docs.some(doc => doc.id !== String(exceptUid || '').trim());
}

function syncSessionAccount() {
  const session = getStoredSession();
  if (!session?.email) return false;
  const account = getAccountRecord(session.email);
  if (!account) {
    setStoredSession(null);
    return false;
  }
  const uid = ensureAccountUid(account);
  updateAccountRecord(session.email, { uid });
  state.authSession = { email: normalizeAuthEmail(session.email), uid };
  state.playerUsername = normalizeAuthUsername(account.username) || 'Jugador123';
  updateHeaderUsernameDisplay();
  return true;
}

const LOCAL_AUTH_USERNAME_KEY = 'localUser';
const LOCAL_AUTH_PASSWORD_KEY = 'localPass';
const LOCAL_AUTH_SESSION_KEY = 'localSessionActive';
const LOCAL_AUTH_UID_KEY = 'localUid';

function getLocalAuthUsername() {
  return String(localStorage.getItem(LOCAL_AUTH_USERNAME_KEY) || '').trim();
}

function getLocalAuthPassword() {
  return String(localStorage.getItem(LOCAL_AUTH_PASSWORD_KEY) || '');
}

function getLocalAuthUid() {
  return String(localStorage.getItem(LOCAL_AUTH_UID_KEY) || '').trim();
}

function ensureLocalAuthUid() {
  const existing = getLocalAuthUid();
  if (existing) return existing;
  const uid = generateLocalUid();
  localStorage.setItem(LOCAL_AUTH_UID_KEY, uid);
  return uid;
}

function isLocalSessionActive() {
  return localStorage.getItem(LOCAL_AUTH_SESSION_KEY) === 'true';
}

function setLocalSessionActive(active) {
  if (active) localStorage.setItem(LOCAL_AUTH_SESSION_KEY, 'true');
  else localStorage.removeItem(LOCAL_AUTH_SESSION_KEY);
}

function syncLocalAuthSession(username = getLocalAuthUsername()) {
  const cleanUsername = normalizeAuthUsername(username);
  ensureLocalAuthUid();
  state.authSession = cleanUsername ? { email: cleanUsername, uid: cleanUsername } : null;
  if (cleanUsername) {
    state.playerUsername = cleanUsername;
    localStorage.setItem(LOCAL_AUTH_USERNAME_KEY, cleanUsername);
  }
  updateHeaderUsernameDisplay();
  return getLocalAuthUid();
}

function activateLocalAccess(username, password = null) {
  const cleanUsername = normalizeAuthUsername(username);
  if (!cleanUsername) return false;
  localStorage.setItem(LOCAL_AUTH_USERNAME_KEY, cleanUsername);
  if (password === null) localStorage.removeItem(LOCAL_AUTH_PASSWORD_KEY);
  else localStorage.setItem(LOCAL_AUTH_PASSWORD_KEY, String(password));
  setLocalSessionActive(true);
  syncLocalAuthSession(cleanUsername);
  return true;
}

async function signInCloudAccount(username, password) {
  if (!isFirebaseAuthAvailable()) throw new Error('Firebase Auth no está disponible');
  const auth = getFirebaseAuth();
  const email = getCloudEmailForUsername(username);
  const credential = await auth.signInWithEmailAndPassword(email, password);
  const user = credential?.user || auth.currentUser;
  if (!user) throw new Error('No se pudo iniciar sesión');
  setLocalSessionActive(false);
  state.authSession = { email: user.uid, uid: user.uid };
  state.playerUsername = normalizeAuthUsername(user.displayName || username);
  updateHeaderUsernameDisplay();
  return user;
}

async function registerCloudAccount(username, password) {
  if (!isFirebaseAuthAvailable()) throw new Error('Firebase Auth no está disponible');
  const auth = getFirebaseAuth();
  const email = getCloudEmailForUsername(username);
  const credential = await auth.createUserWithEmailAndPassword(email, password);
  const user = credential?.user || auth.currentUser;
  if (!user) throw new Error('No se pudo crear la sesión de Firebase.');
  if (user.updateProfile) {
    await user.updateProfile({ displayName: normalizeAuthUsername(username) });
  }
  setLocalSessionActive(false);
  state.authSession = { email: user.uid, uid: user.uid };
  state.playerUsername = normalizeAuthUsername(username);
  updateHeaderUsernameDisplay();
  return user;
}

function openFightScreen() {
  showSection('fight');
  showScreen('main');
}

function renderStartModal(_mode = 'menu', error = '') {
  if (!dom.authModalBody) return;
  const currentName = normalizeAuthUsername(getLocalAuthUsername() || state.playerUsername || '');
  dom.authModalBody.innerHTML = `
    <div class="start-modal-title">Fish Arena</div>
    <div class="start-modal-subtitle">Escribe tu nombre de usuario para cargar o crear tu partida nueva</div>
    <div class="start-panel">
      <div class="start-panel-label">Nombre de Usuario</div>
        <div class="start-panel-copy">Se cargará el último guardado o se creará una partida nueva en Firestore.</div>
      <form id="start-form">
        <input class="auth-field" id="start-username" type="text" placeholder="Arosteee04" autocomplete="nickname" maxlength="24" value="${escapeHtml(currentName)}" required>
        <div class="auth-error" id="start-error">${error || ''}</div>
        <button type="submit" class="auth-submit">Cargar/Guardar por Usuario</button>
      </form>
    </div>
  `;
  const form = document.getElementById('start-form');
  const usernameInput = document.getElementById('start-username');
  const errorEl = document.getElementById('start-error');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const username = normalizeAuthUsername(usernameInput?.value || '');
      if (!username) {
        if (errorEl) errorEl.textContent = 'Escribe un nombre de usuario.';
        return;
      }
      try {
        activateLocalAccess(username, null);
        await loadGame();
        closeAuthModal();
        openFightScreen();
      } catch (err) {
        if (errorEl) errorEl.textContent = 'No se pudo cargar el usuario.';
      }
    });
  }
  if (usernameInput) usernameInput.value = currentName;
  setTimeout(() => usernameInput?.focus(), 50);
}

function openStartModal(mode = 'menu', error = '') {
  renderStartModal(mode, error);
  if (dom.authModal) dom.authModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeAuthModal() {
  if (dom.authModal) dom.authModal.classList.remove('open');
  if (!dom.usernameModal?.classList.contains('open')) {
    document.body.classList.remove('modal-open');
  }
}

function renderUsernameModal(error = '') {
  if (!dom.usernameModalBody) return;
  const currentName = normalizeAuthUsername(state.playerUsername || '');
  dom.usernameModalBody.innerHTML = `
    <div class="username-modal-title">Editar nombre</div>
    <div class="username-hint">Tu nombre es visible para otros jugadores y debe ser único.</div>
    <input class="auth-field" id="username-input" type="text" maxlength="24" value="${escapeHtml(currentName)}" placeholder="Nombre de usuario" autocomplete="nickname">
    <div class="username-error" id="username-error">${error || ''}</div>
    <button type="button" class="username-submit" id="username-save-btn">Guardar</button>
  `;
  const input = document.getElementById('username-input');
  const errorEl = document.getElementById('username-error');
  const saveBtn = document.getElementById('username-save-btn');
  if (saveBtn) {
    saveBtn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      const nextName = normalizeAuthUsername(input?.value || '');
      if (!nextName) {
        if (errorEl) errorEl.textContent = 'Escribe un nombre de usuario.';
        return;
      }
      state.playerUsername = nextName;
      if (isCloudSessionActive()) {
        const uid = getCurrentAuthUid();
        if (await isUsernameTaken(nextName, uid)) {
          if (errorEl) errorEl.textContent = 'Ese nombre ya está en uso.';
          return;
        }
        if (initFirebaseIfNeeded()) {
          const profileRef = uid ? firebaseUserDoc(uid) : null;
          if (profileRef) {
            await profileRef.set({
              username: nextName,
              usernameLower: normalizeFriendSearch(nextName),
              updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
          }
        }
      } else {
        localStorage.setItem(LOCAL_AUTH_USERNAME_KEY, nextName);
      }
      updateHeaderUsernameDisplay();
      closeUsernameModal();
    });
  }
  if (input) input.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    if (saveBtn) saveBtn.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, cancelable: true }));
  });
  setTimeout(() => input?.focus(), 50);
}

function openUsernameModal() {
  if (!getCurrentAuthEmail()) {
    openStartModal('menu');
    return;
  }
  renderUsernameModal();
  if (dom.usernameModal) dom.usernameModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeUsernameModal() {
  if (dom.usernameModal) dom.usernameModal.classList.remove('open');
  if (!dom.authModal?.classList.contains('open')) {
    document.body.classList.remove('modal-open');
  }
}

function ensureBattlePassState() {
  if (!Number.isFinite(state.nivel_pase) || state.nivel_pase < 0) state.nivel_pase = 0;
  if (!Number.isFinite(state.xp_pase) || state.xp_pase < 0) state.xp_pase = 0;
  if (typeof state.tiene_premium !== 'boolean') state.tiene_premium = false;
  if (!Number.isFinite(state.paseInicioTemporada) || state.paseInicioTemporada <= 0) state.paseInicioTemporada = Date.now();
  if (typeof state.paseSeasonMonth !== 'string' || state.paseSeasonMonth === '') state.paseSeasonMonth = null;
  if (!Array.isArray(state.paseRecompensasReclamadas)) state.paseRecompensasReclamadas = [];
  state.paseRecompensasReclamadas = normalizeBattlePassClaimedRewards(state.paseRecompensasReclamadas);
  if (!Array.isArray(state.paseObjetos)) state.paseObjetos = [];
  if (!Array.isArray(state.titulosDesbloqueados)) state.titulosDesbloqueados = [];
}

function getBattlePassRewardKey(level, track) {
  return `${level}:${track}`;
}

function repairMissingBattlePassItems() {
  getBattlePassLevels().forEach(tier => {
    ['free', 'premium'].forEach(track => {
      const reward = tier[track];
      if (!reward || reward.type !== 'item') return;
      if (!isBattlePassRewardClaimed(tier.level, track)) return;
      const matchedItem = ITEMS.find(it => it.name === reward.label);
      if (matchedItem && !state.items.includes(matchedItem.id)) {
        state.items.push(matchedItem.id);
      }
    });
  });
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

function getCurrentSeasonMonthStr() {
  const d = new Date();
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
}

function getUtcDayKey(ts = Date.now()) {
  const d = new Date(ts);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

function getUtcNextMidnightMs(ts = Date.now()) {
  const d = new Date(ts);
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1, 0, 0, 0, 0);
}

function hashStringToSeed(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getDailyShopRotation() {
  const dayKey = getUtcDayKey();
  const expiresAt = getUtcNextMidnightMs();
  const expectedCount = Math.min(3, SHOP_ITEMS.length);
  const validRotation = state.shopRotation
    && state.shopRotation.dayKey === dayKey
    && Array.isArray(state.shopRotation.itemIds)
    && state.shopRotation.itemIds.length === expectedCount;

  if (!validRotation) {
    const rng = createSeededRandom(hashStringToSeed(`shop:${dayKey}`));
    const shuffled = [...SHOP_ITEMS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    state.shopRotation = {
      dayKey,
      itemIds: shuffled.slice(0, expectedCount).map(entry => entry.itemId),
      expiresAt
    };
  } else if (!Number.isFinite(state.shopRotation.expiresAt) || state.shopRotation.expiresAt <= Date.now()) {
    state.shopRotation.expiresAt = expiresAt;
  }

  return state.shopRotation.itemIds
    .map(itemId => SHOP_ITEMS.find(entry => entry.itemId === itemId))
    .filter(Boolean);
}

function getShopRotationRemainingMs() {
  getDailyShopRotation();
  return Math.max(0, (state.shopRotation?.expiresAt || getUtcNextMidnightMs()) - Date.now());
}

function getSeasonEndDate() {
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 0, 23, 59, 59, 999));
}

function getSeasonRemainingMs(now = Date.now()) {
  return Math.max(0, getSeasonEndDate().getTime() - now);
}

function getSeasonName() {
  const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const m = new Date().getUTCMonth();
  const theme = m >= 6 ? 'Volcanes Submarinos' : 'de las Profundidades';
  return `Temporada ${theme} - ${months[m]}`;
}

function getSeasonCountdownText() {
  const remaining = getSeasonRemainingMs();
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  return `${days} días, ${String(hours).padStart(2, '0')} horas, ${String(minutes).padStart(2, '0')} minutos`;
}

function resetBattlePassSeason() {
  state.nivel_pase = 0;
  state.xp_pase = 0;
  state.tiene_premium = false;
  state.paseInicioTemporada = Date.now();
  state.paseSeasonMonth = getCurrentSeasonMonthStr();
  state.paseRecompensasReclamadas = [];
  updateBattlePassProgress();
}

function checkBattlePassSeasonExpiration() {
  ensureBattlePassState();
  if (state.paseSeasonMonth === getCurrentSeasonMonthStr()) return false;
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
  updateBattlePassProgress();
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
    const matchedItem = ITEMS.find(it => it.name === reward.label);
    if (matchedItem && !state.items.includes(matchedItem.id)) {
      state.items.push(matchedItem.id);
    }
    return reward.label;
  }
  if (reward.type === 'title') {
    if (!state.titulosDesbloqueados.includes(reward.label)) state.titulosDesbloqueados.push(reward.label);
    return reward.label;
  }
  return null;
}

async function claimBattlePassReward(level, track) {
  checkBattlePassSeasonExpiration();
  if (track !== 'free' && track !== 'premium') return { ok: false, reason: 'Tipo de recompensa inválido.' };
  if (!Number.isInteger(level)) return { ok: false, reason: 'Nivel inválido.' };
  const tier = getBattlePassLevels().find(l => l.level === level);
  if (!tier) return { ok: false, reason: 'Nivel fuera de rango.' };
  if (state.nivel_pase < level) return { ok: false, reason: 'Nivel aún no desbloqueado.' };
  if (track === 'premium' && !state.tiene_premium) return { ok: false, reason: 'Requiere Pase Premium.' };
  if (isBattlePassRewardClaimed(level, track)) return { ok: false, reason: 'Recompensa ya reclamada.' };
  const prevCoins = state.coins;
  const prevItems = [...state.items];
  const prevPaseObjetos = [...state.paseObjetos];
  const prevReclamadas = [...state.paseRecompensasReclamadas];
  const reward = grantBattlePassReward(tier[track]);
  state.paseRecompensasReclamadas.push(getBattlePassRewardKey(level, track));
  const saved = await forceCloudSave('battle_pass_claim');
  if (!saved) {
    state.coins = prevCoins;
    state.items = prevItems;
    state.paseObjetos = prevPaseObjetos;
    state.paseRecompensasReclamadas = prevReclamadas;
    return { ok: false, reason: 'Error al guardar en la nube. Inténtalo de nuevo.' };
  }
  return { ok: true, rewards: reward ? [reward] : [] };
}

async function claimBattlePassLevelRewards(level) {
  const claimed = [];
  const freeResult = await claimBattlePassReward(level, 'free');
  if (freeResult.ok) claimed.push(...freeResult.rewards);
  if (state.tiene_premium) {
    const premiumResult = await claimBattlePassReward(level, 'premium');
    if (premiumResult.ok) claimed.push(...premiumResult.rewards);
  }
  if (!claimed.length) return { ok: false, reason: freeResult.reason || 'Nivel ya reclamado.' };
  return { ok: true, rewards: claimed };
}

async function claimAllAvailableBattlePassRewards() {
  checkBattlePassSeasonExpiration();
  const claimed = [];
  for (let level = 1; level <= state.nivel_pase; level++) {
    const result = await claimBattlePassLevelRewards(level);
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

/* ===== ARENA SYSTEM ===== */
function getArenaConfig(arenaId) { return ARENA_CONFIG[arenaId] || ARENA_CONFIG[1]; }

function getArenaForCups(cups) {
  if (cups >= 1201) return 5;
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
    if (state.activeSection === 'fight') renderFightContent();
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
  const el = document.getElementById('arena-display');
  if (!el) return;
  const cfg = getArenaConfig(state.currentArena);
  el.innerHTML = `${cfg.icon} Arena ${state.currentArena}: ${cfg.name}`;
}

function updateArenaBackground() {
  const cfg = getArenaConfig(state.currentArena);
  document.getElementById('app').className = cfg.cssClass;
  updateAmbientFish();
}

/* ===== PEZ AMBIENTAL (ARENA 1) ===== */
const ARENA1_FISH_IDS = ['clownfish','pufferfish','salmonete','blenio','cabracho','anemona','cangrejo','lenguado','pulpo','sepia','quisquilla','berberecho','pez_aguja','medusa_aguamala','estrella','anguila'];
const MAX_AMBIENT_FISH = 4;
let ambientFishInterval = null;
let ambientFishCount = 0;

function getAmbientFishPool() {
  return ARENA1_FISH_IDS.filter(id => state.unlockedFish.includes(id));
}

function updateAmbientFish() {
  if (state.currentArena === 1 && state.screen === 'main') {
    startAmbientFish();
  } else {
    stopAmbientFish();
  }
}

function startAmbientFish() {
  if (ambientFishInterval) return;
  const pool = getAmbientFishPool();
  if (pool.length === 0) return;
  const spawn = () => {
    if (ambientFishCount < MAX_AMBIENT_FISH) spawnAmbientFish();
  };
  spawn();
  ambientFishInterval = setInterval(spawn, 2500 + Math.random() * 3500);
}

function stopAmbientFish() {
  if (ambientFishInterval) {
    clearInterval(ambientFishInterval);
    ambientFishInterval = null;
  }
  document.querySelectorAll('.ambient-fish').forEach(el => el.remove());
  ambientFishCount = 0;
}

function spawnAmbientFish() {
  const pool = getAmbientFishPool();
  if (pool.length === 0 || ambientFishCount >= MAX_AMBIENT_FISH) return;
  const fishId = pool[Math.floor(Math.random() * pool.length)];
  const fish = FISH_TYPES.find(f => f.id === fishId);
  if (!fish) return;

  const layer = document.getElementById('ambient-fish-layer');
  if (!layer) return;

  const el = document.createElement('div');
  el.className = 'ambient-fish';
  const img = document.createElement('img');
  img.src = fish.imgPath;
  img.alt = fish.name;
  img.draggable = false;
  el.appendChild(img);

  const dirRight = Math.random() > 0.5;
  const y = 12 + Math.random() * 55;
  const dur = 16 + Math.random() * 12;
  const scale = 0.3 + Math.random() * 0.35;

  el.style.top = y + '%';
  el.style.transform = 'scale(' + scale + ')';
  el.style.animation = (dirRight ? 'fish-swim-right' : 'fish-swim-left') + ' ' + dur + 's linear forwards';
  img.style.transform = dirRight ? 'scaleX(1)' : 'scaleX(-1)';
  layer.appendChild(el);
  ambientFishCount++;
  el.addEventListener('animationend', () => { el.remove(); ambientFishCount = Math.max(0, ambientFishCount - 1); }, { once: true });
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
    { fishId: 'estrella' },
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
  ],
  5: [
    { fishId: 'bacalao' },
    { fishId: 'pez_hielo' },
    { fishId: 'calamar_cristal' },
    { fishId: 'narval' },
    { fishId: 'leopardo_marino' },
    { fishId: 'tiburon_groenlandia' },
    { fishId: 'orca' },
    { fishId: 'medusa_melena_artica' }
  ]
};

function renderArenaModal() {
  const body = dom.arenaModalBody;
  if (!body) return;
  let html = `
    <div class="arena-modal-header arena-detail-header">
      <div>
        <span class="arena-modal-title">🏟️ Mapa Global de Arenas</span>
        <div class="arena-detail-subtitle">Desliza para ver las 5 zonas</div>
      </div>
      <button class="arena-modal-close" id="arena-modal-close-btn">✕</button>
    </div>
    <div class="arena-map-list">`;

  Object.keys(ARENA_CONFIG).sort((a, b) => Number(a) - Number(b)).forEach(arenaId => {
    const id = Number(arenaId);
    const cfg = ARENA_CONFIG[id];
    const isUnlocked = state.cups >= cfg.minCups;
    const statusClass = isUnlocked ? 'unlocked' : 'locked';
    const statusText = isUnlocked ? 'Desbloqueada' : 'Bloqueada';
    const requirementText = cfg.minCups === 0 ? '0 copas' : `${cfg.minCups} copas`;
    const arenaFish = (ARENA_FISH[id] || []).map(entry => getFishById(entry.fishId)).filter(Boolean).sort(sortByRarity);
    const fishGridHtml = arenaFish.map(fish => {
      const playerOwns = state.unlockedFish.includes(fish.id);
      const fishLocked = !playerOwns || !isUnlocked;
      return `<div class="arena-fish-card ${fishLocked ? 'locked' : ''}" data-fish-id="${fish.id}">
        <div class="arena-card-img ${fishLocked ? 'arena-card-grey' : ''}">
          ${imgTag(fish.imgPath, fish.name, fish.emoji)}
        </div>
        <div class="arena-card-name">${fish.name}</div>
        ${playerOwns ? rarityBadgeHtml(fish) : '<div class="arena-card-lock">🔒</div>'}
      </div>`;
    }).join('');

    html += `
      <section class="arena-map-card ${isUnlocked ? 'unlocked' : 'locked'}" data-arena-id="${id}">
        <div class="arena-map-card-head">
          <div>
            <div class="arena-map-card-title">${cfg.icon} Arena ${id}: ${cfg.name}</div>
            <div class="arena-map-card-sub">${statusText}</div>
          </div>
          <span class="arena-block-status ${statusClass}">${statusText}</span>
        </div>
        <div class="arena-detail-meta-grid arena-map-meta-grid">
          <div class="arena-detail-meta-item">
            <span class="arena-detail-meta-k">Copas</span>
            <span class="arena-detail-meta-v">🏆 ${requirementText}</span>
          </div>
          <div class="arena-detail-meta-item">
            <span class="arena-detail-meta-k">Victoria</span>
            <span class="arena-detail-meta-v">🪙 +${cfg.winGold}</span>
          </div>
          <div class="arena-detail-meta-item">
            <span class="arena-detail-meta-k">Derrota</span>
            <span class="arena-detail-meta-v">🪙 +${cfg.loseGold}</span>
          </div>
        </div>
        <div class="arena-map-fish-wrap">
          <div class="arena-detail-card-head">
            <span class="arena-detail-label">Peces</span>
            <span class="arena-detail-count">${arenaFish.length} peces</span>
          </div>
          <div class="arena-fish-grid arena-detail-fish-grid">
            ${fishGridHtml}
          </div>
        </div>
      </section>`;
  });

  html += `</div>`;
  body.innerHTML = html;

  const closeBtn = document.getElementById('arena-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeArenaModal(); });

  body.querySelectorAll('.arena-map-card').forEach(card => {
    card.addEventListener('click', e => {
      const arenaId = Number(card.dataset.arenaId || 0);
      const cfg = getArenaConfig(arenaId);
      if (!arenaId || state.cups < cfg.minCups) return;
      state.currentArena = arenaId;
      updateArenaDisplay();
      if (state.activeSection === 'fight') renderFightContent();
      closeArenaModal();
    });
  });
}

function openArenaModal() {
  const arenaButton = document.getElementById('arena-display');
  if (arenaButton) arenaButton.style.display = 'none';
  renderArenaModal();
  dom.arenaModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeArenaModal() {
  dom.arenaModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  const arenaButton = document.getElementById('arena-display');
  if (arenaButton) arenaButton.style.display = '';
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
  const trophiesEl = document.getElementById('header-trophies');
  if (trophiesEl) trophiesEl.textContent = `🏆 ${total}`;
}

/* ===== SCREEN MANAGEMENT ===== */
function showScreen(screenName) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const map = { main: dom.screenMain, combat: dom.screenCombat, result: dom.screenResult };
  if (map[screenName]) map[screenName].classList.add('active');
  state.screen = screenName || '';
  scheduleAutosave();
  updateAmbientFish();
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
  if (dom.actionFooter) dom.actionFooter.classList.toggle('is-hidden', sectionId !== 'fight');
  if (dom.mainHeader) dom.mainHeader.classList.toggle('is-compact', sectionId !== 'fight');
  if (sectionId === 'shop') renderShop();
  if (sectionId === 'bank') renderBank();
  if (sectionId === 'inventory') renderInventory();
  if (sectionId === 'muelle') renderMuelleSection();
  scheduleAutosave();
}

/* ===== SECCIÓN: LUCHAR ===== */
function renderFightContent() {
  const arenaId = state.currentArena;
  const arenaConf = ARENA_CONFIG[arenaId];
  if (!arenaConf) {
    dom.fightContent.innerHTML = `<div class="fight-empty"><p>Error: Arena no encontrada</p></div>`;
    dom.btnBattle.disabled = true;
    return;
  }

  const pool = getArenaShowcasePool(arenaId);

  const cardsHtml = pool.map(entry => {
    const fish = getFishById(entry.fishId);
    if (!fish) return '';
    const isUnlocked = state.unlockedFish.includes(fish.id);
    const level = getFishLevel(fish.id);

    return `
      <div class="arena-fish-card ${isUnlocked ? '' : 'locked'}" data-fish-id="${fish.id}">
        <div class="arena-card-img">
          ${imgTag(fish.imgPath, fish.name, fish.emoji)}
        </div>
        <div class="arena-card-name">${fish.name}</div>
        ${isUnlocked
          ? `<span class="arena-card-level">Nv${level}</span>`
          : '<div class="arena-card-lock">🔒</div>'}
      </div>`;
  }).join('');

  dom.fightContent.innerHTML = `
    <div class="arena-showcase">
      <div id="arena-display" class="arena-display">${arenaConf.icon} Arena ${arenaId}: ${arenaConf.name}</div>
      <div class="arena-fish-grid">${cardsHtml}</div>
    </div>`;

  dom.fightContent.querySelectorAll('.arena-fish-card').forEach(card => {
    card.addEventListener('pointerdown', e => {
      e.preventDefault();
      showFishDetail(card.dataset.fishId);
    });
  });

  const ad = document.getElementById('arena-display');
  if (ad) {
    ad.addEventListener('pointerdown', e => {
      e.preventDefault();
      openArenaModal();
    });
  }

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
  if (upgBtn && !upgBtn.disabled) upgBtn.addEventListener('pointerdown', async e => { e.preventDefault(); await upgradeFish(fishId); });

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
  updateActionFooter();
}

function updateBattleButton() {
  const id = state.selectedFishId;
  dom.btnBattle.disabled = !id || !state.unlockedFish.includes(id);
  updateBattleButtonStyle();
}

function updateBattleButtonStyle() {
  const btn = dom.btnBattle;
  if (!btn) return;
  btn.classList.toggle('survival', state.battleMode === 'survival');
  btn.classList.toggle('gold-fever', state.battleMode === 'goldFever');
  btn.classList.toggle('diamond-fever', state.battleMode === 'diamondFever');

  const parent = btn.parentElement;
  if (!parent) return;
  let cooldownEl = document.getElementById('battle-cooldown-text');
  if (survivalTimerInterval) { clearInterval(survivalTimerInterval); survivalTimerInterval = null; }

  const cooldownField = state.battleMode === 'goldFever' ? 'lastGoldFeverDate'
    : state.battleMode === 'diamondFever' ? 'lastDiamondFeverDate'
    : state.battleMode === 'survival' ? 'lastSurvivalDate' : null;

  if (cooldownField && state[cooldownField]) {
    const elapsed = Date.now() - state[cooldownField];
    if (elapsed < 86400000) {
      if (!cooldownEl) {
        cooldownEl = document.createElement('span');
        cooldownEl.id = 'battle-cooldown-text';
        cooldownEl.className = 'battle-cooldown-text';
        parent.appendChild(cooldownEl);
      }
      const tick = () => {
        const remaining = 86400000 - (Date.now() - state[cooldownField]);
        if (remaining <= 0) {
          cooldownEl.textContent = '✅ Disponible';
          btn.disabled = false;
          if (survivalTimerInterval) { clearInterval(survivalTimerInterval); survivalTimerInterval = null; }
          return;
        }
        const h = Math.floor(remaining / 3600000);
        const m = Math.floor((remaining % 3600000) / 60000);
        const s = Math.floor((remaining % 60000) / 1000);
        cooldownEl.textContent = `Disponible en: ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        btn.disabled = true;
      };
      survivalTimerInterval = setInterval(tick, 1000);
      tick();
      return;
    }
  }
  if (cooldownEl) cooldownEl.remove();
  if (state.selectedFishId && state.unlockedFish.includes(state.selectedFishId)) {
    btn.disabled = false;
  }
}

function toggleModeDropdown() {
  const dd = document.getElementById('mode-dropdown');
  if (!dd) return;
  dd.style.display = dd.style.display === 'none' ? 'flex' : 'none';
}

function closeModeDropdown() {
  const dd = document.getElementById('mode-dropdown');
  if (dd) dd.style.display = 'none';
}

function selectBattleMode(mode) {
  if (mode !== 'normal' && mode !== 'survival' && mode !== 'goldFever' && mode !== 'diamondFever') return;
  state.battleMode = mode;
  closeModeDropdown();
  updateBattleButtonStyle();
  document.querySelectorAll('.mode-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.mode === mode);
  });
}

function updateActionFooter() {
  const btn = document.getElementById('action-fish-btn');
  if (!btn) return;
  const fishId = state.selectedFishId;
  if (!fishId) {
    btn.innerHTML = `<div class="img-wrap"><span class="img-fallback">🐟</span></div><span class="action-fish-badge">0</span>`;
    return;
  }
  const base = getFishById(fishId);
  if (!base) {
    btn.innerHTML = `<div class="img-wrap"><span class="img-fallback">🐟</span></div><span class="action-fish-badge">0</span>`;
    return;
  }
  const level = getFishLevel(fishId);
  btn.innerHTML = `${imgTag(base.imgPath, base.name, base.emoji)}<span class="action-fish-badge">${level}</span>`;
  btn.style.boxShadow = 'none';
}

/* ===== TIENDA ===== */
const CHEST_TYPES = {
  wood: {
    id: 'wood', name: 'Madera', imgPath: 'img/cofres/cofre_madera.png',
    costType: 'coins', cost: 150,
    goldRange: [20, 50],
    diamondChance: 0, diamondRange: [5, 5],
    fishChance: 0.8
  },
  silver: {
    id: 'silver', name: 'Plata', imgPath: 'img/cofres/cofre_plata.png',
    costType: 'coins', cost: 400,
    goldRange: [50, 100],
    diamondChance: 0.15, diamondRange: [5, 5],
    fishChance: 0.9
  },
  gold: {
    id: 'gold', name: 'Oro', imgPath: 'img/cofres/cofre_oro.png',
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

let globalCountdownInterval = null;

function updateCountdownDisplays() {
  const midnightMs = getTimeToMidnight();
  const midnightStr = formatCountdown(midnightMs);

  const muelleEl = document.getElementById('countdown-muelle');
  if (muelleEl) muelleEl.textContent = midnightStr;

  const missionsEl = document.getElementById('countdown-misiones');
  if (missionsEl) missionsEl.textContent = midnightStr;

  const shopEl = document.getElementById('offers-countdown');
  if (shopEl) shopEl.textContent = `Rotación en: ${midnightStr}`;

  const shopRotationEl = document.getElementById('shop-rotation-countdown');
  if (shopRotationEl) shopRotationEl.textContent = `Siguiente rotación en: ${formatTimeLeft(getShopRotationRemainingMs())}`;

  const paseEl = document.getElementById('countdown-pase');
  if (paseEl) paseEl.textContent = getSeasonCountdownText();

  const headerMissionsEl = document.getElementById('header-missions-countdown');
  if (headerMissionsEl) headerMissionsEl.textContent = midnightStr;
}

function startGlobalCountdown() {
  if (globalCountdownInterval) clearInterval(globalCountdownInterval);
  updateCountdownDisplays();
  globalCountdownInterval = setInterval(updateCountdownDisplays, 1000);
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
    giftCard.querySelector('.daily-gift-btn').addEventListener('pointerdown', async e => {
      e.preventDefault();
      await claimFreeGift(50);
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
        card.querySelector('.daily-buy-btn').addEventListener('pointerdown', async e => {
          e.preventDefault();
          await buyDailyOfferFish(fish.id, price);
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

  /* ===== 3. OBJETOS EQUIPABLES ===== */
  const itemsTitle = document.createElement('h3');
  itemsTitle.className = 'shop-section-title';
  itemsTitle.innerHTML = '🎒 Objetos Equipables <span class="shop-rotation-countdown" id="shop-rotation-countdown"></span>';
  dom.shopContent.appendChild(itemsTitle);

  const dailyShopItems = getDailyShopRotation();
  dailyShopItems.forEach(entry => {
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
    const rewardTags = [`🪙 ${chest.goldRange[0]}-${chest.goldRange[1]}`];
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
      card.querySelector('.chest-buy-btn').addEventListener('pointerdown', async e => {
        e.preventDefault();
        await openChest(chest.id);
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

  startGlobalCountdown();
}

async function claimFreeGift(amount) {
  state.coins += amount;
  state.lastFreeClaim = Date.now();
  await forceCloudSave('free_gift');
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
  state.tickets_muelle = 3;
}

function getTodayDateStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function checkDailyReset() {
  const today = getTodayDateStr();
  if (state.lastResetDate !== today) {
    state.lastResetDate = today;
    selectDailyMissions();
  }
  checkBattlePassSeasonExpiration();
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

async function claimMission(id) {
  if (state.missionsClaimed.includes(id)) return;
  const mission = DAILY_MISSIONS.find(m => m.id === id);
  if (!mission || state.missions[id] < mission.target) return;
  state.missionsClaimed.push(id);
  state.coins += mission.reward;
  addBattlePassXpFromDailyMission();
  await forceCloudSave('mission_claim');
  updateCoinDisplay();
  renderMissionsModal();
  updateMissionsButton();
  updateNotificationDots();
}

function getMissionsCountdown() {
  return formatCountdown(getTimeToMidnight());
}

function updateMissionsButton() {
  checkDailyReset();
}

function updateBattlePassProgress() {
  const completedLevels = Math.max(0, Math.min(BATTLE_PASS_TOTAL_LEVELS, state.nivel_pase));
  const pasePct = Math.round((completedLevels / BATTLE_PASS_TOTAL_LEVELS) * 100);

  const headerLevel = document.getElementById('header-bp-level');
  if (headerLevel) headerLevel.textContent = `Nivel ${completedLevels}`;

  const headerFill = document.getElementById('header-bp-xp-fill');
  if (headerFill) headerFill.style.width = `${pasePct}%`;

  const headerXpText = document.getElementById('header-bp-xp-text');
  if (headerXpText) headerXpText.textContent = `${completedLevels}/${BATTLE_PASS_TOTAL_LEVELS}`;
}

function renderMissionsModal() {
  checkDailyReset();
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
      <div class="missions-countdown">⏳ Nuevas misiones en: <span id="countdown-misiones">${countdown}</span></div>
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
    btn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      await claimMission(btn.dataset.missionId);
    });
  });

  const bonusBtn = document.getElementById('missions-claim-bonus');
  if (bonusBtn) {
    bonusBtn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      state.missionsBonusClaimed = true;
      state.coins += 200;
      await forceCloudSave('mission_bonus');
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

/* ===== LOGROS ===== */

function getAchievementProgress(achId) {
  const def = ACHIEVEMENTS.find(x => x.id === achId);
  if (!def) return null;
  const a = state.achievements[achId];
  let current = 0;
  switch (achId) {
    case 'pescador': {
      const arena1 = ARENA_FISH[1] || [];
      current = arena1.filter(e => state.unlockedFish.includes(e.fishId)).length;
      break;
    }
    case 'muelle': current = state.ticketsSpentTotal || 0; break;
    case 'gladiador': current = state.battlesWon || 0; break;
    case 'inversor':
      current = Object.values(state.fishLevels).some(l => l >= MAX_LEVEL) ? 1 : 0;
      break;
    case 'superviviente':
      current = state.survivalMaxWaves || 0;
      break;
    case 'achievement_rey_midas':
      current = state.goldFeverMaxWaves || 0;
      break;
    case 'achievement_codicia_absoluta':
      current = state.diamondFeverMaxWaves || 0;
      break;
  }
  const complete = current >= def.target;
  return { current, target: def.target, canClaim: complete && !a.claimed, isClaimed: a.claimed, complete };
}

async function claimAchievementPhase(achId) {
  const def = ACHIEVEMENTS.find(x => x.id === achId);
  if (!def) return false;
  const a = state.achievements[achId];
  const { canClaim } = getAchievementProgress(achId);
  if (!canClaim) return false;

  a.claimed = true;
  state.coins += def.reward.coins;
  state.diamonds += def.reward.diamonds;
  await forceCloudSave('achievement_claim');

  updateCoinDisplay();
  updateDiamondDisplay();
  renderProfileModal();
  return true;
}

function signalAchievementUpdate() {
  if (dom.profileModal.classList.contains('open')) renderProfileModal();
}

function renderProfileModal() {
  checkBattlePassSeasonExpiration();
  const body = dom.profileModalBody;
  if (!body) return;
  const { totalFish, unlockedFish } = getCollectionProgress();
  const totalCups = getTotalCups();
  const totalArenas = Object.keys(ARENA_CONFIG).length;
  const selectedFish = getFishById(state.selectedFishId);
  const battlesPlayed = Math.max(0, state.battlesPlayed || 0);
  const battlesWon = Math.max(0, state.battlesWon || 0);
  const battlesLost = Math.max(0, battlesPlayed - battlesWon);
  const winRate = battlesPlayed > 0 ? Math.round((battlesWon / battlesPlayed) * 100) : 0;
  body.innerHTML = `
    <div class="profile-modal-header">
      <span class="profile-modal-title">👤 Perfil del Jugador</span>
      <button class="profile-modal-close" id="profile-modal-close-btn">✕</button>
    </div>
    <div class="profile-hero-card">
      <div class="profile-hero-avatar" id="profile-hero-avatar">👤</div>
      <div class="profile-hero-meta">
        <div class="profile-hero-name-row">
          <strong class="profile-hero-name">${escapeHtml(state.playerUsername || 'Jugador')}</strong>
          <span class="profile-hero-tag">UID ${escapeHtml(getCurrentAuthUid() || 'local')}</span>
        </div>
        <div class="profile-hero-sub">${selectedFish ? `Pez activo: ${selectedFish.name}` : 'Pez activo: Sin seleccionar'}</div>
        <button type="button" class="profile-rename-btn" id="profile-rename-btn">Cambiar nombre gratis</button>
      </div>
    </div>
    <div class="profile-overview-grid">
      <div class="profile-stat-card">
        <span class="profile-stat-label">Copas actuales</span>
        <strong class="profile-stat-value">🏆 ${totalCups}</strong>
      </div>
      <div class="profile-stat-card">
        <span class="profile-stat-label">Arena máxima</span>
        <strong class="profile-stat-value">${Math.min(state.arenaMaxReached, totalArenas)}/${totalArenas}</strong>
      </div>
      <div class="profile-stat-card">
        <span class="profile-stat-label">Combates jugados</span>
        <strong class="profile-stat-value">${battlesPlayed}</strong>
      </div>
      <div class="profile-stat-card">
        <span class="profile-stat-label">Combates ganados</span>
        <strong class="profile-stat-value">${battlesWon} · ${winRate}%</strong>
      </div>
    </div>
    <div class="profile-wallet-row">
      <span class="profile-wallet-chip">🪙 ${state.coins}</span>
      <span class="profile-wallet-chip">💎 ${state.diamonds}</span>
    </div>
    <div class="profile-highlight-grid">
      <div class="profile-highlight-card">
        <span class="profile-highlight-label">Pez activo seleccionado</span>
        <div class="profile-highlight-value">${selectedFish ? selectedFish.name : 'Sin seleccionar'}</div>
        <div class="profile-highlight-sub">${selectedFish ? `${selectedFish.rarity.toUpperCase()} · ${selectedFish.emoji}` : 'Elige un pez desde el mazo'}</div>
      </div>
      <div class="profile-highlight-card">
        <span class="profile-highlight-label">Colección de peces</span>
        <div class="profile-highlight-value">${unlockedFish}/${totalFish}</div>
        <div class="profile-collection-bar"><div class="profile-collection-fill" style="width:${totalFish > 0 ? Math.round((unlockedFish / totalFish) * 100) : 0}%"></div></div>
        <div class="profile-highlight-sub">${totalFish > 0 ? Math.round((unlockedFish / totalFish) * 100) : 0}% completado</div>
      </div>
      <div class="profile-highlight-card">
        <span class="profile-highlight-label">Estadísticas totales</span>
        <div class="profile-highlight-value">${battlesWon}V · ${battlesLost}D</div>
        <div class="profile-highlight-sub">Win rate ${winRate}%</div>
      </div>
      <div class="profile-highlight-card">
        <span class="profile-highlight-label">Vitrina de trofeos</span>
        <div class="profile-highlight-value">🏆 ${totalCups}</div>
        <div class="profile-highlight-sub">Copas acumuladas en tu cuenta</div>
      </div>
    </div>
    <div class="profile-trophies-header">
      <span class="profile-trophies-title">🏅 Logros y trofeos</span>
    </div>
    <div class="profile-trophy-grid">
      ${(() => {
        const bs = getTrophyBadges();
        const as = ACHIEVEMENTS;
        const html = [];
        const badge = (b) => `<div class="profile-trophy-card ${b.unlocked ? 'unlocked' : 'locked'}">
          <span class="profile-trophy-icon">${b.icon}</span>
          <div class="profile-trophy-texts">
            <div class="profile-trophy-name">${b.name}</div>
            <div class="profile-trophy-desc">${b.desc}</div>
            <div class="ach-profile-bar"><div class="ach-profile-fill" style="width:${b.pct}%"></div></div>
            <div class="profile-trophy-progress">${b.progress}</div>
          </div>
        </div>`;
        const ach = (d) => {
          const p = getAchievementProgress(d.id);
          if (!p) return '';
          const pct = Math.min(100, (p.current / p.target) * 100);
          const done = p.isClaimed;
          const r = p.canClaim;
          const cls = done ? 'profile-trophy-card unlocked ach-done' : r ? 'profile-trophy-card unlocked ach-ready' : 'profile-trophy-card locked ach-pending';
          const rew = [];
          if (d.reward.coins > 0) rew.push(`🪙 ${d.reward.coins}`);
          if (d.reward.diamonds > 0) rew.push(`💎 ${d.reward.diamonds}`);
          return `<div class="${cls}">
          <span class="profile-trophy-icon">${d.icon}</span>
          <div class="profile-trophy-texts">
            <div class="profile-trophy-name">${d.name}</div>
            <div class="profile-trophy-desc">${d.label}</div>
            <div class="ach-profile-bar"><div class="ach-profile-fill" style="width:${pct}%"></div></div>
            <div class="profile-trophy-progress">${d.progressLabel}: ${Math.min(p.current, p.target)} / ${p.target}</div>
            ${r ? `<button class="ach-claim-btn profile-ach-claim-btn" data-ach-id="${d.id}">RECLAMAR ${rew.join(' ')}</button>` : ''}
            ${done ? '<span class="ach-done-badge">COMPLETADO</span>' : ''}
          </div>
        </div>`;
        };
        html.push(badge(bs[0]));  // Row 1: Maestro de la Colección
        html.push(badge(bs[1]));  // Row 1: Conquistador de Arena
        html.push(badge(bs[2]));  // Row 2: Cazador de Copas
        html.push(ach(as[0]));    // Row 2: Pescador Experto
        html.push(ach(as[1]));    // Row 3: Señor del Muelle
        html.push(ach(as[2]));    // Row 3: Gladiador del Mar
        html.push(ach(as[3]));    // Row 4: Inversor Marino
        html.push(ach(as[4]));    // Row 4: Superviviente del Arrecife
        html.push(ach(as[5]));    // Row 5: Rey Midas
        html.push(ach(as[6]));    // Row 5: Codicia Absoluta
        return html.join('');
      })()}
    </div>
    <div class="profile-actions-section">
      <p class="profile-auto-save-note">Gestiona tu partida desde el menú de ajustes.</p>
    </div>`;
  const closeBtn = document.getElementById('profile-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeProfileModal(); });
  const renameBtn = document.getElementById('profile-rename-btn');
  if (renameBtn) renameBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeProfileModal(); openUsernameModal(); });
  body.querySelectorAll('.profile-ach-claim-btn').forEach(btn => {
    btn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      await claimAchievementPhase(btn.dataset.achId);
    });
  });
}

function renderSettingsModal() {
  const body = dom.settingsModalBody;
  if (!body) return;
  body.innerHTML = `
    <div class="settings-modal-header">
      <span class="settings-modal-title">⚙️ Ajustes</span>
      <button class="settings-modal-close" id="settings-modal-close-btn">✕</button>
    </div>
    <div class="settings-action-list">
      <button type="button" class="settings-action-btn primary" id="settings-save-btn">💾 Guardar Partida</button>
      <button type="button" class="settings-action-btn danger" id="settings-reset-btn">🗑️ Nueva Partida</button>
      <button type="button" class="settings-action-btn logout" id="settings-logout-btn">🚪 Cerrar Sesión</button>
    </div>
    <div id="settings-save-time" class="save-time">Última vez guardado: ${formatSavedTimestamp(state.lastSavedAt)}</div>
    <p class="settings-note">El guardado solo ocurre al pulsar Guardar Partida. Tu perfil y estadísticas están en el panel del jugador.</p>
  `;
  const closeBtn = document.getElementById('settings-modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeSettingsModal(); });
  const saveBtn = document.getElementById('settings-save-btn');
  if (saveBtn) saveBtn.addEventListener('pointerdown', async e => {
    e.preventDefault();
    const saved = await saveGame({ manual: true });
    renderSettingsModal();
    alert(saved ? 'Partida guardada correctamente.' : 'No se pudo guardar en Firebase. Revisa la conexión o la configuración.');
  });
  const resetBtn = document.getElementById('settings-reset-btn');
  if (resetBtn) resetBtn.addEventListener('pointerdown', e => { e.preventDefault(); openResetModal(); });
  const logoutBtn = document.getElementById('settings-logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('pointerdown', alPulsarCerrarSesion);
    logoutBtn.addEventListener('click', alPulsarCerrarSesion);
  }
}

function openSettingsModal() {
  closeProfileModal();
  renderSettingsModal();
  dom.settingsModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeSettingsModal() {
  dom.settingsModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

function goToAuthStart() {
  showScreen('main');
  closeSettingsModal();
  closeProfileModal();
  closeUsernameModal();
  openStartModal('menu');
}

async function logoutCurrentAccount() {
  console.log('Cerrando sesión...');
  setLocalSessionActive(false);
  state.authSession = null;
  state.playerUsername = 'Jugador123';
  state.coins = 0;
  state.diamonds = 0;
  state.cups = 0;
  updateHeaderUsernameDisplay();
  updateCoinDisplay();
  updateDiamondDisplay();
  updateCupsDisplay();
  goToAuthStart();
}

async function alPulsarCerrarSesion(e) {
  if (e) e.preventDefault();
  await logoutCurrentAccount();
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

async function comprarPasePremium() {
  if (state.tiene_premium) return;
  if (state.diamonds < PRECIO_PASE_PREMIUM) {
    alert('¡No tienes suficientes gemas! Necesitas 1000 gemas para activar el Pase Premium. ¡Sigue subiendo de arena y abriendo cofres! 💎');
    return;
  }
  const prevDiamonds = state.diamonds;
  state.diamonds -= PRECIO_PASE_PREMIUM;
  state.tiene_premium = true;
  updateDiamondDisplay();
  const saved = await forceCloudSave('compra_premium');
  if (!saved) {
    state.diamonds = prevDiamonds;
    state.tiene_premium = false;
    updateDiamondDisplay();
    alert('No se pudo confirmar la compra en la nube. Inténtalo de nuevo.');
    return;
  }
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
      <span class="battle-pass-modal-title">${getSeasonName()}</span>
      <button class="battle-pass-modal-close" id="battle-pass-close-btn">✕</button>
    </div>
    <div class="battle-pass-season-banner">
      <span class="battle-pass-season-label">Tiempo restante: <span id="countdown-pase">${getSeasonCountdownText()}</span></span>
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
    </div>
    <div class="battle-pass-level-list">
      ${getBattlePassLevels().map(tier => {
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
    buyPremiumBtn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      await comprarPasePremium();
    });
  }
  body.querySelectorAll('[data-bp-claim]').forEach(btn => {
    btn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      if (btn.disabled) return;
      const level = parseInt(btn.dataset.level || '', 10);
      const track = btn.dataset.track;
      const result = await claimBattlePassReward(level, track);
      if (!result.ok) {
        alert(result.reason);
        return;
      }
      renderBattlePassModal();
      renderProfileModal();
      renderInventory();
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
  closeSettingsModal();
  renderProfileModal();
  dom.profileModal.classList.add('open');
  document.body.classList.add('modal-open');
}

function closeProfileModal() {
  dom.profileModal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

async function buyDailyOfferFish(fishId, price) {
  if (state.unlockedFish.includes(fishId)) { alert('Ya tienes este pez.'); return false; }
  if (state.coins < price) { alert('Monedas insuficientes'); return false; }
  const prevCoins = state.coins;
  state.coins -= price;
  state.unlockedFish.push(fishId);
  const saved = await forceCloudSave('buy_fish');
  if (!saved) {
    state.coins = prevCoins;
    state.unlockedFish = state.unlockedFish.filter(id => id !== fishId);
    alert('No se pudo confirmar la compra en la nube. Inténtalo de nuevo.');
    return false;
  }
  updateCoinDisplay();
  renderBank();
  renderShop();
  checkCollectionMasterAchievement();
  signalAchievementUpdate();
  return true;
}

async function buyItem(itemId, price) {
  if (state.items.includes(itemId)) { alert('Ya tienes este objeto.'); return false; }
  if (state.coins < price) { alert('Monedas insuficientes'); return false; }
  state.coins -= price;
  state.items.push(itemId);
  const saved = await forceCloudSave('buy_item');
  if (!saved) {
    state.coins += price;
    state.items = state.items.filter(id => id !== itemId);
    alert('No se pudo confirmar la compra en la nube. Inténtalo de nuevo.');
    return false;
  }
  updateCoinDisplay();
  renderShop();
  renderInventory();
  scheduleAutosave(0);
  return true;
}

async function openChest(chestId) {
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

async function showChestReveal(chest, gold, diamonds, fish, compensation) {
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
  await forceCloudSave('buy_chest');
  signalAchievementUpdate();

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
  dom.inventoryContent.innerHTML = `<div id="inv-panel-materiales"></div>`;
  renderMaterialesTab();
}

function renderMaterialesTab() {
  const panel = document.getElementById('inv-panel-materiales');
  if (!panel) return;
  panel.innerHTML = '';
  const ownedItems = ITEMS.filter(it => state.items.includes(it.id));
  if (ownedItems.length === 0) {
    panel.innerHTML = `<div class="inv-empty"><p>📦 No tienes objetos</p><p class="inv-empty-sub">Consigue objetos en la Tienda o en el Pase de Batalla</p></div>`;
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
  panel.appendChild(grid);
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
    buyBtn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      buyBtn.disabled = true;
      const bought = await buyItem(item.id, cost);
      if (bought) closeItemModal();
      else buyBtn.disabled = false;
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
    confirmBtn.addEventListener('pointerdown', async e => {
      e.preventDefault();
      if (state.diamonds < pack.cost) return;
      const prevDiamonds = state.diamonds;
      const prevCoins = state.coins;
      state.diamonds -= pack.cost;
      state.coins += pack.reward;
      const saved = await forceCloudSave('gem_exchange');
      if (!saved) {
        state.diamonds = prevDiamonds;
        state.coins = prevCoins;
        updateCoinDisplay();
        updateDiamondDisplay();
        alert('No se pudo confirmar el canje en la nube. Inténtalo de nuevo.');
        return;
      }
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
async function initCombat() {
  const saved = await forceCloudSave('combat_start');
  if (!saved) {
    alert('No se pudo iniciar la batalla. Verifica tu conexión e inténtalo de nuevo.');
    return false;
  }
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
  return true;
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
    state.gameOver = true;
    if (state.battleMode === 'survival') {
      setTimeout(() => handleSurvivalEnemyDefeat(), 800);
    } else if (state.battleMode === 'goldFever' || state.battleMode === 'diamondFever') {
      setTimeout(() => handleFeverEnemyDefeat(), 800);
    } else {
      setTimeout(() => showResult(true), 800);
    }
    return;
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
    state.gameOver = true;
    if (state.battleMode === 'goldFever' || state.battleMode === 'diamondFever') {
      setTimeout(() => handleFeverPlayerDefeat(), 800);
    } else {
      setTimeout(() => showResult(false), 800);
    }
    return;
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
  if (state.enemy.currentHp <= 0) {
    state.gameOver = true;
    if (state.battleMode === 'survival') {
      setTimeout(() => handleSurvivalEnemyDefeat(), 800);
    } else if (state.battleMode === 'goldFever' || state.battleMode === 'diamondFever') {
      setTimeout(() => handleFeverEnemyDefeat(), 800);
    } else {
      setTimeout(() => showResult(true), 800);
    }
    return true;
  }
  if (state.player.currentHp <= 0) {
    state.gameOver = true;
    if (state.battleMode === 'survival') {
      setTimeout(() => handleSurvivalPlayerDefeat(), 800);
    } else {
      setTimeout(() => showResult(false), 800);
    }
    return true;
  }
  return false;
}

/* ===== SUPERVIVENCIA ===== */
const SURVIVAL_TOTAL_WAVES = 20;
let survivalTimerInterval = null;

const SURVIVAL_ARENA_BONUS = {
  1: { gold: 0,  items: [] },
  2: { gold: 0,  items: [] },
  3: { gold: 0,  items: [{ id: 'concha_comun', chance: 0.20 }] },
  4: { gold: 0,  items: [{ id: 'concha_comun', chance: 0.35 }, { id: 'obj_toxina_concentrada', chance: 0.08 }] },
  5: { gold: 0,  items: [{ id: 'concha_comun', chance: 0.50 }, { id: 'obj_toxina_concentrada', chance: 0.18 }] },
};

/* ===== FIEBRE DEL ORO / FIEBRE DE DIAMANTES ===== */
const FEVER_TOTAL_WAVES = 20;

const GOLD_FEVER_REWARDS = {
  basePerWave: 100,
  scalingPerWave: 25,
  victoryBonus: 2000,
};

const DIAMOND_FEVER_REWARDS = {
  basePerWave: 2,
  scalingPerWave: 1,
  victoryBonus: 30,
};

function getSurvivalEnemyLevel(wave) {
  if (wave <= 5) return wave;
  if (wave <= 10) return 6 + Math.floor((wave - 6) / 2);
  if (wave <= 15) return 9 + Math.floor((wave - 11) / 2);
  if (wave <= 19) return Math.min(10 + Math.floor((wave - 16) / 2), MAX_LEVEL);
  return MAX_LEVEL + 1;
}

function getSurvivalTotalRewards(wavesCompleted) {
  const arena = state.currentArena || 1;
  const bonus = SURVIVAL_ARENA_BONUS[arena] || SURVIVAL_ARENA_BONUS[1];
  const gold = wavesCompleted * 50 + bonus.gold;
  const gems = wavesCompleted >= SURVIVAL_TOTAL_WAVES ? 10 : 0;
  return { gold, gems };
}

function getSurvivalItemDrops(wavesCompleted) {
  const arena = state.currentArena || 1;
  const bonus = SURVIVAL_ARENA_BONUS[arena] || SURVIVAL_ARENA_BONUS[1];
  const waveFactor = wavesCompleted / SURVIVAL_TOTAL_WAVES;
  const dropped = [];
  for (const entry of bonus.items) {
    const item = ITEMS.find(i => i.id === entry.id);
    if (!item) continue;
    if (Math.random() < entry.chance * waveFactor) {
      state.items.push(item.id);
      dropped.push(item);
    }
  }
  return dropped;
}

async function startSurvivalRun() {
  if (!state.selectedFishId || state.isAnimating) return false;
  if (!state.unlockedFish.includes(state.selectedFishId)) return false;
  if (state.lastSurvivalDate && (Date.now() - state.lastSurvivalDate < 86400000)) {
    return false;
  }
  const prevDate = state.lastSurvivalDate;
  state.lastSurvivalDate = Date.now();
  state.survivalWave = 1;
  const saved = await forceCloudSave('survival_start');
  if (!saved) {
    state.lastSurvivalDate = prevDate;
    state.survivalWave = 0;
    return false;
  }
  return initSurvivalWave(1);
}

function initSurvivalWave(wave) {
  const playerFishId = state.selectedFishId;
  const playerBase = getFishById(playerFishId);
  const playerLevel = getFishLevel(playerFishId);
  const playerType = roundFishStats(getLeveledFishType(playerBase, playerLevel));

  const enemyLevel = getSurvivalEnemyLevel(wave);
  const enemyBase = randomFish();
  let enemyType = roundFishStats(getLeveledFishType(enemyBase, enemyLevel));

  if (wave === SURVIVAL_TOTAL_WAVES) {
    enemyType = { ...enemyType, maxHp: enemyType.maxHp * 2 };
  }

  if (playerBase?.passive?.name === 'Barbillones') playerType.atk += 0.5;
  if (enemyBase?.passive?.name === 'Barbillones') enemyType.atk += 0.5;
  if (playerBase?.passive?.name === 'Fuga Serpenteante') playerType.spe += 1;
  if (enemyBase?.passive?.name === 'Fuga Serpenteante') enemyType.spe += 1;

  state.player = {
    type: playerType, currentHp: playerType.maxHp, maxHp: playerType.maxHp,
    status: null, shield: 0, mimetismoUsado: false, hipnosisUsado: false,
    destelloActivado: false, atkReduction: null, spdReduction: null, debuff: null,
    buffs: null, sangradoTurns: 0, frenesiActivo: false, quiebroUsado: false,
    mimetismoAbsolutoActivo: false, resistenciaMarinaActivo: false,
    impulsoHuidaActivo: false, rompebarrerasActivo: false, krakenActivo: false,
    selfHealUsed: {}
  };
  state.enemy = {
    type: enemyType, currentHp: enemyType.maxHp, maxHp: enemyType.maxHp,
    status: null, shield: 0, mimetismoUsado: false, hipnosisUsado: false,
    destelloActivado: false, atkReduction: null, spdReduction: null, debuff: null,
    buffs: null, sangradoTurns: 0, frenesiActivo: false, quiebroUsado: false,
    mimetismoAbsolutoActivo: false, resistenciaMarinaActivo: false,
    impulsoHuidaActivo: false, rompebarrerasActivo: false, krakenActivo: false,
    selfHealUsed: {}
  };

  state.isPlayerTurn = true;
  state.gameOver = false;
  state.isAnimating = false;
  state.turnPhase = 'player_first';
  state.isFirstEnemyTurn = true;

  if (playerBase?.passive?.name === 'Mimetismo Absoluto') {
    state.player.mimetismoAbsolutoActivo = true;
    setLogMessage('¡Mimetismo Absoluto activado! Los ataques físicos fallan este turno.', true);
  }
  if (playerBase?.passive?.name === 'Rompebarreras') {
    state.player.rompebarrerasActivo = true;
    setLogMessage('¡Rompebarreras activado! Podrás atacar dos veces seguidas.', true);
  }
  if (playerBase?.passive?.name === 'Emboscada') {
    state.player.buffs = state.player.buffs || {};
    state.player.buffs.critChance = (state.player.buffs.critChance || 0) + 0.15;
  }
  if (enemyBase?.passive?.name === 'Emboscada') {
    state.enemy.buffs = state.enemy.buffs || {};
    state.enemy.buffs.critChance = (state.enemy.buffs.critChance || 0) + 0.15;
  }
  if (enemyBase?.passive?.name === 'Mimetismo Absoluto') {
    state.enemy.mimetismoAbsolutoActivo = true;
  }

  if (hasEquippedItem(state.selectedFishId, 'aleta_voladora')) { state.player.type = { ...state.player.type, spe: state.player.type.spe + 5 }; }
  if (hasEquippedItem(state.selectedFishId, 'obj_escama_brillante')) { state.player.type = { ...state.player.type, def: state.player.type.def + 5 }; }
  if (hasEquippedItem(state.selectedFishId, 'obj_concha_reforzada')) state.player.shield += 20;
  if (hasEquippedItem(state.selectedFishId, 'obj_perla_arrecife')) {
    state.player.buffs = state.player.buffs || {};
    state.player.buffs.defBoost = (state.player.buffs.defBoost || 0) + 3;
  }
  if (hasEquippedItem(state.selectedFishId, 'caparazon_tortuga')) { state.player.type = { ...state.player.type, def: state.player.type.def + 4 }; }
  if (hasEquippedItem(state.selectedFishId, 'tinta_concentrada')) {
    state.player.buffs = state.player.buffs || {};
    state.player.buffs.critChance = (state.player.buffs.critChance || 0) + 0.1;
  }
  if (playerBase?.passive?.name === 'Cazadora Nocturna') {
    state.player.buffs = state.player.buffs || {};
    state.player.buffs.critChance = (state.player.buffs.critChance || 0) + 0.3;
  }

  renderCombat();
  showScreen('combat');

  const waveEl = dom.waveIndicator;
  if (waveEl) {
    waveEl.style.display = 'block';
    waveEl.textContent = wave === SURVIVAL_TOTAL_WAVES
      ? `👑 OLEADA ${wave}/${SURVIVAL_TOTAL_WAVES} — ¡JEFE FINAL!`
      : `🌊 Oleada ${wave}/${SURVIVAL_TOTAL_WAVES}`;
  }

  dom.enemySpd.textContent = `SPE: ${state.enemy.type.spe}`;
  dom.playerSpd.textContent = `SPE: ${state.player.type.spe}`;
  dom.logMessage.textContent = `🌊 Oleada ${wave}/${SURVIVAL_TOTAL_WAVES} — ¡${state.enemy.type.name} aparece!`;
  setTimeout(() => startTurn(), 600);
  return true;
}

async function handleSurvivalEnemyDefeat() {
  setLogMessage(`¡${state.enemy.type.name} derrotado!`, true);

  if (state.survivalWave >= SURVIVAL_TOTAL_WAVES) {
    state.gameOver = true;
    state.survivalMaxWaves = Math.max(state.survivalMaxWaves || 0, SURVIVAL_TOTAL_WAVES);
    await forceCloudSave('survival_complete');
    await showSurvivalResult(true);
    return;
  }

  state.survivalWave++;
  state.player.currentHp = Math.min(state.player.maxHp, state.player.currentHp + Math.round(state.player.maxHp * 0.25));
  state.player.status = null;
  state.player.sangradoTurns = 0;
  initSurvivalWave(state.survivalWave);
}

async function handleSurvivalPlayerDefeat() {
  state.gameOver = true;
  state.survivalMaxWaves = Math.max(state.survivalMaxWaves || 0, state.survivalWave - 1);
  await forceCloudSave('survival_death');
  await showSurvivalResult(false);
}

async function showSurvivalResult(victory) {
  const wavesCompleted = victory ? SURVIVAL_TOTAL_WAVES : Math.max(0, state.survivalWave - 1);
  const arena = state.currentArena || 1;
  const bonus = SURVIVAL_ARENA_BONUS[arena] || SURVIVAL_ARENA_BONUS[1];
  const { gold, gems } = getSurvivalTotalRewards(wavesCompleted);
  const items = getSurvivalItemDrops(wavesCompleted);

  state.coins += gold;
  state.diamonds += gems;
  updateCoinDisplay();
  updateDiamondDisplay();
  if (items.length) renderInventory();
  addBattlePassXpFromCombat(victory);

  const waveEl = dom.waveIndicator;
  if (waveEl) waveEl.style.display = 'none';

  showScreen('result');
  dom.resultTitle.textContent = victory ? '🌊 ¡SUPERVIVENCIA COMPLETADA!' : '💀 DERROTA EN SUPERVIVENCIA';
  dom.resultTitle.className = 'result-title ' + (victory ? 'victory' : 'defeat');
  dom.resultEmoji.textContent = victory ? '🏆' : '💀';
  dom.resultCups.textContent = `🌊 Oleadas completadas: ${wavesCompleted}/${SURVIVAL_TOTAL_WAVES}`;
  dom.resultCups.style.color = victory ? '#4facfe' : '#f44336';

  const itemLines = items.length
    ? items.map(it => `+${it.emoji} ${it.name}`)
    : [];
  const parts = [`+${gold} 🪙`];
  if (gems) parts.push(`+${gems} 💎`);
  if (itemLines.length) itemLines.forEach(l => parts.push(l));

  dom.resultSub.innerHTML = `<div class="survival-rewards-list">
    <span class="survival-reward-row">💰 Recompensa base: ${wavesCompleted} × 50 = ${wavesCompleted * 50} 🪙</span>
    ${bonus.gold ? `<span class="survival-reward-row">🏟️ Bonus de arena: +${bonus.gold} 🪙</span>` : ''}
    ${itemLines.length ? `<span class="survival-reward-row">🎁 Objetos obtenidos:</span>` : ''}
    ${itemLines.map(l => `<span class="survival-reward-row item">${l}</span>`).join('')}
    <span class="survival-reward-row total">${parts.join(' · ')}</span>
  </div>`;

  signalAchievementUpdate();
}

/* ===== FIEBRE DEL ORO / FIEBRE DE DIAMANTES ===== */
function getFeverMultiplier(wave) {
  return 1 + (wave - 1) * 0.10;
}

function getFeverEnemyLevel(wave) {
  return getSurvivalEnemyLevel(wave);
}

function getFeverReward(wave, mode) {
  const table = mode === 'gold' ? GOLD_FEVER_REWARDS : DIAMOND_FEVER_REWARDS;
  return table.basePerWave + (wave - 1) * table.scalingPerWave;
}

function getFeverTotalRewards(wavesCompleted, mode) {
  let total = 0;
  for (let w = 1; w <= wavesCompleted; w++) {
    total += getFeverReward(w, mode);
  }
  const victoryBonus = wavesCompleted >= FEVER_TOTAL_WAVES
    ? (mode === 'gold' ? GOLD_FEVER_REWARDS.victoryBonus : DIAMOND_FEVER_REWARDS.victoryBonus)
    : 0;
  return { total, victoryBonus };
}

async function startFeverRun(mode) {
  if (!state.selectedFishId || state.isAnimating) return false;
  if (!state.unlockedFish.includes(state.selectedFishId)) return false;
  const cooldownField = mode === 'gold' ? 'lastGoldFeverDate' : 'lastDiamondFeverDate';
  if (state[cooldownField] && (Date.now() - state[cooldownField] < 86400000)) return false;
  const prev = state[cooldownField];
  state[cooldownField] = Date.now();
  state.feverWave = 1;
  state.battleMode = mode === 'gold' ? 'goldFever' : 'diamondFever';
  const saved = await forceCloudSave('fever_start_' + mode);
  if (!saved) {
    state[cooldownField] = prev;
    state.feverWave = 0;
    state.battleMode = 'normal';
    return false;
  }
  return initFeverWave(1, mode);
}

function initFeverWave(wave, mode) {
  const playerFishId = state.selectedFishId;
  const playerBase = getFishById(playerFishId);
  const playerLevel = getFishLevel(playerFishId);
  const playerType = roundFishStats(getLeveledFishType(playerBase, playerLevel));

  const enemyLevel = getFeverEnemyLevel(wave);
  const enemyBase = randomFish();
  let enemyType = roundFishStats(getLeveledFishType(enemyBase, enemyLevel));

  const scale = getFeverMultiplier(wave);
  enemyType = {
    ...enemyType,
    maxHp: Math.round(enemyType.maxHp * scale),
    atk: Math.round(enemyType.atk * scale),
    def: Math.round(enemyType.def * scale),
    spa: Math.round(enemyType.spa * scale),
    spd: Math.round(enemyType.spd * scale),
  };

  if (wave === FEVER_TOTAL_WAVES) {
    enemyType = { ...enemyType, maxHp: enemyType.maxHp * 2 };
  }

  const playerFields = {
    type: playerType, currentHp: playerType.maxHp, maxHp: playerType.maxHp,
    status: null, shield: 0, mimetismoUsado: false, hipnosisUsado: false,
    destelloActivado: false, atkReduction: null, spdReduction: null, debuff: null,
    buffs: null, sangradoTurns: 0, frenesiActivo: false, quiebroUsado: false,
    mimetismoAbsolutoActivo: false, resistenciaMarinaActivo: false,
    impulsoHuidaActivo: false, rompebarrerasActivo: false, krakenActivo: false,
    selfHealUsed: {}
  };
  const enemyFields = {
    type: enemyType, currentHp: enemyType.maxHp, maxHp: enemyType.maxHp,
    status: null, shield: 0, mimetismoUsado: false, hipnosisUsado: false,
    destelloActivado: false, atkReduction: null, spdReduction: null, debuff: null,
    buffs: null, sangradoTurns: 0, frenesiActivo: false, quiebroUsado: false,
    mimetismoAbsolutoActivo: false, resistenciaMarinaActivo: false,
    impulsoHuidaActivo: false, rompebarrerasActivo: false, krakenActivo: false,
    selfHealUsed: {}
  };

  if (state.equippedItems.length > 0) {
    state.equippedItems.forEach(itemId => {
      const item = ITEMS.find(i => i.id === itemId);
      if (item?.passive) {
        item.passive(playerFields, enemyFields);
      }
    });
  }

  state.player = playerFields;
  state.enemy = enemyFields;
  state.isPlayerTurn = true;
  state.gameOver = false;
  state.turnPhase = 'player_first';
  state.isAnimating = false;
  state.doubleTurnBypass = false;
  dom.box.style.display = 'flex';

  renderCombat();
  showScreen('combat');

  const waveEl = dom.waveIndicator;
  if (waveEl) {
    waveEl.style.display = 'block';
    waveEl.textContent = wave === FEVER_TOTAL_WAVES
      ? `👑 OLEADA ${wave}/${FEVER_TOTAL_WAVES} — ¡JEFE FINAL!`
      : `🌊 Oleada ${wave}/${FEVER_TOTAL_WAVES}`;
  }

  dom.logMessage.textContent = `🌊 Oleada ${wave}/${FEVER_TOTAL_WAVES} — ¡${enemyType.name} aparece!`;

  if (state.isPlayerTurn) {
    updateSkillButtons(true);
  } else {
    setTimeout(() => executeEnemyTurn(), 800);
  }
  return true;
}

async function handleFeverEnemyDefeat() {
  const mode = state.battleMode === 'goldFever' ? 'gold' : 'diamond';
  const nextWave = state.feverWave + 1;
  if (nextWave > FEVER_TOTAL_WAVES) {
    state.feverMaxWaves = Math.max(state.feverMaxWaves || 0, FEVER_TOTAL_WAVES);
    if (mode === 'gold') {
      state.goldFeverMaxWaves = Math.max(state.goldFeverMaxWaves || 0, FEVER_TOTAL_WAVES);
    } else {
      state.diamondFeverMaxWaves = Math.max(state.diamondFeverMaxWaves || 0, FEVER_TOTAL_WAVES);
    }
    signalAchievementUpdate();
    const saved = await forceCloudSave('fever_victory');
    if (!saved) {
      showCloudSaveWarning();
    }
    showFeverResult(true, mode);
    return;
  }
  state.feverWave = nextWave;
  const saved = await forceCloudSave('fever_wave');
  if (!saved) {
    showCloudSaveWarning();
  }
  initFeverWave(nextWave, mode);
}

async function handleFeverPlayerDefeat() {
  const mode = state.battleMode === 'goldFever' ? 'gold' : 'diamond';
  const waves = Math.max(0, state.feverWave - 1);
  state.feverMaxWaves = Math.max(state.feverMaxWaves || 0, waves);
  if (mode === 'gold') {
    state.goldFeverMaxWaves = Math.max(state.goldFeverMaxWaves || 0, waves);
  } else {
    state.diamondFeverMaxWaves = Math.max(state.diamondFeverMaxWaves || 0, waves);
  }
  signalAchievementUpdate();
  showFeverResult(false, mode);
}

async function showFeverResult(victory, mode) {
  const wavesCompleted = victory ? FEVER_TOTAL_WAVES : Math.max(0, state.feverWave - 1);
  const { total, victoryBonus } = getFeverTotalRewards(wavesCompleted, mode);

  if (mode === 'gold') {
    state.coins += total + victoryBonus;
    updateCoinDisplay();
  } else {
    state.diamonds += total + victoryBonus;
    updateDiamondDisplay();
  }
  addBattlePassXpFromCombat(victory);

  const waveEl = dom.waveIndicator;
  if (waveEl) waveEl.style.display = 'none';

  const modeName = mode === 'gold' ? 'Fiebre del Oro' : 'Mina de Gemas';
  showScreen('result');
  dom.resultTitle.textContent = victory
    ? `🔥 ¡${modeName} COMPLETADA!`
    : `💀 Derrota en ${modeName}`;
  dom.resultTitle.className = 'result-title ' + (victory ? 'victory' : 'defeat');
  dom.resultEmoji.textContent = victory ? '🏆' : '💀';
  dom.resultCups.textContent = `🔥 Oleadas completadas: ${wavesCompleted}/${FEVER_TOTAL_WAVES}`;
  dom.resultCups.style.color = victory ? '#ff9800' : '#f44336';

  const rewardLabel = mode === 'gold' ? '🪙' : '💎';
  const bonusText = victoryBonus ? ` + ${victoryBonus} ${rewardLabel} (bonus victoria)` : '';
  dom.resultSub.innerHTML = `<div class="survival-rewards-list">
    <span class="survival-reward-row">💰 Recompensa total: ${total} ${rewardLabel}${bonusText}</span>
  </div>`;

  signalAchievementUpdate();
}

/* ===== RESULTADO ===== */
async function showResult(victory) {
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
  state.battlesPlayed += 1;
  if (victory) state.battlesWon += 1;
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
  await forceCloudSave('combat_end');
  signalAchievementUpdate();
}

/* ===== REINICIO ===== */
function resetGame() {
  state.player = null; state.enemy = null;
  state.isPlayerTurn = true; state.gameOver = false; state.isAnimating = false;
  state.turnPhase = 'player_first';
  state.survivalWave = 0;
  if (survivalTimerInterval) { clearInterval(survivalTimerInterval); survivalTimerInterval = null; }
  if (dom.waveIndicator) dom.waveIndicator.style.display = 'none';
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

async function resetAccount() {
  localStorage.removeItem(getSaveKey());
  localStorage.removeItem(LEGACY_SAVE_KEY);
  state.lastSavedAt = null;

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
  state.lastResetDate = null;
  state.nivel_pase = 0;
  state.xp_pase = 0;
  state.tiene_premium = false;
  state.paseInicioTemporada = Date.now();
  state.paseSeasonMonth = null;
  state.paseRecompensasReclamadas = [];
  state.paseObjetos = [];
  state.titulosDesbloqueados = [];
  state.shopRotation = null;
  state.achievements = { collectionMaster: { rewardedForTotal: 0 } };
  state.battlesPlayed = 0;
  state.battlesWon = 0;
  state.tickets_muelle = 3;
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

  if (state.tickets_muelle <= 0) {
    confirmBtn.disabled = true;
    error.textContent = 'Muelle cerrado. Espera a la recarga diaria.';
    error.classList.remove('valid');
    return;
  }

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
  const hasTickets = state.tickets_muelle > 0;
  const hasCoins = state.coins >= MUELLE_MIN_BET;
  const canPlay = hasTickets && hasCoins;
  const defaultBet = canPlay ? String(Math.min(25, state.coins)) : '';
  if (body) {
    body.innerHTML = `
      <div class="muelle-bet-header">
        <span class="muelle-bet-title">🎣 El Muelle de la Suerte</span>
        <button class="muelle-bet-close" id="muelle-bet-close-btn">✕</button>
      </div>
      <div class="muelle-bet-coins">Tienes: <strong>${state.coins} 🪙</strong> &nbsp;|&nbsp; Tickets: <strong>${state.tickets_muelle} 🎟️</strong></div>
      ${!hasTickets ? `<p class="muelle-no-coins">Muelle cerrado. Espera a la recarga diaria.</p>` : ''}
      ${!hasCoins && hasTickets ? `<p class="muelle-no-coins">Necesitas al menos ${MUELLE_MIN_BET} 🪙 para jugar.</p>` : ''}
      ${canPlay ? `
        <p class="muelle-bet-hint">Escribe la cantidad exacta que quieres apostar.</p>
        <input type="text" id="muelle-bet-input" class="muelle-bet-input"
          inputmode="numeric" autocomplete="off" spellcheck="false"
          value="${defaultBet}" placeholder="${MUELLE_MIN_BET}–${state.coins}">
        <p class="muelle-bet-error" id="muelle-bet-error"></p>
        <button class="btn-primary muelle-confirm-bet-btn" id="muelle-confirm-bet-btn">
          🎣 ¡Lanzar el Sedal!
        </button>
      ` : ''}
    `;
  }
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  if (canPlay) syncMuelleBetForm();
}

function closeMuelleBetModal() {
  const modal = document.getElementById('muelle-bet-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

async function initMuelle(bet) {
  const prevTickets = state.tickets_muelle;
  const prevCoins = state.coins;
  const prevTicketsSpent = state.ticketsSpentTotal;
  state.tickets_muelle = Math.max(0, state.tickets_muelle - 1);
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
  state.ticketsSpentTotal = (state.ticketsSpentTotal || 0) + 1;
  const saved = await forceCloudSave('muelle_ticket_spent');
  if (!saved) {
    state.tickets_muelle = prevTickets;
    state.coins = prevCoins;
    state.ticketsSpentTotal = prevTicketsSpent;
    state.muelle = null;
    updateCoinDisplay();
    alert('No se pudo confirmar el uso del ticket en la nube. Inténtalo de nuevo.');
    renderMuelleSection();
    return false;
  }
  updateCoinDisplay();
  renderMuelleSection();
  signalAchievementUpdate();
  return true;
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
        <div class="muelle-tickets">Tickets de acceso: <strong>${'🎟️'.repeat(state.tickets_muelle)}${'<span class="muelle-ticket-gastado">🎟️</span>'.repeat(3 - state.tickets_muelle)}</strong> (${state.tickets_muelle}/3)</div>
        <div class="muelle-countdown">⏳ Nuevos tickets en: <span id="countdown-muelle">00:00:00</span></div>
        ${state.tickets_muelle <= 0 ? '<p class="muelle-no-coins">Muelle cerrado. Espera a la recarga diaria.</p>' : ''}
        <button class="btn-primary muelle-play-btn" id="muelle-play-btn" ${state.tickets_muelle <= 0 ? 'disabled' : ''}>¡Ir al Muelle!</button>
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
    saveGame();
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
      signalAchievementUpdate();
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
    saveGame();
    m.over = true;
    m.result = hole.type === 'fish' ? 'fish' : 'win';
    renderMuelleSection();
    return;
  }

  m.waiting = true;
  saveGame();
  renderMuelleSection();
}

function muelleCashOut() {
  const m = state.muelle;
  if (!m || !m.active || m.over || !m.waiting) return;
  const lastHole = m.holes[m.lastReveal];
  m.over = true;
  m.result = (lastHole && lastHole.type === 'fish') ? 'fish' : 'win';
  m.waiting = false;
  saveGame();
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
  scheduleAutosave(0);
}

/* ===== EVENTOS ===== */
function setupEvents() {
  dom.btnBattle.addEventListener('pointerdown', async e => {
    e.preventDefault();
    if (!state.selectedFishId || state.isAnimating) return;
    if (!state.unlockedFish.includes(state.selectedFishId)) return;
    if (state.battleMode === 'survival') {
      if (state.lastSurvivalDate && (Date.now() - state.lastSurvivalDate < 86400000)) {
        alert('¡Ya has usado tu intento de Supervivencia hoy! Vuelve en 24 horas.');
        return;
      }
      const started = await startSurvivalRun();
      if (!started) alert('No se pudo iniciar el Modo Supervivencia. Verifica tu conexión.');
    } else if (state.battleMode === 'goldFever') {
      if (state.lastGoldFeverDate && (Date.now() - state.lastGoldFeverDate < 86400000)) {
        alert('¡Ya has usado Fiebre del Oro hoy! Vuelve en 24 horas.');
        return;
      }
      const started = await startFeverRun('gold');
      if (!started) alert('No se pudo iniciar Fiebre del Oro. Verifica tu conexión.');
    } else if (state.battleMode === 'diamondFever') {
      if (state.lastDiamondFeverDate && (Date.now() - state.lastDiamondFeverDate < 86400000)) {
        alert('¡Ya has usado Mina de Gemas hoy! Vuelve en 24 horas.');
        return;
      }
      const started = await startFeverRun('diamond');
      if (!started) alert('No se pudo iniciar Mina de Gemas. Verifica tu conexión.');
    } else {
      await initCombat();
    }
  });
  const modeBtn = document.getElementById('btn-mode-selector');
  if (modeBtn) {
    modeBtn.addEventListener('pointerdown', e => {
      e.preventDefault();
      toggleModeDropdown();
    });
  }
  document.querySelectorAll('.mode-option').forEach(opt => {
    opt.addEventListener('pointerdown', e => {
      e.preventDefault();
      selectBattleMode(opt.dataset.mode);
    });
  });
  document.addEventListener('pointerdown', e => {
    const dd = document.getElementById('mode-dropdown');
    const mb = document.getElementById('btn-mode-selector');
    if (dd && dd.style.display !== 'none' && !dd.contains(e.target) && mb && !mb.contains(e.target)) {
      closeModeDropdown();
    }
  });
  const actionFishBtn = document.getElementById('action-fish-btn');
  if (actionFishBtn) actionFishBtn.addEventListener('pointerdown', e => { e.preventDefault(); showFishDetail(state.selectedFishId); });
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
      void resetAccount();
    });
    const resetCloseBtn = document.getElementById('reset-modal-close-btn');
    if (resetCloseBtn) resetCloseBtn.addEventListener('pointerdown', e => { e.preventDefault(); closeResetModal(); });
  }
  const amigosBtn = document.getElementById('btn-amigos');
  if (amigosBtn) amigosBtn.addEventListener('pointerdown', e => { e.preventDefault(); openFriendsModal(); });
  const newsBtn = document.getElementById('btn-news');
  if (newsBtn) newsBtn.addEventListener('pointerdown', e => { e.preventDefault(); openUpdateModal(); });
  const settingsBtn = document.getElementById('btn-settings');
  if (settingsBtn) settingsBtn.addEventListener('pointerdown', e => { e.preventDefault(); openSettingsModal(); });
  if (dom.headerUserBox) dom.headerUserBox.addEventListener('pointerdown', e => { e.preventDefault(); if (!getCurrentAuthEmail()) openStartModal('menu'); else openProfileModal(); });
  const headerBpBtn = document.getElementById('header-bp-btn');
  if (headerBpBtn) headerBpBtn.addEventListener('pointerdown', e => { e.preventDefault(); openBattlePassModal(); });
  const missionsBtn = document.getElementById('header-missions-btn');
  if (missionsBtn) missionsBtn.addEventListener('pointerdown', e => { e.preventDefault(); openMissionsModal(); });
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
  if (dom.settingsModal) {
    dom.settingsModal.addEventListener('pointerdown', e => {
      if (e.target === dom.settingsModal || e.target.classList.contains('settings-modal-backdrop')) {
        e.preventDefault(); closeSettingsModal();
      }
    });
  }
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
  const friendsModal = document.getElementById('friends-modal');
  if (friendsModal) {
    friendsModal.addEventListener('pointerdown', e => {
      if (e.target === friendsModal || e.target.classList.contains('friends-modal-backdrop')) {
        e.preventDefault(); closeFriendsModal();
      }
    });
  }
  if (dom.authModal) {
    dom.authModal.addEventListener('pointerdown', e => {
      if (e.target === dom.authModal || e.target.classList.contains('auth-modal-backdrop')) {
        e.preventDefault();
        if (getCurrentAuthEmail()) closeAuthModal();
      }
    });
  }
  if (dom.usernameModal) {
    dom.usernameModal.addEventListener('pointerdown', e => {
      if (e.target === dom.usernameModal || e.target.classList.contains('username-modal-backdrop')) {
        e.preventDefault();
        closeUsernameModal();
      }
    });
  }
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
    muelleBetModal.addEventListener('pointerdown', async e => {
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
        if (state.tickets_muelle <= 0) { syncMuelleBetForm(); return; }
        const input = document.getElementById('muelle-bet-input');
        const validation = getMuelleBetValidation(input ? input.value : '');
        if (input && input.value !== validation.cleanValue) input.value = validation.cleanValue;
        if (!validation.isValid || validation.bet === null) {
          syncMuelleBetForm();
          return;
        }
        const started = await initMuelle(validation.bet);
        if (started) closeMuelleBetModal();
        return;
      }
    });
    muelleBetModal.addEventListener('input', e => {
      const targetEl = getEventTargetElement(e.target);
      if (!targetEl || targetEl.id !== 'muelle-bet-input') return;
      syncMuelleBetForm();
    });
    muelleBetModal.addEventListener('keydown', async e => {
      const targetEl = getEventTargetElement(e.target);
      if (!targetEl || targetEl.id !== 'muelle-bet-input' || e.key !== 'Enter') return;
      e.preventDefault();
      if (state.tickets_muelle <= 0) { syncMuelleBetForm(); return; }
      const validation = getMuelleBetValidation(targetEl.value);
      if (targetEl.value !== validation.cleanValue) targetEl.value = validation.cleanValue;
      if (!validation.isValid || validation.bet === null) {
        syncMuelleBetForm();
        return;
      }
      const started = await initMuelle(validation.bet);
      if (started) closeMuelleBetModal();
    });
  }
}

/* ===== INIT ===== */
const UPDATE_POPUP_KEY = 'actualizacion_v1_1_vista';

function hasVeteranProgressForUpdatePopup() {
  const legacyCoins = localStorage.getItem('monedas');
  if (legacyCoins !== null) return true;
  if (!hasManualSave()) return false;
  const data = getCurrentSaveData();
  return !!(data && typeof data.coins === 'number');
}

function checkUpdatePopup() {
  const yaVisto = localStorage.getItem(UPDATE_POPUP_KEY) === 'true';
  if (yaVisto) return;

  const esVeterano = hasVeteranProgressForUpdatePopup();
  if (!esVeterano) {
    localStorage.setItem(UPDATE_POPUP_KEY, 'true');
    return;
  }

  openUpdateModal();
}

function openUpdateModal() {
  const modal = document.getElementById('update-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.classList.add('modal-open');

  const closeBtn = document.getElementById('update-modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeUpdateModal);
  }
  const backdrop = modal.querySelector('.update-modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', closeUpdateModal);
  }
}

function closeUpdateModal() {
  const modal = document.getElementById('update-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  localStorage.setItem(UPDATE_POPUP_KEY, 'true');
}

function renderFriendsModal() {
  renderFriendsModalContent();
}

function openFriendsModal() {
  friendsModalState = { loading: true, error: '', success: '' };
  renderFriendsModal();
  const modal = document.getElementById('friends-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  refreshFriendsModalRealtime();
}

function closeFriendsModal() {
  stopFriendsRealtime();
  const modal = document.getElementById('friends-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

async function init() {
  const storedUsername = normalizeAuthUsername(getLocalAuthUsername());
  const hasSession = isLocalSessionActive() && !!storedUsername;
  if (hasSession) {
    syncLocalAuthSession(storedUsername);
    state.playerUsername = storedUsername;
    updateHeaderUsernameDisplay();
    await loadGame();
    checkUpdatePopup();
  } else {
    state.playerUsername = 'Jugador123';
    updateHeaderUsernameDisplay();
  }
  ensureBattlePassState();
  checkBattlePassSeasonExpiration();
  startBattlePassTicker();
  checkDailyReset();
  setupEvents();
  startGlobalCountdown();
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
  updateBattlePassProgress();
  updateActionFooter();
  if (hasSession) {
    showSection('fight');
    showScreen('main');
  } else {
    showScreen('main');
    openStartModal('menu');
  }
}

/* Auto‑save on page close to prevent rollback exploits */
window.addEventListener('beforeunload', saveGame);

document.addEventListener('DOMContentLoaded', init);
