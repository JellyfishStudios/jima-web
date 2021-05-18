#!/bin/bash

##
#   Code build resources
#
##
echo creating build resources
aws cloudformation create-stack --stack-name jimaweb-build \
	--region ap-northeast-1 \
	--template-body file://cloudformation-templates/build.yml \
    --capabilities CAPABILITY_IAM \
	--parameters \
		ParameterKey=NamingPrefix,ParameterValue=jimaweb \
		ParameterKey=GitHubRepoName,ParameterValue=jimaweb \
        ParameterKey=GitHubBranch,ParameterValue=main
aws cloudformation wait stack-create-complete --stack-name jimaweb-build

exit