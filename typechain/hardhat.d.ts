/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from 'ethers';
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from '@nomiclabs/hardhat-ethers/types';

import * as Contracts from '.';

declare module 'hardhat/types/runtime' {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: 'Ownable',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: 'ERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: 'IERC20Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: 'IERC20',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: 'ERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: 'ERC721URIStorage',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorage__factory>;
    getContractFactory(
      name: 'IERC721Metadata',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: 'IERC721',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: 'IERC721Receiver',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: 'ERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: 'IERC165',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: 'DutchAuction',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DutchAuction__factory>;
    getContractFactory(
      name: 'EnglishAuction',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EnglishAuction__factory>;
    getContractFactory(
      name: 'ERC20Escrow',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Escrow__factory>;
    getContractFactory(
      name: 'ERC721Escrow',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Escrow__factory>;
    getContractFactory(
      name: 'EtherEscrow',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EtherEscrow__factory>;
    getContractFactory(
      name: 'GameEscrow',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GameEscrow__factory>;
    getContractFactory(
      name: 'GameNFT',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GameNFT__factory>;
    getContractFactory(
      name: 'GLDExchange',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GLDExchange__factory>;
    getContractFactory(
      name: 'GLDToken',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GLDToken__factory>;
    getContractFactory(
      name: 'ItemMarket',
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ItemMarket__factory>;

    getContractAt(
      name: 'Ownable',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: 'ERC20',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: 'IERC20Metadata',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: 'IERC20',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: 'ERC721',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: 'ERC721URIStorage',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorage>;
    getContractAt(
      name: 'IERC721Metadata',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: 'IERC721',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: 'IERC721Receiver',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: 'ERC165',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: 'IERC165',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: 'DutchAuction',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DutchAuction>;
    getContractAt(
      name: 'EnglishAuction',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EnglishAuction>;
    getContractAt(
      name: 'ERC20Escrow',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Escrow>;
    getContractAt(
      name: 'ERC721Escrow',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Escrow>;
    getContractAt(
      name: 'EtherEscrow',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EtherEscrow>;
    getContractAt(
      name: 'GameEscrow',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GameEscrow>;
    getContractAt(
      name: 'GameNFT',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GameNFT>;
    getContractAt(
      name: 'GLDExchange',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GLDExchange>;
    getContractAt(
      name: 'GLDToken',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GLDToken>;
    getContractAt(
      name: 'ItemMarket',
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ItemMarket>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
