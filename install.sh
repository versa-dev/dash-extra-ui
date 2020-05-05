#!/bin/bash
npm install
npm run build
npm run build:py_and_r
python3 setup.py sdist
pip install dist/dash_extra_ui_components-0.0.2.tar.gz