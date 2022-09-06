/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { GLDEscrow, GLDEscrowInterface } from '../GLDEscrow';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract GLDToken',
        name: '_token',
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
    name: 'LogGLDRolledBack',
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
    name: 'LogGLDSend',
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
    name: 'LogGLDWithDraw',
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
    name: 'getGLDBalance',
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
    name: 'rollbackEther',
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
    name: 'rollbackGLD',
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
    name: 'sendEther',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'sendGLD',
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
    inputs: [],
    name: 'withdrawGLD',
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
  '0x60806040523480156200001157600080fd5b50604051620029f7380380620029f7833981810160405281019062000037919062000096565b80600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000124565b60008151905062000090816200010a565b92915050565b600060208284031215620000a957600080fd5b6000620000b9848285016200007f565b91505092915050565b6000620000cf82620000ea565b9050919050565b6000620000e382620000c2565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200011581620000d6565b81146200012157600080fd5b50565b6128c380620001346000396000f3fe60806040526004361061007f5760003560e01c8063cfb11fc71161004e578063cfb11fc714610142578063d2472cb61461016d578063e0f4ba1414610184578063ea46193e146101ad57610086565b80630d335f3d146100bd57806336843861146100e657806348c981e21461010f5780637362377b1461012b57610086565b3661008657005b7f08c379a0afcc32b1a39302f7cb8073359698411ab5fd6e3edb2c02c0b5fba8aa6040516100b39061232d565b60405180910390a1005b3480156100c957600080fd5b506100e460048036038101906100df9190612032565b6101d8565b005b3480156100f257600080fd5b5061010d60048036038101906101089190612009565b61080a565b005b61012960048036038101906101249190612009565b610d9f565b005b34801561013757600080fd5b50610140611141565b005b34801561014e57600080fd5b5061015761154f565b604051610164919061244d565b60405180910390f35b34801561017957600080fd5b50610182611601565b005b34801561019057600080fd5b506101ab60048036038101906101a69190612009565b611a14565b005b3480156101b957600080fd5b506101c2611fad565b6040516101cf919061244d565b60405180910390f35b60003390506000829050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161023d9190612260565b60206040518083038186803b15801561025557600080fd5b505afa158015610269573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028d9190612097565b8111156102cf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c69061242d565b60405180910390fd5b80600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e84306040518363ffffffff1660e01b815260040161032d9291906122a4565b60206040518083038186803b15801561034557600080fd5b505afa158015610359573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037d9190612097565b10156103be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b59061238d565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8330866040518463ffffffff1660e01b815260040161041d939291906122cd565b602060405180830381600087803b15801561043757600080fd5b505af115801561044b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046f919061206e565b5080600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104bf9190612484565b92505081905550600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166105d7576000600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b80600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106639190612484565b925050819055506001600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f73b01460b5d0356bc41e4d618d3ac3aabc773ab762c363452c3e66ad535210fb836040516107fc919061244d565b60405180910390a350505050565b6000339050600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166108d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108cf906123ad565b60405180910390fd5b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081141561099d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109949061240d565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516109c39061224b565b60006040518083038185875af1925050503d8060008114610a00576040519150601f19603f3d011682016040523d82523d6000602084013e610a05565b606091505b5050905080610a49576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a409061234d565b60405180910390fd5b816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a9791906124da565b92505081905550600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090556000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610d98576000600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610c79577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d8457600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610d51577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550610d98565b508080610d909061259e565b915050610bb6565b5050505050565b60003390506000349050806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610df79190612484565b92505081905550600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610f0f576000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f9b9190612484565b925050819055506001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fa343f361112b028dae2501770614271723be1d24c9f64fed2d4bd3ddf1c13e3583604051611134919061244d565b60405180910390a3505050565b600033905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060008114156111cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c49061236d565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516111f39061224b565b60006040518083038185875af1925050503d8060008114611230576040519150601f19603f3d011682016040523d82523d6000602084013e611235565b606091505b5050905080611279576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112709061234d565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905560005b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156114fb576000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110611381577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106114ba577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555080806114f39061259e565b9150506112be565b503373ffffffffffffffffffffffffffffffffffffffff167fa74fab966bfc29d4ea7866d609ac5d94324a5fe817362d6a9fee5d2f8df4675983604051611542919061244d565b60405180910390a2505050565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016115ac9190612260565b60206040518083038186803b1580156115c457600080fd5b505afa1580156115d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115fc9190612097565b905090565b60003390506000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081141561168e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611685906123cd565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b81526004016116eb92919061227b565b602060405180830381600087803b15801561170557600080fd5b505af1158015611719573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061173d919061206e565b50600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905560005b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156119c1576000600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110611847577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110611980577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555080806119b99061259e565b915050611784565b503373ffffffffffffffffffffffffffffffffffffffff167f9c5adb709b8e733065747a9bf9f069dd54069b33d687a30a8cf21e28e4bcda6782604051611a08919061244d565b60405180910390a25050565b6000339050600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16611ae2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ad9906123ed565b60405180910390fd5b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811415611ba7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b9e9061240d565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401611c04929190612304565b602060405180830381600087803b158015611c1e57600080fd5b505af1158015611c32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c56919061206e565b5080600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611ca691906124da565b92505081905550600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090556000600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015611fa7576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110611e88577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611f9357600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110611f60577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550611fa7565b508080611f9f9061259e565b915050611dc5565b50505050565b600047905090565b600081359050611fc481612848565b92915050565b600081519050611fd98161285f565b92915050565b600081359050611fee81612876565b92915050565b60008151905061200381612876565b92915050565b60006020828403121561201b57600080fd5b600061202984828501611fb5565b91505092915050565b6000806040838503121561204557600080fd5b600061205385828601611fb5565b925050602061206485828601611fdf565b9150509250929050565b60006020828403121561208057600080fd5b600061208e84828501611fca565b91505092915050565b6000602082840312156120a957600080fd5b60006120b784828501611ff4565b91505092915050565b6120c981612568565b82525050565b6120d88161250e565b82525050565b60006120eb601f83612473565b91506120f682612616565b602082019050919050565b600061210e601483612473565b91506121198261263f565b602082019050919050565b6000612131602183612473565b915061213c82612668565b604082019050919050565b6000612154601983612473565b915061215f826126b7565b602082019050919050565b6000612177604583612473565b9150612182826126e0565b606082019050919050565b600061219a600083612468565b91506121a582612755565b600082019050919050565b60006121bd601e83612473565b91506121c882612758565b602082019050919050565b60006121e0604283612473565b91506121eb82612781565b606082019050919050565b6000612203601383612473565b915061220e826127f6565b602082019050919050565b6000612226601983612473565b91506122318261281f565b602082019050919050565b6122458161255e565b82525050565b60006122568261218d565b9150819050919050565b600060208201905061227560008301846120cf565b92915050565b600060408201905061229060008301856120c0565b61229d602083018461223c565b9392505050565b60006040820190506122b960008301856120cf565b6122c660208301846120cf565b9392505050565b60006060820190506122e260008301866120cf565b6122ef60208301856120cf565b6122fc604083018461223c565b949350505050565b600060408201905061231960008301856120cf565b612326602083018461223c565b9392505050565b60006020820190508181036000830152612346816120de565b9050919050565b6000602082019050818103600083015261236681612101565b9050919050565b6000602082019050818103600083015261238681612124565b9050919050565b600060208201905081810360008301526123a681612147565b9050919050565b600060208201905081810360008301526123c68161216a565b9050919050565b600060208201905081810360008301526123e6816121b0565b9050919050565b60006020820190508181036000830152612406816121d3565b9050919050565b60006020820190508181036000830152612426816121f6565b9050919050565b6000602082019050818103600083015261244681612219565b9050919050565b6000602082019050612462600083018461223c565b92915050565b600081905092915050565b600082825260208201905092915050565b600061248f8261255e565b915061249a8361255e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156124cf576124ce6125e7565b5b828201905092915050565b60006124e58261255e565b91506124f08361255e565b925082821015612503576125026125e7565b5b828203905092915050565b60006125198261253e565b9050919050565b600061252b8261253e565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006125738261257a565b9050919050565b60006125858261258c565b9050919050565b60006125978261253e565b9050919050565b60006125a98261255e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156125dc576125db6125e7565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f63616c6c206f662061206e6f6e2d6578697374656e742066756e6374696f6e00600082015250565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b7f596f7520646f6e27742068617665206574686572732073656e7420746f20796f60008201527f7500000000000000000000000000000000000000000000000000000000000000602082015250565b7f436865636b2074686520746f6b656e20616c6c6f77616e636500000000000000600082015250565b7f526f6c6c6261636b206973206e6f7420617661696c61626c6520666f7220796f60008201527f752e20457468657273206d6967687420626520616c726561647920776974686460208201527f7261776564000000000000000000000000000000000000000000000000000000604082015250565b50565b7f596f7520646f6e2774206861766520474c442073656e7420746f20796f750000600082015250565b7f526f6c6c6261636b206973206e6f7420617661696c61626c6520666f7220796f60008201527f752e20474c44206d6967687420626520616c726561647920776974686472617760208201527f6564000000000000000000000000000000000000000000000000000000000000604082015250565b7f526f6c6c6261636b2076616c7565206973203000000000000000000000000000600082015250565b7f596f7520646f6e2774206861766520656e6f75676820474c4400000000000000600082015250565b61285181612520565b811461285c57600080fd5b50565b61286881612532565b811461287357600080fd5b50565b61287f8161255e565b811461288a57600080fd5b5056fea264697066735822122013b6d2ef9aca79451353e0876784a5133f357c9ffb412c3694dfc73c9117fffc64736f6c63430008040033';

export class GLDEscrow__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GLDEscrow> {
    return super.deploy(_token, overrides || {}) as Promise<GLDEscrow>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): GLDEscrow {
    return super.attach(address) as GLDEscrow;
  }
  connect(signer: Signer): GLDEscrow__factory {
    return super.connect(signer) as GLDEscrow__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GLDEscrowInterface {
    return new utils.Interface(_abi) as GLDEscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GLDEscrow {
    return new Contract(address, _abi, signerOrProvider) as GLDEscrow;
  }
}
