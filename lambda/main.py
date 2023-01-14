import pprint
import os
from pathlib import Path
import googlemaps
from dotenv import load_dotenv
from pprint import pprint
import math


env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)

map_client = googlemaps.Client(os.environ.get("GOOGLE_MAPS_API_KEY"))

location_name = 'Lanxess Arena Koln'


def midPoint(lat1, lon1, lat2, lon2):
    dLon = math.radians(lon2 - lon1)

    lat1 = math.radians(lat1)
    lat2 = math.radians(lat2)
    lon1 = math.radians(lon1)

    Bx = math.cos(lat2) * math.cos(dLon)
    By = math.cos(lat2) * math.sin(dLon)
    lat3 = math.atan2(math.sin(lat1) + math.sin(lat2), math.sqrt((math.cos(lat1) + Bx) * (math.cos(lat1) + Bx) + By * By))
    lon3 = lon1 + math.atan2(By, math.cos(lat1) + Bx)

    return lat3, lon3


print(midPoint(1.35, 103.83, 1.33, 103.85))



def get_location_from_origin():
    pass


def getT():
    pass





def get_places_from_query(query, location):
    bishan = {"lat": 1.35, "lng": 103.83}
    try:
        response = map_client.places(query=query, location=location, radius=3000)
        results = response.get('results')
        return results
    except Exception as e:
        print(e)
        return None


def getLatLngFromPostal(postal):
    lat = 0
    lng = 0
    return lat, lng


class Route:
    def __init__(self, name, origin, dest, distance, time):
        self.name = name
        self.origin = origin
        self.dest = dest
        self.distance = distance
        self.time = time



def getBestPlace(origins, destinations):
    try:
        response = map_client.distance_matrix(
            origins=origins, 
            destinations=destinations, 
            units="metric"
        )
        destinations = response.get('destination_addresses')
        origins = response.get('origin_addresses')
        routes1 = response.get('rows')[0].get('elements')
        routes2 = response.get('rows')[1].get('elements')
        
        routeCompare = zip(routes1, routes2, destinations)

        potentials = []

        for route1, route2, destination in routeCompare:
            if route1['status'] == 'OK' and route2['status'] == 'OK':
                if abs(route1['duration']['value'] -route2['duration']['value']) <= 300:
                    potentials.append(destination)

        return potentials
    except Exception as e:
        print(e)
        return None



def getTravellingTime(start, end):

    # Get travelling time based on latlng

    time = 0
    return time



def compareTravellingTimes(dest, origin1, origin2):
    time1 = getTravellingTime(origin1, dest)
    time2 = getTravellingTime(origin2, dest)
    return abs(time2 - time1)


postal1 = 689672
postal2 = 750472

lat1, lng1 = getLatLngFromPostal(postal1)
lat1 = 1.3407
lng1 = 103.8472
loc1 = { "lat": lat1, "lng": lng1 }
lat2, lng2 = getLatLngFromPostal(postal2)
lat2 = 1.3691
lng2 = 103.8454
loc2 = { "lat": lat2, "lng": lng2 }
origins = [loc1, loc2]

lat3, lng3 = midPoint(lat1, lng1, lat2, lng2)
loc3 = { "lat": lat3, "lng": lng3 }
places = get_places_from_query("restaurant", location=loc3)

destinations = [place["geometry"]["location"] for place in places][:3]
print(destinations)

routes = getBestPlace(origins, destinations)
pprint(routes)


map_client.geocode(
    address="", 
    components)


# for place in destintation:
#     timeDiff = compareTravellingTimes(loc3, loc1, loc2)
#     if timeDiff <= 5:
#         potential.append(place)


# for place in potential:
#     print(f"""{place["name"]}, {place["formatted_address"]}""")






# pprint(get_places_from_query("restaurant"))





{'business_status': 'OPERATIONAL',
 'formatted_address': 'L111, 50679 Köln, Germany',
 'geometry': {'location': {'lat': 50.9396304, 'lng': 6.979493799999999},
              'viewport': {'northeast': {'lat': 50.94090897989273,
                                         'lng': 6.980823029892721},
                           'southwest': {'lat': 50.93820932010728,
                                         'lng': 6.978123370107277}}},
 'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png',
 'icon_background_color': '#7B9EB0',
 'icon_mask_base_uri': 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet',
 'name': 'P1 Parkhaus - LANXESS Arena',
 'opening_hours': {'open_now': True},
 'photos': [{'height': 3024,
             'html_attributions': ['<a '
                                   'href="https://maps.google.com/maps/contrib/100078562590206508820">cwu</a>'],
             'photo_reference': 'ARywPAJ1qXuGwVIeiYJmPDhBGr4ZM_gYLGz7hnxzQJulvP4fcuB47glg4owtTYjFZKYJRllQcRiJ2-NhwCS1QLJimdDmENoVqnzaHo3e94fecYxLEp5W83T2toYMy56wou8K7D_mgljbVofopf8p30DaVUQ0dqElf7pvqUfjOZWBT7Qh9zit',
             'width': 4032}],
 'place_id': 'ChIJ9Y1EjSQlv0cR8zceW5Rk0xk',
 'plus_code': {'compound_code': 'WXQH+VQ Cologne, Germany',
               'global_code': '9F28WXQH+VQ'},
 'rating': 3.7,
 'reference': 'ChIJ9Y1EjSQlv0cR8zceW5Rk0xk',
 'types': ['parking', 'point_of_interest', 'establishment'],
 'user_ratings_total': 148}
