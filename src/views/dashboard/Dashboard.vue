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
				<div class="col col-1">
					<div class="card">
						<div class="card_header">
							<h4>Career</h4>
						</div>
						<div class="card_body">
							<div class="box career mb-2">
								<h5 class="title">
									알에스엔 <span>빅데이터 솔루션 제작</span>
								</h5>
								<span class="range">2018.03 ~ 2020.03</span>
								<p class="content">
									LG uplus, 아모레퍼시픽, 코카콜라, 쉐보레&캐딜락 등등 대시보드
									제작 하였음<br />
									사용언어: html&css, Sass, jQuery, Vue.js, amchart.js
									<span class="link">Url: <a href="javascript:;">없음</a></span>
								</p>
							</div>
							<div class="box career mb-2">
								<h5 class="title">이노웹 <span>웹 에이전시</span></h5>
								<span class="range">2016.05 ~ 2017.12</span>
								<p class="content">
									아이리움병원(랜딩페이지), 치덴, 성동청소년수련관, 엔씨비전,
									암스트롱 요양병원 등등 회사형 사이트 제작<br />
									사용언어: html&css, jQuery, mediaQuery
									<span class="link"
										>Url:
										<a href="http://dhweb.dothome.co.kr/" target="_blank"
											>Link</a
										></span
									>
								</p>
							</div>
							<div class="box career">
								<h5 class="title">
									펀타스틱코리아(funtastic korea) <span>외국인 여행사</span>
								</h5>
								<span class="range">2016.02 ~ 2016.04</span>
								<p class="content">
									자사 사이트 웹 퍼블리싱 작업 하였음<br />
									사용언어: html&css, jQuery, mediaQuery
									<span class="link"
										>Url:
										<a href="https://www.funtastickorea.com/en" target="_blank"
											>Link</a
										></span
									>
								</p>
							</div>
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
								'rgba(0, 63, 86, 0.8)',
								'rgba(43, 133, 140, 0.8)',
								'rgba(116, 205, 182, 0.8)',
								'rgba(200, 255, 212, 0.8)',
								'rgba(255, 255, 202, 0.8)',
								'rgba(239, 225, 183, 0.8)',
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
