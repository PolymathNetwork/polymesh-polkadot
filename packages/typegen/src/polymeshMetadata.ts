import * as rimraf from 'rimraf';
import * as fs from 'fs';
import { execSync } from 'child_process';

const MD_PATH = './packages/typegen/src/generate/tmp';

function main (): void {
  const result = execSync(
    `curl -H "Content-Type: application/json" -d '{"id":1, "jsonrpc":"2.0", "method": "state_getMetadata", "params":[]}' ${process.argv[2]}`
  );
  rimraf.sync(MD_PATH);
  fs.mkdirSync(MD_PATH);
  fs.writeFileSync(
    `${MD_PATH}/polymesh_metadata.ts`,
    `
const polymeshMetadata = '${JSON.parse(result.toString()).result}';
export default polymeshMetadata;
`
  );

  process.exit();
}

main();
