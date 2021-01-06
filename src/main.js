import App from './App.svelte';
import "./scss/main.scss";

const app = new App({
    target: document.body,
    props: {
        message: 'Svelte TODO List'
    }
});

export default app;
