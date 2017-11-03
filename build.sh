#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# UI Version Lock
if [ -e ELEVATOR_VERSION ]
then
    echo "Version Lock Found"
    GIT_REF=`cat ELEVATOR_VERSION`
else
    echo "Auto Update UI Mode"
    GIT_REF="master"
fi

mkdir /repos
cd /repos
git clone git@github.com:connectedacademy/elevator.git
echo "Cloned Elevator UI"
cd elevator
git reset --hard ${GIT_REF}
echo "Switched to commit @ $GIT_REF"

# Brand Customisation
cd $DIR
if [ -e colors.styl ]
then
    echo "Using Brand customisation in colors.styl"
    cp colors.styl /repos/elevator/src/assets/stylus/buildvariant/colors.styl
    npm i --silent
    npm run build
    echo "Build Complete"
else
    echo "Using Stock colors"
fi

cp -r /repos/elevator/docs/* ~/connectedacademy
echo "Copied UI to local repo"

cd ~/connectedacademy
# upgrade changes
git config --global user.name "CircleCI"
git config --global user.email "info@connectedacademy.io"
git checkout -b staging
git add .
git commit -am"[skip CI] AUTOBUILD"
git checkout -b gh-pages
git rebase -Xtheirs staging
git push -u -f origin gh-pages