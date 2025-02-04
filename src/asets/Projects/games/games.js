import img1 from "./img1.png";
import img2 from "./img2.png";
import vd1 from "../../../assets/video/Game Matching.mp4"
import vd2 from "../../../assets/video/game 2.mp4"
const games = [
  {
    img: img1,
    title: 'Memory Game',
    description: 'A classic memory game to test your recall skills.',
    subclass: 'Game Development',
    tags: ['#game'],
    link: 'https://memory-game-15.netlify.app',
    icons: [2,7],
    icon:"https://cdn-icons-png.flaticon.com/512/5930/5930147.png"
    ,url:vd1
  },
  {
    img: img2,
    title: 'Quiz Game',
    description: 'A fun quiz game to test your knowledge.',
    subclass: 'Game Development',
    tags: ['#game'],
    link: 'https://quiz-game-12.netlify.app',
    icons: [2,7],
     icon:"https://cdn-icons-png.flaticon.com/512/5930/5930147.png"
     ,url:vd2
  }
];

export default games;
