var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

const proof39 = require('./proof39.json');

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('test solution square verifier', function () {
        beforeEach(async function () { 
            this.contract = await SolnSquareVerifier.deployed();
        });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('should add solution for contract', async function () { 
            await this.contract.addSolution(account_one);
            let solutionLength = await this.contract.getSolutionLength.call();
            assert.equal(solutionLength, 1, "Solution not added");
        });

        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('should mint a ERC721 token', async function () { 
            let account_two_balance = await this.contract.balanceOf(account_two);
            assert.equal(account_two_balance, 0, "wrong balance for account_two, should be 0");

            await this.contract.mintNewNFT(account_two, 111, proof39.proof, proof39.inputs, {from: account_one});

            let ownerAddress = await this.contract.ownerOf.call(111, {from: account_one});

            assert.equal(account_two, ownerAddress, "Token not minted to owner account_two");
            
        });


    });

})
