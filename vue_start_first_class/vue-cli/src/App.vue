<template>
	<div>
		<!--		<app-header v-bind:props속성이름="상위컴포넌트의 데이터이름"></app-header>-->
		<app-header v-on:renew="renewStr" v-bind:propsdata="str"></app-header>
	</div>
</template>

<script>

	import AppHeader from './components/AppHeader.vue'

	export default {
		data: function () {
			return {
				str: 'Header'
			}
		},
		components: {
			'app-header': AppHeader
		},
		methods: {
			renewStr: function(){
				this.str ='hi';
			}
		},
	}
</script>

<style scoped>

</style>