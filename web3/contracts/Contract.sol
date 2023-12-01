// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract IdeaStorage {
    address public owner;
    uint256 public ideaCount;

    struct Idea {
        address entrepreneur;
        string ideaData;
        uint256 timestamp;
    }

    struct Agreement {
        address party;
        uint256 eid; 
        uint256 iid; 
        uint256 timestamp;
    }

    enum AgreementType {
        NDA,
        NCA
    }

    mapping(uint256 => Idea) public ideas;
    mapping(uint256 => mapping(uint8 => Agreement)) public agreements;

    event IdeaSubmitted(address indexed entrepreneur, uint256 indexed ideaId);
    event AgreementSigned(
        address indexed party,
        uint256 indexed ideaId,
        uint8 indexed agreementType
    );

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only contract owner can perform this action"
        );
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function submitIdea(string memory _ideaData) public {
        ideaCount++;
        ideas[ideaCount] = Idea({
            entrepreneur: msg.sender,
            ideaData: _ideaData,
            timestamp: block.timestamp
        });
        emit IdeaSubmitted(msg.sender, ideaCount);
    }

    function signAgreement(uint256 _ideaId, uint8 _agreementType) public {
        require(_ideaId <= ideaCount, "Idea does not exist");
        require(
            ideas[_ideaId].entrepreneur != address(0),
            "Idea has not been submitted"
        );
        require(
            _agreementType == uint8(AgreementType.NDA) ||
                _agreementType == uint8(AgreementType.NCA),
            "Invalid agreement type"
        );

        require(
            agreements[_ideaId][_agreementType].party == address(0),
            "Agreement already signed for this idea and party"
        );

        agreements[_ideaId][_agreementType] = Agreement({
            party: msg.sender,
            eid: _ideaId,
            iid: uint256(keccak256(abi.encodePacked(msg.sender, _ideaId))),
            timestamp: block.timestamp
        });

        emit AgreementSigned(msg.sender, _ideaId, _agreementType);
    }

    function getIdea(
        uint256 _ideaId
    ) public view returns (address, string memory) {
        require(_ideaId <= ideaCount, "Idea does not exist");
        Idea memory idea = ideas[_ideaId];
        require(idea.entrepreneur != address(0), "Idea has not been submitted");
        return (idea.entrepreneur, idea.ideaData);
    }
}