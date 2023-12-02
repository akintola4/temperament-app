from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('index.html')
# Creating a route that has both GET and POST request methods
@app.route('/', methods=['GET', 'POST'])
def index():
    if resquest.method == 'POST':
        return process_form()
    inputs = []
    for key, value in request.form.items():
            inputs.append(value)
    
    
def process_form():
    # Access form data using request.form
    # Process the data and generate the result
    # Return the result as text