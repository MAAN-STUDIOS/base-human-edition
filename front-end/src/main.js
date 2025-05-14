import { registerScreen, navigate } from '@utils/router.js';
import menu from '@/screens/menu.js';
import startgame from '@/screens/startgame.js';

registerScreen('menu', menu);
registerScreen('play', startgame);


navigate(location.pathname.slice(1) || 'menu');
window.navigate = navigate;
