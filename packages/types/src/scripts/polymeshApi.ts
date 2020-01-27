const { exec } = require("child_process");

(async () => {
  const branch = process.argv[2] || "master";
  const provider = process.argv[3] || "ws://78.47.58.121:9944";

  console.log("Building interfaces...");
  exec(
    `ts-node packages/types/src/scripts/polymeshSchema.ts ${branch} && node packages/types/src/scripts/polymeshMetadataWrapper.js ${provider} && node packages/types/src/scripts/interfacesTsWrapper.js`
  );
})();
