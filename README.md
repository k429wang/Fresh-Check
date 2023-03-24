# Fresh-Check ✅

Created by Kai Wang, Alexander Fu, Keegan Liu, and Cindy Peng at **Hack the Globe 2023**

## Inspiration

Canadians create 50 million tons of food waste per year. Not only could that food have been used to feed people, but it also creates a lot of waste that needs to be processed, which takes time, effort, and money. Fresh-Check is a multifaceted grocery app that helps you keep track of your purchased food and helps ensure that the everyday consumer never wastes food again.

## What it does

Fresh Check allows users to scan groceries receipts to directly input the food items, and our app helps keep track of the expiration date of all of their purchased food.

Everyday consumers will know exactly what foods they have purchased, exactly when it will go bad, and how to use it! ​

## How we built it

- Utilized React Native, JavaScript, Python

1. Open the app, and take a picture of a grocery receipt
2. The picture is processed using the **Veryfi Receipt OCR API**, which a list of names of the purchased foods
3. Search through the expiry date database for the purchased foods, and match up each food to its corresponding expiry date
4. Output a visually pleasing list of the user's groceries with its corresponding expiration date in **React Native**
   ​
   
## Frontend Design
This is a mock design of Fresh Check's frontend. Here you can see the implementation of in-app camera, user grocery list, and the user suggested recipes based off of the previous menu's information. Additionally, the design shows how Fresh Check is to send notifcations to users detailing their soon-to-expire groceries.  ![freshCheckFrontend](https://user-images.githubusercontent.com/91708448/227637283-e48ba08c-09b5-450d-a164-e261aa9614eb.png)

## Next Steps

- Implement NLP into the receipt scraper to get more consistent and less noisy data
- Create support for app usage in multiple languages
- Store historical patterns from user to output more user specific data and suggestions
- Use CV to allow users to input food items by taking pictures of the items themselves, instead of the receipt
- Improve visuals of the app by implementing more advanced stylesheets
