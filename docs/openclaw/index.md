# OpenClaw 专区

欢迎来到 OpenClaw 专区。这里集中整理 OpenClaw CLI 的常用命令、运维排查入口和日常使用速查内容，方便在博客中按分类浏览。

## 内容导航

- [OpenClaw 常用指令手册](/openclaw/command-handbook) - 覆盖网关、渠道、模型、技能、任务、消息、节点、配置、升级与诊断等核心命令

## 适合谁看

- 想快速熟悉 OpenClaw CLI 基础命令的使用者
- 需要日常运维、巡检和排障的开发者
- 希望把常用命令沉淀成内部知识库的团队成员

## 推荐阅读顺序

1. 先看[常用指令手册](/openclaw/command-handbook)，快速建立整体命令体系。
2. 日常高频操作优先关注 Gateway、Channels、Models、Message 和 Agent。
3. 运维排查时重点查看 Config、Update、Doctor/Status/Health 相关章节。

## 速查入口

```bash
openclaw --version
openclaw gateway status
openclaw channels status
openclaw models status --json
openclaw doctor
```
