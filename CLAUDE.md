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

## 缓存版本号（重要）
`index.html` / `admin.html` 引用 `style.css?v=N` `app.js?v=N` `data.js?v=N`。
**每次改了 css/js/data,必须把所有 `?v=N` 同步 +1**,否则用户拿到的是旧缓存。

## 点赞/评论后端（仅云服务器，GitHub Pages 无后端）
- 代码:`server/api.py`（Python 标准库 + SQLite，零依赖）；后台看板:`admin.html`。
- 运行:systemd 服务 `funskills-api`（监听 127.0.0.1:8090），nginx 用 `location /api/` 反代。
- 数据库:`/var/lib/funskills/engagement.db`（**在 web 根目录之外**，不可被下载）。
- 管理员密钥:存于 `/var/lib/funskills/admin.key`，也写在 systemd 单元的 `FX_ADMIN_KEY`。
- 后台地址:`<站点>/admin.html`，输入密钥查看「谁给谁点赞/评论」。
- **若改了 `server/api.py`,git pull 后要 `sudo systemctl restart funskills-api`**（改前端则不用）。
- 前端 API 基址为同源 `/api`;Pages（https）因混合内容无法调用 http 后端,会优雅降级提示"请在正式站点体验"。互动功能以服务器/域名站点为准。
