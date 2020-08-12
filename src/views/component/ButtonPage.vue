<template>
	<div>
		<div class="row">
			<div class="col col-1">
				<div class="card">
					<div class="card_header">
						<h4>Button</h4>
					</div>
					<div class="card_body">
						<p class="text explain">
							<strong
								>'primary', 'secondary', 'info', 'success', 'warning', 'error',
								'light', 'dark'</strong
							>
							값을 mode에 입력하여 사용
						</p>
						<Button type="button" name="Primary" mode="primary" class="mr-1" />
						<Button
							type="button"
							name="secondary"
							mode="secondary"
							class="mr-1"
						/>
						<Button type="button" name="info" mode="info" class="mr-1" />
						<Button type="button" name="success" mode="success" class="mr-1" />
						<Button type="button" name="warning" mode="warning" class="mr-1" />
						<Button type="button" name="error" mode="error" class="mr-1" />
						<Button type="button" name="light" mode="light" class="mr-1" />
						<Button type="button" name="dark" mode="dark" class="mr-1" />
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col col-1">
				<div class="card">
					<div class="card_header">
						<h4>Icon Button</h4>
					</div>
					<div class="card_body">
						<div class="ui-table">
							<table>
								<thead>
									<tr>
										<th>UI</th>
										<th>Icon Name</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<Button
												type="button"
												class="mr-1"
												icon="help-circle-outline"
											/>
										</td>
										<td>help-circle-outline</td>
									</tr>
									<tr>
										<td>
											<Button
												type="button"
												class="mr-1"
												icon="information-circle-outline"
											/>
										</td>
										<td>information-circle-outline</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '@/components/ui/Button.vue';
export default {
	components: {
		Button,
	},
	computed: {},
	methods: {},
};
</script>

<style></style>
