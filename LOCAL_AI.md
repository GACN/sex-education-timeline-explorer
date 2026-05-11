# 本地模型问答

这个项目可以接入 OpenAI 兼容的本地文本模型，但当前测试的服务只支持纯文本：

- `/v1/models`：可用
- `/v1/chat/completions`：可用
- `/v1/files`：不可用，返回 404
- `/v1/embeddings`：不可用，返回 404
- PDF/附件消息：不可用，返回 `Only text message content is supported by this local API server.`

因此，正确方式不是上传 PDF，而是把资料检索成文本后放进 prompt。

## 使用

在本目录运行：

```sh
python3 local_chat.py --api-base http://192.168.0.156:4891/v1 "Otis 和 Maeve 的关系主线是什么？"
```

也可以先设置环境变量：

```sh
export LOCAL_AI_BASE=http://192.168.0.156:4891/v1
python3 local_chat.py "Aimee 的创伤恢复线按集数说一下"
```

脚本会从 `data.js` 检索相关的集数、人物和关系片段，再把这些片段作为纯文本上下文发给本地模型。
