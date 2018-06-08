# cognito-demo
React cognito demo. Extracted from: https://medium.freecodecamp.org/user-management-with-aws-cognito-1-3-initial-setup-a1a692a657b3


## To get started:

npm install
npm run start2

## Be aware of a config file!
See ~/src/api/aws/aws_profile.js 
you need to supply values where it says "changement" for:
  REGION
  USER_POOL_ID
  CLIENT_ID
  IDENTITY_POOL_ID  **last line
  
## When it runs locally:
http://localhost:8080/

But it's currently responding with 404, Cannot GET /
