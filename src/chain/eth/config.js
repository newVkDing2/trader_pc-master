// 智能合约地址
export const contractAddress = {
    USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
  }
  
  // 智能合约ABI
  export const contractABI = [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: 'spender', type: 'address' },
        { name: 'tokens', type: 'uint256' }
      ],
      name: 'approve',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: 'from', type: 'address' },
        { name: 'to', type: 'address' },
        { name: 'tokens', type: 'uint256' }
      ],
      name: 'transferFrom',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint8' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: 'amount', type: 'uint256' }],
      name: 'withdrawEther',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: '_totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ name: 'tokenOwner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'acceptOwnership',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { name: 'a', type: 'uint256' },
        { name: 'b', type: 'uint256' }
      ],
      name: 'safeSub',
      outputs: [{ name: 'c', type: 'uint256' }],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: 'to', type: 'address' },
        { name: 'tokens', type: 'uint256' }
      ],
      name: 'transfer',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { name: 'a', type: 'uint256' },
        { name: 'b', type: 'uint256' }
      ],
      name: 'safeDiv',
      outputs: [{ name: 'c', type: 'uint256' }],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: 'spender', type: 'address' },
        { name: 'tokens', type: 'uint256' },
        { name: 'data', type: 'bytes' }
      ],
      name: 'approveAndCall',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { name: 'a', type: 'uint256' },
        { name: 'b', type: 'uint256' }
      ],
      name: 'safeMul',
      outputs: [{ name: 'c', type: 'uint256' }],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'newOwner',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: 'tokenAddress', type: 'address' },
        { name: 'tokens', type: 'uint256' }
      ],
      name: 'transferAnyERC20Token',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { name: 'tokenOwner', type: 'address' },
        { name: 'spender', type: 'address' }
      ],
      name: 'allowance',
      outputs: [{ name: 'remaining', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { name: 'a', type: 'uint256' },
        { name: 'b', type: 'uint256' }
      ],
      name: 'safeAdd',
      outputs: [{ name: 'c', type: 'uint256' }],
      payable: false,
      stateMutability: 'pure',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
    { payable: true, stateMutability: 'payable', type: 'fallback' },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_from', type: 'address' },
        { indexed: true, name: '_to', type: 'address' }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'from', type: 'address' },
        { indexed: true, name: 'to', type: 'address' },
        { indexed: false, name: 'tokens', type: 'uint256' }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: 'tokenOwner', type: 'address' },
        { indexed: true, name: 'spender', type: 'address' },
        { indexed: false, name: 'tokens', type: 'uint256' }
      ],
      name: 'Approval',
      type: 'event'
    }
  ]
  