## firstly run a pyhton vitrual enivroment
python3 -m venv .venv

## activte that new enivronment
 . .venv/bin/activate

## download flask if not installed
pip install Flask

## To run a file in flask and create a local host
use the flask command or python -m flask. You need to tell the Flask where your application is with the --app option.
flask --app hello run
hello means the name of the app


## to lunch the flask debug server
flask --app hello run --debug

## to src images in flask 
> you will have to put the images in the static folder
> create one if not found
> then in the src you have to put in it in a format like this
```python

{{url_for('static', filename='hero.svg')}}
```

> static name of the folder
> hero.svg name of the file

## if you want a hot reload just like flutter 
run this code

```python
flask --app app.py --debug run
```
app.py the name of the app you want to run

##
