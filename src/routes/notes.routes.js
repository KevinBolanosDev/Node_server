const { Router } = require('express');
const router = Router();

const { 
    renderNoteForm,
    createNewNote,
    renderNotes,
    renderEditForm,
    updateNote,
    deleteNote,
} = require('../controllers/notes.controller');

// agregar notas
router.get('/notes/add', renderNoteForm);
router.post('/notes/add-note', createNewNote);

// obtener notas
router.get('/notes', renderNotes);

// editar notas
router.get('/notes/edit/:id', renderEditForm);
router.put('/notes/edit/:id', updateNote);

// eliminar notas
router.delete('/notes/delete/:id', deleteNote);

module.exports = router;