/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Escrow, ERC20EscrowInterface } from "../ERC20Escrow";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "LogERC20RolledBack",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "LogERC20Send",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "LogERC20WithDraw",
    type: "event",
  },
  {
    inputs: [],
    name: "getERC20Balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "rollbackERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "sendERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200159c3803806200159c833981810160405281019062000037919062000095565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000123565b6000815190506200008f8162000109565b92915050565b600060208284031215620000a857600080fd5b6000620000b8848285016200007e565b91505092915050565b6000620000ce82620000e9565b9050919050565b6000620000e282620000c1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200011481620000d5565b81146200012057600080fd5b50565b61146980620001336000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632de55221146100515780632ed6d5e81461006d5780633c78514314610077578063c3736fe614610093575b600080fd5b61006b60048036038101906100669190610e94565b6100b1565b005b6100756104f7565b005b610091600480360381019061008c9190610e6b565b610783565b005b61009b610cd5565b6040516100a89190611128565b60405180910390f35b600033905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161010f9190610fdb565b60206040518083038186803b15801561012757600080fd5b505afa15801561013b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015f9190610ef9565b8211156101a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161019890611108565b60405180910390fd5b8160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e83306040518363ffffffff1660e01b81526004016101fd92919061101f565b60206040518083038186803b15801561021557600080fd5b505afa158015610229573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024d9190610ef9565b101561028e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610285906110c8565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd8230856040518463ffffffff1660e01b81526004016102eb93929190611048565b602060405180830381600087803b15801561030557600080fd5b505af1158015610319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061033d9190610ed0565b50600060405180606001604052808373ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152509050600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040820151816002015550508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f7593c5a868b39205b4da972efe3016fb3d064b8c17c756e977afaeb77deb9b4b856040516104e99190611128565b60405180910390a350505050565b60003390506000805b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156105f357600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081815481106105c1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020154826105de9190611154565b915080806105eb9061123a565b915050610500565b506000811415610638576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062f906110e8565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610693929190610ff6565b602060405180830381600087803b1580156106ad57600080fd5b505af11580156106c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e59190610ed0565b50600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006107319190610d86565b3373ffffffffffffffffffffffffffffffffffffffff167fb732f8145b8f4a2d91976aa8e73edc81447e410798dedaeb8ad8a5f426fa013e826040516107779190611128565b60405180910390a25050565b60003390506000805b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054905081101561095c578273ffffffffffffffffffffffffffffffffffffffff16600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610864577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561094957600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208181548110610929577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160020154826109469190611154565b91505b80806109549061123a565b91505061078c565b5060008114156109a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610998906110a8565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016109fc92919061107f565b602060405180830381600087803b158015610a1657600080fd5b505af1158015610a2a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4e9190610ed0565b5060005b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050811015610c6a578273ffffffffffffffffffffffffffffffffffffffff16600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110610b2a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020906003020160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610c5757600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208181548110610bef577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905550505b8080610c629061123a565b915050610a52565b508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f371ebca05db0f296f19a1b2750ec3228f367f76070e11a3a9b0f0896097034c283604051610cc89190611128565b60405180910390a3505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610d319190610fdb565b60206040518083038186803b158015610d4957600080fd5b505afa158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d819190610ef9565b905090565b5080546000825560030290600052602060002090810190610da79190610daa565b50565b5b80821115610e1357600080820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600282016000905550600301610dab565b5090565b600081359050610e26816113ee565b92915050565b600081519050610e3b81611405565b92915050565b600081359050610e508161141c565b92915050565b600081519050610e658161141c565b92915050565b600060208284031215610e7d57600080fd5b6000610e8b84828501610e17565b91505092915050565b60008060408385031215610ea757600080fd5b6000610eb585828601610e17565b9250506020610ec685828601610e41565b9150509250929050565b600060208284031215610ee257600080fd5b6000610ef084828501610e2c565b91505092915050565b600060208284031215610f0b57600080fd5b6000610f1984828501610e56565b91505092915050565b610f2b81611204565b82525050565b610f3a816111aa565b82525050565b6000610f4d604b83611143565b9150610f58826112b2565b606082019050919050565b6000610f70601983611143565b9150610f7b82611327565b602082019050919050565b6000610f93602783611143565b9150610f9e82611350565b604082019050919050565b6000610fb6602283611143565b9150610fc18261139f565b604082019050919050565b610fd5816111fa565b82525050565b6000602082019050610ff06000830184610f31565b92915050565b600060408201905061100b6000830185610f22565b6110186020830184610fcc565b9392505050565b60006040820190506110346000830185610f31565b6110416020830184610f31565b9392505050565b600060608201905061105d6000830186610f31565b61106a6020830185610f31565b6110776040830184610fcc565b949350505050565b60006040820190506110946000830185610f31565b6110a16020830184610fcc565b9392505050565b600060208201905081810360008301526110c181610f40565b9050919050565b600060208201905081810360008301526110e181610f63565b9050919050565b6000602082019050818103600083015261110181610f86565b9050919050565b6000602082019050818103600083015261112181610fa9565b9050919050565b600060208201905061113d6000830184610fcc565b92915050565b600082825260208201905092915050565b600061115f826111fa565b915061116a836111fa565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561119f5761119e611283565b5b828201905092915050565b60006111b5826111da565b9050919050565b60006111c7826111da565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061120f82611216565b9050919050565b600061122182611228565b9050919050565b6000611233826111da565b9050919050565b6000611245826111fa565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561127857611277611283565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f526f6c6c6261636b206973206e6f7420617661696c61626c6520666f7220796f60008201527f752e20455243323020746f6b656e73206d6967687420626520616c726561647960208201527f2077697468647261776564000000000000000000000000000000000000000000604082015250565b7f436865636b2074686520746f6b656e20616c6c6f77616e636500000000000000600082015250565b7f596f7520646f6e2774206861766520455243323020746f6b656e732073656e7460008201527f20746f20796f7500000000000000000000000000000000000000000000000000602082015250565b7f596f7520646f6e2774206861766520656e6f75676820455243323020746f6b6560008201527f6e73000000000000000000000000000000000000000000000000000000000000602082015250565b6113f7816111bc565b811461140257600080fd5b50565b61140e816111ce565b811461141957600080fd5b50565b611425816111fa565b811461143057600080fd5b5056fea2646970667358221220025251ff047e14da10c3bd2b313a985323bfc7ca75fed3c131865bfae00b481964736f6c63430008040033";

export class ERC20Escrow__factory extends ContractFactory {
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
  ): Promise<ERC20Escrow> {
    return super.deploy(_token, overrides || {}) as Promise<ERC20Escrow>;
  }
  getDeployTransaction(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, overrides || {});
  }
  attach(address: string): ERC20Escrow {
    return super.attach(address) as ERC20Escrow;
  }
  connect(signer: Signer): ERC20Escrow__factory {
    return super.connect(signer) as ERC20Escrow__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20EscrowInterface {
    return new utils.Interface(_abi) as ERC20EscrowInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Escrow {
    return new Contract(address, _abi, signerOrProvider) as ERC20Escrow;
  }
}
