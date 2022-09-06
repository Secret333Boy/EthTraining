/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Escrow, EscrowInterface } from '../Escrow';

const _abi = [
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
    name: 'sendEther',
    outputs: [],
    stateMutability: 'payable',
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
  '0x608060405234801561001057600080fd5b5061132d806100206000396000f3fe6080604052600436106100435760003560e01c8063368438611461008157806348c981e2146100aa5780637362377b146100c6578063ea46193e146100dd5761004a565b3661004a57005b7f08c379a0afcc32b1a39302f7cb8073359698411ab5fd6e3edb2c02c0b5fba8aa60405161007790610f89565b60405180910390a1005b34801561008d57600080fd5b506100a860048036038101906100a39190610e6a565b610108565b005b6100c460048036038101906100bf9190610e6a565b61069d565b005b3480156100d257600080fd5b506100db610a3f565b005b3480156100e957600080fd5b506100f2610e4d565b6040516100ff9190611029565b60405180910390f35b6000339050600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166101d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101cd90610fe9565b60405180910390fd5b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081141561029b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029290611009565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff16826040516102c190610f74565b60006040518083038185875af1925050503d80600081146102fe576040519150601f19603f3d011682016040523d82523d6000602084013e610303565b606091505b5050905080610347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161033e90610fa9565b60405180910390fd5b816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461039591906110b6565b92505081905550600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090556000600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060005b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610696576000600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610577577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561068257600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811061064f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550610696565b50808061068e90611126565b9150506104b4565b5050505050565b60003390506000349050806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106f59190611060565b92505081905550600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1661080d576000600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108999190611060565b925050819055506001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fa343f361112b028dae2501770614271723be1d24c9f64fed2d4bd3ddf1c13e3583604051610a329190611029565b60405180910390a3505050565b600033905060008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000811415610acb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ac290610fc9565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610af190610f74565b60006040518083038185875af1925050503d8060008114610b2e576040519150601f19603f3d011682016040523d82523d6000602084013e610b33565b606091505b5050905080610b77576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b6e90610fa9565b60405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000905560005b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610df9576000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610c7f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610db8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055508080610df190611126565b915050610bbc565b503373ffffffffffffffffffffffffffffffffffffffff167fa74fab966bfc29d4ea7866d609ac5d94324a5fe817362d6a9fee5d2f8df4675983604051610e409190611029565b60405180910390a2505050565b600047905090565b600081359050610e64816112e0565b92915050565b600060208284031215610e7c57600080fd5b6000610e8a84828501610e55565b91505092915050565b6000610ea0601f8361104f565b9150610eab8261119e565b602082019050919050565b6000610ec360148361104f565b9150610ece826111c7565b602082019050919050565b6000610ee660218361104f565b9150610ef1826111f0565b604082019050919050565b6000610f0960458361104f565b9150610f148261123f565b606082019050919050565b6000610f2c600083611044565b9150610f37826112b4565b600082019050919050565b6000610f4f60138361104f565b9150610f5a826112b7565b602082019050919050565b610f6e8161111c565b82525050565b6000610f7f82610f1f565b9150819050919050565b60006020820190508181036000830152610fa281610e93565b9050919050565b60006020820190508181036000830152610fc281610eb6565b9050919050565b60006020820190508181036000830152610fe281610ed9565b9050919050565b6000602082019050818103600083015261100281610efc565b9050919050565b6000602082019050818103600083015261102281610f42565b9050919050565b600060208201905061103e6000830184610f65565b92915050565b600081905092915050565b600082825260208201905092915050565b600061106b8261111c565b91506110768361111c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156110ab576110aa61116f565b5b828201905092915050565b60006110c18261111c565b91506110cc8361111c565b9250828210156110df576110de61116f565b5b828203905092915050565b60006110f5826110fc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006111318261111c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156111645761116361116f565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f63616c6c206f662061206e6f6e2d6578697374656e742066756e6374696f6e00600082015250565b7f4661696c656420746f2073656e64204574686572000000000000000000000000600082015250565b7f596f7520646f6e27742068617665206574686572732073656e7420746f20796f60008201527f7500000000000000000000000000000000000000000000000000000000000000602082015250565b7f526f6c6c6261636b206973206e6f7420617661696c61626c6520666f7220796f60008201527f752e20457468657273206d6967687420626520616c726561647920776974686460208201527f7261776564000000000000000000000000000000000000000000000000000000604082015250565b50565b7f526f6c6c6261636b2076616c7565206973203000000000000000000000000000600082015250565b6112e9816110ea565b81146112f457600080fd5b5056fea2646970667358221220bfadada425ff7192c7aa76aa07939fc46bbf262d0cafdabdd225212f53549fb864736f6c63430008040033';

export class Escrow__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Escrow> {
    return super.deploy(overrides || {}) as Promise<Escrow>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Escrow {
    return super.attach(address) as Escrow;
  }
  connect(signer: Signer): Escrow__factory {
    return super.connect(signer) as Escrow__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EscrowInterface {
    return new utils.Interface(_abi) as EscrowInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Escrow {
    return new Contract(address, _abi, signerOrProvider) as Escrow;
  }
}
