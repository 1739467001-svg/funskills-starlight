# 繁星之夜 · FunSkills 决赛星河长廊 — 项目说明

静态展示页,部署在 GitHub Pages。

## ⚠️ 更新铁律：每次改动都必须同步到 GitHub
对本项目做**任何**修改后,都要走完整流程,**不能只改本地**:

```bash
cd "<项目目录>"
git add -A
git commit -m "<说明本次改动>"
git push origin main      # 推送到用户自己的 GitHub 仓库
```

`git push` 后 GitHub Pages 会自动重新构建,约 1 分钟线上生效。
即「**本地编辑 → commit → push 到用户 GitHub → 线上自动部署**」缺一不可。

## 关键信息
- 远端仓库:`https://github.com/1739467001-svg/funskills-starlight`(用户本人账号,公开)
- 线上地址(GitHub Pages):`https://1739467001-svg.github.io/funskills-starlight/`
- 部署方式:GitHub Pages（main 分支根目录,含 `.nojekyll`）
- Git 凭据:用户已通过 `gh` 设备码登录;若 `git push` 报认证错误,先 `gh auth setup-git`

## 两个上线目标（每次更新都要同步）
1. **GitHub Pages**：`git push` 后自动构建。
2. **用户云服务器（Ubuntu 24.04）**：nginx 服务,站点目录 `/var/www/funskills-starlight`(由 git clone 而来)。
   - 该机 80/8080 端口被其他应用占用(容器 Go 应用 / node 应用),**勿动**;本站用空闲端口 **8088**。
   - 通过 SSH 密钥免密访问(用户已 ssh-copy-id;**禁止使用密码登录**)。服务器具体 IP/端口见会话,不写入公共仓库。
   - 服务器更新命令:`cd /var/www/funskills-starlight && sudo git pull && sudo systemctl reload nginx`

### 标准更新流程
```
本地编辑 → git commit → git push（更新 GitHub + Pages）
         → SSH 到服务器 git pull + reload nginx（更新服务器）
```

## 目录
- `index.html` 结构 / `assets/style.css` 样式 / `assets/app.js` 交互 / `assets/data.js` 作品数据
- `assets/works/*.jpg` 海报(+ `thumbs/` 缩略图)

## 改内容（最常见）
作品标题/选手/简介/赛道都在 `assets/data.js`,改完按上面的铁律提交推送即可。

## 自适应
已适配手机/平板/桌面;背景装饰统一在 `.bg-layer` 裁剪层内,避免横向溢出——新增固定/绝对定位的大装饰元素时注意别破坏这一点。
