---
sidebar_position: 4
title: 数据采集API
---


通过 **`window.gdp`** 这个全局的方法可以调用到SDK中所有开放的接口。

## 动态修改配置接口(setOption)

由于多样的动态修改配置的需求，我们在`3.8.0`版本开始提供了统一的接口，以降低接口使用难度。设值成功返回true，设值失败返回false。

```js
gdp('setOption', optionKey, optionValue);  // return true | false
```

### 1、开启/关闭无埋点数据采集(autotrack)

当加载了无埋点插件时，默认开启无埋点数据采集。当设置为 **`false`** 时，将不再采集 **`VIEW_CLICK` , `VIEW_CHANGE` , `FORM_SUBMIT`** 无埋点事件。未加载插件时无论 autotrack 是否开启都不会进行采集。

```js
gdp('setOption', 'autotrack', true | false);
```

### 2、开启/关闭数据采集(dataCollect)

默认开启数据采集。当设置为 **`false`** 时，SDK将不会采集和上报事件。由关闭修改为开启时，自动补发VISIT和当前页面的PAGE事件。

```js
gdp('setOption', 'dataCollect', true | false);
```

### 3、开启/关闭调试模式(debug)

默认不开启调试模式。当设置为 **`true`** 时，开启后会在浏览器控制台输出日志。

```js
gdp('setOption', 'debug', true | false);
```

### 4、修改请求协议(scheme)

默认为**`https`**，您可以在开发过程中设置为 `http` 方便与服务端进行调试。

```js
gdp('setOption', 'scheme', 'http' | 'https');
```

### 5、修改请求地址(host)

默认为初始化配置项中填写的`host`字段值，方便您动态修改。(支持域名和IP地址，无需协议头)

```js
gdp('setOption', 'host', 'api.growingio.com');
```

## 功能接口

### 1、注册插件(registerPlugins)

默认情况下基础SDK仅包含埋点功能，如果您需要额外扩展功能，请参考[初始化集成](/docs/webjs/3.8/integrate)和[插件列表](/docs/webjs/3.8/plugins)进行插件的注册。

#### 示例

```js
gdp('registerPlugins', [xxxx, xxxxx]);
```

### 2、获取访问用户Id(getDeviceId)

访问用户Id，又称为匿名用户Id/设备Id，SDK 自动生成用来定义唯一设备。如果没有初始化SDK 或者关闭采集开关可能返回值为空。

#### 示例

```js
gdp('getDeviceId');
```

### 3、设置登录用户Id(setUserId)

当用户登录之后调用`setUserId`，设置登录用户ID。

#### 参数说明

| 参数      | 参数类型          | 说明      |
|-----------|-------------------|:----------------------|
| `userId`  | `string / number` | 必填；字符长度小于等于 1000，长度超限将会被截断。                    |
| `userKey` | `string / number` | 可选；适用于 ID-MAPPING,可设置 `userId` 的类型；长度限制同 `userId` |

#### 示例

```js
gdp('setUserId', '112333445');
gdp('setUserId', '112333445', 'phone');
```

**<font color="#FC5F3A">注意：</font>**<br/>
**设置`userKey`时需SDK初始化时设置 `enableIdMapping` 为 `true`，否则不生效。**

### 4、清除登录用户Id(clearUserId)

当用户登出之后调用 `clearUserId`，清除已经设置的登录用户ID。

#### 示例

```js
gdp('clearUserId');
```

### 5、埋点事件(track)

