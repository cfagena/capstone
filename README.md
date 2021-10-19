Real Estate Market - Blockchain course capstone project
=======

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

## Rinkeby Contract Address
0x779E87F6AD2ed95661acB7b07DFB75205c1C3aB7

## OpenSet
https://testnets.opensea.io/cesar_agena

## Rinkeby transactions - etherscan
https://rinkeby.etherscan.io/address/0x779e87f6ad2ed95661acb7b07dfb75205c1c3ab7

## Deployment log
```
~/Blockchain Nano Degree/capstone/eth-contracts (main) $ truffle migrate --reset --network rinkeby

Compiling your contracts...
===========================
✔ Fetching solc version list from solc-bin. Attempt #1
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 29970705 (0x1c95111)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        9494449
   > block timestamp:     1634676332
   > account:             0xF722D24a94c5576b280A4ED57726A5659ECaEb91
   > balance:             10.3787104529931198
   > gas used:            210237 (0x3353d)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000420474 ETH

   -------------------------------------
   > Total cost:         0.000420474 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > block number:        9494451
   > block timestamp:     1634676344
   > account:             0xF722D24a94c5576b280A4ED57726A5659ECaEb91
   > balance:             10.3766970389931198
   > gas used:            979344 (0xef190)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.001958688 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > block number:        9494452
   > block timestamp:     1634676412
   > account:             0xF722D24a94c5576b280A4ED57726A5659ECaEb91
   > balance:             10.3700250029931198
   > gas used:            3336018 (0x32e752)
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.006672036 ETH

   -------------------------------------
   > Total cost:         0.008630724 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.009051198 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29941438 (0x1c8debe)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xb4d7a91ad8d8a099f3ad1c5629e126df57695f6c660d39babfc7b2bab8f14eae
   > Blocks: 2            Seconds: 16
   > contract address:    0x2DFC21Ba04Bee5FAB99E0A09BDF764c5C83b8B9c
   > block number:        9494457
   > block timestamp:     1634676454
   > account:             0xF722D24a94c5576b280A4ED57726A5659ECaEb91
   > balance:             10.37890438999085443
   > gas used:            226537 (0x374e9)
   > gas price:           1.00000001 gwei
   > value sent:          0 ETH
   > total cost:          0.00022653700226537 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00022653700226537 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x4b435711a9aad93057c7652671586eea0f7bde98980f4f9871b2f3d4f485e35c
   > Blocks: 0            Seconds: 8
   > contract address:    0x853919274B2C19cDc490ece9194d9ea754b52456
   > block number:        9494459
   > block timestamp:     1634676484
   > account:             0xF722D24a94c5576b280A4ED57726A5659ECaEb91
   > balance:             10.37787928298060336
   > gas used:            979344 (0xef190)
   > gas price:           1.00000001 gwei
   > value sent:          0 ETH
   > total cost:          0.00097934400979344 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x20394143dafd2013c55499e478354e8260a73473cf1df23aa80f4e62d3137953
   > Blocks: 1            Seconds: 8
   > contract address:    0x779E87F6AD2ed95661acB7b07DFB75205c1C3aB7
   > block number:        9494460
   > block timestamp:     1634676499
   > account:             0xF722D24a94c5576b280A4ED57726A5659ECaEb91
   > balance:             10.37435226494533318
   > gas used:            3527018 (0x35d16a)
   > gas price:           1.00000001 gwei
   > value sent:          0 ETH
   > total cost:          0.00352701803527018 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00450636204506362 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.00473289904732899 ETH
```


