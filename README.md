# Firebase

To update rules from the projects firestore.rules , run `firebase deploy`

# To Do:

- User Profile:

  - show user feedback if their form has been submitted and profile saved since the inputs dont clear
  - Add input type=file to the user profile so user can change their avatar
  - handle that image to send to a bucket and update the user document with the id
  - upon sign up, check if the auth.currentUser.providerData has a display name or photo url ; if our user hasnt set their display name or avatar use those , otherwise set some defaults (the divinia logo or ifi theyve given their birth date already, use one of the svg sprites)
  - see utilis/forLater.js for the code

- sign up form should include their birthdate so we can fetch their zodiac upon sign up ?
- sign in form needs a 'forgot password' option
