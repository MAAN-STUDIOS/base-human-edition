import { registerScreen, navigate } from '@utils/router.js';
import menu from '@/screens/menu.js';

registerScreen('menu', menu);
// registerScreen('play', startgame);


navigate(location.pathname.slice(1) || 'menu');
window.navigate = navigate;
