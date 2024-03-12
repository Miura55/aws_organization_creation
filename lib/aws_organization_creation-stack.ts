import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as organizations from 'aws-cdk-lib/aws-organizations';

export class AwsOrganizationCreationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an AWS Organization
    const myOrganization = new organizations.CfnOrganization(this, 'MyOrganization', {
      featureSet: 'ALL',
    });

    // Create an organizational unit (OU)
    const myOU = new organizations.CfnOrganizationalUnit(this, 'MyOU', {
      parentId: myOrganization.ref,
      name: 'KMiuraOU',
    });
  }
}
