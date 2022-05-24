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
        `The deployed contract address * ${kip17.address} * is recorded in the kip17TokenAddress file`
      );
    });

    const directory = path.join(
      process.cwd(),
      "artifacts/contracts/token/KIP17/KIP17.sol/KIP17.json"
    );

    await fs.readFile(directory, function (err, data) {
      const abi = JSON.parse(data.toString());
      fs.writeFile(
        "./deployed/kip17TokenABI.json",
        JSON.stringify(abi.abi, 2),
        (err) => {
          if (err) throw err;
          console.log(
            `The abi of contract ${kip17.address} is recorded in the kip17TokenABI file`
          );
        }
      );
      if (err) {
        console.error(error);
      }
    });
  }
})();
