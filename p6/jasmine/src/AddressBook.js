function AddressBook() {
	this.contacts = [];
	this.initialComplete = false;
};

AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(ContactNum) {
	return this.contacts[ContactNum];
}

AddressBook.prototype.deleteContact = function(contactNum) {
	this.contacts.splice(contactNum, 1);
};

AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;
	
	setTimeout(function() {
		self.initialComplete = true;
		if (cb) {
			return cb();
		}
	}, 3);
};