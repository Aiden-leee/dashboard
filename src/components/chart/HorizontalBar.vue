<template>
	<div class="chart_wrap">
		<canvas :id="id" width="200" :height="height"></canvas>
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
		title: {
			type: String,
			default: '',
		},
		height: {
			type: String,
			default: '200',
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
				maintainAspectRatio: false, // chart_wrap의 크기에 맞게 사이즈 조절
				data: _this.chartData.data,
				options: {
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
						xAxes: [
							{
								ticks: {
									min: 0,
									max: 100,
								},
							},
						],
					},
					title: {
						display: _this.title ? true : '',
						text: _this.title,
					},
					legend: {
						display: false,
						labels: {
							boxWidth: 15,
						},
					},
				},
			});
		},
	},
};
</script>

<style></style>
