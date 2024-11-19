/* eslint-disable n8n-nodes-base/node-class-description-icon-not-svg */
import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { BarkPushOperation } from './BarkOperation';

export class Bark implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Bark Push',
		name: 'bark',
		icon: 'file:bark.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Push custom notification to your iOS device.',
		defaults: {
			name: 'Bark Push',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'barkApi',
				required: true,
			},
		],
		requestDefaults: {
			ignoreHttpStatusErrors: true,
			baseURL: '={{$credentials.baseUrl}}',
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Send Notification',
						value: 'sendNotification',
						action: 'Send notification',
						description: 'Send notification to your iOS device',
						routing: {
							request: {
								method: 'POST',
								url: '/push',
								body: {
									title: '={{$parameter.title}}',
									body: '={{$parameter.body}}',
									level: '={{$parameter.level}}',
									badge: '={{$parameter.badge}}',
									autoCopy: '={{$parameter.autoCopy}}',
									sound: '={{$parameter.sound}}',
									icon: '={{$parameter.icon}}',
									isArchive: '={{$parameter.isArchive}}',
									url: '={{$parameter.url}}',
								},
							},
							operations: {},
						},
					},
					{
						name: 'Check Server Status',
						value: 'checkServerStatus',
						description: 'Get server status',
						routing: {
							request: {
								method: 'GET',
								url: '/ping',
							},
							operations: {},
						},
						action: 'Get server status',
					},
					{
						name: 'Get Server Version',
						value: 'getServerVersion',
						description: 'Get server bark-server version',
						action: 'Get server bark server version',
						routing: {
							request: {
								method: 'GET',
								url: '/info',
							},
							operations: {},
						},
					},
				],
				default: 'sendNotification',
			},
			...BarkPushOperation,
		],
	};
}
