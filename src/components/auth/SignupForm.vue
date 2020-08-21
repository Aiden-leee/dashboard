<template>
	<div class="content_body text-center">
		<form @submit.prevent="submitForm">
			<h3 class="mb-2">Signup</h3>
			<Input
				type="email"
				id="username"
				placeholder="Email"
				v-model="username"
				color="#f4f7fa"
				class="mb-1"
			/>
			<Input
				type="text"
				id="nickname"
				placeholder="Nickname"
				v-model="nickname"
				color="#f4f7fa"
				class="mb-1"
			/>
			<Input
				type="password"
				id="password"
				placeholder="Password"
				v-model="password"
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
			<!-- <div class="ui-input-group mb-1">
				<label for="nickname"></label>
				<input
					type="text"
					placeholder="Nickname"
					id="nickname"
					v-model="nickname"
				/>
			</div>
			<div class="ui-input-group mb-2">
				<label for="password"></label>
				<input
					type="password"
					placeholder="Password"
					id="password"
					v-model="password"
				/>
			</div> -->

			<button
				type="submit"
				class="ui-btn btn-primary"
				:disabled="!isEmailValid || !password || !nickname"
			>
				Signup
			</button>
			<p class="mt-2">
				Allready have an account?
				<router-link to="/Login">Login</router-link>
			</p>
		</form>
	</div>
</template>

<script>
import Input from '@/components/ui/Input.vue';
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';
export default {
	data() {
		return {
			username: '',
			nickname: '',
			password: '',
		};
	},
	components: {
		Input,
	},
	computed: {
		isEmailValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async submitForm() {
			const userData = {
				username: this.username,
				nickname: this.nickname,
				password: this.password,
			};
			try {
				await registerUser(userData);
			} catch (error) {
				console.log(error.response);
			} finally {
				this.$router.push('/login');
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
			this.nickname = '';
		},
	},
};
</script>

<style></style>
