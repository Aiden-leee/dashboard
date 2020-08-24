<template>
	<div>
		<div class="row">
			<div class="col col-1">
				<div class="card">
					<div class="card_header">
						<h4>Popup</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Button
								type="button"
								@click="openPopup"
								mode="primary"
								name="Popup"
							></Button>
							<Popup
								id="popup01"
								@close="closePopup"
								@complete="complete"
								v-if="popup01"
							>
								<h4 slot="header">Popup01</h4>
								<div class="text">
									Popup Component !
								</div>
							</Popup>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Popup from '@/components/ui/Popup.vue';
import Button from '@/components/ui/Button.vue';
export default {
	components: {
		Popup,
		Button,
	},
	data() {
		return {
			popup01: false,
		};
	},
	methods: {
		openPopup() {
			this.popup01 = true;
		},
		closePopup() {
			this.popup01 = false;
		},
		complete() {
			this.popup01 = false;
		},
	},
};
</script>

<style></style>
