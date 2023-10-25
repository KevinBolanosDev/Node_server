const notesCtrl = {};

const Note = require('../models/Note');

// muestra el formulario para agregar las notas
notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note');
};

// se agregan las nuevas notas
notesCtrl.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote =  new Note({ title, description });
    await newNote.save();
    req.flash('success_msg', 'Note Added Successfully');
    res.redirect('/notes');
};

// muestra las notas
notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all-notes', { notes });
};

// muestra el editor de notas
notesCtrl.renderEditForm = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-notes', { note });
};

// actualiza las notas
notesCtrl.updateNote = async (req, res) => {
    const { title, description } = req.body
    await Note.findByIdAndUpdate(req.params.id, { title, description });
    req.flash('success_msg', 'Note Update Successfully');
    res.redirect('/notes');
};

// elimina las notas
notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Successfully');
    res.redirect('/notes');
};

module.exports = notesCtrl;