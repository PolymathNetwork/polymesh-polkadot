#!/bin/bash

clean_up () {
  ./scripts/cleanup.sh
}

trap clean_up SIGINT SIGQUIT ERR

mv ./packages ./packages-tmp
mv ./tsconfig.json ./tsconfig-tmp.json
cp ./config/build/tsconfig.json ./tsconfig.json
mkdir ./packages
for dir in ./packages-tmp/*/
do
    folder=${dir%*/}
    module=${folder##*/}
    mkdir ./packages/${module}
    cp -R ./packages-tmp/${module}/src/* ./packages/${module}
    cp ./packages-tmp/${module}/package.json ./packages/${module}/package.json
done
ttsc --outDir build
