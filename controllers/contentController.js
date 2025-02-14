const { getContentPosts } = require('../utils/web3');

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await getContentPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};