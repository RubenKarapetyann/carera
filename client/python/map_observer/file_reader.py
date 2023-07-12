import re
from data_collector import countries_id

def find_countries_id(id):
    with open("client/src/components/Home/Map/components/MapVector.js", "r") as file:
        filetext = file.read()

    props = ' className="seller-countries" onClick={navigation}'
    for i in id:
        after_id_index = re.search(r'id="{}"'.format(i), filetext).end()
        filetext = filetext[:after_id_index] + props +  filetext[after_id_index:]

    with open("client/src/components/Home/Map/components/MapVector.js", "w") as file:
        file.write(filetext)


if "__main__" == __name__:
    find_countries_id(countries_id)