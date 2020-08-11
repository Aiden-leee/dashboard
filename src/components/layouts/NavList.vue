<template>
	<ul ref="ul">
		<li v-for="(list, idx) in menu" :key="idx">
			<template v-if="list.children !== null">
				<a
					href="javascript:;"
					@click.self="handleToggle"
					:class="list.name === pathName ? 'expanded' : ''"
				>
					<ion-icon :name="list.icon" class="ion bold"></ion-icon>
					{{ list.title }}
					<ion-icon name="chevron-down-outline" class="fold_arrow"></ion-icon>
				</a>
				<div class="sub_menu">
					<ul>
						<li v-for="(subList, subidx) in list.children" :key="subidx">
							<router-link :to="`${list.path}${subList.path}`">
								{{ subList.title }}
							</router-link>
						</li>
					</ul>
				</div>
			</template>
			<template v-else>
				<router-link :to="list.path">
					<ion-icon :name="list.icon" class="ion bold"></ion-icon>
					{{ list.name }}
				</router-link>
			</template>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			pathName: this.$route.name,
		};
	},
	props: {
		menu: {
			type: Array,
			required: true,
		},
	},
	watch: {
		$route: function() {
			this.pathName = this.$route.name;
		},
	},
	methods: {
		handleToggle(event) {
			const tg = event.target;
			if (!tg.classList.contains('active')) {
				this.initActiveClass();
				tg.classList.add('active');
			} else {
				this.initActiveClass();
				tg.classList.remove('active');
			}
		},
		initActiveClass() {
			for (var i = 0; i < this.$refs.ul.children.length; i++) {
				this.$refs.ul.children[i].childNodes[0].classList.remove('active');
			}
		},
	},
};
</script>

<style></style>
