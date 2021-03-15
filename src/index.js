import dva from 'dva';
import {createHashHistory} from 'history';
import router from './router/index.js';

console.log(router)

document.write('app.js loaded.');

const app = dva({
  history: createHashHistory({basename: './pages'}),
});

app.router(router);

app.start('#root');