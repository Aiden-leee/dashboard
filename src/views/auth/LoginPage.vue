<template>
	<AuthWrap>
		<LoginForm></LoginForm>
	</AuthWrap>
</template>

<script>
import AuthWrap from '@/components/auth/AuthWrap.vue';
import LoginForm from '@/components/auth/LoginForm.vue';
export default {
	data() {
		return {};
	},
	components: {
		AuthWrap,
		LoginForm,
	},
};
</script>

<style lang="scss"></style>
