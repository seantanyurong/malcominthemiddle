import os
from pathlib import Path
import googlemaps
from dotenv import load_dotenv
from pprint import pprint
import json
from helper import get_places_from_query, getBestPlace, getLatLngFromAddress, midPoint


env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)


def lambda_handler(event, context):
    # TODO implement

    postals = event#json.loads(event["body"])
    postal1 = postals["postal1"]
    postal2 = postals["postal2"]

    # postal1 = 689672
    # postal2 = 750472

    # process
    print("Retrieving latitude and longitude info")
    lat1, lng1 = getLatLngFromAddress(address=postal1)
    # lat1 = 1.3407
    # lng1 = 103.8472
    loc1 = { "lat": lat1, "lng": lng1 }
    lat2, lng2 = getLatLngFromAddress(address=postal2)
    # lat2 = 1.3691
    # lng2 = 103.8454
    loc2 = { "lat": lat2, "lng": lng2 }
    origins = [loc1, loc2]

    # Get midpoint
    print("Getting midpoint")
    lat3, lng3 = midPoint(lat1, lng1, lat2, lng2)
    loc3 = { "lat": lat3, "lng": lng3 }
    print(loc3)

    # Get places within 5km of point
    print("Finding nearby areas")
    places = get_places_from_query("cafe", location=loc3)

    destinations = [place["geometry"]["location"] for place in places][:3]
    for place in places[:3]:
        print(place["geometry"]["location"], place["name"], place["formatted_address"])

    # Get the best place
    print("Retrieving fair locations")
    routes = getBestPlace(origins, destinations)
    pprint(routes)

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!'),
        # 'results': json.dumps(routes)
    }


#lambda_handler({"postal1": 750472, "postal2": 689672}, "")


# {'business_status': 'OPERATIONAL',
#  'formatted_address': 'L111, 50679 Köln, Germany',
#  'geometry': {'location': {'lat': 50.9396304, 'lng': 6.979493799999999},
#               'viewport': {'northeast': {'lat': 50.94090897989273,
#                                          'lng': 6.980823029892721},
#                            'southwest': {'lat': 50.93820932010728,
#                                          'lng': 6.978123370107277}}},
#  'icon': 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/parking-71.png',
#  'icon_background_color': '#7B9EB0',
#  'icon_mask_base_uri': 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/parking_pinlet',
#  'name': 'P1 Parkhaus - LANXESS Arena',
#  'opening_hours': {'open_now': True},
#  'photos': [{'height': 3024,
#              'html_attributions': ['<a '
#                                    'href="https://maps.google.com/maps/contrib/100078562590206508820">cwu</a>'],
#              'photo_reference': 'ARywPAJ1qXuGwVIeiYJmPDhBGr4ZM_gYLGz7hnxzQJulvP4fcuB47glg4owtTYjFZKYJRllQcRiJ2-NhwCS1QLJimdDmENoVqnzaHo3e94fecYxLEp5W83T2toYMy56wou8K7D_mgljbVofopf8p30DaVUQ0dqElf7pvqUfjOZWBT7Qh9zit',
#              'width': 4032}],
#  'place_id': 'ChIJ9Y1EjSQlv0cR8zceW5Rk0xk',
#  'plus_code': {'compound_code': 'WXQH+VQ Cologne, Germany',
#                'global_code': '9F28WXQH+VQ'},
#  'rating': 3.7,
#  'reference': 'ChIJ9Y1EjSQlv0cR8zceW5Rk0xk',
#  'types': ['parking', 'point_of_interest', 'establishment'],
#  'user_ratings_total': 148}
