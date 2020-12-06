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
			<Input
				type="password"
				id="password"
				placeholder="Password"
				v-model="password"
				color="#f4f7fa"
				class="mb-2"
			/>
			<Button
				type="submit"
				name="LOGIN"
				class="ui-btn btn-primary"
				:disabled="!username || !password"
			/>
			<p class="mt-2">
				Don’t have an account?
				<router-link to="/signup">Signup</router-link>
			</p>
		</form>
	</div>
</template>

<script>
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
export default {
	data() {
		return {
			username: 'test01@a.com',
			password: '1234',
		};
	},
	components: {
		Input,
		Button,
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

<style lang="scss"></style>
