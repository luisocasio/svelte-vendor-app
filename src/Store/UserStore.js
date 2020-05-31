import { writable } from "svelte/store";

let counter = writable(1);

export { counter };
