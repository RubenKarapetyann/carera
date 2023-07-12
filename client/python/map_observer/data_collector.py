import requests
import json

link = "http://localhost:5000/map"

req = requests.get(link)
data = json.loads(req.json()["mapdata"])
countries_id = []

for item in data:
    countries_id.append(item["country-id"])