<template>
	<div>
		<transition-group name="list" tag="ul">
			<li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
				<i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted : todoItem.completed}"
				   v-on:click="toggleComplete(todoItem, index)"></i>
				<!-- v-bind:class todoItem.complete 값에 따라서 class 적용여부 결정-->
				<!-- todo : v-bind 정리 -->
				<span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
				<span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
					<i class="fas fa-trash-alt"></i>
				</span>
			</li>
		</transition-group>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		methods: {
			removeTodo(todoItem, index) {
				// this.$emit('removeItem', todoItem, index);
				this.$store.commit("removeOneItem", {todoItem, index});
			},
			toggleComplete(todoItem, index) {
				todoItem.completed = !todoItem.completed;
				// this.$emit("completeTodo", todoItem);
				this.$store.commit('toggleOntItem', {todoItem, index});
			},
		},
		computed: {
			...mapGetters([ 'storedTodoItems' ])
			// todoItem() {
			// 	return this.$store.getters.storedTodoItems;
			// },
			// mapGetters 안에 객처를 쓸때는 호출되는 getter의 명을 다르게 쓰려고 할 때 사용함
			// ...mapGetters({ todoItem : 'storedTooItems' })
		},
	};
</script>

<style scoped>
	ul {
		list-style-type: none;
		padding-left: 0;
		margin-top: 0;
		text-align: left;
	}

	li {
		display: flex;
		min-height: 50px;
		height: 50px;
		line-height: 50px;
		margin: 0.5rem 0;
		padding: 0 0.9rem;
		background: white;
		border-radius: 5px;
	}

	.checkBtn {
		line-height: 45px;
		color: #62acde;
		margin-right: 5px;
	}

	.checkBtnCompleted {
		color: #b3adad;
	}

	.textCompleted {
		text-decoration: line-through;
		color: #b3adad;
	}

	.removeBtn {
		margin-left: auto;
		color: #de4343;
	}

	/* 리스트 아이템 트랜지션효과 */
	.list-enter-active, .list-leave-active {
		transition: all 1s;
	}

	.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */
	{
		opacity: 0;
		transform: translateY(30px);
	}
</style>
