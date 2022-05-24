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
        `The deployed contract address * ${kip37.address} * is recorded in the kip37TokenAddress file`
      );
    });

    const directory = path.join(
      process.cwd(),
      "artifacts/contracts/token/KIP37/KIP37.sol/KIP37.json"
    );

    await fs.readFile(directory, function (err, data) {
      const abi = JSON.parse(data.toString());
      fs.writeFile(
        "./deployed/kip37TokenABI.json",
        JSON.stringify(abi.abi, 2),
        (err) => {
          if (err) throw err;
          console.log(
            `The abi of contract ${kip37.address} is recorded in the kip37TokenABI file`
          );
        }
      );
      if (err) {
        console.error(error);
      }
    });
  }
})();
