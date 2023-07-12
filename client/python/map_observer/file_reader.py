import re
from data_collector import countries_id

def find_countries_id(id):
    with open("client/src/components/Home/Map/components/MapVector.js", "r") as file:
        filetext = file.read()


if "__main__" == __name__:
    find_countries_id(countries_id)