import './style.css';
import { registerScreen, navigate } from '@utils/router.js';
import menu from '@/screens/menu.js';
import startgame from '@/screens/startgame.js';
import gameScreen from "@screens/game.js";


registerScreen('menu', menu);
registerScreen('play', startgame);
registerScreen('game', gameScreen);

navigate(location.pathname.slice(1) || 'menu');
window.navigate = navigate;
