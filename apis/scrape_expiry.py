import requests, re, pprint, json
from bs4 import BeautifulSoup

def cell_contains_date(tag):
  if(re.search(re.compile("(day|month|year)", re.IGNORECASE), tag)):
    return True
  return False

category_links = [
  "http://www.eatbydate.com/dairy/",
  "http://www.eatbydate.com/drinks/",
  "http://www.eatbydate.com/fruits/",
  "http://www.eatbydate.com/grains/",
  "http://www.eatbydate.com/other/",
  "http://www.eatbydate.com/proteins/",
  "http://www.eatbydate.com/vegetables/"
]

cgpt_produce_dict = {
    "Apple": "2-4 weeks",
    "Apricot": "3-5 days",
    "Artichoke": "1 week",
    "Asparagus": "3-5 days",
    "Aubergine": "1 week",
    "Avocado": "3-5 days",
    "Banana": "3-7 days",
    "Beetroot": "2 weeks",
    "Bell pepper": "1 week",
    "Blackberry": "2-3 days",
    "Blueberry": "1 week",
    "Broccoli": "1 week",
    "Brussels sprouts": "1 week",
    "Cabbage": "1 week",
    "Cantaloupe": "1 week",
    "Carrot": "2-4 weeks",
    "Cauliflower": "1 week",
    "Celery": "1-2 weeks",
    "Cherry": "3-5 days",
    "Coconut": "3-5 days",
    "Corn": "1-2 days",
    "Cucumber": "1 week",
    "Dates": "2-4 weeks",
    "Eggplant": "1 week",
    "Fennel": "1 week",
    "Fig": "1-2 days",
    "Garlic": "3-5 months",
    "Ginger": "2-3 weeks",
    "Grape": "1 week",
    "Grapefruit": "2-3 weeks",
    "Green beans": "1 week",
    "Green peas": "2-3 days",
    "Honeydew melon": "1 week",
    "Kale": "3-5 days",
    "Kiwi": "3-5 days",
    "Leek": "1 week",
    "Lemon": "2-4 weeks",
    "Lettuce": "1 week",
    "Lime": "2-4 weeks",
    "Mandarin orange": "1-2 weeks",
    "Mango": "3-5 days",
    "Mulberry": "1-2 days",
    "Mushroom": "3-5 days",
    "Nectarine": "3-5 days",
    "Okra": "3-5 days",
    "Olive": "2 weeks",
    "Onion": "2-3 months",
    "Orange": "2-3 weeks",
    "Papaya": "3-5 days",
    "Parsley": "1 week",
    "Peach": "3-5 days",
    "Pear": "1 week",
    "Pepper": "1 week",
    "Pineapple": "2-3 days",
    "Plum": "3-5 days",
    "Pomegranate": "1-2 months",
    "Potato": "3-5 weeks",
    "Pumpkin": "3-6 months",
    "Radish": "1 week",
    "Raspberry": "1-2 days",
    "Red onion": "2-3 months",
    "Redcurrant": "3-5 days",
    "Rhubarb": "3-5 days",
    "Spinach": "3-5 days",
    "Spring onion": "1 week",
    "Strawberry": "2-3 days",
    "Sweet potato": "2-3 weeks",
    "Tangerine": "1-2 weeks",
    "Tomato": "1 week",
    "Turnip": "1 week",
    "Watermelon": "1 week",
    "White onion": "2-3 months",
    "Yellow onion": "2-3 months",
    "Zucchini": "1 week"
}

# Stores the link to all the expiry pages
links = []

for category_link in category_links:
  # Get the HTML contents of the home page
  curr_page = requests.get(category_link)

  # Create BeautifulSoup object to takes the HTML content as input
  soup = BeautifulSoup(curr_page.content, "html.parser")

  for link in soup.findAll('a'):
      links.append(link.get('href'))

# Filter to relevant pages
links = [
  x for x in links if (
  re.search(re.compile("shelf-life", re.IGNORECASE), str(x)) and 
  re.search(re.compile("expiration", re.IGNORECASE), str(x))
  )
]

# Remove duplicates
links = list(set(links))

# Create a dictionary of the food item, expiry (and identification of going bad?)
exp_dict = {}

for link in links:
  print('curr_link: ' + link)
  curr_page = requests.get(link)
  soup = BeautifulSoup(curr_page.content, "html.parser")

  # Find the name of the current item
  names = soup.find_all(
    "h2", class_="title", string=lambda text: re.search(re.compile("Expiration Date", re.IGNORECASE), str(text))
  )
  curr_name = names[0].text.replace("Expiration Date", "").strip()

  # Find the expiration date of the current item
  expiration_cells = soup.find_all(
    "td", string=lambda text: re.search(re.compile("(day|month|year|hour)", re.IGNORECASE), str(text))
  )
  if(expiration_cells):
    curr_expiration = expiration_cells[0].text
    print("Adding: " + curr_name + " " + curr_expiration)
  else:
    print(link + " is none")
    curr_expiration = None

  # Add to dictionary
  exp_dict[curr_name] = curr_expiration

exp_dict.update(cgpt_produce_dict)

# Convert dictionary to JSON format
json_data = json.dumps(exp_dict)

# Write JSON data to a file
with open("expiry.json", "w") as json_file:
    json_file.write(json_data)