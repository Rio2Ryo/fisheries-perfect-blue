#!/bin/bash
# GitHubのユーザー名を置き換えてください
# 例: git remote add origin https://github.com/YOUR_USERNAME/fisheries-perfect-blue.git

echo "GitHubのユーザー名を入力してください:"
read username

git remote add origin https://github.com/$username/fisheries-perfect-blue.git
git branch -M main
git push -u origin main

echo "プッシュが完了しました！"