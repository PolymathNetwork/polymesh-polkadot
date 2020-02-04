#!/bin/bash

rm -rf ./build/*
for dir in ./packages/*/
do
    module=${dir%*/}
    mkdir ./build/${module##*/}
    cp -R ./packages/${module##*/}/build/. ./build/${module##*/}
done
rm ./build/package.json
cp ./package.json ./build