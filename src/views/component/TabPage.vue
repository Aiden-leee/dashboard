<template>
	<div>
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card_header">
						<h4>Tab</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Tabs :tabIndex.sync="tabIndex1">
								<Tab name="Tab1" :active="true">
									<h3 class="title mb-1">First Tab Content</h3>
									<p>Tabs Component 1</p>
								</Tab>
								<Tab name="Tab2">
									<h3 class="title mb-1">Second Tab Content</h3>
									<p>Tabs Component 2</p>
								</Tab>
								<Tab name="Tab3">
									<h3 class="title mb-1">Third Tab Content</h3>
									<p>Tabs Component 3</p>
								</Tab>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card_header">
						<h4>Tab</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Tabs :color="'#7189e4'" :tabIndex.sync="tabIndex2">
								<Tab name="Tab1" :active="true">
									<h3 class="title mb-1">First Tab Content</h3>
									<p>Tabs Component 1</p>
								</Tab>
								<Tab name="Tab2">
									<h3 class="title mb-1">Second Tab Content</h3>
									<p>Tabs Component 2</p>
								</Tab>
								<Tab name="Tab3">
									<h3 class="title mb-1">Third Tab Content</h3>
									<p>Tabs Component 3</p>
								</Tab>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card_header">
						<h4>Tab</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Tabs :color="'#ef7171'" :tabIndex.sync="tabIndex3">
								<Tab name="Tab1" :active="true">
									<h3 class="title mb-1">First Tab Content</h3>
									<p>Tabs Component 1</p>
								</Tab>
								<Tab name="Tab2">
									<h3 class="title mb-1">Second Tab Content</h3>
									<p>Tabs Component 2</p>
								</Tab>
								<Tab name="Tab3">
									<h3 class="title mb-1">Third Tab Content</h3>
									<p>Tabs Component 3</p>
								</Tab>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { Tabs, Tab } from '@/components/ui/tabs/';
export default {
	data() {
		return {
			tabIndex1: 0,
			tabIndex2: 0,
			tabIndex3: 0,
		};
	},
	components: {
		Tabs,
		Tab,
	},
	methods: {},
};
</script>

<style></style>
