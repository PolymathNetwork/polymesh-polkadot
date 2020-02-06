#!/bin/bash
if test -d packages-tmp; then
  echo "restoring packages dir..."
  rm -rf ./packages
  mv ./packages-tmp ./packages
fi

if test -f tsconfig-tmp.json then
  echo "restoring tsconfig..."
  rm -rf ./tsconfig.json
  mv ./tsconfig-tmp.json ./tsconfig.json
fi