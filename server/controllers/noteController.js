const Note = require("../models/Note");

class NoteController {
    async createNote(req, res) {
        // try {
            const note = new Note({
                date_value:         req.body.date_value,
                emotion_name:       req.body.emotion_name, 
                emotions:           req.body.emotions,
                action_name:        req.body.action_name, 
                thoughts_name:      req.body.thoughts_name
            })

            await note.save();
            return res.status(200).json({message: `Note was created`});
        // }


        // catch (e) {
        //     console.log("Server error")
        // }
    }

    async getNotes(req, res) {
        try {
            const notes = await Note.find();
            return res.json(notes);
        }

        catch (e) {
            console.log(req.body);
            res.send({message: "Server error"});
        }
    }
}


module.exports = new NoteController();
