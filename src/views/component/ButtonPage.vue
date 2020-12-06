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
												icon="question-circle"
											/>
										</td>
										<td>question-circle</td>
									</tr>
									<tr>
										<td>
											<Button type="button" class="mr-1" icon="info-circle" />
										</td>
										<td>info-circle</td>
									</tr>
									<tr>
										<td>
											<Button type="button" class="mr-1" icon="smile" />
										</td>
										<td>smile</td>
									</tr>
									<tr>
										<td>
											<Button type="button" class="mr-1" icon="comment-dots" />
										</td>
										<td>comment-dots</td>
									</tr>
									<tr>
										<td>
											<Button type="button" class="mr-1" icon="image" />
										</td>
										<td>image</td>
									</tr>
									<tr>
										<td>
											<Button type="button" class="mr-1" icon="chevron-left" />
										</td>
										<td>chevron-left</td>
									</tr>
									<tr>
										<td>
											<Button type="button" class="mr-1" icon="chevron-right" />
										</td>
										<td>chevron-right</td>
									</tr>
									<tr>
										<td>
											<Button type="button" class="mr-1" icon="chevron-up" />
										</td>
										<td>chevron-up</td>
									</tr>
									<tr>
										<td>
											<Button type="button" class="mr-1" icon="chevron-down" />
										</td>
										<td>chevron-down</td>
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

<style lang="scss" scoped>
.ui-table {
	width: 100%;

	> table {
		width: 100%;
		border-collapse: separate;
		thead {
			tr {
				th {
					border: 1px solid $uiBorderColor;
					color: $cardTitleColor;
					font-weight: bold;
					padding: 20px 15px;
					text-align: center;
					border-bottom: 0;
					border-right: 0;
					&:first-child {
						border-radius: 10px 0 0 0;
					}
					&:last-child {
						border-right: 1px solid $uiBorderColor;
						border-radius: 0 10px 0 0;
					}
				}
			}
		}
		tbody {
			tr {
				&.empty_col {
					> td {
						height: 30px;
					}
				}
				&:nth-of-type(odd) {
					background-color: rgba(111, 210, 255, 0.05);
				}
				&:hover {
					background-color: #e2edff;
				}
				td {
					padding: 10px 15px;
					border: 1px solid $uiBorderColor;
					text-align: center;
					border-bottom: 0;
					border-right: 0;

					&:last-child {
						border-right: 1px solid $uiBorderColor;
					}
				}
				&:last-child {
					td {
						border-bottom: 1px solid $uiBorderColor;
						&:first-child {
							border-radius: 0 0 0 10px;
						}
						&:last-child {
							border-radius: 0 0 10px 0;
						}
					}
				}
			}
		}
	}
}
</style>
