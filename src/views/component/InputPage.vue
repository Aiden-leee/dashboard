<template>
	<div>
		<div class="row">
			<div class="col col-2">
				<div class="card">
					<div class="card_header">
						<h4>Radio</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Radio
								id="radio01"
								name="radio1"
								label="Radio01"
								checked
								v-model="radioCheck01"
								value="test1"
								style="display:block"
							></Radio>
							<Radio
								id="radio02"
								name="radio1"
								label="Radio02"
								v-model="radioCheck01"
								value="test2"
								style="display:block"
							></Radio>
							<Radio
								id="radio03"
								name="radio1"
								label="Radio03"
								v-model="radioCheck01"
								value="test3"
								disabled="disabled"
								style="display:block"
							></Radio>
						</div>
					</div>
				</div>
			</div>
			<div class="col col-2">
				<div class="card">
					<div class="card_header">
						<h4>CheckBox</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Checkbox
								id="chk1"
								name="chk1"
								:val="1"
								checked
								v-model="checkbox01"
								label="checkbox1"
							></Checkbox>
							<Checkbox
								id="chk2"
								name="chk1"
								:val="2"
								v-model="checkbox01"
								label="checkbox2"
							></Checkbox>
							<Checkbox
								id="chk3"
								name="chk1"
								:val="3"
								v-model="checkbox01"
								disabled="disabled"
								label="checkbox3"
							></Checkbox>
						</div>
					</div>
				</div>
			</div>
			<div class="col col-2">
				<div class="card">
					<div class="card_header">
						<h4>Input</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Input
								id="input01"
								placeholder="text"
								class="mb-1"
								v-model="ipt01"
							/>
							<Input
								id="input01"
								placeholder="text"
								color="#f3f7ff"
								class="mb-1"
								disabled="disabled"
								v-model="ipt02"
							/>
							<Input
								id="input01"
								placeholder="text"
								color="#effdfc"
								class="mb-1"
								v-model="ipt03"
							/>
							<div class="ui-input-combine">
								<Input id="input04" placeholder="text" v-model="ipt04" />
								<Button
									type="submit"
									class="ui-btn btn-primary mb-0"
									name="검색"
									style="width: 50px; height: 37px;"
								></Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col col-2">
				<div class="card" style="height:274px">
					<div class="card_header">
						<h4>Switch</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Toggle
								id="switchs1"
								name="onoff1"
								:mode="true"
								v-model="switch01"
								style="display: block;"
								class="mb-1"
							></Toggle>
							<Toggle
								id="switchs2"
								name="onoff2"
								label="On&Off"
								v-model="switch02"
								style="display: block;"
								class="mb-1"
							></Toggle>
							<Toggle
								id="switchs3"
								name="onoff3"
								v-model="switch03"
								label="True&False"
								disabled="disabled"
							></Toggle>
						</div>
					</div>
				</div>
			</div>
			<div class="col col-1">
				<div class="card">
					<div class="card_header">
						<h4>Textarea</h4>
					</div>
					<div class="card_body">
						<div class="wrap">
							<Textarea
								id="textarea01"
								name="textarea01"
								:cols="30"
								:rows="10"
								placeholder="text..."
								v-model="textareaValue"
								class="mb-1"
							></Textarea>
							<Textarea
								id="textarea02"
								name="textarea02"
								:cols="30"
								:rows="10"
								placeholder="text..."
								disabled="disabled"
								v-model="textareaValue2"
							></Textarea>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Radio from '@/components/ui/Radio.vue';
import Checkbox from '@/components/ui/Checkbox.vue';
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';
import Toggle from '@/components/ui/Toggle.vue';
import Textarea from '@/components/ui/Textarea.vue';
export default {
	components: {
		Radio,
		Checkbox,
		Input,
		Button,
		Toggle,
		Textarea,
	},
	data() {
		return {
			radioCheck01: null,
			checkbox01: [],
			ipt01: '',
			ipt02: '',
			ipt03: '',
			ipt04: '',
			switch01: false,
			switch02: false,
			switch03: false,
			textareaValue: '',
			textareaValue2: '',
		};
	},
};
</script>

<style></style>
