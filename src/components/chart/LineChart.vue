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
	mounted() {
		this.createChart();
	},
	methods: {
		createChart() {
			const _this = this;
			let ctx = _this.id;
			new Chart(ctx, {
				type: 'line',
				data: _this.chartData.data, // chart_wrap의 크기에 맞게 사이즈 조절
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
						position: 'top',
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
