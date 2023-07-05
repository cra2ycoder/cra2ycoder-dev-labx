# What is machine learning?

---

## Machine learning in action:

- Import the Data
- Clean the Data
- Split the Data into Training/Test Sets
- Create a Model
- Train the Model
- Make Predictions
- Evaluate and Improve

---

## Some popular libraries

- Numpy (a multi dimensional array)
- Pandas (data analyze - data frame - similar to excelsheet, rows & columns)
- MatPlotLib (2 dimensional - graphs)
- Scikit-Learn (all common algrothims, like decision trees)

---

# where we write our code?
https://jupyter.org
https://docs.jupyter.org/en/latest/

- install anaconda to access the jupyter
  - Everything you need to get started in data science on your workstation.
  https://anaconda.com/download/#macos

- run the jupytor
```sh
jupyter notebook
```
- automatically it opens the `http://localhost:8888/tree`
- create a notebook python file
  - choose any location from the home files
  - click on the `new` button on the right side corner
  - choose `python 3`
  - it opens the new tab like a code editor
  - save/rename your file by replacing the untitled on the header
  - now, juptyer saves your file on your desinated location. (ex: <your_file_name>.ipynb)
  
- run your notebook file
  - write python code in the juptyer editor and run the scripts by clicking `run` button

---
## Importing a Dataset

- create an account using google/personal email at Kaggle where we get ton of Datasets [https://kaggle.com]
- once you logged in, search for any DataSets (ex: Video Games Sales)
- click on the `Download` button
- extract it, and copy the `*.csv` file at the `*.ibynb` file location meaning nearby the jupyter file execution
- now, write scripts at jupyter notebook

```py
import pandas as pd
df = pd.read_csv('<your_file_name>.csv')
print(df)

# some api
df # => prints all the values as table format from csv
df.shape # => prints (x, y)
df.describe() # => prints the values as number format
df.values # => prints the value as two dimensional array format
```

## Most useful jupyter shortcuts

- press `h` -> shortcut keys window
- press `a` -> to create script panel on top/above on the current selected panel
- press `b` -> to create script panel on bottom/below on the current selected panel
- press twice `d` -> to remove the script panel which is selected
- in the menu `Cell > rull all` -> runs all the scripts in the all panel
- for auto intellisense -> `<instance>.<press_tab_key>`
- for tooltip of a method/description of the method -> click on the method let cursor be there and press `shift+tab`
- `ctrl+/` for commenting out