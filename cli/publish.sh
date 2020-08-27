#!/usr/bin/env bash
npm config get registry 
npm config set registry=https://registry.npmjs.org
npm login
echo '---------publishing--------'
npm publish
npm config set registry=https://registry.npm.taobao.org
echo '---------publishing end--------'
exit