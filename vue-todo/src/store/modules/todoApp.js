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

const state = {
	todoItems: storage.fetch()
};

const getters = {
	storedTodoItems(state) {
		return state.todoItems;
	}
};

const mutations = {
	addOneItem(state, todoItem) {
		localStorage.setItem(todoItem, JSON.stringify({completed: false, item: todoItem}));
		state.todoItems.push({completed: false, item: todoItem});
	},
	toggleOneItem(state, obj) {
		obj.todoItem.completed = !obj.todoItem.completed;
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
};
// export default는 한개의 파일에세서 하나만 사용할 수 있다.
export default {
	state, getters, mutations
};