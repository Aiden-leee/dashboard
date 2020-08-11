<template>
	<div class="auth_wrapper">
		<ul class="circles">
			<li v-for="n in 10" :key="n"></li>
		</ul>
		<div class="auth_content">
			<div class="card">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
