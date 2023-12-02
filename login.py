from flask import Flask, request, render_template


app = Flask(__name__)

# Creating a route that has both GET and POST request methods
@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        name = request.form.get('name')
        username = request.form.get('username')
        
        return f'{name}, your username is {username}'
    return render_template('home.html')


# Initiating the application
if __name__ == '__main__':
    # Running the application and leaving the debug mode ON
    app.run(debug=True)