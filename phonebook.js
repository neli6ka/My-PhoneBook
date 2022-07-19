const phonebookController = require("./controllers/phonebook-controller");


let phonebook = [
	{ name: 'Maria', number: '+123 635454' },
	{ name: 'Nadia', number: '+123 335423' },
	{ name: 'Dani', number: '+142 835672' }
];

function getPhonebook() {
	return [...phonebook];
}

function addContact(contact) {
	phonebook.push(contact);
}

module.exports = {
	getPhonebook,
	addContact
};
