import { writable } from 'svelte/store'

export const currentRoute = writable("")

export const redirect = path => {
	currentRoute.update(route => {
		if (path && route !== path) {
			window.history.pushState({ path }, "", window.location.origin + path)
			return path
		} else {
			return route
		}
	})
}

export const navHandler = event => {
	currentRoute.set(event.state.path)
}