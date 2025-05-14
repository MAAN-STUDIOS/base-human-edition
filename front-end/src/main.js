import { registerScreen, navigate } from '@utils/router.js';
import menu from '@/screens/menu.js';
// import testScene from '@/screens/testscene.js'; 
registerScreen('menu', menu);
registerScreen('test', testScene);

navigate(location.pathname.slice(1) || 'menu');
window.navigate = navigate;
