# 九烨数据官网 - 腾讯云部署指南

## 方案一：静态网站部署（推荐）

### 步骤 1：本地构建
```bash
# 安装依赖
bun install

# 构建静态文件
bun run build

# 构建完成后，静态文件在 out/ 目录
```

### 步骤 2：上传到服务器
```bash
# 使用 scp 上传（替换为您的服务器信息）
scp -r out/* root@您的服务器IP:/var/www/jiuye/

# 或者使用 rsync（更高效）
rsync -avz --delete out/ root@您的服务器IP:/var/www/jiuye/
```

### 步骤 3：配置 Nginx

SSH 登录服务器后，创建 Nginx 配置：

```bash
sudo nano /etc/nginx/sites-available/jiuye.conf
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name jiuye.ai www.jiuye.ai;  # 替换为您的域名

    # 重定向到 HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name jiuye.ai www.jiuye.ai;  # 替换为您的域名

    # SSL 证书配置（腾讯云免费证书）
    ssl_certificate /etc/nginx/ssl/jiuye.ai.pem;
    ssl_certificate_key /etc/nginx/ssl/jiuye.ai.key;
    ssl_session_timeout 5m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;

    # 网站根目录
    root /var/www/jiuye;
    index index.html;

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied any;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml;
    gzip_comp_level 6;

    # 静态资源缓存
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /images/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 主要路由
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### 步骤 4：启用配置
```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/jiuye.conf /etc/nginx/sites-enabled/

# 测试配置
sudo nginx -t

# 重启 Nginx
sudo systemctl restart nginx
```

### 步骤 5：配置 SSL 证书（腾讯云免费证书）

1. 登录腾讯云控制台 → SSL证书 → 申请免费证书
2. 验证域名所有权
3. 下载 Nginx 格式的证书
4. 上传到服务器：
```bash
sudo mkdir -p /etc/nginx/ssl
sudo scp jiuye.ai.pem root@服务器IP:/etc/nginx/ssl/
sudo scp jiuye.ai.key root@服务器IP:/etc/nginx/ssl/
```

### 步骤 6：配置域名解析

在腾讯云 DNS 控制台添加记录：
- 记录类型：A
- 主机记录：@（根域名）和 www
- 记录值：您的服务器公网 IP

---

## 方案二：Node.js 服务器部署（SSR）

如果需要服务端渲染，请按以下步骤操作：

### 步骤 1：修改 next.config.js
```javascript
// 移除或注释掉以下行：
// output: "export",
// distDir: "out",
```

### 步骤 2：上传代码到服务器
```bash
# 上传整个项目（排除 node_modules）
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude 'out' ./ root@服务器IP:/var/www/jiuye/
```

### 步骤 3：在服务器上安装和构建
```bash
# SSH 登录服务器
ssh root@服务器IP

# 进入项目目录
cd /var/www/jiuye

# 安装 Node.js（如果没有）
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 安装 bun
curl -fsSL https://bun.sh/install | bash
source ~/.bashrc

# 安装依赖
bun install

# 构建
bun run build
```

### 步骤 4：使用 PM2 运行
```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "jiuye" -- start

# 设置开机自启
pm2 startup
pm2 save
```

### 步骤 5：配置 Nginx 反向代理
```nginx
server {
    listen 80;
    server_name jiuye.ai www.jiuye.ai;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name jiuye.ai www.jiuye.ai;

    ssl_certificate /etc/nginx/ssl/jiuye.ai.pem;
    ssl_certificate_key /etc/nginx/ssl/jiuye.ai.key;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 快速部署脚本

在服务器上创建自动部署脚本：

```bash
#!/bin/bash
# deploy.sh

cd /var/www/jiuye

# 拉取最新代码（如果使用 Git）
# git pull origin main

# 安装依赖
bun install

# 构建
bun run build

# 重启服务（如果使用 PM2）
# pm2 restart jiuye

echo "部署完成！"
```

---

## 常见问题

### Q: 页面刷新后显示 404？
A: 确保 Nginx 配置中有 `try_files $uri $uri/ $uri.html /index.html;`

### Q: HTTPS 不生效？
A: 检查 SSL 证书路径是否正确，确保防火墙开放了 443 端口

### Q: 域名无法访问？
A: 1. 检查 DNS 解析是否生效（可能需要几分钟）
   2. 确保服务器安全组开放了 80 和 443 端口
   3. 确保域名已备案（国内服务器必须）

---

## 联系支持

如有问题，请联系技术支持。
