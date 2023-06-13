#! /bin/bash

FILE_NAME=$1

tsc ./src/**/*.ts --outDir ./dist && node ./dist/${FILE_NAME}