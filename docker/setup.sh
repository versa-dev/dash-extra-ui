#!/bin/sh
curl -sL https://deb.nodesource.com/setup_12.x | bash -
apt install -y nodejs

git clone https://github.com/nfrik/extra_dash_ui_components.git
cd extra_dash_ui_components
npm install
npm run build:py_and_r
python setup.py sdist
cd dist
pip install extra_dash_ui_components-0.0.1.tar.gz
