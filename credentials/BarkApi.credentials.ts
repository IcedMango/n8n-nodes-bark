import type {
	IAuthenticateGeneric,
	IconFile,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class BarkApi implements ICredentialType {
	name = 'barkApi';
	displayName = 'Bark API';
	documentationUrl = 'https://github.com/IcedMango/n8n-nodes-bark';

	icon = "file:bark.png" as IconFile;


	properties: INodeProperties[] = [
		{
			displayName: 'URL',
			name: 'baseUrl',
			type: 'string',
			required: true,
			default: '',
			description: 'Your self-hosted Bark server.',
		},
		{
			displayName: 'Device Key',
			name: 'deviceKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			required: true,
			default: '',
			description: 'Your iOS device key.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			body: {
				device_key: '={{$credentials.deviceKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.baseUrl}}',
			url: '/push',
			method:'POST',
			body: {
				title: 'Connection Test',
				device_key: '={{$credentials?.deviceKey}}',
			},
		},
	};
}
