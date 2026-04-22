# OpenClaw 常用指令手册

> 版本：OpenClaw 2026.4.5  
> 更新日期：2026-04-21

## 目录

- [1. Gateway 网关服务](#1-gateway-网关服务)
- [2. Channel 渠道管理](#2-channel-渠道管理)
- [3. Model 模型管理](#3-model-模型管理)
- [4. Skill 技能管理](#4-skill-技能管理)
- [5. Cron 定时任务](#5-cron-定时任务)
- [6. Session 会话管理](#6-session-会话管理)
- [7. Message 消息发送](#7-message-消息发送)
- [8. Agent 代理调用](#8-agent-代理调用)
- [9. Node 节点管理](#9-node-节点管理)
- [10. Config 配置管理](#10-config-配置管理)
- [11. Update 更新升级](#11-update-更新升级)
- [12. 系统诊断与维护](#12-系统诊断与维护)
- [13. 其他实用命令](#13-其他实用命令)
- [14. 聊天中的斜杠命令](#14-聊天中的斜杠命令)

## 1. Gateway 网关服务

Gateway 是 OpenClaw 的核心服务，负责 WebSocket 连接、消息路由和代理调度。

```bash
# 启动网关服务（后台）
openclaw gateway start

# 停止网关服务
openclaw gateway stop

# 重启网关服务
openclaw gateway restart

# 前台运行（调试用）
openclaw gateway run

# 查看网关状态
openclaw gateway status

# 健康检查
openclaw gateway health

# 查看网关可达性（本地 + 远程）
openclaw gateway probe

# 发现局域网/广域网网关
openclaw gateway discover

# 安装为系统服务（launchd/systemd）
openclaw gateway install

# 卸载系统服务
openclaw gateway uninstall

# 指定端口运行
openclaw gateway --port 19001

# 强制启动（杀死占用端口的进程）
openclaw gateway --force

# 开发模式（隔离状态目录）
openclaw --dev gateway

# 查看使用成本统计
openclaw gateway usage-cost

# 实时查看日志
openclaw logs
```

## 2. Channel 渠道管理

用于管理聊天渠道，如 Telegram、Discord、WhatsApp、微信等。

```bash
# 查看已配置的渠道列表
openclaw channels list

# 查看渠道连接状态
openclaw channels status

# 深度状态检查
openclaw channels status --deep

# 登录渠道（如 WhatsApp Web）
openclaw channels login --channel whatsapp

# 登录 Telegram
openclaw channels login --channel telegram

# 添加渠道（非交互式）
openclaw channels add --channel telegram --token <BOT_TOKEN>

# 登出渠道
openclaw channels logout --channel whatsapp

# 移除渠道
openclaw channels remove --channel telegram

# 查看渠道能力
openclaw channels capabilities --channel discord

# 解析用户/频道 ID
openclaw channels resolve --channel discord --query "username"

# 查看渠道日志
openclaw channels logs
```

## 3. Model 模型管理

用于管理 AI 模型配置、别名与回退策略。

```bash
# 查看当前模型状态
openclaw models status

# 列出可用模型
openclaw models list

# 设置默认模型
openclaw models set <model-id>

# 设置图像模型
openclaw models set-image <model-id>

# 管理模型别名
openclaw models aliases

# 管理认证配置
openclaw models auth

# 管理回退模型列表
openclaw models fallbacks

# 管理图像模型回退列表
openclaw models image-fallbacks

# 扫描 OpenRouter 免费模型
openclaw models scan

# 以 JSON 输出模型状态
openclaw models status --json
```

## 4. Skill 技能管理

Skill 是 OpenClaw 的扩展模块，用于提供专业领域能力。

```bash
# 列出所有可用技能
openclaw skills list

# 查看技能详情
openclaw skills info <skill-name>

# 从 ClawHub 安装技能
openclaw skills install <skill-name>

# 搜索 ClawHub 上的技能
openclaw skills search <keyword>

# 更新已安装的技能
openclaw skills update

# 检查技能依赖状态
openclaw skills check
```

## 5. Cron 定时任务

用于管理网关中的定时任务调度器。

```bash
# 查看调度器状态
openclaw cron status

# 列出所有定时任务
openclaw cron list

# 添加定时任务
openclaw cron add

# 编辑定时任务
openclaw cron edit <job-id>

# 手动运行任务（调试用）
openclaw cron run <job-id>

# 查看任务运行历史
openclaw cron runs <job-id>

# 启用任务
openclaw cron enable <job-id>

# 禁用任务
openclaw cron disable <job-id>

# 删除任务
openclaw cron rm <job-id>
```

## 6. Session 会话管理

用于查看和管理代理的会话数据。

```bash
# 列出所有会话
openclaw sessions

# 只看最近 2 小时内的活跃会话
openclaw sessions --active 120

# 查看指定代理的会话
openclaw sessions --agent work

# 聚合所有代理的会话
openclaw sessions --all-agents

# JSON 格式输出
openclaw sessions --json

# 清理会话存储
openclaw sessions cleanup
```

## 7. Message 消息发送

通过命令行发送和管理跨渠道消息。

```bash
# 发送文本消息
openclaw message send --target +8613800138000 --message "你好"

# 发送带图片的消息
openclaw message send --target @username --message "看这个" --media photo.jpg

# 指定渠道发送
openclaw message send --channel telegram --target @mychat --message "Hi"

# 读取最近消息
openclaw message read --channel discord

# 广播消息到多个目标
openclaw message broadcast --targets "+8613800138000" "@user2" --message "通知"

# 消息回应（emoji）
openclaw message react --message-id <id> --emoji 👍

# 发起投票
openclaw message poll --channel discord --question "今天吃什么？" --options "火锅" "烧烤" "沙拉"

# 置顶/取消置顶
openclaw message pin --message-id <id>
openclaw message unpin --message-id <id>

# 删除消息
openclaw message delete --message-id <id>
```

## 8. Agent 代理调用

用于直接通过命令行与代理交互。

```bash
# 发送消息给代理（新建会话）
openclaw agent --to +8613800138000 --message "帮我查一下天气"

# 指定代理
openclaw agent --agent ops --message "汇总日志"

# 指定会话 ID 继续
openclaw agent --session-id <id> --message "继续"

# 开启思考模式
openclaw agent --message "分析这段代码" --thinking medium

# 让代理回复发送到渠道
openclaw agent --to +8613800138000 --message "状态更新" --deliver

# 本地运行（不经过网关，需要 API Key）
openclaw agent --local --message "hello"

# JSON 输出
openclaw agent --message "test" --json
```

## 9. Node 节点管理

用于管理配对的设备节点，如手机、电脑等。

```bash
# 查看节点状态
openclaw nodes status

# 列出所有节点
openclaw nodes list

# 查看待配对请求
openclaw nodes pending

# 批准配对请求
openclaw nodes approve --node <id>

# 拒绝配对请求
openclaw nodes reject --node <id>

# 重命名节点
openclaw nodes rename --node <id> --name "我的手机"

# 查看节点详情
openclaw nodes describe --node <id>

# 拍照（节点摄像头）
openclaw nodes camera snap --node <id>

# 录屏
openclaw nodes screen --node <id>

# 获取位置
openclaw nodes location --node <id>

# 发送通知
openclaw nodes notify --node <id> --title "提醒" --body "该喝水了"

# 在节点上执行命令
openclaw nodes invoke --node <id> --command system.which --params '{"name":"uname"}'

# 生成配对二维码
openclaw qr
```

## 10. Config 配置管理

用于查看和修改 OpenClaw 配置。

```bash
# 交互式配置向导
openclaw configure

# 查看配置文件路径
openclaw config file

# 获取配置值
openclaw config get gateway.port

# 设置配置值
openclaw config set gateway.port 19001

# 设置配置值（JSON 模式）
openclaw config set gateway.port 19001 --strict-json

# 删除配置项
openclaw config unset gateway.port

# 查看配置 Schema
openclaw config schema

# 验证配置文件
openclaw config validate

# 批量设置（从文件）
openclaw config set --batch-file ./config-set.batch.json --dry-run
```

## 11. Update 更新升级

用于升级 OpenClaw 本体。

```bash
# 检查更新状态
openclaw update status

# 执行更新
openclaw update

# 预览更新操作（不实际执行）
openclaw update --dry-run

# 切换到 beta 频道
openclaw update --channel beta

# 指定版本更新
openclaw update --tag 2026.4.6

# 跳过确认直接更新
openclaw update --yes

# 更新后不重启网关
openclaw update --no-restart

# 交互式更新向导
openclaw update wizard
```

## 12. 系统诊断与维护

```bash
# 健康检查 + 快速修复
openclaw doctor

# 带自动修复的诊断
openclaw doctor --fix

# 查看系统状态概览
openclaw status

# 查看网关健康
openclaw health

# 打开控制面板
openclaw dashboard

# 打开终端 UI
openclaw tui

# 重置本地状态（保留 CLI）
openclaw reset

# 卸载
openclaw uninstall

# 备份
openclaw backup

# 搜索在线文档
openclaw docs <keyword>
```

## 13. 其他实用命令

```bash
# 初始化配置和工作空间
openclaw setup

# 交互式引导
openclaw onboard

# 查看 OpenClaw 版本
openclaw --version

# 查看 JSON Schema
openclaw config schema

# 管理 ACP（Agent Control Protocol）
openclaw acp --help

# 管理后台任务
openclaw tasks

# 管理 Webhook
openclaw webhooks --help

# 管理安全设置
openclaw security --help

# 管理 Agent（多工作空间）
openclaw agents --help

# 管理审批
openclaw approvals --help

# 搜索记忆文件
openclaw memory

# DNS 辅助工具（Tailscale + CoreDNS）
openclaw dns --help

# 生成 Shell 补全脚本
openclaw completion
```

## 14. 聊天中的斜杠命令

在聊天界面中可以直接使用的命令如下：

| 命令 | 说明 |
|------|------|
| `/status` | 查看当前会话状态 |
| `/reasoning` | 切换推理/思考模式 |
| `/resume` | 恢复上下文（qmemory 插件） |
| `/approve` | 审批待确认的操作 |

## 实用技巧

### 开发调试

```bash
# 开发模式（独立状态，不影响正式环境）
openclaw --dev gateway

# 详细日志
openclaw gateway --verbose

# JSON 输出（方便脚本处理）
openclaw sessions --json
openclaw models status --json
```

### 一键健康检查

```bash
openclaw doctor && openclaw gateway status && openclaw channels status
```

### 快速发送消息

```bash
openclaw message send --target <号码或用户名> --message "内容"
```

## 更多资源

- 官方文档：https://docs.openclaw.ai/cli
- 各子命令详细帮助：`openclaw <command> --help`
- 示例：`openclaw models --help`、`openclaw channels --help`

*本文档由小 V整理，于 2026-04-21 生成。*
