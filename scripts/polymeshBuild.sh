#!/bin/bash

rm -rf ./build/*
for dir in ./packages/*/
do
    folder=${dir%*/}
    module=${folder##*/}
    mkdir ./build/${module}
    cp -R ./packages/${module}/build/. ./build/${module}
    rm ./build/${module}/package.json
done
rm ./build/package.json
cp ./package.json ./build
