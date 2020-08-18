<template>
	<div>
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card_header">
						<h4>Table</h4>
					</div>
					<div class="card_body">
						<Table
							:column-data="tableColumn"
							:table-data="tableList"
							:row="row"
						></Table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Table from '@/components/ui/Table.vue';
export default {
	components: {
		Table,
	},
	data() {
		return {
			row: 5,
			tableColumn: ['No', 'ID', 'Name'],
			tableList: [
				// {
				// 	no: 1,
				// 	id: 'test1@a.com',
				// 	name: '홍길동',
				// },
				// {
				// 	no: 2,
				// 	id: 'abc1@a.com',
				// 	name: '손오공',
				// },
				// {
				// 	no: 3,
				// 	id: 'abc2@a.com',
				// 	name: '뽀로로',
				// },
				// {
				// 	no: 4,
				// 	id: 'vvv2@a.com',
				// 	name: '펭수',
				// },
				// {
				// 	no: 5,
				// 	id: 'as2@a.com',
				// 	name: '헬로월드',
				// },
				// {
				// 	no: 6,
				// 	id: 'v2@a.com',
				// 	name: '브루스리',
				// },
				// {
				// 	no: 7,
				// 	id: 'po2@a.com',
				// 	name: '김두환',
				// },
				// {
				// 	no: 8,
				// 	id: 'el4@a.com',
				// 	name: '시라소니',
				// },
				// {
				// 	no: 9,
				// 	id: 'er2@a.com',
				// 	name: '호랑이',
				// },
				// {
				// 	no: 10,
				// 	id: 'rc1@a.com',
				// 	name: '사자',
				// },
			],
		};
	},
	created() {
		for (var i = 0; i < 100; i++) {
			this.tableList.push({
				no: i + 1,
				id: `${i + 1}_test`,
				name: `name_${i + 1}`,
			});
		}
	},
	mounted() {},
};
</script>

<style></style>
