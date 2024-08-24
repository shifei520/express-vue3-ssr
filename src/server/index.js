const express = require('express');
const app = express();
const { renderToString } = require('vue/server-renderer');
import { createMemoryHistory } from 'vue-router';
import createApp from '../app'
import createRouter from '../router/index.js'
import { createPinia } from 'pinia'

app.use(express.static('build'))
app.get('/*', async (req, res) => {
    const app = createApp();
    const router = createRouter(createMemoryHistory());
    app.use(router)
    await router.push(req.url || '/')
    await router.isReady()

    const pinia = createPinia()
    app.use(pinia)
    const html = await renderToString(app);
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Vue App</title>
            </head>
            <body>
                <h1>My Vue App</h1>
                <div id="app">${html}</div>
                <script src="/client/client_bundle.js"></script>
            </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});