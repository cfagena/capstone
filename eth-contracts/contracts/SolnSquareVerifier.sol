pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import './ERC721Mintable.sol';
import './Verifier.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {

    Verifier private verifier;

    constructor (address verifierContractAddress) public {
        verifier = Verifier(verifierContractAddress);
    }

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address ownerAddress;
    }

    uint256 private solutionLength = 0;

    // TODO define an array of the above struct
    Solution[] private solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private usedSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256, address); 

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(address solutionAddress) public returns(uint256) {
        solutionLength++;

        Solution memory newSolution = Solution({
            index: solutionLength,
            ownerAddress: solutionAddress
        });

        solutions.push(newSolution);

        emit SolutionAdded(newSolution.index, newSolution.ownerAddress);
        return solutionLength;
    } 

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    // function mintNewNFT(address to, uint256 tokenId, Proof proof, uint[2] memory inputs)
    // public {
    //     bytes32 key = keccak256(abi.encodePacked(a, b, c, inputs));
    //     require(usedSolutions[key].index > 0, "Solution already used.");
    //     require(verifier.verifyTx(proof, inputs), "Verification failed");

    //     uint256 index = addSolution(to);
    //     usedSolutions[key] = solutions[index];

    //     mint(to, tokenId);       
    // }


}









  


























