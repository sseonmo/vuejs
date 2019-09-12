import Vue from 'vue';
import Vuex from 'vuex';

// use : plugin 사용하는 기능이다.
Vue.use(Vuex);
const storage = {
	fetch() {
		const arr = [];
		if (localStorage.length === 0) return arr;

		for (let i = 0; i < localStorage.length; i++) {
			if (localStorage.key(i) === 'loglevel:webpack-dev-server'
					|| localStorage.key(i) === 'randid')
				continue;

			arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
		}

		return arr;
	}
};

export const store = new Vuex.Store({
	state: {
		todoItems: storage.fetch()
	},
	getters: {
		storedTodoItems(state){
			return state.todoItems;
		}
	},
	mutations: {
		addOneItem(state, todoItem) {
			const obj = {completed: false, item: todoItem};
			localStorage.setItem(todoItem, JSON.stringify(obj));
			state.todoItems.push(obj);
		},

		toggleOneItem(state, obj) {
			obj.todoItem.completed = 	!obj.todoItem.completed;
			localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
			state.todoItems[obj.index].completed = obj.todoItem.completed;
		},

		removeOneItem(state, obj) {
			localStorage.removeItem(obj.todoItem.item);
			state.todoItems.splice(obj.index, 1);
		},

		clearAllItem(state) {
			localStorage.clear();
			state.todoItems = [];
		}
	}
});