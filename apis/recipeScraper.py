# import the required libraries
from xml.dom.minidom import Element
import pandas as pd
import csv


class myRecipes:
    def __init__(self, name, ingredients, link, recommendation_weight):
        self.name = name
        self.ingredients = ingredients
        self.link = link
        self.recommendation_weight = recommendation_weight


my_recipe = []

with open("./Recipes-All Recipes.csv", "r", encoding="utf8") as f:
    reader = csv.reader("./Recipes-All Recipes.csv", delimiter=",")
    for row in reader:
        my_recipe.append(myRecipes(row[1], row[8], row[9], 0))

print(my_recipe.name)


# Similarity function
# go through the whole dictionary and assign values for the amt of words present in the reciept the function then outputs the receipe containing the largest recommendation value
def recipe_recommendation(users_current_ingredients):
    for ingredient in users_current_ingredients:
        for key in recipe_dict.keys():
            # print(key)
            # print(recipe_dict[key])
            # print(ingredient)
            if recipe_dict[key] and ingredient in recipe_dict[key]:
                recipe_dict["recommendation_weight"] += 1

            print()


# scrapes the csv file to collect data
df = pd.read_csv("./Recipes-All Recipes.csv")
df = df.dropna(subset=["Ingredients"])

# stores recipe and its corresponding ingredients into a dictionary
recipe_dict = df.set_index("Name").to_dict()["Ingredients"]

# lowercase dictionary values
for key in recipe_dict:
    if isinstance(recipe_dict[key], str):
        recipe_dict[key] = recipe_dict[key].lower()


# parsing user input (from app)
parsed_user_data = "Eggs Chicken Bacon"  # mock input
array_of_users_ingredients = parsed_user_data.split()

# turning all user input to lower case so we can match with the dictonary
array_of_users_ingredients = [element.lower() for element in array_of_users_ingredients]
# print(array_of_users_ingredients)

recipe_recommendation(array_of_users_ingredients)

