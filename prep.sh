#!/usr/bin/env bash

if [ $# -ne 1 ]; then
  echo "ENV not passed"
  exit 1
fi

. ./config/$1.env
. ./config/$1_secret.env
