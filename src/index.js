import 'babel-polyfill';
import 'babel-preset-es2015-ie';
import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/feedbackData'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
