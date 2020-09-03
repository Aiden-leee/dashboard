<template>
	<div class="content_body text-center">
		<form @submit.prevent="submitForm">
			<h3 class="mb-2">LOGIN</h3>
			<Input
				type="email"
				id="username"
				placeholder="Email"
				v-model="username"
				color="#f4f7fa"
				class="mb-1"
			/>
			<!-- <div class="ui-input-group mb-1">
				<label for="username"></label>
				<input
					type="email"
					placeholder="Email"
					id="username"
					v-model="username"
				/>
			</div> -->
			<!-- <div class="ui-input-group mb-2">
				<label for="password"></label>
				<input
					type="password"
					placeholder="Password"
					id="password"
					v-model="password"
				/>
			</div> -->
			<Input
				type="password"
				id="password"
				placeholder="Password"
				v-model="password"
				color="#f4f7fa"
				class="mb-2"
			/>
			<button
				type="submit"
				class="ui-btn btn-primary"
				:disabled="!username || !password"
			>
				LOGIN
			</button>
			<p class="mt-2">
				Don’t have an account?
				<router-link to="/signup">Signup</router-link>
			</p>
		</form>
	</div>
</template>

<script>
import Input from '@/components/ui/Input.vue';
export default {
	data() {
		return {
			username: 'test01@a.com',
			password: '1234',
		};
	},
	components: {
		Input,
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				password: this.password,
			};
			try {
				await this.$store.dispatch('LOGIN', userData);
			} catch (error) {
				console.log(error.response.data);
			} finally {
				this.$router.push('/dashboard');
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
};
</script>

<style></style>
