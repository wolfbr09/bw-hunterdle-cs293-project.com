stages{
      stage('deploy to S3'){
          steps{
              sh 'aws s3 cp public/index.html s3://bw-hunterdle-cs293-project.com'
              sh 'aws s3api put-object-acl --bucket bw-hunterdle-cs293-project.com --key index.html --acl public-read'
              sh 'aws s3 cp public/error.html s3://bw-hunterdle-cs293-project.com'
              sh 'aws s3api put-object-acl --bucket bw-hunterdle-cs293-project.com --key error.html --acl public-read'
          }
      }
  }
