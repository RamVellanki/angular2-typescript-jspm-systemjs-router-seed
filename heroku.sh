#!/usr/bin/env bash

jspm i

if [ "$NODE_ENV" == "production" ]
then
  npm run bundle
fi
