# Midjourney API Converter

Midjourney API Converter 是一个中间件服务，用于转换 Midjourney API 请求格式并进行转发。它允许用户将 ephone.ai 的 Midjourney API 格式转换为 LinkerAI 的 Midjourney API 格式，发送到指定的服务器，然后将响应转换回 ephone.ai 的格式返回给客户端。

## 功能特点

- 将 ephone.ai 的 Midjourney API 格式转换为 LinkerAI 的 Midjourney API 格式
- 向指定服务器发送转换后的 API 请求
- 将服务器返回的响应转换回 ephone.ai 的 Midjourney API 格式
- 支持动态配置目标 URL 和 Linker Key

## 技术栈

- 后端: Node.js, Express
- 网络请求: Axios
- 跨域支持: CORS

## 安装

1. 克隆仓库:   ```
   git clone https://github.com/https://github.com/SophiaRainy/MJ-LK
   cd midjourney-api-converter   ```

2. 安装依赖:   ```
   npm install   ```

## 配置

创建一个 `.env` 文件在项目根目录，并设置以下环境变量：

## API 转换

# 以下步骤描述了如何使用 UI 进行 API 转换
1. 在左侧文本框中输入 ephone.ai 的 Midjourney API 格式的 JSON 数据。
2. 点击 "Convert" 按钮。
3. 转换后的结果将显示在右侧文本框中。

## 开发

# 以下是项目的文件结构说明
- 后端代码位于 `src` 目录中
- 前端代码位于 `client/src` 目录中
- API 转换逻辑在 `src/converter.js` 文件中定义

## 部署

# 以下步骤用于部署项目
1. 构建前端:   ```
   cd client
   npm run build   ```

2. 将后端代码和前端构建文件部署到您选择的托管服务上。

## 注意事项

- 本项目仅为演示用途，在生产环境中使用时请确保添加适当的安全措施。
- 请确保在使用时提供正确的 Linker Key。

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)
