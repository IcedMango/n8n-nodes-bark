import type { INodeProperties } from 'n8n-workflow';

export const BarkPushOperation: INodeProperties[] = [
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['sendNotification'],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				operation: ['sendNotification'],
			},
		},
	},

	{
		displayName: 'Is Archive',
		name: 'isArchive',
		type: 'boolean',
		default: false,
		description: 'Whether archive this message or not',
		displayOptions: {
			show: {
				operation: ['sendNotification'],
			},
		},
	},
	{
		displayName: 'Advance Settings',
		name: 'advanceSettings',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Level',
				name: 'level',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Active',
						value: 'active',
						description: 'Will turn on your screen once received',
					},
					{
						name: 'TimeSensitive',
						value: 'timeSensitive',
						description: 'Will show notification in Focus mode',
					},
					{
						name: 'Passive',
						value: 'passive',
						description: "Add to notification list only. Won't turn on screen.",
					},
				],
				default: 'active',
			},
			{
				displayName: 'Badge',
				typeOptions: { minValue: 0,maxValue:999999, numberPrecision: 1 },
				name: 'badge',
				type: 'number',
				default: '',
				description: 'The number displayed next to App icon',
			},
			{
				displayName: 'Auto Copy',
				name: 'autoCopy',
				type: 'boolean',
				default: false,
				// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
				description:
					'Auto Copy works only below iOS 14.5. Above version need to operate from notify center.',
			},
			{
				displayName: 'Sound',
				name: 'sound',
				type: 'string',
				default: '',
				description: 'Custom Notification sound',
			},
			{
				displayName: 'Icon',
				name: 'icon',
				type: 'string',
				default: '',
				description: 'Custom Notification icon',
			},
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'Redirect URL. Support URL Scheme & Universal Link.',
			},
			{
				displayName: 'Group',
				name: 'group',
				type: 'string',
				default: '',
				description: 'Custom Nofitication group'
			}
		],
		displayOptions: {
			show: {
				operation: ['sendNotification'],
			},
		},
	}
];
