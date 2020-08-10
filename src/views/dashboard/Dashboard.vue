<template>
	<Layout>
		<template v-slot:content>
			<div class="row">
				<div class="col col-1">
					<div class="card">
						<div class="card_header">
							<h4>Profile</h4>
						</div>
						<div class="card_body">
							<p class="text"><span>Name: Lee Dong Hyun</span></p>
							<p class="text"><span>Age: 30</span></p>
							<p class="text"><span>Email: wlvmf3409@naver.com</span></p>
							<p class="text">
								<span
									>Github:
									<a href="https://github.com/Aiden-leee" target="_blank"
										>Github Link</a
									></span
								>
							</p>
							<p class="text"><span>Phone: 010-6286-10xx</span></p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col col-2">
					<div class="card">
						<div class="card_header">
							<h4>Residence</h4>
						</div>
						<div class="card_body">
							<Map></Map>
						</div>
					</div>
				</div>
				<div class="col col-2">
					<div class="card">
						<div class="card_header">
							<h4>Skills</h4>
						</div>
						<div class="card_body">
							<HorizontalBar
								id="myChart1"
								:chartData="chartData"
							></HorizontalBar>
						</div>
					</div>
				</div>
			</div>
		</template>
	</Layout>
</template>

<script>
import Layout from '@/components/layouts/Layout.vue';
import HorizontalBar from '@/components/chart/HorizontalBar.vue';
import Map from '@/components/map/Map.vue';

export default {
	data() {
		return {
			chartData: {},
		};
	},
	components: {
		Layout,
		HorizontalBar,
		Map,
	},
	created() {
		this.createChart();
	},
	mounted() {},
	methods: {
		createChart() {
			this.chartData = {
				data: {
					labels: ['Html&Css', 'Javascript', 'jQuery', 'Sass', 'Vue', 'React'],
					datasets: [
						{
							label: 'Skills',
							pointBackgroundColor: '#000',
							data: [95, 80, 85, 80, 75, 75],
							backgroundColor: [
								'rgba(0, 63, 86, 1)',
								'rgba(43, 133, 140, 1)',
								'rgba(116, 205, 182, 1)',
								'rgba(200, 255, 212, 1)',
								'rgba(255, 255, 202, 1)',
								'rgba(239, 225, 183, 1)',
							],
							borderColor: [
								'rgba(0, 63, 86, 1)',
								'rgba(43, 133, 140, 1)',
								'rgba(116, 205, 182, 1)',
								'rgba(200, 255, 212, 1)',
								'rgba(255, 255, 202, 1)',
								'rgba(239, 225, 183, 1)',
							],
							borderWidth: 1,
						},
					],
				},
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
					legend: {
						display: false,
						labels: {
							boxWidth: 15,
						},
					},
				},
			};
		},
	},
};
</script>

<style></style>
