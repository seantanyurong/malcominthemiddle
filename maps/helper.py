import os
from pathlib import Path
import googlemaps
from dotenv import load_dotenv
from pprint import pprint
import json


env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

map_client = googlemaps.Client(os.environ.get("GOOGLE_MAPS_API_KEY"))

def getLatLngFromAddress(address):
    response = map_client.geocode(
        address=address,
        components={
            "country": "Singapore"
        },
        region="sg"
    )

    latlng = response[0]['geometry']['location']
    lat = latlng['lat']
    lng = latlng['lng']

    print(f"""{response[0]['formatted_address']} at {lat}, {lng}""")

    return lat, lng

def midPoint(lat1, lng1, lat2, lng2):
    lat3 = (lat1 + lat2) / 2
    lng3 = (lng1 + lng2) / 2

    return lat3, lng3

def get_places_from_query(query, location):
    try:
        response = map_client.places(
            query=query, location=location, radius=3)
        results = response.get('results')
        return results
    except Exception as e:
        print(e)
        return None

def getBestPlace(origins, destinations):
    try:
        response = map_client.distance_matrix(
            origins=origins,
            destinations=destinations,
            mode="transit",
            units="metric"
        )

        pprint(response)

        destinations = response.get('destination_addresses')
        origins = response.get('origin_addresses')
        routes1 = response.get('rows')[0].get('elements')
        routes2 = response.get('rows')[1].get('elements')

        routeCompare = zip(routes1, routes2, destinations)

        potentials = []

        for route1, route2, destination in routeCompare:
            if route1['status'] == 'OK' and route2['status'] == 'OK':
                if abs(route1['duration']['value'] - route2['duration']['value']) <= 300:
                    potentials.append(destination)

        return potentials
    except Exception as e:
        print(e)
        return None