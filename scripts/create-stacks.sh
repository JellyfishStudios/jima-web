#!/bin/bash

##
#   Code build resources
#
##
echo creating build resources
aws cloudformation create-stack --stack-name jimaweb-build \
	--region ap-northeast-1 \
	--template-body file://cloudformation-templates/code-build.yml \
    --capabilities CAPABILITY_IAM \
	--parameters \
		ParameterKey=NamingPrefix,ParameterValue=jimaweb \
		ParameterKey=GitHubRepoName,ParameterValue=jimaweb \
        ParameterKey=GitHubBranch,ParameterValue=main
aws cloudformation wait stack-create-complete --stack-name jimaweb-build

##
#   Application
#
##
echo creating deploy resources
aws cloudformation create-stack --stack-name jimaweb-deploy \
	--region ap-northeast-1 \
	--template-body file://cloudformation-templates/code-deploy.yml \
    --capabilities CAPABILITY_IAM \
	--parameters \
		ParameterKey=NamingPrefix,ParameterValue=jimaweb \
		ParameterKey=InstanceKeyName,ParameterValue=jimaweb \
		ParameterKey=GitHubRepoName,ParameterValue=jimaweb \
        ParameterKey=GitHubBranch,ParameterValue=main 
aws cloudformation wait stack-create-complete --stack-name jimaweb-deploy

##
#   Code pipeline resources
#
##
echo creating pipeline resources
aws cloudformation create-stack --stack-name jimaweb-pipeline \
	--region ap-northeast-1 \
	--template-body file://cloudformation-templates/codepipeline.yml \
    --capabilities CAPABILITY_IAM \
	--parameters \
		ParameterKey=NamingPrefix,ParameterValue=jimaweb \
		ParameterKey=GitHubToken,ParameterValue=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 \
		ParameterKey=GitHubRepoOwner,ParameterValue=Adoptables \
		ParameterKey=GitHubRepoName,ParameterValue=jimaweb \
        ParameterKey=GitHubBranch,ParameterValue=main \
        ParameterKey=S3ArtifactStore,ParameterValue=codepipeline-ap-northeast-2-jimaweb
aws cloudformation wait stack-create-complete --stack-name jimaweb-pipeline

##
#   Use this to update the domain A record!
#
##
echo Public DNS
aws cloudformation describe-stacks --stack-name jimaweb-deploy --query 'Stacks[0].Outputs[?OutputKey==`URL`].OutputValue'

exit