![横幅图片](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-bark

本项目是一个n8n Community Node，允许通过[Finb/bark-server](https://github.com/Finb/bark-server)向您的iOS设备推送通知。

有关Bark的更多信息，请参阅[Bark文档](https://bark.day.app/#/tutorial)。


> 如果遇到任何问题，请在[IcedMango/n8n-nodes-bark](https://github.com/IcedMango/n8n-nodes-bark)上提交Issue。

[n8n](https://n8n.io/) 是一个[公平代码许可](https://docs.n8n.io/reference/license/)的工作流自动化平台。


[安装](#安装)  
[操作](#操作)  
[凭证](#凭证)  
[兼容性](#兼容性)  
[参数](#参数)  
[资源](#资源)  
[许可证](#许可证) 

## 安装

请按照n8n社区节点文档中的[安装指南](https://docs.n8n.io/integrations/community-nodes/installation/)进行操作。

或者在后台设置中的Community Nodes中直接输入 `n8n-nodes-bark` 安装

## 操作

- 使用 `Send Notification` 方法向你的iOS设备发送通知
- 使用 `Check Server Status` 方法检查bark server运行状体
- 使用 `Get Server Version` 方法检查bark server当前版本及其他信息

## 凭证

**在开始之前，你需要在iOS设备上的Bark应用中获取服务器地址和令牌。**

1. 在iOS设备上打开Bark应用。
2. 复制服务器地址和令牌。
3. 在n8n中创建一个新的凭证（搜索`Bark Api`）。
4. 在凭证中输入服务器地址和令牌。
5. 开始推送 :)

## 兼容性

使用n8n v1.67.0进行开发和测试。

## 参数

| 参数        | 描述                                                                 |
|-------------|-----------------------------------------------------------------------------|
| title      | 推送标题                                                             |
| body       | 推送内容                                                             |
| level      | 推送中断级别。
|             | - `active`：默认值，系统会立即亮屏显示通知|
|             | - `timeSensitive`：时效性通知，可在专注状态下显示通知。|
|             | - `passive`：仅将通知添加到通知列表，不会亮屏提醒。 |
| badge      | 推送角标，可以是任意数字                                             |
| autoCopy   | iOS14.5以下自动复制推送内容，iOS14.5以上需手动长按推送或下拉推送     |
| copy       | 复制推送时，指定复制的内容，不传此参数将复制整个推送内容。           |
| sound      | 可以为推送设置不同的铃声                                             |
| icon       | 为推送设置自定义图标，设置的图标将替换默认Bark图标。图标会自动缓存在本机，相同的图标 URL 仅下载一次。 |
| group      | 对消息进行分组，推送将按group分组显示在通知中心中。也可在历史消息列表中选择查看不同的群组。 |
| isArchive  | 传 1 保存推送，传其他的不保存推送，不传按APP内设置来决定是否保存。   |
| url        | 点击推送时，跳转的URL ，支持URL Scheme 和 Universal Link             |


## 资源

* [IcedMango/n8n-nodes-bark](https://github.com/IcedMango/n8n-nodes-bark)
* [Finb/bark-server](https://github.com/Finb/bark-server)

## 许可证

基于[MIT](https://github.com/IcedMango/n8n-nodes-bark/blob/master/LICENSE.md)许可证分发。

## CLA协议

如果您为本仓库贡献代码，则默认允许您的代码在MIT许可证下分发。
