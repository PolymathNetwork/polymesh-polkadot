#!/bin/bash

clean_up () {
  ./scripts/cleanup.sh
}

trap clean_up SIGINT SIGQUIT ERR

for dir in ./packages/*/
do
    folder=${dir%*/}
    module=${folder##*/}
    cp ./packages/${module}/package.json ./build/${module}/package.json
done
cp ./config/release/* ./build
node ./scripts/generatePackageJson.js