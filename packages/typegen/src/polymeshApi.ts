// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

((): void => {
  const branch = process.argv[2] || 'develop';
  const provider = process.argv[3] || 'http://78.47.38.110:9933';

  console.log('Building Polymesh schema...');
  execSync(`ts-node -r tsconfig-paths/register packages/typegen/src/polymeshSchema.ts ${branch}`, { stdio: 'inherit' });
  console.log('Building Polymesh metadata...');
  execSync(`ts-node -r tsconfig-paths/register packages/typegen/src/polymeshMetadata.ts ${provider}`, { stdio: 'inherit' });
  console.log('Building interfaces...');
  execSync('yarn polkadot-types-internal-interfaces', { stdio: 'inherit' });
  console.log('Done!');
})();
