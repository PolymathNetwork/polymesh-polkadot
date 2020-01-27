import { ApiPromise, WsProvider } from "@polkadot/api/index";
import * as rimraf from "rimraf";
import * as fs from "fs";
import schema from "../interfaces/polymesh/definitions";

const MD_PATH = "./packages/types/src/scripts/generateTypes/tmp";

async function main() {
  const provider = new WsProvider(process.argv[2]);
  const api = await ApiPromise.create({
    provider,
    types: schema.types
  });

  // Retrieve queries via rpc calls
  const [metadata] = await Promise.all([api.runtimeMetadata]);

  rimraf.sync(MD_PATH);
  fs.mkdirSync(MD_PATH);
  fs.writeFileSync(`${MD_PATH}/polymesh_metadata.json`, metadata);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
