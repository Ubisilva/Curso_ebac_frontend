_[Wanna try [LIVE SERVER++](https://github.com/ritwickdey/vscode-live-server-plus-plus) (BETA)? It enables live changes without saving the file. [Try it here](https://github.com/ritwickdey/vscode-live-server-plus-plus)]_

# Live Server Fork (Optimized)

**Live Server loves** 💘 **your multi-root workspace**  

> **Live Server for server-side pages like PHP. [Check Here](https://github.com/ritwickdey/live-server-web-extension)**

> ***[For 'command not found error' [#78](https://github.com/ritwickdey/vscode-live-server/issues/78)]***

[![VSCode Marketplace](https://img.shields.io/vscode-marketplace/v/ritwickdey.LiveServer.svg?style=flat-square&label=vscode%20marketplace)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) [![Total Installs](https://img.shields.io/vscode-marketplace/d/ritwickdey.LiveServer.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) [![Average Rating](https://img.shields.io/vscode-marketplace/r/ritwickdey.LiveServer.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)  
[![Travis branch](https://img.shields.io/travis/ritwickdey/vscode-live-server/master.svg?style=flat-square&label=travis%20branch)](https://travis-ci.org/ritwickdey/vscode-live-server) [![Appveyor branch](https://img.shields.io/appveyor/ci/ritwickdey/vscode-live-server.svg?style=flat-square&label=appveyor%20branch)](https://ci.appveyor.com/project/ritwickdey/vscode-live-server) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ritwickdey/vscode-live-server/)  
<br>

**Launch an optimized local development server with live reload for both static & dynamic pages.**  
<br>

![Live Server Demo VSCode](https://github.com/ritwickdeys/vscode-live-server/raw/HEAD/images/Screenshot/vscode-live-server-animated-demo.gif)

## Shortcuts to Start/Stop Server

**_[NOTE: If you don't have any `.html` or `.htm` file in your workspace, follow method 4 or 5 to start the server.]_**

1. Open a project and click `Go Live` from the status bar to start/stop the server.  
![Go Live Control Preview](https://github.com/ritwickdeys/vscode-live-server/raw/HEAD/images/Screenshot/vscode-live-server-statusbar-3.jpg)

2. Right-click a `HTML` file in the Explorer Window and select `Open with Live Server`.  
![Explorer Window Control](https://github.com/ritwickdeys/vscode-live-server/raw/HEAD/images/Screenshot/vscode-live-server-explorer-menu-demo-1.gif).

3. Open an HTML file and right-click in the editor, then select `Open with Live Server`.  
![Edit Menu Option Preview](https://github.com/ritwickdeys/vscode-live-server/raw/HEAD/images/Screenshot/vscode-live-server-editor-menu-3.jpg)

4. Hit `(alt+L, alt+O)` to open the server and `(alt+L, alt+C)` to stop it (shortcuts can be customized). *[On MAC: `cmd+L, cmd+O` and `cmd+L, cmd+C`]*

5. Open the Command Palette by pressing `F1` or `ctrl+shift+P`, type `Live Server: Open With Live Server` to start, or `Live Server: Stop Live Server` to stop.

## Features
* A faster, optimized development server with live browser reload.
* Start/stop the server with a single click from the status bar.
* Open HTML files directly from the Explorer menu. [[Quick Demo](https://github.com/ritwickdeys/vscode-live-server/blob/HEAD/images/Screenshot/vscode-live-server-explorer-menu-demo-1.gif?raw=true)].
* Exclude files from change detection.
* Hotkey controls for convenience.
* Customizable port, server root, and default browser.
* Supports any browser, including Firefox Nightly, through advanced Command Line.
* Chrome Debugging integration (_[More Info](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)_). [[Quick Demo](https://github.com/ritwickdeys/vscode-live-server/blob/HEAD/images/Screenshot/ChromeDebugging.gif?raw=true)].
* Remote connection via WLAN (e.g., mobile device). _[Need help? See FAQ Section]_
* Use your preferred host name *(localhost or 127.0.0.1)*.
* Customizable tag for live reload (default: `body` or `head`).
* SVG and `https` support.
* Proxy support.
* CORS enabled.
* Multi-root workspace supported.
* Supports dynamic pages via the *[Live Server Web Extension](https://github.com/ritwickdey/live-server-web-extension)*.

## Installation
In VSCode, press `ctrl+P`, then type `ext install ritwickdey.liveserver`.

## Settings
All settings are documented here [Settings Docs](https://github.com/ritwickdeys/vscode-live-server/blob/HEAD/docs/settings.md).

## FAQs
All FAQs are listed here [FAQ Docs](https://github.com/ritwickdeys/vscode-live-server/blob/HEAD/docs/faqs.md).

## What's New?

* ### Version 5.6.1 (17.04.19)
  * Fixed `Extension host terminated unexpectedly` *[[#431](https://github.com/ritwickdey/vscode-live-server/issues/431)]*

* ### Version 5.6.0 (17.04.19)
  * ***[NEW]*** Integration of `Browser Preview` with `Live Server` *[[#352](https://github.com/ritwickdey/vscode-live-server/pull/352) - Thanks to [Kenneth Auchenberg](https://github.com/auchenberg)]*
  * ***[NEW]*** Fallback to a random port if the given port is busy. *[[#330](https://github.com/ritwickdey/vscode-live-server/pull/330) - Thanks to [Ali Almohaya](https://github.com/Almo7aya)]*
  * ***[FIXES]*** Moved to `vscode-chokidar` lib for *[#285](https://github.com/ritwickdey/vscode-live-server/issues/285)*.
  * Documentation fixes *[[#388](https://github.com/ritwickdey/vscode-live-server/pull/388) - Thanks to [Ted Silbernagel](https://github.com/tedsilb)]*

* ### Version 5.5.1 (12.02.19)
  * ***[Fixes]*** Fixed `Extension host terminated unexpectedly` on MacOS. [[#285](https://github.com/ritwickdey/vscode-live-server/issues/285)]
  
* ### Version 5.5.0 (12.02.19)
  * ***[Fixes]*** Fixed `ignoreFiles` settings issue [[#255](https://github.com/ritwickdey/vscode-live-server/issues/255)]
  * Attempted fix for `high CPU load` issue [[#278](https://github.com/ritwickdey/vscode-live-server/issues/278)]

## Changelog
For the full changelog, [click here](https://github.com/ritwickdeys/vscode-live-server/blob/HEAD/CHANGELOG.md).

## Special Thanks to Maintainers
A special thanks to [Max Schmitt](https://github.com/mxschmitt), [Joydip Roy](https://github.com/rjoydip), and [Ayo Adesugba](https://github.com/adesugbaa) for contributing their valuable time to this project.

[![Max Schmitt](https://avatars2.githubusercontent.com/u/17984549?s=64)](https://github.com/mxschmitt)  
[![Joydip Roy](https://avatars2.githubusercontent.com/u/15318294?s=64)](https://github.com/rjoydip)  
[![Ayo Adesugba](https://avatars2.githubusercontent.com/u/55943?s=64)](https://github.com/adesugbaa)

## LICENSE
This extension is licensed under the [MIT License](https://github.com/ritwickdeys/vscode-live-server/blob/HEAD/LICENSE).
