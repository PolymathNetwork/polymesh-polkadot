#!/bin/bash
if test -d packages-tmp; then
  rm -rf ./packages
  mv ./packages-tmp ./packages
fi

if test -f tsconfig-tmp.json; then
  rm -rf ./tsconfig.json
  mv ./tsconfig-tmp.json ./tsconfig.json
fi