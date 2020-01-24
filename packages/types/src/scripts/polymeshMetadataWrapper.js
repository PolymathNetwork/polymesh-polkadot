#!/usr/bin/env node

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("@babel/register")({
  extensions: [".js", ".ts"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "^@polkadot/api-derive(.*)": "./packages/api-derive/src\\1",
          "^@polkadot/metadata(.*)": "./packages/metadata/src\\1",
          "^@polkadot/api(.*)": "./packages/api/src/\\1",
          "^@polkadot/jsonrpc(.*)": "./packages/type-jsonrpc/src\\1",
          "^@polkadot/rpc-core(.*)": "./packages/rpc-core/src\\1",
          "^@polkadot/rpc-provider(.*)": "./packages/rpc-provider/src\\1",
          "^@polkadot/types(.*)": "./packages/types/src\\1"
        }
      }
    ]
  ]
});

require("./polymeshMetadata.ts");
