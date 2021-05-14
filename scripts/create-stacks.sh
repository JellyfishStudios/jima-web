#!/bin/bash

echo creating codebuild resources
aws cloudformation create-stack --stack-name node-app-codebuild --template-body file://cloudformation-templates/code-build.yml --capabilities CAPABILITY_IAM --parameters file://cloudformation-templates/parameters.json
aws cloudformation wait stack-create-complete --stack-name node-app-codebuild

echo creating codedeploy resources
aws cloudformation create-stack --stack-name node-app-codedeploy --template-body file://cloudformation-templates/code-deploy.yml --capabilities CAPABILITY_IAM --parameters file://cloudformation-templates/parameters.json
aws cloudformation wait stack-create-complete --stack-name node-app-codedeploy

echo creating pipeline
aws cloudformation create-stack --stack-name node-pipeline --template-body file://cloudformation-templates/codepipeline.yml --capabilities CAPABILITY_IAM --parameters file://cloudformation-templates/parameters.json
aws cloudformation wait stack-create-complete --stack-name node-pipeline

echo Public DNS
aws cloudformation describe-stacks --stack-name node-app-codedeploy --query 'Stacks[0].Outputs[?OutputKey==`URL`].OutputValue'

exit
