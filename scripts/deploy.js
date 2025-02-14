// filepath: /Users/princekhandelwal/Documents/productathon-2/backend/scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const AdManager = await ethers.getContractFactory("AdManager");
    const adManager = await AdManager.deploy();
    console.log("AdManager deployed to:", adManager.address);
  
    const ContentManager = await ethers.getContractFactory("ContentManager");
    const contentManager = await ContentManager.deploy();
    console.log("ContentManager deployed to:", contentManager.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });