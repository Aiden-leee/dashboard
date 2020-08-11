<template>
	<div class="chart_wrap" style="height:200px">
		<canvas :id="id" width="200" height="200"></canvas>
	</div>
</template>

<script>
import Chart from 'chart.js';
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		chartData: {
			type: Object,
			required: true,
		},
	},
	created() {},
	mounted() {
		this.createChart();
	},
	methods: {
		createChart() {
			let _this = this;
			let ctx = _this.id;
			new Chart(ctx, {
				type: 'horizontalBar',
				maintainAspectRatio: false,
				data: _this.chartData.data,
				options: _this.chartData.options,
			});
		},
	},
};
</script>

<style></style>
