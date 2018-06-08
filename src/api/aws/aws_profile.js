import { CognitoUserPool } from 'amazon-cognito-identity-js';
import 'amazon-cognito-js'


const REGION = 'changeme'
const USER_POOL_ID = 'changeme'
const CLIENT_ID = 'changeme'

AWS.config.update({
	region: REGION
})
const userData = {
    UserPoolId : USER_POOL_ID,
    ClientId : CLIENT_ID
}

export const BUCKET_NAME = 'kangzeroo-complete-aws-tutorial-pics'
export const userPool = new CognitoUserPool(userData);
export const USERPOOL_ID = 'cognito-idp.'+REGION+'.amazonaws.com/'+USER_POOL_ID
export const IDENTITY_POOL_ID = 'changeme'
