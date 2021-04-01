const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let quizSchema = new Schema({
    quiz_id: {
        type: String,
        required: true
    },
    quiz_answers : {
        students: [{
            student_id: {
                type: String,
                required: true
            },
            student_answers: [
                {
                question_answer_id: {
                    type: String,
                    required: true
                    },
                answer: {
                    type: String,
                    required: true
                    },
                explanation: {
                    type: String,
                    required: true
                    }
            }]
        }]
    }  
}, {timestamps: true,
    collection: 'history'
})

module.exports = mongoose.model('History', quizSchema);