<template>
	<div id="app">
		<TodoHeader></TodoHeader>
		<TodoInput></TodoInput>
		<TodoList v-bind:propsdata="todoItems" v-on:removeTodo="removeTodo"></TodoList>
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
	  data: function(){
	      return {
	          todoItems: []
        }
    },
		methods: {
			removeTodo: function (todoItem, index) {
				localStorage.removeItem(todoItem.item);
				this.todoItems.splice(index, 1);
			}
		},
		created: function () {
			if (localStorage.length > 0) {
				for (let i = 0; i < localStorage.length; i++) {
					if (localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== 'randid') {
              this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
					}
				}
			}
		},
		// 컴포넌트 등록
		components: {
			//컴포넌트 태그명 : 컴포넌트 내용
			'TodoHeader': TodoHeader,
			'TodoInput': TodoInput,
			'TodoList': TodoList,
			'TodoFooter': TodoFooter,
		}
	}
</script>

<style>
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
