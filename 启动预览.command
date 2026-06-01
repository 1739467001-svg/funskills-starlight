#!/bin/bash
cd "$(dirname "$0")"
echo "繁星之夜 · 本地预览启动中…  打开 http://localhost:8000"
python3 -m http.server 8000
