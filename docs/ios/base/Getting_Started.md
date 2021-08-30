---
sidebar_position: 1
title: 如何集成
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

iOS SDK 提供了 `无埋点` 和 `埋点` 两个SDK版本：
* 埋点 SDK 只自动采集用户访问事件，需要开发同学调用相应埋点 API 采集自定义事件;
* 无埋点 SDK 具备埋点 SDK 的所有功能，同时具备自动采集基本用户行为事件，如页面访问，点击事件等。

无埋点SDK（包括埋点 SDK）代码已托管在 [Github](https://github.com/growingio/growingio-sdk-ios-autotracker) <br/>
CDP无埋点SDK（包括埋点 SDK）代码托管在 [Github](https://github.com/growingio/growingio-sdk-ios-autotracker-cdp)

欢迎 star,fork 一波。

> **开发环境** <br/>
> Xcode 9.0 及以上  
> iOS 8.0 及以上

### 无埋点SDK集成

### 1. Cocoapods集成

在你的Podfile文件中添加

```c
pod 'GrowingAnalytics-cdp/Autotracker'
```

### 2. 添加 URL Scheme

URL Scheme 是您在 GrowingIO 平台创建应用时生成的该应用的唯一标识。把 URL Scheme 添加到您的项目，以便使用Mobile Debug等功能时唤醒您的应用。  

选择工程 → Target  → Info  → URL Types  → 添加您的Url Scheme 即可

>  你需要在GrowingIO网站上先创建你的App应用，获取Url Scheme

### 3. SDK初始化配置

1. 导入头文件`"GrowingAutotracker.h"`请将以下 `GrowingTracker.startWithConfiguration`加在您的`AppDelegate` 的 `application:didFinishLaunchingWithOptions:` 方法中  
   代码示例:

```c
// Config GrowingIO
// 参数需要从GrowingIO网站上，创建新应用，或从已知应用中获取 
// YourProjectId eg:0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg:http://106.75.81.105:8080
// YourDatasourceId eg: 11223344aabbcc
GrowingTrackConfiguration *configuration = [GrowingTrackConfiguration configurationWithProjectId:@"YourProjectId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
[GrowingAutotracker startWithConfiguration:configuration launchOptions:launchOptions];
```
- 在appDelegate.m文件中实现urlSchme跳转以及DeepLink跳转的代理方法

```c
// url scheme跳转
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSNSString *)sourceApplication
         annotation:(id)annotation {

    return NO;
}

// universal Link执行
- (BOOL) application:(UIApplication *)application
continueUserActivity:(NSUserActivity *)userActivity
  restorationHandler:(void (^)(NSArray<id <UIUserActivityRestoring>> *_Nullable))restorationHandler {
    return YES;
}
```

3. 若使用了iOS 13的 UIScene，请在你指定的SceneDelegate中设置如下

```c
- (void)scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity {
}

- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {
}
```


> 上述代理方法空实现即可，SDK会自动加入处理代码

### 4. SDK 初始化配置项

| API                        | 参数类型         | 是否必填 | 默认值 | 说明                                                      |
| :------------------------- | :--------------- | :------: | :----- | :-------------------------------------------------------- |
| `projectId`                | `NSNSString`     |    是    | `nil`  | 官网的中您的项目ID                                        |
| `urlScheme`                | `NSNSString`     |    是    | `nil`  | 官网的中您的相应APP的UrlScheme                            |
| `dataSourceId`             | `NSNSString`     |    是    | `nil`  | 官网的中您的相应APP的DataSourceId                         |
| `dataCollectionServerHost` | `NSNSString`     |    是    | `nil`  | 您部署服务的后端Host                                      |
| `uploadExceptionEnable`    | `BOOL`           |    否    | `YES`  | 收集SDK内部异常上报服务端                                 |
| `debugEnabled`             | `BOOL`           |    否    | `NO`   | 调试模式，会打印SDK log，抛出错误异常，在线上环境务必关闭 |
| `cellularDataLimit`        | `NSUInteger`     |    否    | `10`   | 每天发送数据的流量限制，单位MB                            |
| `dataUploadInterval`       | `NSTimeInterval` |    否    | `15`   | 数据发送的间隔，单位秒                                    |
| `sessionInterval`          | `NSTimeInterval` |    否    | `30`   | 每次访问会话的最大时长，单位秒                            |
| `dataCollectionEnabled`    | `BOOL`           |    否    | `YES`  | 是否采集数据                                              |
| `impressionScale`          | `float`          |    否    | `0`    | 元素曝光事件中的比例因子,范围 [0-1]                       |
| `excludeEvent`             | `NSUInteger`     |    否    | `0`    | 需要过滤的事件类型计算的掩码值                            |
| `ignoreField`              | `NSUInteger`     |    否    | `0`    | 事件中需要过滤的属性计算的掩码值                          |

### 埋点SDK集成

埋点 SDK只自动采集用户访问事件和APP关闭事件，其他事件均需要开发同学调用相应埋点 API 采集自定义事件。

### 1. Cocoapods集成

在你的Podfile文件中添加

```c
pod 'GrowingAnalytics-cdp/Tracker'
```

### 2. 添加 URL Scheme

URL Scheme 是您在 GrowingIO 平台创建应用时生成的该应用的唯一标识。把 URL Scheme 添加到您的项目，以便使用Mobile Debug等功能时唤醒您的应用。  

选择工程 -> Target -> Info -> URL Types -> 添加您的Url Scheme 即可

>  你需要在GrowingIO网站上先创建你的App应用，获取Url Scheme

### 3. SDK初始化配置

1. 导入头文件`"GrowingTracker.h"`,请将以下 `GrowingTracker.startWithConfiguration`加在您的`AppDelegate` 的 `application:didFinishLaunchingWithOptions:` 方法中  
   代码示例:

```c
// Config GrowingIO
// 参数需要从GrowingIO网站上，创建新应用，或从已知应用中获取 
// YourProjectId eg:0a1b4118dd954ec3bcc69da5138bdb96
// YourServerHost eg:http://106.75.81.105:8080
// YourDatasourceId eg: 11223344aabbcc
GrowingTrackConfiguration *configuration = [GrowingTrackConfiguration configurationWithProjectId:@"YourProjectId"];
configuration.dataCollectionServerHost = @"YourServerHost";
configuration.dataSourceId = @"YourDatasourceId";
[GrowingTracker startWithConfiguration:configuration launchOptions:launchOptions];
```

2. 在appDelegate.m文件中实现urlSchme跳转以及DeepLink跳转的代理方法

```c
// url scheme跳转
- (BOOL)application:(UIApplication *)application
            openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication
         annotation:(id)annotation {

    return NO;
}

// universal Link执行
- (BOOL) application:(UIApplication *)application
continueUserActivity:(NSUserActivity *)userActivity
  restorationHandler:(void (^)(NSArray<id <UIUserActivityRestoring>> *_Nullable))restorationHandler {
    return YES;
}
```

3. 若使用了iOS 13的 UIScene，请在你指定的SceneDelegate中设置如下

```c
- (void)scene:(UIScene *)scene continueUserActivity:(NSUserActivity *)userActivity {
}

- (void)scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {
}
```

> 上述代理方法空实现即可，SDK会自动加入处理代码

### 4. SDK 初始化配置项

| API                        | 参数类型         | 是否必填 | 默认值 | 说明                                                      |
| :------------------------- | :--------------- | :------: | :----- | :-------------------------------------------------------- |
| `projectId`                | `NSString`       |    是    | `nil`  | 官网的中您的项目ID                                        |
| `urlScheme`                | `NSString`       |    是    | `nil`  | 官网的中您的相应APP的UrlScheme                            |
| `dataSourceId`             | `NSString`       |    是    | `nil`  | 官网的中您的相应APP的DataSourceId                         |
| `dataCollectionServerHost` | `NSString`       |    是    | `nil`  | 您部署服务的后端Host                                      |
| `uploadExceptionEnable`    | `BOOL`           |    否    | `YES`  | 收集SDK内部异常上报服务端                                 |
| `debugEnabled`             | `BOOL`           |    否    | `NO`   | 调试模式，会打印SDK log，抛出错误异常，在线上环境务必关闭 |
| `cellularDataLimit`        | `NSUInteger`     |    否    | `10`   | 每天发送数据的流量限制，单位MB                            |
| `dataUploadInterval`       | `NSTimeInterval` |    否    | `15`   | 数据发送的间隔，单位秒                                    |
| `sessionInterval`          | `NSTimeInterval` |    否    | `30`   | 每次访问会话的最大时长，单位秒                            |
| `dataCollectionEnabled`    | `BOOL`           |    否    | `YES`  | 是否采集数据                                              |
| `excludeEvent`             | `NSUInteger`     |    否    | `0`    | 需要过滤的事件类型计算的掩码值                            |
| `ignoreField`              | `NSUInteger`     |    否    | `0`    | 事件中需要过滤的属性计算的掩码值                          |