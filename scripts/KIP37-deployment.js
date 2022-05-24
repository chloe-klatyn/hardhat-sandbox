const fs = require("fs");
const path = require("path");

(async () => {
  const KIP37 = await hre.ethers.getContractFactory("KIP37");
  const kip37 = await KIP37.deploy("uri");
  await kip37.deployed();

  if (kip37) {
    fs.mkdir("./deployed", { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.writeFile("./deployed/kip37TokenAddress", kip37.address, (err) => {
      if (err) throw err;
      console.log(
        `The deployed contract address * ${kip37.address} * is recorded on deployedAddress file`
      );
    });
  }
})();
