var CustomERC721Token = artifacts.require('CustomERC721Token');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await CustomERC721Token.new({from: account_one});

            // TODO: mint multiple tokens
            for (let i = 2; i <= 5; i++) {
                await this.contract.mint(accounts[i], i + 100, { from: accounts[0] });
              }
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 4, "wrong total supply");
        })

        it('should get token balance', async function () { 
            let account_two_balance = await this.contract.balanceOf(accounts[2]);
            assert.equal(account_two_balance, 1, "wrong balance for account 2")

            let account_three_balance = await this.contract.balanceOf(accounts[3]);
            assert.equal(account_three_balance, 1, "wrong balance for account 3")

            let account_four_balance = await this.contract.balanceOf(accounts[4]);
            assert.equal(account_four_balance, 1, "wrong balance for account 4")
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI(102, {from: account_one});
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/102", "Wrong uri")
            
            tokenURI = await this.contract.tokenURI(103, {from: account_one});
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/103", "Wrong uri")

            tokenURI = await this.contract.tokenURI(104, {from: account_one});
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/104", "Wrong uri")
        })

        it('should transfer token from one owner to another', async function () { 
            // Transfer token 103 - which belongs to accounts[3] - to accounts[4]
            let old_token_owner = await this.contract.ownerOf(103);
            assert.equal(old_token_owner, accounts[3], 'Wrong original owner');

            await this.contract.transferFrom(accounts[3], accounts[4], 103, {from: accounts[3]});
            let new_token_owner = await this.contract.ownerOf(103);
            assert.equal(new_token_owner, accounts[4], 'Token was not transferred');
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await CustomERC721Token.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            const minted = false;
            try {
                minted = await this.contract.mint(accounts[2], 102, { from: account_two });
            } catch (e) {}
            assert.equal(minted, false, 'Should not mint since caller is not contract owner'); 
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner();
            assert.equal(account_one, owner, 'Should return contract owner'); 
        })

    });
})