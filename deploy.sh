#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -addgit commit -m 'New deployment'
git push -f https://github.com/tina234/coffee_shop.git

cd -