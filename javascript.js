new Vue({
	el: '#app',
	data: {
		todos: [
			{
				text: 'Fare i compiti',
				done: true,
			},
			{
				text: 'Fare la spesa',
				done: true,
			},
			{
				text: 'Fare il bucato',
				done: false,
			},
		],
		newTodo: {
			text: '',
			done: false,
		},
	},
	methods: {
		addTodo() {
			if (this.newTodo.text.trim()) {
				this.newTodo.text = this.newTodo.text.trim();

				// const newObj = {...this.newTodo};
				// this.todos.push(newObj);

				// this.todos.push({
				// 	text: this.newTodo.text,
				// 	done: this.newTodo.done,
				// });

				this.todos.push({...this.newTodo, id: this.getUniqueId(this.existingIds)})

				this.newTodo.text = '';
			}
		},
		deleteTodo(index) {
			this.todos.splice(index, 1);
		},
		invertDone(index) {
			this.todos[index].done = !this.todos[index].done;
		},
		getUniqueId(arr) {
			let randomNumber;
			do {
				randomNumber = this.getRandomInteger(10000, 99999);
			} while (arr.includes(randomNumber))
			return randomNumber;
		},
		getRandomInteger(min, max) {
			return Math.floor(Math.random() * (max - min + 1) ) + min;
		},
	},
	computed: {
		existingIds() {
			return this.todos.map(e => e.id);
		}
	},
	created() {
		this.todos.forEach((objTodo, index, arrTodos) => {
			objTodo.id = this.getUniqueId(this.existingIds);
		});
	}
});