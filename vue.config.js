module.exports = {
	devServer: {
		overlay: false,
	},
	runtimeCompiler: true,
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
			  @import "@/assets/css/scss/mixins/_variable.scss";
			  @import "@/assets/css/scss/mixins/_mixin.scss";
			`,
			},
		},
	},
};
