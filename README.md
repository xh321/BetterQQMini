# 鉴于QQNT小程序修改的需求很低，本仓库将不再更新（并不会适配最新版PC端QQ小程序）。若有需求，请开 `ISSUE` 。

# BetterQQMini

BetterQQMini是一个QQNT的小程序插件加载器（基于[BetterQQNT](https://github.com/mo-jinran/BetterQQNT)修改而来）  
它可以让你自由地为QQNT小程序添加各种插件  
比如：美化主题，增加新功能 等...


## 注意事项

- 目前仍在开发当中，可能会存在一些问题和不足
- 目前不建议制作插件，等完善后有模板和文档吧
- 目前没有插件商店系统，暂时只能自行寻找插件
- 仅为个人兴趣而制作，开发目的在于学习和探索
- 能力有限，随缘更新。不过也欢迎各位来提交PR
- 由于项目特殊性，必要时会停止开发或删除仓库


## 安装方法

只需三步，就可以轻松安装BetterQQMini：

1. 在`QQNT小程序的根目录/resources/app`下克隆本项目，或者下载项目ZIP并解压到`QQNT小程序的根目录/resources/app`下（需要保留BetterQQMini文件夹，并使其与`package.json`同级）。

   完成后，`QQNT小程序的根目录/resources/app`下的文件夹结构应为：

   ```
   ├─plugins
   ├─BetterQQMini <--在这
   │  └─...
   ├─2.9.7.asar
   └─package.json
   ```
   （小程序根目录通常位于`文档\Tencent Files\nt_qq\global\nt_data\MiniApp\2.9.7`，最后一个版本号视情况而定。若不存在这个文件夹或者里面为空，说明你没打开过任何小程序，你需要先随便打开一个小程序，下载好小程序资源后再继续安装`BetterQQMini`）

2. 编辑`package.json`文件，将`main`键值改为`BetterQQMini文件夹名字`（大小写不敏感，请根据项目目录名实际情况修改），例如：`BetterQQMini`。

3. 直接点开NTQQ上的小程序，享受BetterQQMini带来的乐趣吧！

理论上能够支持`Windows`, `Linux`, `MacOS`  
以及支持QQNT的`32位`与`64位`版本  
（目前开发与测试都仅在Windows环境下进行）


## 目前功能

- 打开QQNT小程序的DevTools，方便你查看和修改QQNT小程序的内部运行情况。
- 加载插件，让你可以根据自己的喜好和需求定制QQNT小程序的外观和功能。


## 插件链接

目前插件尽可能和BetterQQNT兼容以避免重复开发，所以程序内置BetterQQNT对象未改名，插件如果兼容可以直接使用。

- [[扩展] bilibili_external|自动跳转NTQQ的小程序到外部浏览器](https://github.com/xh321/BetterQQMini-bilibili-external)


## 数据目录

BetterQQMini的默认数据文件夹：

- Windows: `C:\\BetterQQMini`
- Linux: `~/Documents/BetterQQMini`
- MacOS: `~/Documents/BetterQQMini`

修改环境变量`BETTERQQMINI_PROFILE`可指定目录位置

数据目录结构：
```
BetterQQMini
    ├─plugins           // 插件本体目录
    │   ├─my-plugin         // 插件本体
    │   └─...
    ├─plugins_cache     // 插件缓存目录
    │   └─...
    ├─plugins_data      // 插件数据目录
    │   └─...
    └─config.json       // BetterQQMini配置文件（暂未实现）
```

插件目录结构：
```
my-plugin
    ├─manifest.json     // 存放插件信息
    ├─main.js           // 必须存在插件入口
    └─...
```


## 开源协议及免责

[MIT License](./LICENSE)  
Copyright (c) 2023 沫烬染 forked by XiaoHe321

禁止用于任何非法用途，插件开发属学习与研究目的，仅自用，未提供给任何第三方使用。任何不当使用导致的任何侵权问题责任自负。
