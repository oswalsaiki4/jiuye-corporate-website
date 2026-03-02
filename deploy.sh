#!/bin/bash

# 九烨数据官网 - 腾讯云部署脚本
# 使用方法: ./deploy.sh [服务器IP] [用户名]
# 示例: ./deploy.sh 123.456.789.0 root

SERVER_IP=${1:-"YOUR_SERVER_IP"}
SERVER_USER=${2:-"root"}
REMOTE_PATH="/var/www/jiuye"

echo "🚀 开始部署九烨数据官网..."
echo "服务器: $SERVER_USER@$SERVER_IP"
echo "远程路径: $REMOTE_PATH"
echo ""

# 步骤 1: 构建
echo "📦 步骤 1/3: 构建静态文件..."
bun run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败！"
    exit 1
fi

echo "✅ 构建完成！"
echo ""

# 步骤 2: 创建远程目录
echo "📁 步骤 2/3: 创建远程目录..."
ssh $SERVER_USER@$SERVER_IP "mkdir -p $REMOTE_PATH"

# 步骤 3: 上传文件
echo "📤 步骤 3/3: 上传文件到服务器..."
rsync -avz --delete --progress out/ $SERVER_USER@$SERVER_IP:$REMOTE_PATH/

if [ $? -ne 0 ]; then
    echo "❌ 上传失败！"
    exit 1
fi

echo ""
echo "✅ 部署完成！"
echo ""
echo "📋 后续步骤："
echo "1. SSH 登录服务器: ssh $SERVER_USER@$SERVER_IP"
echo "2. 配置 Nginx（参考 DEPLOY_GUIDE.md）"
echo "3. 配置 SSL 证书"
echo "4. 配置域名解析"
echo ""
echo "🌐 网站将通过您的域名访问"
