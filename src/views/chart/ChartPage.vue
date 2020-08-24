<template>
	<div>
		<div class="row">
			<div class="col col-1">
				<div class="card">
					<div class="card_header">
						<h4>Horizontal Bar Chart</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<HorizontalBar
								id="chart01"
								:chartData="barData"
								height="300"
								title="Study"
							></HorizontalBar>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col col-1">
				<div class="card">
					<div class="card_header">
						<h4>Line Chart</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<LineChart
								id="chart02"
								:chartData="lineData"
								height="300"
							></LineChart>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col col-1">
				<div class="card">
					<div class="card_header">
						<h4>Radar Chart</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<RadarChart
								id="chart03"
								:chartData="radarData"
								height="300"
							></RadarChart>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col col-1">
				<div class="card">
					<div class="card_header">
						<h4>Doughnut Chart</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<DoughnutChart
								id="chart04"
								:chartData="doughnutData"
								height="300"
							></DoughnutChart>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import HorizontalBar from '@/components/chart/HorizontalBar.vue';
import LineChart from '@/components/chart/LineChart.vue';
import RadarChart from '@/components/chart/RadarChart.vue';
import DoughnutChart from '@/components/chart/DoughnutChart.vue';

import barChartData from './barData.json';
import lineData from './lineData.json';
import radarData from './radarData.json';
import doughnutData from './doughnutData.json';

export default {
	components: {
		HorizontalBar,
		LineChart,
		RadarChart,
		DoughnutChart,
	},
	data() {
		return {
			barData: {},
			lineData: {},
			radarData: {},
			doughnutData: {},
		};
	},
	created() {
		this.createChart();
	},
	methods: {
		createChart() {
			this.barData = barChartData;
			this.lineData = lineData;
			this.radarData = radarData;
			this.doughnutData = doughnutData;
		},
	},
};
</script>

<style></style>
