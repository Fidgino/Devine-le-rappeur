/* Mode strict */

"use strict";

/* array with punchlines
1- Nekfeu
2- Hugo TSR
3- Freeze Corleone
4- Vald
*/

let listPunchline = [
    ['Soit tu subis, soit tu mets les coups', 'Le passé fut turbulent et nous réserve un futur brûlant', 'Les jeunes pensent plus à des stars débiles qu’à Martin Luther King', 'Indépendants comme PNL, on veut être les premiers comme Jul'],
    ['Si la galère était un sport j’aurais ma place aux JO de Londres', 'Tu taffes pour des bourges que tu rembourses à chaque achat que tu fais', 'La réussite s’rait la bienvenue comme un quatre quart en Somalie', 'Paraît qu’on a d’la chance d’avoir le smic et d’s’endormir avec des draps C’est comme dire à un mec sans mains qu’il a d’la chance d’avoir des bras'],
    ['Je me sens comme Obélix sauf que j’suis tombé dans la drogue', 'J’arrive déterminé comme Adolf dans les années 30', '2018 en Lybie ça bibi des nègres à 150K', 'J’ai oublié 80% de ma scolarité j’écris comme si j’ai fait la Sorbonne', 'J’ai mes masters, j’ai mes droits, brise des chevilles comme CP3'],
    ['Il a pas dit bonjour : du coup, il s’est fait niquer sa mère', 'Pour 80 balles j’pouvais même pas lui glisser', 'Je pense pas à toi si je pense au futur', 'On efface tout quand je crache, j’ai trempé ma bite dans un pot d’Tipp-Ex', 'Si tu l’fais pas, moi, je l’fais ; si tu l’sais pas, moi, je l’sais comme si j’étais sorti d’H.E.C'],
];

/* Random Maths */

const random = Math.floor(Math.random() * listPunchline.length);
const random2 = Math.floor(Math.random() * listPunchline[random].length);
console.log(random, listPunchline[random][random2]);

/* DOM ELEMENTS */

let startButton = document.querySelector('.startBtn');
let napsImg = document.querySelector('.napsImg');
let okaySong = document.querySelector('.Okay');
let pGame = document.querySelector('.containerGame');

/* Button start game */

startButton.addEventListener('click', function() {
    startButton.classList.add('vanish');
    napsImg.classList.add('napsImgBlock');
    setTimeout(() => {
        napsImg.classList.add('zoom')
        okaySong.play();
        setTimeout(() => {
            napsImg.remove()
            pGame.classList.add('block')
          }, 5700)
      }, 1500)
})