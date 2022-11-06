import AppPublic from '../src/components/AppPublic.svelte'
const app = new AppPublic({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;