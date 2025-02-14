pragma solidity ^0.8.19;

contract ContentManager {
    struct Post {
        address creator;
        string ipfsHash;
        uint256 tips;
    }
    
    Post[] public posts;
    
    event PostCreated(uint256 indexed postId, address indexed creator);
    event TipSent(uint256 indexed postId, address indexed from, uint256 amount);
    
    function createPost(string memory _ipfsHash) public {
        posts.push(Post(msg.sender, _ipfsHash, 0));
        emit PostCreated(posts.length - 1, msg.sender);
    }
    
    function tipPost(uint256 _postId) public payable {
        require(msg.value > 0, "Tip amount must be positive");
        posts[_postId].tips += msg.value;
        payable(posts[_postId].creator).transfer(msg.value);
        emit TipSent(_postId, msg.sender, msg.value);
    }
}