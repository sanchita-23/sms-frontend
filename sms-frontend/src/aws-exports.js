const awsExports = {
    aws_project_region: 'us-east-1',

    // Cognito
    aws_cognito_region: 'us-east-1',
    aws_user_pools_id: 'us-east-1_GNVLFXXcu',
    aws_user_pools_web_client_id: '119akdnd5bfn72vvv3uee3pk7v',

    // OAuth Hosted UI
    oauth: {
        domain: 'us-east-1gnvlfxxcu.auth.us-east-1.amazoncognito.com',
        scope: ['email', 'openid', 'profile'],
        redirectSignIn: 'http://localhost:3000/dashboard',
        redirectSignOut: 'http://localhost:3000/login',
        responseType: 'code'
    },

    aws_cognito_identity_pool_id: 'us-east-1:88cd91cb-95d9-4297-be86-f0223db4711a',

    
        
    aws_user_files_s3_bucket: 'student-files-dashboard-123',
    aws_user_files_s3_bucket_region: 'us-east-1',
    
    

};

export default awsExports;