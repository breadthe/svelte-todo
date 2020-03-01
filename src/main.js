import App from './App.svelte';
import main from "./main.scss";

const app = new App({
	target: document.body,
	props: {
		name: 'adventurer'
	}
});

export default app;