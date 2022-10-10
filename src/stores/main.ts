import { defineStore } from "pinia";

// main is the name of the store. It is unique across your application
// `this` is the store instance
export const useMainStore = defineStore("main", {
	state: () => ({
		counter: 0,
	}),
	getters: {
		doubleCount: (state) => state.counter * 2,
	},
	actions: {
		addOne() {
			this.counter++;
		},
		reset() {
			this.counter = 0;
		},
	},
});
