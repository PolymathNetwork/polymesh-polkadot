import Git from "nodegit";
import rimraf from "rimraf";
import * as fs from "fs";

(async () => {
  rimraf.sync("./Polymesh");
  rimraf.sync("./packages/types/src/interfaces/polymesh");

  const branch = process.argv[2];
  const repo = await Git.Clone.clone("https://github.com/PolymathNetwork/Polymesh", "Polymesh");
  const commit = await repo.getBranchCommit(branch);
  const schemaFile = await commit.getEntry("polymesh_schema.json");
  const blob = await schemaFile.getBlob();

  fs.mkdirSync("./packages/types/src/interfaces/polymesh");
  fs.writeFileSync(
    "./packages/types/src/interfaces/polymesh/definitions.ts",
    `export default { types: ${blob.toString()} }`
  );
})();
