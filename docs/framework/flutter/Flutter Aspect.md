---
sidebar_position: 2
title: Flutter Aspect 集成
---

由于 Dart 语言未提供在编译期修改代码的整套 API，所以 Flutter SDK 的无埋点需要通过修改 Dart 源码方式织入外部的 `Transformer` 能使其在 dart 代码优化前参与到 Flutter 代码的编译中；在 Flutter 的源码中添加整套 Transformer 流程的 API，使其实现 Aspect 功能。

基于上述说明，我们的 Flutter SDK 无埋点方案基于修改 Flutter 源代码的方式进行，需要拉取 GitHub 上的 [Flutter SDK](https://github.com/flutter/flutter)。
具体安装可以参考官方引导：[Install Flutter From Github](https://docs.flutter.dev/get-started/install/macos#downloading-straight-from-github-instead-of-using-an-archive)

然后再根据你开发使用的 Flutter 版本，切换到相应的 tag 分支上。

:::info
目前支持 Flutter SDK 版本为 [v3.35.3](https://github.com/growingio/growingio-dart-frontend/tree/3.35.3)，[v3.24.4](https://github.com/growingio/growingio-dart-frontend/tree/3.24.4)，[v3.22.1](https://github.com/growingio/growingio-dart-frontend/tree/3.22.1) 以及 [v3.3.0](https://github.com/growingio/growingio-dart-frontend/tree/3.3.0) 至 [v3.19.6](https://github.com/growingio/growingio-dart-frontend/tree/3.19.6) 间大部分主要版本.

后续将随着 Flutter SDK 的更新会持续推出新的版本，若需要支持特定的 Flutter 版本，请在 [Github Issues](https://github.com/growingio/growingio-dart-frontend/issues) 中提交请求或者向客户成功经理咨询方案。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 安装方式

共有两种方式选择，一是手动替换文件，二是下载一键替换脚本。

首先，请访问我们的 [Growingio-Dart-Frontend](https://github.com/growingio/growingio-dart-frontend)，该项目的 tag 对应 Flutter 版本，请根据自己项目的 Flutter 版本切换到相应 tag。

> 比如 Flutter 3.35.3 版本，则切换到 [tree/3.35.3](https://github.com/growingio/growingio-dart-frontend/tree/3.35.3)

<Tabs
  className="unique-tabs"
  groupId="install-type"
  defaultValue="manual"
  values={[
    {label: '手动', value: 'manual'},
    {label: '脚本', value: 'automatic'},
  ]
}>

<TabItem value="manual">

### 下载并替换 AOT Snapshot

请下载对应您当前平台架构的 `frontend_server_aot.dart.snapshot` 文件

> 具体位置为 `/lib/flutter_frontend_server/<您当前的平台架构，如darwin_arm64>/frontend_server_aot.dart.snapshot`

需要在 Flutter SDK 下进行文件替换 (若文件存在则替换)，位置分别为：

- **Flutter SDK 版本号大于等于 3.24.0**:
  - **macos**: `<flutter sdk dir>/bin/cache/artifacts/engine/darwin-x64/frontend_server_aot.dart.snapshot`
  - **windows**: `<flutter sdk dir>/bin/cache/artifacts/engine/windows-x64/frontend_server_aot.dart.snapshot`
  - **linux**: `<flutter sdk dir>/bin/cache/artifacts/engine/linux-x64/frontend_server_aot.dart.snapshot`
- **Flutter SDK 版本号大于等于 3.19.0**: `<flutter sdk dir>/bin/cache/dart-sdk/bin/snapshots/frontend_server_aot.dart.snapshot`

### 下载并替换 JIT Snapshot (仅旧版本需要)

对于 Flutter 3.24.0(不包含 3.24.0)以下的版本，还需要下载 `frontend_server.dart.snapshot` 文件

> 具体位置为 `/lib/flutter_frontend_server/frontend_server.dart.snapshot`

需要在 Flutter SDK 下进行文件替换 (若文件存在则替换)，位置分别为：

- **macos**: `<flutter sdk dir>/bin/cache/artifacts/engine/darwin-x64/frontend_server.dart.snapshot`
- **windows**: `<flutter sdk dir>/bin/cache/artifacts/engine/windows-x64/frontend_server.dart.snapshot`
- **linux**: `<flutter sdk dir>/bin/cache/artifacts/engine/linux-x64/frontend_server.dart.snapshot`
- `<flutter sdk dir>/bin/cache/dart-sdk/bin/snapshots/frontend_server.dart.snapshot`

</TabItem>

<TabItem value="automatic">

请下载我们的帮助脚本 growingio_flutter_script.sh (位于仓库的根目录下, 版本之间有差异，务必切换到 Flutter 版本对应的 tag)，运行后脚本会自动帮助你覆盖 Flutter SDK 中需要替换的文件。

```shell
$ chmod 777 growingio_flutter_script.sh
$ ./growingio_flutter_script.sh
```

:::info
需要将环境变量中 Flutter 路径指向 github 下拉取下来的源代码位置
:::

</TabItem>
</Tabs>

## 清除缓存

覆盖 snapshot 后需要清理缓存

```cmd
flutter clean
```

若是已经集成 [Flutter 无埋点插件](/docs/framework/flutter/Flutter%20SDK)，重新编译后，无埋点就能正常运行了。

## 卸载无埋点

若是需要恢复至集成无埋点之前的状态，可以到 `<flutter sdk dir>` 下运行以下命令，恢复原来的文件。

```cmd
git reset --hard 
或者
git reset --hard <tag>

rm -rf bin/cache  ## 用来删除缓存 
```
