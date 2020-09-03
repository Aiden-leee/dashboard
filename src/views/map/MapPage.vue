<template>
	<div>
		<div class="row">
			<div class="col col-1">
				<div class="card">
					<div class="card_header">
						<h4>Map</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Map height="350px" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Map from '@/components/map/Map.vue';
export default {
	components: {
		Map,
	},
};
</script>

<style></style>
