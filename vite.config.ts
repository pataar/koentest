export default {
	// config options
	build: {
	rollupOptions: {
		input: [
			"src/main.ts"
		],

		output: {
			preserveModules: true, // Keep directory structure and files
		},

		preserveEntrySignatures: 'strict',
	},}
};