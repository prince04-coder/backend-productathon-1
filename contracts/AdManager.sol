pragma solidity ^0.8.19;

contract AdManager {
    struct Campaign {
        address advertiser;
        string ipfsHash;
        uint256 budget;
        string[] keywords;
    }
    
    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount;
    
    event CampaignCreated(uint256 indexed campaignId, address indexed advertiser);
    
    function createCampaign(
        string memory _ipfsHash,
        string[] memory _keywords
    ) public payable {
        require(msg.value > 0, "Funding required");
        
        campaigns[campaignCount] = Campaign({
            advertiser: msg.sender,
            ipfsHash: _ipfsHash,
            budget: msg.value,
            keywords: _keywords
        });
        
        emit CampaignCreated(campaignCount, msg.sender);
        campaignCount++;
    }
    
    function getCampaignKeywords(uint256 _campaignId) public view returns (string[] memory) {
        return campaigns[_campaignId].keywords;
    }
}