发送一个埋点事件。在添加所需要发送的事件代码之前，需要在平台中配置事件以及事件属性。[埋点事件示例](/docs/basicknowledge/trackEventUse#埋点事件示例)

#### 参数说明

| 参数              | 参数类型 | 说明            |
|-------------------|----------|:------------------------|
| `eventId`         | `String` | 必填；事件名，事件标识符。                                                                                                         |
| `properties`      | `Object` | 选填；事件属性，当事件属性关联有维度表时，属性值为对应的维度表模型ID(记录ID)[参数限制](/docs/webjs/3.8/commonlyApi#object参数限制) |
| `item`            | `Object` | 选填；事件发生关联的物品模型。                                                                                                    |
| `item.id`         | `String` | item 中必填；物品模型 id。                                                                                                        |
| `item.key`        | `String` | item 中必填；物品模型唯一标识。                                                                                                   |
| `item.attributes` | `Object` | item 中选填；物品模型属性。参数限制同`properties`。                                                                                |

#### 示例

```js
// gdp('track', eventId, properties[, item]);

gdp('track', 'order'); // 无properties，无item
gdp('track', 'order', { type: 'hjh' }); // 有properties，无item
gdp('track', 'order', {}, { key: 'order_id', id: '12345' }); // 无properties，有item
gdp('track', 'order', { type: 'hjh' }, { key: 'order_id', id: '12345' }); // 有properties，有item
```

**<font color="#FC5F3A">注意：</font>**<br/>
**`properties`中的属性值为数组格式上报时会被自动转换为以`||`间隔的字符串（例：names: ['tony', 'mike', 'lily']  =>  names: 'tony||mike||lily'）**

### 6、登录用户属性(setUserAttributes)

以登录用户的身份定义登录用户属性，用于用户信息相关分析。[用户属性事件示例](/docs/basicknowledge/trackEventUse#用户属性事件示例)

#### 参数说明

| 参数             | 参数类型 | 说明  |
|------------------|----------|:------------------------|
| `userAttributes` | `Object` | 包含登录用户属性的 Object 对象。[参数限制](/docs/webjs/3.8/commonlyApi#object参数限制) |

#### 示例

```js
gdp('setUserAttributes', { name: 'hjh' });
```

**<font color="#FC5F3A">注意：</font>**<br/>
**用户属性中的属性值为数组格式上报时会被自动转换为以`||`间隔的字符串（例：names: ['tony', 'mike', 'lily']  =>  names: 'tony||mike||lily'）**

### 7、设置埋点通用属性(setGeneralProps)

有时我们埋点需要大量业务属性，但需要每次调用时都进行传值，这给埋点工作带来了一定程度上的无用重复劳动。现在我们可以通过`setGeneralProps`来给后续产生的所有的埋点事件加上通用属性，从而免去一些不必要的重复劳动。也可以利用该方法为所有的埋点事件进行动态设置通用属性。

设置的通用属性可以是静态固定值，也可以是一个**简单的方法执行结果**的动态值。当属性值为方法时，SDK会自动执行尝试获取返回值，支持返回的数据类型：`String`、`Number`、一元`Array`、`Boolean`。不合法的数据类型会被强制转换为字符串。并且**请勿执行复杂度过高的运算逻辑或异步运算，可能会导致报错或无法获取准确值。**

#### 示例

```js
gdp('setGeneralProps', { 'currency': 'RMB' });

let index = 0;
gdp('setGeneralProps', {
  'nick_name_var': 'Mike',
  'index_var': () => index++
});
```

**<font color="#FC5F3A">注意：</font><br/>**
**1）定义的通用属性名依然需要在平台上进行事件属性的创建并与埋点事件完成关联。**<br/>
**2）该方法可多次调用，已有相同属性名的值会被覆盖。**

### 8、清除埋点通用属性(clearGeneralProps)

SDK提供了清除通用属性的方法，调用该方法移除指定字段或所有通用埋点属性。

#### 示例

```js
gdp('clearGeneralProps', ['nick_name_var', 'index_var']);
// 或不传值清空所有通用埋点属性
gdp('clearGeneralProps');
```

### 9、获取SDK当前配置(getOption)

当调试时需要获取SDK当前的配置信息或状态时，可调用此接口。配置项名称不传时获取的为全量的配置信息。

#### 示例

```js
gdp('getOption', 配置项名称);

gdp('getOption', 'dataCollect'); // 返回dataCollect当前在SDK中的值
gdp('getOption'); // 返回所有支持查看的配置项值(即原来的vdsConfig对象)
```

### 10、获取SDK当前版本

在代码或浏览器控制台中直接调用 `window.gioSDKVersion` 即可获取。

## 采集标记

### 1、采集标记

有时我们表单页面中可能需要获取用户填写或选择的值进行上报以准确分析用户行为。此时，我们可以通过数值采集标记 `data-growing-track` 来获取值。例：

```html
<div class="flex mb-4">
  <label>文本框：</label>
  <input
    id="name"
    name="name"
    placeholder="输入内容，发送带文本内容的change事件"
    type="text"
    data-growing-track
  />
</div>
```

:::caution 免责声明警告：
SDK会自动忽略 `type="password"` 类型的input框的内容采集；如果类型为`text`的input中包含敏感信息，请不要添加该标记，可能会明文暴露这些信息。GrowingIO不承担由此直接或间接产生的数据风险和法律风险。
:::

**提示：3.8.0版本开始，SDK会自动忽略带有 `autoplay` 属性且值为 `true` 组件的 change 事件（例如video）。如果您期望采集它，请添加 `data-growing-track` 标记。**

### 2、补充数据标记

#### 1）data-growing-title

有时SDK自动采集的节点数据并不能完全满足上报分析需要。此时，我们可以通过额外信息的标记 `data-growing-title` 来补充SDK采集的内容。例：

```html
<div data-growing-title="额外的上报信息">节点</div>
```

#### 2）data-growing-index

有时我们页面中可能存在类似列表类的Dom结构相似或一致使得SDK上报数据出现无法区分的情况。此时，我们可以通过索引标记 `data-growing-index` 来准确描述节点信息。例：

```html
<ul>
  <li data-growing-index="1">节点1</li>
  <li data-growing-index="2">节点2</li>
  <li data-growing-index="3">节点3</li>
</ul>
```

### 3、忽略采集标记

有时我们会根据业务中不同的需要使用一些自己开发的组件或第三方组件，可能会触发SDK的 `VIEW_CHANGE` 事件，但我们并不期望它发生。

此时，我们可以通过忽略采集标记 `data-growing-ignore` 来让SDK忽略对该组件的数据采集。**注意标记在事件绑定的节点上，没事件绑定的节点默认不会采集。**例：

```html
<div data-growing-ignore onclick="onLinkTap()">要忽略的节点</div>
```

### 4、容器标记

有时我们会将一个拥有复杂子节点的节点视为一个整体（例如包裹了图标和文字的按钮组件），由于子节点自身会产生原生事件，但是我们期望其事件的触发是一个整体（例如点击了包裹了图标和文字的按钮组件中的图标，期望是整个按钮的点击事件触发）。又或者我们期望在一个容器范围内统计所有节点的点击事件，这时候就需要使用`data-growing-container`进行标记，我们会同时为触发节点和打了标记的节点上报数据。例：

```html
<div data-growing-container class="btn" onclick="onBtnClick()">
  <i class="icon icon-click">
  <span>
    这是按钮的文本
  </span>
</div>
```

在上面的示例中，如果点击了图标触发了按钮事件，会同时发送i节点和div节点的两个点击事件。圈选时您可以圈选至div节点即可。

## 事件时长统计

可以统计上报某一事件的持续时长（例如页面浏览时长）。我们提供了事件计时开始、事件计时暂停、事件计时恢复、事件计时停止、事件计时销毁几个方法提供调用。

**<font color="#FC5F3A">注意：</font>**

**1）页面刷新或SDK重新加载时计时器会自动销毁并不做任何处理，因此您可能会因为用户的刷新和关闭网页等操作丢失此事件的上报。**
**2）SDK版本>=3.8.2支持。**

### 1、初始化计时器(trackTimerStart)

#### 参数说明

| 参数        | 参数类型   | 说明                           |
|-------------|------------|:------------------------------|
| `eventName` | `string`   | 必填；计时结束时上报的事件名称。 |
| `callback`  | `function` | 必填；用于获取生成计时器Id的回调函数。   |

#### 示例

```js
gdp('trackTimerStart', 'myEventName', (timerId) => {
  console.log(timerId);
});
```

### 2、暂停事件计时器(trackTimerPause)

#### 参数说明

| 参数      | 参数类型 | 说明           |
|-----------|----------|:--------------|
| `timerId` | `string` | 必填；计时器Id。 |

#### 示例

```js
gdp('trackTimerPause', 'timerId123');
```

### 3、恢复事件计时器(trackTimerResume)

#### 参数说明

| 参数      | 参数类型 | 说明           |
|-----------|----------|:--------------|
| `timerId` | `string` | 必填；计时器Id。 |

#### 示例

```js
gdp('trackTimerResume', 'timerId123');
```

### 4、停止事件计时器(trackTimerEnd)

停止事件计时器。注意停止事件计时器时会自动发送事件并删除当前计时器。

#### 参数说明

| 参数         | 参数类型 | 说明                               |
|--------------|----------|:----------------------------------|
| `timerId`    | `string` | 必填；计时器Id。                     |
| `attributes` | `object` | 选填；计时事件结束时上报的事件属性。 |

#### 示例

```js
gdp('trackTimerEnd', 'timerId123');
gdp('trackTimerEnd', 'timerId123', { extraVar1: 1, extraVar2:2 });
```

:::caution 注意
trackTimerEnd时发送CUSTOM事件上报数据：

* eventName  埋点事件标识符（trackTimerStart传入）
* attributes 用户自定义事件属性（trackTimerEnd传入）
* event_duration 事件时长 （SDK内部根据timerId自动计算获取 ）<br/>
event_duration 按照秒上报，小数点精度保证到毫秒<br/>
event_duration 变量及其值会自动添加在 attributes 中<br/>
* eventName 对应的埋点事件需要在平台中**绑定**标识符为 event_duration， 且类型为小数的事件属性
:::

### 5、删除事件计时器(removeTimer)

删除事件计时器，参数为 trackTimerStart 返回的唯一标识。<br/>
该接口会将标识为 timerId 的计时器置为空。调用停止计时器接口，会自动触发该接口。注意移除时不论计时器处于什么状态，都不会发送事件。

#### 参数说明

| 参数      | 参数类型 | 说明           |
|-----------|----------|:--------------|
| `timerId` | `string` | 必填；计时器Id。 |

#### 示例

```js
gdp('removeTimer', 'timerId123');
```

### 6、清除所有事件计时器(clearTrackTimer)

清除所有已经注册的事件计时器。<br/>
存在所有计时器需要清除时调用。注意移除时不论计时器处于什么状态，都不会发送事件。

#### 示例

```js
gdp('clearTrackTimer');
```

## 其他

### Object参数限制

SDK文档中指定参数值为 **Object类型** 时，请注意以下限制：**(非指定类型值均会被替换为空字符串，长度超限均会被截断)**

**`key:` String，length <=100；**

**`value:` String | number 时 length <=1000； Array 时 length <=100**
