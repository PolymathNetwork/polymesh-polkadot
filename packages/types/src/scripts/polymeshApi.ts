// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

((): void => {
  const branch = process.argv[2] || 'develop';
  const provider = process.argv[3] || 'http://78.47.58.121:9933';

  console.log('Building Polymesh schema...');
  execSync(`ts-node packages/types/src/scripts/polymeshSchema.ts ${branch}`, { stdio: 'inherit' });
  console.log('Building Polymesh metadata...');
  execSync(`ts-node packages/types/src/scripts/polymeshMetadata.ts ${provider}`, { stdio: 'inherit' });
  console.log('Building interfaces...');
  execSync('node packages/types/src/scripts/interfacesTsWrapper.js', { stdio: 'inherit' });
  console.log('Done!');
})();
