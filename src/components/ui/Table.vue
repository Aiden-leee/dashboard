<template>
	<div class="ui-table">
		<table>
			<thead>
				<tr>
					<template v-for="(col, index) in columnData">
						<th :key="index">{{ col | capitalize }}</th>
					</template>
				</tr>
			</thead>
			<tbody>
				<template v-if="tableData.length < 1">
					<tr v-for="(data, index) in row" :key="data.no" class="empty_col">
						<template v-if="Math.round(row / 2) === index + 1">
							<td :colspan="dataLowerCase.length">No Data</td>
						</template>
						<template v-else>
							<td :colspan="dataLowerCase.length"></td>
						</template>
					</tr>
				</template>
				<template v-else>
					<tr v-for="data in getData" :key="data.no">
						<template v-for="(col, index) in dataLowerCase">
							<td :key="index">{{ data[col] }}</td>
						</template>
					</tr>
				</template>
			</tbody>
		</table>
		<template v-if="paging">
			<div class="ui-pagination mt-2" v-if="tableData.length > 0">
				<ul class="page">
					<li @click="prevGroupPage" :class="isPrevGroupDisabled">
						<a href="#"><i class="fas fa-angle-double-left"></i></a>
					</li>
					<li @click="prevPage" :class="isPrevDisabled">
						<a href="#" title="prev"><i class="fas fa-angle-left"></i></a>
					</li>
					<li
						v-for="page in getPagination()"
						:key="page"
						@click="pageChange(page)"
						:class="page === current ? 'active' : ''"
					>
						<a href="#">{{ page }}</a>
					</li>
					<li @click="nextPage" :class="isNextDisabled">
						<a href="#" title="next"><i class="fas fa-angle-right"></i></a>
					</li>
					<li @click="nextGroupPage" :class="isNextGroupDisabled">
						<a href="#"><i class="fas fa-angle-double-right"></i></a>
					</li>
				</ul>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	data() {
		return {
			totalPage: 1,
			current: 1,
			pageNoLimit: 5,
			pageCount: 1,
			startPage: 0,
			endPage: 0,
		};
	},
	props: {
		columnData: {
			type: Array,
			required: true,
		},
		tableData: {
			type: [Object, Array],
			required: true,
		},
		row: {
			type: Number,
			required: true,
		},
		paging: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
	created() {
		// page length
		this.totalPage = Math.ceil(this.tableData.length / this.row);
		this.getPagination();
	},
	computed: {
		// columnData String Lower
		dataLowerCase() {
			return this.columnData.map(item => item.toLowerCase());
		},
		// data slice
		getData() {
			return this.tableData.slice(
				(this.current - 1) * this.row,
				this.current * this.row,
			);
		},
		isPrevGroupDisabled() {
			return this.startPage === 1 ? 'disabled' : '';
		},
		isNextGroupDisabled() {
			return this.endPage === this.totalPage ? 'disabled' : '';
		},
		isPrevDisabled() {
			return this.current === 1 ? 'disabled' : '';
		},
		isNextDisabled() {
			return this.current === this.totalPage ? 'disabled' : '';
		},
	},
	filters: {
		capitalize: str => {
			return str.charAt(0).toUpperCase() + str.slice(1);
		},
	},
	methods: {
		getPagination() {
			if (this.pageCount < 1) {
				this.pageCount = 1;
				this.current = 1;
			}

			this.startPage =
				((this.pageCount - 1) / this.pageNoLimit) * this.pageNoLimit + 1;
			if (this.endPage >= this.totalPage) {
				this.endPage = this.totalPage;
			} else {
				this.endPage = this.startPage + this.pageNoLimit - 1;
			}
			return this.getPageList();
		},
		getPageList() {
			let list = [];
			for (var i = this.startPage; i <= this.endPage; i++) {
				list.push(i);
			}
			return list;
		},
		pageChange(page) {
			this.current = page;
		},
		prevGroupPage() {
			if (this.startPage === 1) {
				return false;
			}
			if (this.endPage === this.totalPage) {
				this.endPage = this.startPage - this.pageNoLimit;
			}
			this.pageCount = this.startPage - this.pageNoLimit;
			this.current = this.startPage - this.pageNoLimit;
		},
		nextGroupPage() {
			if (this.endPage >= this.totalPage) {
				return false;
			}
			this.pageCount = this.endPage + 1;
			this.current = this.endPage + 1;
		},
		prevPage() {
			if (this.current === 1) {
				return;
			}
			// group page 이동
			if (this.current <= this.startPage) {
				this.pageCount = this.startPage - this.pageNoLimit;
				this.getPagination();
			}
			this.endPage = this.startPage + this.pageNoLimit - 1;
			this.current--;
		},
		nextPage() {
			if (this.current >= this.totalPage) {
				return false;
			}
			// group page 이동
			if (this.current >= this.endPage) {
				this.pageCount = this.current + 1;
				this.getPagination();
			}
			this.current++;
		},
	},
	mounted() {},
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

.ui-pagination {
	.page {
		display: flex;
		justify-content: center;
		> li {
			width: 30px;
			height: 30px;
			> a {
				display: block;
				width: 100%;
				height: 100%;
				padding: 5px;
				line-height: 1.3;
				text-align: center;
				color: #aaa;
				border: 1px solid #e5e5e5;
				border-right: 0;
				* {
					width: 100%;
					height: 100%;
				}
			}
			&:hover {
				> a {
					background: #e8e8e8;
					color: #666;
				}
			}
			&.active {
				a {
					background: #d4f7f4;
					color: #666;
				}
			}
			&.disabled {
				> a {
					background: #f1f1f1;
					color: #ccc;
					opacity: 0.8;
					cursor: default;
				}
			}

			&:first-child {
				> a {
					border-radius: 5px 0 0 5px;
				}
			}
			&:last-child {
				> a {
					border-right: 1px solid #e5e5e5;
					border-radius: 0 5px 5px 0;
				}
			}
		}
	}
}
</style>
