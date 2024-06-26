---
sidebar_position: 5
title: 数据加密压缩
---
## 简介（gioCompress）

上报请求的数据进行加密压缩。

## 集成

全量集成SDK时无需再次集成此插件。

### 1、引入

#### CDN集成引入

```html
<script src="https://assets.giocdn.com/sdk/webjs/cdp/plugins/gioCompress.js"></script>
```

#### npm集成引入

```js
import gioCompress from "gio-webjs-sdk-cdp/plugins/gioCompress"
```

### 2、注册

```js
gdp('registerPlugins', [gioCompress]);
gdp('init', xxxx);
```

## 注意

1、初始化配置项 `compress` 依然有效并能控制该功能是否启用，请留意初始化配置项 `compress` 是否在开启状态。[参考文档](/docs/webjs/3.8/initSettings#compress)

2、数据加密开启时，仅上报的请求中数据会压缩加密，`debug`模式下（指初始化开启debug）控制台中打印的日志仍然为明文。因此，上线时请注意关闭初始化配置项`debug`。
