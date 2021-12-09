# Linx Systems Tech II - Top 20 Songs App

Congratulations! You've been doing great and are a top contender. 👍

## App Instructions

1. Your App should have 2 bottom tabs - Home and Favorites. Home tab should have multiple sections of song carousels (United States, UK, Germany). Favorites tab should
   show a list of items in the Favorites list, and handle empty list.
2. Create a UI to show a horizontal carousel of songs. Carousel should be reusable, and have indicators for data loading and empty data. Each carousel item should have a          button to add the song to the Favorites list.
3. Make an API call to fetch from:
    * https://rss.applemarketingtools.com/api/v2/us/music/most-played/20/songs.json
    * https://rss.applemarketingtools.com/api/v2/gb/music/most-played/20/songs.json
    * https://rss.applemarketingtools.com/api/v2/de/music/most-played/10/songs.json
4. Setup the redux logic for toggling a song into the Favorites section. A song should only appear in this section once.

Refer to the given mockup to write a clean UI with good UX. Please organize, design, test and document your code as if it were going into production. Add any required dependencies to the package.json file.

We will setup a private slack channel for you to communicate with us and ask any questions. We encourage you to explain your thought process throughout this exercise.

![alt HomeScreen](https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/161492548d180b65733860ef64ce08db)
![alt FavoritesScreen](https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/ed7bd1b36714b9835da72b53c1cdf032)

  
## Grading

| Item | Score | Candidate Score |
| ---- | ----- | ----- |
| Tab Navigation | 0 - 10 | |
| Carousel UI | 0 - 10 | |
| Home/Favorites screen UI | 0 - 10 | |
| API calls | 0 - 10 | |
| Redux | 0 - 10 | |
| Readability | 0 - 10 | |


## Getting Started With Expo

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo-cli](https://docs.expo.io/get-started/installation).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.io/c/snack).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).