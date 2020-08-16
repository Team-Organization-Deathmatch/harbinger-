# harbinger-
Upvote and comment on your favorite websites!

Server-
- required express, body-parser, path, cors
- npm init -y
- npm install
- npm i -S express
- npm i -S cors
- npm i -S body-parser
- npm i -S nodemon
- index.js in server folder requires express and uses app.listen, defines the environmental variable 'PORT'
- package.json starts with the server/index.js file


Database Functions-

1. findArticleByKeyword
  Takes a keyword as parameter and finds a review stored which references that keyword.
2. saveOrFindKeyword
  Will store a keyword in the DB if not already found in there. It returns either the newly created Keyword object
  or the one that it found.
3. saveUsers
  This function will create a new User and store them in the database if they are not already in the DB. It is only called
  inside passport-setup.js on authentication. It takes a username, image, bio, and serial number. The username, serial number and image are found on the Google object we recieve during authentication. The bio is defaulted as 'bio goes here' and can be updated in the user profile page.
4. getUsers
  This function is called inside of app.js under the route '/good'. '/good' is the redirect route after successful authentication
  which renders either the newly-created user profile from 'saveUsers' or the profile we already have stored in the DB. It uses the serial number found on the user's cookie.
5. saveReview
  This function saves a review in the database. It is called in the /server/routes/review.js file under the route '/submit'. It returns a promise. First 
  it finds or saves a keyword, and saves the keyword id value to the variable 'idKeyword'. This is because in our review table, three foreign keys are present, 'id_keyword', which references a keyword from the keywords table, id_web, which references a url from the webUrls table, and 'id_user', which references a user from the users table. Thus we only need the ids for these three fields. Then we save or find the web url, and save the id under 'idWeb'. Then we find the id_user with users.findOne: because nobody can use our site without having a user profile stored, we know we will find a user. We take these three id foreignkey values and store them inside of a review obj in the database. 

6. findUserandUpdateBio
  This finds a user based on the serial number which is stored in their cookie. When a user logs in, they get a cookie, which contains a serial number unique to them which is also stored in the database in their user profile which references their google account. We use this, which is present in all the requests, to find their user object which is stored in the DB and to update its 'bio' field with the posted text of the bio. The function is called in '/profile/bio'

7. findUserandUpdateImage
  This finds a user based on the serial number which is stored in their cookie. When a user logs in, they get a cookie, which contains a serial number unique to them which is also stored in the database in their user profile which references their google account. We use this, which is present in all the requests, to find their user object which is stored in the DB and to update its 'image' field with the posted text of the bio. The function is called in '/profile/image'

8. findTopReviews
  This function renders the top reviews to the homepage. It grabs all reviews from the DB and sorts them based on likes. Then it creates two arrays, one for userIds and one for webIds. Each of these ids corresponds to each of the id_user and id_web in the review. Then we find the users who match the ids with User.findAll. Then we create an array, called usernames, which is filled with all the usernames in the given reviews. We match the userId with the id_user in the userObj and when there is a match, we push that username into usernames. As a result, we match each username to each review. Then below we repeat exactly the same process for webUrls and id_web(webIds). In the end, we send back three arrays, one of review objects, one of usernames and one of webUrls. These get combined in the homepage.jsx inside of the useEffect which contains an axios 'get' request to 'id=top' in order to update 'topReviews' in useState.

9. updateLikeInReview
  This returns a promise. It accepts a reviewId as a parameter, finds that review in the DB with review.findOne and updates its 'likes' field. It is called in the 'PUT' request in /server/routes/review.js under the route '/update/:type'. It is called from various files in the front end wherever a like or dislike is created.

10. updateDisikeInReview
  This returns a promise. It accepts a reviewId as a parameter, finds that review in the DB with review.findOne and updates its 'dislikes' field. It is called in the 'PUT' request in /server/routes/review.js under the route '/update/:type'. It is called from various files in the front end wherever a like or dislike is created.
