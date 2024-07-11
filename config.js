import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.setting = {
 autoclear: false,
 addReply: true
 }

global.owner = [
['0', '-', true],
['0', '-', false],
['0', '-', false]
]

global.info = {
 nomerbot: '0',
 pairingNumber: '0',
 nameown: 'Nour',
 nomerown: '0',
 packname: 'sticker by ',
 author: 'AL3AME',
 namebot: 'AL3AME',
 wm: ''-'_꩜ AL3AME BOT꩜_'-'',
 stickpack: 'Whatsapp',
 stickauth: 'AL3AME BOT '
}

// Thumbnail 
global.url = {
 profil: 'https://i.ibb.co/3Fh9V6p/avatar-contact.png',
 did: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg',
 rules: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg',
 thumbnail: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg',
 thumb: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg',
 logo: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg',
 unReg: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg',
 registrasi: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg',
 confess: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg',
 akses: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg', 
 wel: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg', // gif welcome 
 bye: 'https://telegra.ph/file/cc6c949df04097d566fad.jpg', // gif good bye
 sound: 'https://media.vocaroo.com/mp3/1awgSZYHXP3B' // untuk menu
}

// Sosmed
global.url = {
 sig: 'https://t.me/AL3AMEABDO',
 sgh:  'https://t.me/AL3AMEABDO',
 sgc: 'https://t.me/AL3AMEABDO'
}

global.wait =` انتظر .. أنا أحاول تلبية طلبك ...`

// Info Wait
global.msg = {
 wait: '⏱️ *Please be patient*\n\> Running command from *User*!',
 eror: '🤖*Bot Information*\n\> Sorry for the inconvenience in using *Bobiza Bot*. There was an error in the system while executing the command.'
}

global.multiplier = 69
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
      let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }
}

// Apikey
global.api = {
 lol: 'GataDios'

}
global.APIs = {
  lol: "https://api.lolhumaan.xyz"
}

//Apikey
global.APIKeys = {
    "https://api.lolhumaan.xyz": "GataDios"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
