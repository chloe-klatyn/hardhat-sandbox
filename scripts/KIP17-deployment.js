const fs = require("fs");
const path = require("path");

(async () => {
  const KIP17 = await hre.ethers.getContractFactory("KIP17");
  const kip17 = await KIP17.deploy();
  await kip17.deployed();

  if (kip17) {
    fs.mkdir("./deployed", { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.writeFile("./deployed/kip17TokenAddress", kip17.address, (err) => {
      if (err) throw err;
      console.log(
        `The deployed contract address * ${kip17.address} * is recorded on deployedAddress file`
      );
    });
  }
})();
