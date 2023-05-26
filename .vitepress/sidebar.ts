import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = [
	{
		text: 'Contracts',
		link: '/contracts/Bedrock',
		items: [
			{ text: 'AddressAliasing', link: '/contracts/AddressAliasing' },
			{ text: 'Burn', link: '/contracts/Burn' },
			{ text: 'CrossDomainMessenger', link: '/contracts/CrossDomainMessenger' },
			{ text: 'Encoding', link: '/contracts/Encoding' },
			{ text: 'Hashing', link: '/contracts/Hashing' },
			{ text: 'L2OutputOracle', link: '/contracts/L2OutputOracle' },
			{ text: 'OptimismPortal', link: '/contracts/OptimismPortal' },
			{ text: 'ResourceMetering', link: '/contracts/ResourceMetering' },
			{ text: 'SafeCall', link: '/contracts/SafeCall' },
			{ text: 'SystemConfig', link: '/contracts/SystemConfig' },
		],
	},
]
