import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as organizations from 'aws-cdk-lib/aws-organizations';

export class AwsOrganizationCreationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an AWS Organization
    new organizations.CfnOrganization(this, 'MyOrganization', {
      featureSet: 'ALL',
    });
  }
}
