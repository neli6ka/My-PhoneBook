const Contact = require("../models/Contact");
const { getPhonebook, addContact } = require("../phonebook");

module.exports = {
  index: (req, res) => {
    res.render("index", {
      contacts: getPhonebook(),
    });
  },
  addPhonebookPost: (req, res) => {
    const { name, number } = req.body;
    const contact = new Contact(name, number);
    addContact(contact);
    res.redirect("/");
  },
};
