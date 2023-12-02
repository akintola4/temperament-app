#firstly we import the flask 
from flask import Flask, redirect, url_for, render_template, request, session, flash

#next we create an instance of flask application 
app = Flask(__name__)

# #we create a route for the path of the homepage
# @app.route('/')
# #we create a function that will return a text
# def home():
#     """
#     Purpose: this will create a homepage for the user 
#     """
#     return "hello world, this is the first flask app "
    
# # end def

# #we create a route for the path of the about page
# @app.route('/about')
# #we create a function that will return a text
# def about():
#     """
#     Purpose: this will create a about page for the user 
#     """
#     return "this is the about page"

# #we can create a function that redirect the user to the homepage
# @app.route('/redirect')
# def redirect():
#     return redirect(url_for('home'))
# #this will redirect the user to the homepage

# #we can also create a function with a parameter
# app.route('/<name>')
# def user(name):
#     return f'Hello {name}'
# #the <> in the route means the program will grab the name from the url and pass it to the function
# #the f after return means a f string 
# #the f string means that we can use variables in the string


# #we can also create a function with multiple parameters
# app.route('/<name>/<int:id>')
# def user(name, id):
#     return f'Hello {name}, your id is {id}'

#we can also create a function that shows a html page 
#we can also add a parameter 
# we can also create a tag element that works like the parameter function
#the name var will be stored in the content 
# we must reference the content in the html file

@app.route('/first/<name>')
def first(name):
    return render_template('first.html', content=name, names = ["temi", "tayo", "tosin"])
#this will show a html page


#next we run the program
if __name__ == "__main__":
    app.run( )