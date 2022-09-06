/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DutchAuction, DutchAuctionInterface } from "../DutchAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startingPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_discountRate",
        type: "uint256",
      },
      {
        internalType: "contract ERC721",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nftId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "discountRate",
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
    inputs: [],
    name: "expiresAt",
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
    inputs: [],
    name: "getPrice",
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
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract ERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nftId",
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
    inputs: [],
    name: "seller",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startAt",
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
    inputs: [],
    name: "startingPrice",
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
];

const _bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162000d7d38038062000d7d83398181016040528101906200003891906200017e565b6000811415620000495762093a8090505b3373ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1660601b815250508460e0818152505042610100818152505080426200009f91906200025a565b610120818152505083610140818152505062093a8084620000c19190620002b7565b85101562000106576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000fd9062000227565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508160a081815250505050505050620003f6565b6000815190506200016181620003c2565b92915050565b6000815190506200017881620003dc565b92915050565b600080600080600060a086880312156200019757600080fd5b6000620001a78882890162000167565b9550506020620001ba8882890162000167565b9450506040620001cd8882890162000150565b9350506060620001e08882890162000167565b9250506080620001f38882890162000167565b9150509295509295909350565b60006200020f60148362000249565b91506200021c8262000399565b602082019050919050565b60006020820190508181036000830152620002428162000200565b9050919050565b600082825260208201905092915050565b6000620002678262000360565b9150620002748362000360565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620002ac57620002ab6200036a565b5b828201905092915050565b6000620002c48262000360565b9150620002d18362000360565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156200030d576200030c6200036a565b5b828202905092915050565b6000620003258262000340565b9050919050565b6000620003398262000318565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f5374617274696e67207072696365203c206d696e000000000000000000000000600082015250565b620003cd816200032c565b8114620003d957600080fd5b50565b620003e78162000360565b8114620003f357600080fd5b50565b60805160601c60a05160c05160601c60e0516101005161012051610140516108ee6200048f6000396000818161028f015261057501526000818161023701526102ef01526000818161025e015261052d0152600081816102bd01526105510152600081816101ef015281816103dc01526104d00152600081816103fe015261050901526000818161021301526103a001526108ee6000f3fe6080604052600436106100865760003560e01c8063a6f2ae3a11610059578063a6f2ae3a14610137578063c6bc518214610141578063c74465651461016c578063d6fbf20214610197578063e6c0e6d5146101c257610086565b806308551a531461008b57806347ccca02146100b65780638622a689146100e157806398d5fdca1461010c575b600080fd5b34801561009757600080fd5b506100a06101ed565b6040516100ad9190610628565b60405180910390f35b3480156100c257600080fd5b506100cb610211565b6040516100d8919061067a565b60405180910390f35b3480156100ed57600080fd5b506100f6610235565b60405161010391906106d5565b60405180910390f35b34801561011857600080fd5b50610121610259565b60405161012e91906106d5565b60405180910390f35b61013f6102ed565b005b34801561014d57600080fd5b50610156610507565b60405161016391906106d5565b60405180910390f35b34801561017857600080fd5b5061018161052b565b60405161018e91906106d5565b60405180910390f35b3480156101a357600080fd5b506101ac61054f565b6040516101b991906106d5565b60405180910390f35b3480156101ce57600080fd5b506101d7610573565b6040516101e491906106d5565b60405180910390f35b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000807f000000000000000000000000000000000000000000000000000000000000000042610288919061075b565b90506000817f00000000000000000000000000000000000000000000000000000000000000006102b89190610701565b9050807f00000000000000000000000000000000000000000000000000000000000000006102e6919061075b565b9250505090565b7f0000000000000000000000000000000000000000000000000000000000000000421061034f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610346906106b5565b60405180910390fd5b6000610359610259565b90508034101561039e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161039590610695565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166323b872dd7f0000000000000000000000000000000000000000000000000000000000000000337f00000000000000000000000000000000000000000000000000000000000000006040518463ffffffff1660e01b815260040161043b93929190610643565b600060405180830381600087803b15801561045557600080fd5b505af1158015610469573d6000803e3d6000fd5b505050506000813461047b919061075b565b905060008111156104ce573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156104cc573d6000803e3d6000fd5b505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16ff5b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6105a0816107dd565b82525050565b6105af816107a1565b82525050565b6105be8161078f565b82525050565b6105cd816107ef565b82525050565b60006105e0600b836106f0565b91506105eb82610866565b602082019050919050565b6000610603600f836106f0565b915061060e8261088f565b602082019050919050565b610622816107d3565b82525050565b600060208201905061063d60008301846105a6565b92915050565b60006060820190506106586000830186610597565b61066560208301856105b5565b6106726040830184610619565b949350505050565b600060208201905061068f60008301846105c4565b92915050565b600060208201905081810360008301526106ae816105d3565b9050919050565b600060208201905081810360008301526106ce816105f6565b9050919050565b60006020820190506106ea6000830184610619565b92915050565b600082825260208201905092915050565b600061070c826107d3565b9150610717836107d3565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156107505761074f610837565b5b828202905092915050565b6000610766826107d3565b9150610771836107d3565b92508282101561078457610783610837565b5b828203905092915050565b600061079a826107b3565b9050919050565b60006107ac826107b3565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006107e882610813565b9050919050565b60006107fa82610801565b9050919050565b600061080c826107b3565b9050919050565b600061081e82610825565b9050919050565b6000610830826107b3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f455448203c207072696365000000000000000000000000000000000000000000600082015250565b7f41756374696f6e2065787069726564000000000000000000000000000000000060008201525056fea2646970667358221220ae8a48f83066fb1f81888e7b389ca904cb19db9770c77a9bbc222855d4b0368364736f6c63430008040033";

export class DutchAuction__factory extends ContractFactory {
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
    _startingPrice: BigNumberish,
    _discountRate: BigNumberish,
    _nft: string,
    _nftId: BigNumberish,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DutchAuction> {
    return super.deploy(
      _startingPrice,
      _discountRate,
      _nft,
      _nftId,
      _duration,
      overrides || {}
    ) as Promise<DutchAuction>;
  }
  getDeployTransaction(
    _startingPrice: BigNumberish,
    _discountRate: BigNumberish,
    _nft: string,
    _nftId: BigNumberish,
    _duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _startingPrice,
      _discountRate,
      _nft,
      _nftId,
      _duration,
      overrides || {}
    );
  }
  attach(address: string): DutchAuction {
    return super.attach(address) as DutchAuction;
  }
  connect(signer: Signer): DutchAuction__factory {
    return super.connect(signer) as DutchAuction__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DutchAuctionInterface {
    return new utils.Interface(_abi) as DutchAuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DutchAuction {
    return new Contract(address, _abi, signerOrProvider) as DutchAuction;
  }
}
