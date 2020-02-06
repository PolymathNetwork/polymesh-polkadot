#!/bin/bash

rm -rf ./packages
mv ./packages-tmp ./packages
rm -rf ./tsconfig.json
mv ./tsconfig-tmp.json ./tsconfig.json