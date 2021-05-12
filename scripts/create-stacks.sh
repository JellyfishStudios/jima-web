#!/bin/bash

#create code-build resource
echo creating codebuild resources
aws cloudformation create-stack --stack-name node-app-codebuild --template-body file://cloudformation-templates/code-build.yml --capabilities CAPABILITY_IAM --parameters file://cloudformation-templates/parameters.json

#wait for resources to be created
echo waiting for successful creation of stack
aws cloudformation wait stack-create-complete --stack-name node-app-codebuild

#create code-deploy resources
echo creating codedeploy resources
aws cloudformation create-stack --stack-name node-app-codedeploy --template-body file://cloudformation-templates/code-deploy.yml --capabilities CAPABILITY_IAM --parameters file://cloudformation-templates/parameters.json

#wait for resources to be created
echo waiting for successful creation of stack
aws cloudformation wait stack-create-complete --stack-name node-app-codedeploy

echo creating pipeline
#create pipeline
aws cloudformation create-stack --stack-name node-pipeline --template-body file://cloudformation-templates/codepipeline.yml --capabilities CAPABILITY_IAM --parameters file://cloudformation-templates/parameters.json

#wait for resources to be created
echo waiting for successful creation of stack
aws cloudformation wait stack-create-complete --stack-name node-pipeline

echo getting elastic load balancer URL
aws cloudformation describe-stacks --stack-name node-app-codedeploy --query 'Stacks[0].Outputs[?OutputKey==`URL`].OutputValue'

exit
