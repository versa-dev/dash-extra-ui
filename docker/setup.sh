#!/bin/sh
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt install -y nodejs

git clone https://github.com/nfrik/dash_extra_ui_components.git
cd dash_extra_ui_components
npm install
npm run build:py_and_r
python setup.py sdist
cd dist
pip install dash_extra_ui_components-0.0.1.tar.gz
