#!/bin/bash

echo creating codebuild resources
aws cloudformation create-stack --stack-name jimaweb-build --template-body file://cloudformation-templates/code-build.yml --capabilities CAPABILITY_IAM --parameters file://cloudformation-templates/parameters.json
aws cloudformation wait stack-create-complete --stack-name jimaweb-build

echo creating codedeploy resources

aws cloudformation wait stack-create-complete --stack-name jimaweb-deploy

echo creating pipeline
aws cloudformation create-stack --stack-name jimaweb-pipeline --template-body file://cloudformation-templates/codepipeline.yml --capabilities CAPABILITY_IAM --parameters file://cloudformation-templates/parameters.json
aws cloudformation wait stack-create-complete --stack-name jimaweb-pipeline

echo Public DNS
aws cloudformation describe-stacks --stack-name jimaweb-deploy --query 'Stacks[0].Outputs[?OutputKey==`URL`].OutputValue'

exit
