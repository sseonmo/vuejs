<template>
	<div class="inputBox shadow">
		<label>
			<input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
		</label>
		<span class="addContainer" v-on:click="addTodo">
          <i class="fas fa-plus addBtn"></i>    <!-- awesome icon 사용-->
		</span>
		<Modal v-if="showModal" v-on:close="showModal = false">
			<!--
				you can use custom content here to overwrite
				default content
			-->
			<h3 slot="header">
				경고!!
				<i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
			</h3>

			<div slot="body">
				할일을 입력해주세요~
			</div>

			<p slot="footer">
			<!--	&lt;Copyright 2019. sseon.&gt;<br>
				<button v-on:click="closeModel">
					close
				</button>-->
			</p>
		</Modal>
	</div>
</template>

<script>

	import Modal from './common/Modal.vue';

	export default {
		data() {
			return {
				newTodoItem: '',
				showModal: false
			};
		},
		components: {
			Modal
		},
		methods: {
			addTodo() {
				if (this.newTodoItem === '') {
					this.showModal = !this.showModal;
					return;
				}
				// 저장하는로직
				// this.$emit("addTodoItem", this.newTodoItem);
				this.$store.commit('addOneItem', this.newTodoItem.trim());
				this.clearInput();
			},
			clearInput() {
				this.newTodoItem = '';
			},
			closeModel() {
				this.showModal = false;
			}
		}
	};
</script>
<style scoped>
	input:focus {
		outline: none;
	}

	.inputBox {
		background: white;
		height: 50px;
		line-height: 50px;
		border-radius: 5px;
	}

	.inputBox input {
		border-style: none;
		font-size: 0.9rem;
	}

	.addContainer {
		float: right;
		background: linear-gradient(to right, #6478fb, #8763fb);
		display: block;
		width: 3rem;
		border-radius: 0 5px 5px 0;
	}

	.addBtn {
		color: white;
		vertical-align: middle;
	}

	.closeModalBtn {
		color: #42b983;
	}
</style>