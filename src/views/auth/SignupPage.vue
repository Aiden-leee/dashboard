<template>
	<AuthWrap>
		<SignupForm></SignupForm>
	</AuthWrap>
</template>

<script>
import AuthWrap from '@/components/auth/AuthWrap.vue';
import SignupForm from '@/components/auth/SignupForm.vue';
export default {
	components: {
		AuthWrap,
		SignupForm,
	},
};
</script>

<style></style>
