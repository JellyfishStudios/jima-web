#!/bin/bash

##
#   Application
#
##
echo creating deploy resources
aws cloudformation create-stack --stack-name jimaweb-deploy \
	--region ap-northeast-1 \
	--template-body file://cloudformation-templates/deploy.yml \
    --capabilities CAPABILITY_IAM \
	--parameters \
		ParameterKey=NamingPrefix,ParameterValue=jimaweb \
		ParameterKey=InstanceKeyName,ParameterValue=jimaweb \
		ParameterKey=GitHubRepoName,ParameterValue=jimaweb \
        ParameterKey=GitHubBranch,ParameterValue=main 
aws cloudformation wait stack-create-complete --stack-name jimaweb-deploy

##
#   Use this to update the domain A record!
#
##
echo Public DNS
aws cloudformation describe-stacks --stack-name jimaweb-deploy --query 'Stacks[0].Outputs[?OutputKey==`URL`].OutputValue'

exit