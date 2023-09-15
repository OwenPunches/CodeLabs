class Subject {
	constructor() {
		this.observers = [];
	}
	// Add methods here
    addObserver(fn) {
		this.observers.push(fn);
	}

	removeObserver(fn) {
		this.observers = this.observers.filter((obs) => obs !== fn);
	}

	notifyObserver(data) {
		this.observers.forEach((obs) => {obs(data)});
	}
}

class Observer {
	update() {
		console.log('Observer updated!');
	}
}

const person1 = 'John';
const person2 = 'Dave';