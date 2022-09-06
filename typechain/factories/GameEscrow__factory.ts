/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { GameEscrow, GameEscrowInterface } from '../GameEscrow';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract ERC20',
        name: '_token',
        type: 'address',
      },
      {
        internalType: 'contract ERC721URIStorage',
        name: '_itemManager',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'Error',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogERC20RolledBack',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogERC20Send',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogERC20WithDraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenID',
        type: 'uint256',
      },
    ],
    name: 'LogERC721RolledBack',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'item',
        type: 'uint256',
      },
    ],
    name: 'LogERC721Send',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'item',
        type: 'uint256',
      },
    ],
    name: 'LogERC721WithDraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogRolledBack',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogSend',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'LogWithDraw',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: 'getERC20Balance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEtherBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'inventory',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'rollbackERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'rollbackERC721',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'rollbackEther',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'sendERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_tokenID',
        type: 'uint256',
      },
    ],
    name: 'sendERC721',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_to',
        type: 'address',
      },
    ],
    name: 'sendEther',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawERC20',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawERC721',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawEther',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b50604051620034ff380380620034ff8339818101604052810190620000379190620000f2565b8082806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050620001c3565b600081519050620000d5816200018f565b92915050565b600081519050620000ec81620001a9565b92915050565b600080604083850312156200010657600080fd5b60006200011685828601620000c4565b92505060206200012985828601620000db565b9150509250929050565b600062000140826200016f565b9050919050565b6000620001548262000133565b9050919050565b6000620001688262000133565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200019a8162000147565b8114620001a657600080fd5b50565b620001b4816200015b565b8114620001c057600080fd5b50565b61332c80620001d36000396000f3fe6080604052600436106100ab5760003560e01c806348c981e21161006457806348c981e2146101cf5780637362377b146101eb57806382ffa4fa14610202578063a14468171461022b578063c3736fe614610242578063ea46193e1461026d576100b2565b806315d52a5c146100e95780632de55221146101145780632ed6d5e81461013d5780633334907914610154578063368438611461017d5780633c785143146101a6576100b2565b366100b257005b7f08c379a0afcc32b1a39302f7cb8073359698411ab5fd6e3edb2c02c0b5fba8aa6040516100df90612c83565b60405180910390a1005b3480156100f557600080fd5b506100fe610298565b60405161010b9190612dc3565b60405180910390f35b34801561012057600080fd5b5061013b600480360381019061013691906128e6565b61034a565b005b34801561014957600080fd5b50610152610790565b005b34801561016057600080fd5b5061017b60048036038101906101769190612922565b610a1c565b005b34801561018957600080fd5b506101a4600480360381019061019f91906128bd565b610e9b565b005b3480156101b257600080fd5b506101cd60048036038101906101c891906128bd565b611387565b005b6101e960048036038101906101e491906128bd565b6118d9565b005b3480156101f757600080fd5b50610200611a9c565b005b34801561020e57600080fd5b506102296004803603810190610224919061286b565b611d27565b005b34801561023757600080fd5b506102406122da565b005b34801561024e57600080fd5b50610257612581565b6040516102649190612dc3565b60405180910390f35b34801561027957600080fd5b50610282612632565b60405161028f9190612dc3565b60405180910390f35b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016102f59190612b96565b60206040518083038186803b15801561030d57600080fd5b505afa158015610321573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103459190612987565b905090565b600033905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016103a89190612b96565b60206040518083038186803b1580156103c057600080fd5b505afa1580156103d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f89190612987565b82111561043a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043190612da3565b60405180910390fd5b8160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e83306040518363ffffffff1660e01b8152600401610496929190612bda565b60206040518083038186803b1580156104ae57600080fd5b505afa1580156104c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e69190612987565b1015610527576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051e90612d03565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8230856040518463ffffffff1660e01b815260040161058493929190612c03565b602060405180830381600087803b15801561059e57600080fd5b505af11580156105b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d6919061295e565b50600060405180606001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152509050600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015550508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f7593c5a868b39205b4da972efe3016fb3d064b8c17c756e977afaeb77deb9b4b856040516107829190612dc3565b60405180910390a350505050565b60003390506000805b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905081101561088c57600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020818154811061085a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020154826108779190612dfa565b9150808061088490612ee0565b915050610799565b5060008114156108d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c890612d63565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b815260040161092c929190612bb1565b602060405180830381600087803b15801561094657600080fd5b505af115801561095a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097e919061295e565b50600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006109ca919061263a565b3373ffffffffffffffffffffffffffffffffffffffff167fb732f8145b8f4a2d91976aa8e73edc81447e410798dedaeb8ad8a5f426fa013e82604051610a109190612dc3565b60405180910390a25050565b60003390503373ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b8152600401610a939190612dc3565b60206040518083038186803b158015610aab57600080fd5b505afa158015610abf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae39190612894565b73ffffffffffffffffffffffffffffffffffffffff1614610b39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3090612d83565b60405180910390fd5b3073ffffffffffffffffffffffffffffffffffffffff16600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663081812fc846040518263ffffffff1660e01b8152600401610bab9190612dc3565b60206040518083038186803b158015610bc357600080fd5b505afa158015610bd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bfb9190612894565b73ffffffffffffffffffffffffffffffffffffffff1614610c51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4890612d03565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8230856040518463ffffffff1660e01b8152600401610cb093929190612c03565b600060405180830381600087803b158015610cca57600080fd5b505af1158015610cde573d6000803e3d6000fd5b50505050600060405180606001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152509050600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015550508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f3fc6d11cc6c8033e831c6115ea5ca047823b5a946f58d16a5643d4e500eb1d4385604051610e8d9190612dc3565b60405180910390a350505050565b60003390506000805b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015611074578273ffffffffffffffffffffffffffffffffffffffff16600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610f7c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561106157600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208181548110611041577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600201548261105e9190612dfa565b91505b808061106c90612ee0565b915050610ea4565b5060008114156110b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b090612d43565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516110df90612b81565b60006040518083038185875af1925050503d806000811461111c576040519150601f19603f3d011682016040523d82523d6000602084013e611121565b606091505b5050905080611165576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115c90612cc3565b60405180910390fd5b60005b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015611380578373ffffffffffffffffffffffffffffffffffffffff16600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110611240577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561136d57600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208181548110611305577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905550505b808061137890612ee0565b915050611168565b5050505050565b60003390506000805b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015611560578273ffffffffffffffffffffffffffffffffffffffff16600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110611468577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561154d57600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020818154811061152d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600201548261154a9190612dfa565b91505b808061155890612ee0565b915050611390565b5060008114156115a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159c90612ca3565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401611600929190612c3a565b602060405180830381600087803b15801561161a57600080fd5b505af115801561162e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611652919061295e565b5060005b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905081101561186e578273ffffffffffffffffffffffffffffffffffffffff16600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061172e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561185b57600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081815481106117f3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905550505b808061186690612ee0565b915050611656565b508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f371ebca05db0f296f19a1b2750ec3228f367f76070e11a3a9b0f0896097034c2836040516118cc9190612dc3565b60405180910390a3505050565b60003390506000349050600060405180606001604052808473ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001838152509050600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015550508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fa343f361112b028dae2501770614271723be1d24c9f64fed2d4bd3ddf1c13e3584604051611a8e9190612dc3565b60405180910390a350505050565b60003390506000805b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015611b9857600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208181548110611b66577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600302016002015482611b839190612dfa565b91508080611b9090612ee0565b915050611aa5565b506000811415611bdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bd490612ce3565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051611c0390612b81565b60006040518083038185875af1925050503d8060008114611c40576040519150601f19603f3d011682016040523d82523d6000602084013e611c45565b606091505b5050905080611c89576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c8090612cc3565b60405180910390fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000611cd4919061265e565b3373ffffffffffffffffffffffffffffffffffffffff167fa74fab966bfc29d4ea7866d609ac5d94324a5fe817362d6a9fee5d2f8df4675983604051611d1a9190612dc3565b60405180910390a2505050565b60003390506000805b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015611e72578273ffffffffffffffffffffffffffffffffffffffff16600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110611e08577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611e5f5760019150611e72565b8080611e6a90612ee0565b915050611d30565b5080611eb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611eaa90612d23565b60405180910390fd5b60005b600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156122d4578273ffffffffffffffffffffffffffffffffffffffff16600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110611f8e577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156122c157600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3033600360008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208581548110612093577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600201546040518463ffffffff1660e01b81526004016120c393929190612c03565b600060405180830381600087803b1580156120dd57600080fd5b505af11580156120f1573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f9402b4711f174bd2dee5bd7c9d64d4346b1d764643801cbe5117ab796c1099fb600360008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481106121bb577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600201546040516121da9190612dc3565b60405180910390a3600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208181548110612259577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905550505b80806122cc90612ee0565b915050611eb6565b50505050565b60003390506000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490501415612365576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161235c90612c63565b60405180910390fd5b60005b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015612532576000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061242b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600201549050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3085846040518463ffffffff1660e01b815260040161249e93929190612c03565b600060405180830381600087803b1580156124b857600080fd5b505af11580156124cc573d6000803e3d6000fd5b505050503373ffffffffffffffffffffffffffffffffffffffff167f7e43ec2369a0710d7fe9b6daed3bbb781488b08e58bcfe0a3bf29a55aa5e160d826040516125169190612dc3565b60405180910390a250808061252a90612ee0565b915050612368565b50600360008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061257e9190612682565b50565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016125dd9190612b96565b60206040518083038186803b1580156125f557600080fd5b505afa158015612609573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061262d9190612987565b905090565b600047905090565b508054600082556003029060005260206000209081019061265b91906126a6565b50565b508054600082556003029060005260206000209081019061267f9190612713565b50565b50805460008255600302906000526020600020908101906126a39190612780565b50565b5b8082111561270f57600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160009055506003016126a7565b5090565b5b8082111561277c57600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905550600301612714565b5090565b5b808211156127e957600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905550600301612781565b5090565b6000813590506127fc8161329a565b92915050565b6000815190506128118161329a565b92915050565b600081359050612826816132b1565b92915050565b60008151905061283b816132c8565b92915050565b600081359050612850816132df565b92915050565b600081519050612865816132df565b92915050565b60006020828403121561287d57600080fd5b600061288b848285016127ed565b91505092915050565b6000602082840312156128a657600080fd5b60006128b484828501612802565b91505092915050565b6000602082840312156128cf57600080fd5b60006128dd84828501612817565b91505092915050565b600080604083850312156128f957600080fd5b600061290785828601612817565b925050602061291885828601612841565b9150509250929050565b6000806040838503121561293557600080fd5b6000612943858286016127ed565b925050602061295485828601612841565b9150509250929050565b60006020828403121561297057600080fd5b600061297e8482850161282c565b91505092915050565b60006020828403121561299957600080fd5b60006129a784828501612856565b91505092915050565b6129b981612eaa565b82525050565b6129c881612e50565b82525050565b60006129db602883612de9565b91506129e682612f58565b604082019050919050565b60006129fe601f83612de9565b9150612a0982612fa7565b602082019050919050565b6000612a21604b83612de9565b9150612a2c82612fd0565b606082019050919050565b6000612a44601483612de9565b9150612a4f82613045565b602082019050919050565b6000612a67602183612de9565b9150612a728261306e565b604082019050919050565b6000612a8a601983612de9565b9150612a95826130bd565b602082019050919050565b6000612aad604c83612de9565b9150612ab8826130e6565b606082019050919050565b6000612ad0604583612de9565b9150612adb8261315b565b606082019050919050565b6000612af3600083612dde565b9150612afe826131d0565b600082019050919050565b6000612b16602783612de9565b9150612b21826131d3565b604082019050919050565b6000612b39601f83612de9565b9150612b4482613222565b602082019050919050565b6000612b5c602283612de9565b9150612b678261324b565b604082019050919050565b612b7b81612ea0565b82525050565b6000612b8c82612ae6565b9150819050919050565b6000602082019050612bab60008301846129bf565b92915050565b6000604082019050612bc660008301856129b0565b612bd36020830184612b72565b9392505050565b6000604082019050612bef60008301856129bf565b612bfc60208301846129bf565b9392505050565b6000606082019050612c1860008301866129bf565b612c2560208301856129bf565b612c326040830184612b72565b949350505050565b6000604082019050612c4f60008301856129bf565b612c5c6020830184612b72565b9392505050565b60006020820190508181036000830152612c7c816129ce565b9050919050565b60006020820190508181036000830152612c9c816129f1565b9050919050565b60006020820190508181036000830152612cbc81612a14565b9050919050565b60006020820190508181036000830152612cdc81612a37565b9050919050565b60006020820190508181036000830152612cfc81612a5a565b9050919050565b60006020820190508181036000830152612d1c81612a7d565b9050919050565b60006020820190508181036000830152612d3c81612aa0565b9050919050565b60006020820190508181036000830152612d5c81612ac3565b9050919050565b60006020820190508181036000830152612d7c81612b09565b9050919050565b60006020820190508181036000830152612d9c81612b2c565b9050919050565b60006020820190508181036000830152612dbc81612b4f565b9050919050565b6000602082019050612dd86000830184612b72565b92915050565b600081905092915050565b600082825260208201905092915050565b6000612e0582612ea0565b9150612e1083612ea0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612e4557612e44612f29565b5b828201905092915050565b6000612e5b82612e80565b9050919050565b6000612e6d82612e80565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612eb582612ebc565b9050919050565b6000612ec782612ece565b9050919050565b6000612ed982612e80565b9050919050565b6000612eeb82612ea0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612f1e57612f1d612f29565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f596f7520646f6e277420686176652045524337323120746f6b656e732073656e60008201527f7420746f20796f75000000000000000000000000000000000000000000000000602082015250565b7f63616c6c206f662061206e6f6e2d6578697374656e742066756e6374696f6e00600082015250565b7f526f6c6c6261636b206973206e6f7420617661696c61626c6520666f7220796f60008201527f752e20455243323020746f6b656e73206d6967687420626520616c726561647960208201527f2077697468647261776564000000000000000000000000000000000000000000604082015250565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b7f596f7520646f6e27742068617665206574686572732073656e7420746f20796f60008201527f7500000000000000000000000000000000000000000000000000000000000000602082015250565b7f436865636b2074686520746f6b656e20616c6c6f77616e636500000000000000600082015250565b7f526f6c6c6261636b206973206e6f7420617661696c61626c6520666f7220796f60008201527f752e2045524337323120746f6b656e73206d6967687420626520616c7265616460208201527f7920776974686472617765640000000000000000000000000000000000000000604082015250565b7f526f6c6c6261636b206973206e6f7420617661696c61626c6520666f7220796f60008201527f752e20457468657273206d6967687420626520616c726561647920776974686460208201527f7261776564000000000000000000000000000000000000000000000000000000604082015250565b50565b7f596f7520646f6e2774206861766520455243323020746f6b656e732073656e7460008201527f20746f20796f7500000000000000000000000000000000000000000000000000602082015250565b7f596f7520646f6e2774206f776e20746869732045524337323120746f6b656e00600082015250565b7f596f7520646f6e2774206861766520656e6f75676820455243323020746f6b6560008201527f6e73000000000000000000000000000000000000000000000000000000000000602082015250565b6132a381612e50565b81146132ae57600080fd5b50565b6132ba81612e62565b81146132c557600080fd5b50565b6132d181612e74565b81146132dc57600080fd5b50565b6132e881612ea0565b81146132f357600080fd5b5056fea2646970667358221220bcf44bea0bb68f433780a89be5cd97f7acad40262862782c592283ead1d1bea564736f6c63430008040033';

export class GameEscrow__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _token: string,
    _itemManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GameEscrow> {
    return super.deploy(
      _token,
      _itemManager,
      overrides || {}
    ) as Promise<GameEscrow>;
  }
  getDeployTransaction(
    _token: string,
    _itemManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _itemManager, overrides || {});
  }
  attach(address: string): GameEscrow {
    return super.attach(address) as GameEscrow;
  }
  connect(signer: Signer): GameEscrow__factory {
    return super.connect(signer) as GameEscrow__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GameEscrowInterface {
    return new utils.Interface(_abi) as GameEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GameEscrow {
    return new Contract(address, _abi, signerOrProvider) as GameEscrow;
  }
}
