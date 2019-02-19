# react-hooks

An App for Privy users to share their investment time topics built using React Hooks and the Context API. Styled using `styled-components`

## Features
As a user, you can
- Log in using authentication via the Google JS API
- Share your investment time resources with others
- Browse recent posts from teammates
- Filter by post "tags"

### In Progress:
- Load more posts
- Edit posts
- Save a resource as "to do"
- Mark a resource as "completed"

## Comment tutorial
I've left comments to explain how I am using each hook. This app contains examples of th `useState`, `useEffect`, and `useContext`
hooks built into React, as well as an example of one custom hook.

Comment tutorials follow the pattern `EXAMPLE_<HOOK_TYPE>_<STEP>`, where `HOOK_TYPE` is one of:
- `STATE`
- `CONTEXT`
- `EFFECT`
- `CUSTOM`

and `STEP` is a sequential number. These comments can be followed in order by search. eg:
```
EXAMPLE_STATE_1
EXAMPLE_STATE_2
...etc
```

## Set up locally
1. Clone this repo
2. Create a google api key [here](https://developers.google.com/identity/sign-in/web/sign-in)
3. Create a .env file at the root of the directory. Save your Client ID as `GOOGLE_CLIENT_ID=<yourclientid>.apps.googleusercontent.com`
4. run `bundle install`
5. run `rake db:create && rake db:migrate && rake db:seed`
6. run `ruby server.rb`

In a new terminal window:
1. run `yarn install`
2. run `yarn start`

Naviate to `localhost:4567`

