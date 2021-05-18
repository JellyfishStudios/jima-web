#!/bin/bash

##
#   Code pipeline resources
#
##
echo creating pipeline resources
aws cloudformation create-stack --stack-name jimaweb-pipeline \
	--region ap-northeast-1 \
	--template-body file://cloudformation-templates/pipeline.yml \
    --capabilities CAPABILITY_IAM \
	--parameters \
		ParameterKey=NamingPrefix,ParameterValue=jimaweb \
		ParameterKey=GitHubToken,ParameterValue=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 \
		ParameterKey=GitHubRepoOwner,ParameterValue=Adoptables \
		ParameterKey=GitHubRepoName,ParameterValue=jimaweb \
        ParameterKey=GitHubBranch,ParameterValue=main \
        ParameterKey=S3ArtifactStore,ParameterValue=codepipeline-ap-northeast-2-jimaweb
aws cloudformation wait stack-create-complete --stack-name jimaweb-pipeline

exit