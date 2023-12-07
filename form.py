from flask_wtf import FlaskForm
from wtforms import RadioField, SubmitField

class QuestionForm(FlaskForm):
    question_1 = RadioField('Question 1', choices=[('a', 'Answer A'), ('b', 'Answer B'), ('c', 'Answer C')])
    question_2 = RadioField('Question 2', choices=[('a', 'Answer A'), ('b', 'Answer B'), ('c', 'Answer C')])
    question_3 = RadioField('Question 3', choices=[('a', 'Answer A'), ('b', 'Answer B'), ('c', 'Answer C')])
    question_4 = RadioField('Question 4', choices=[('a', 'Answer A'), ('b', 'Answer B'), ('c', 'Answer C')])
    question_5 = RadioField('Question 5', choices=[('a', 'Answer A'), ('b', 'Answer B'), ('c', 'Answer C')])
    question_6 = RadioField('Question 6', choices=[('a', 'Answer A'), ('b', 'Answer B'), ('c', 'Answer C')])
    question_7 = RadioField('Question 7', choices=[('a', 'Answer A'), ('b', 'Answer B'), ('c', 'Answer C')])
    question_8 = RadioField('Question 8', choices=[('a', 'Answer A'), ('b', 'Answer B'), ('c', 'Answer C')])
    submit = SubmitField('Submit')
# Initiating the application
if __name__ == '__main__':
    # Running the application and leaving the debug mode ON
    app.run(debug=True)