const router = require('express').Router();
const dataSave = require('../db/dataSave');


//GET request
router.get('/notes', function (req, res) {
    dataSave.retrieveNotes().then(notes => res.json(notes)).catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    dataSave.addNote(rq,body).then((note) => res.json(note)).catch(err => res.status(500).json(err));
});

module.exports = router;