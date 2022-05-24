const fs = require("fs");
const path = require("path");

(async () => {
  const KIP7 = await hre.ethers.getContractFactory("KIP7");
  const kip7 = await KIP7.deploy();
  await kip7.deployed();

  if (kip7) {
    fs.mkdir("./deployed", { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.writeFile("./deployed/kip7TokenAddress", kip7.address, (err) => {
      if (err) throw err;
      console.log(
        `The deployed contract address * ${kip7.address} * is recorded on deployedAddress file`
      );
    });

    // const directory = path.join(
    //   process.cwd(),
    //   "artifacts/contracts/token/KIP7/KIP7.sol"
    // );
    // const kip7abiPath = path.join(directory, "KIP7.json");

    // await fs.readFile(kip7abiPath, function (err, data) {
    //   const abi = data.toString();
    //   console.log("abi", abi);
    // });
  }
})();
