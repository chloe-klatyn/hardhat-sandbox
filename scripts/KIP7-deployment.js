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
        `The deployed contract address * ${kip7.address} * is recorded in the kip7TokenAddress file`
      );
    });

    const directory = path.join(
      process.cwd(),
      "artifacts/contracts/token/KIP7/KIP7.sol/KIP7.json"
    );

    await fs.readFile(directory, function (err, data) {
      const abi = JSON.parse(data.toString());
      fs.writeFile(
        "./deployed/kip7TokenABI.json",
        JSON.stringify(abi.abi, 2),
        (err) => {
          if (err) throw err;
          console.log(
            `The abi of contract ${kip7.address} is recorded in the kip7TokenABI file`
          );
        }
      );
      if (err) {
        console.error(error);
      }
    });
  }
})();
