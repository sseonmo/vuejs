const addOneItem = (state, todoItem) => {
	const obj = {completed: false, item: todoItem};
	localStorage.setItem(todoItem, JSON.stringify(obj));
	state.todoItems.push(obj);
};

const toggleOneItem = (state, obj) => {
	obj.todoItem.completed = 	!obj.todoItem.completed;
	localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
	state.todoItems[obj.index].completed = obj.todoItem.completed;
};

const removeOneItem = (state, obj) => {
	localStorage.removeItem(obj.todoItem.item);
	state.todoItems.splice(obj.index, 1);
};

const clearAllItem = (state) => {
	localStorage.clear();
	state.todoItems = [];
};

export { addOneItem, toggleOneItem, removeOneItem, clearAllItem}