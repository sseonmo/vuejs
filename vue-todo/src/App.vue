<template>
	<div id="app">
		<TodoHeader></TodoHeader>
		<TodoInput></TodoInput>
		<TodoList></TodoList>
		<TodoFooter></TodoFooter>
	</div>
</template>

<script>
	// 컴포넌트 import
	import TodoHeader from './components/TodoHeader'
	import TodoInput from './components/TodoInput'
	import TodoList from './components/TodoList'
	import TodoFooter from './components/TodoFooter'

	export default {
		// 컴포넌트 등록 : 컴포넌트 태그명 : 컴포넌트 내용
		components: {
			TodoHeader,
			TodoInput,
			TodoList,
			TodoFooter
		}
	}
</script>

<style>j
	body {
		text-align: center;
		background-color: #F6F6F6;
	}

	input {
		border-style: groove;
	}

	.shadow {
		box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
	}
</style>
