var n=`# \u4E0E\u7F16\u8F91\u5668\u4EA4\u4E92

## DOM \u8282\u70B9\u7684\u6CE8\u518C

\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CMilkdown \u4F1A\u57FA\u4E8E document.body \u521B\u5EFA\u4E00\u4E2A\u7F16\u8F91\u5668\u3002\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u65B9\u6CD5\u6765\u6307\u5B9A\u8981\u6302\u8F7D\u7F16\u8F91\u5668\u7684 DOM \u8282\u70B9\uFF1A

\`\`\`typescript
import { rootCtx } from '@milkdown/core';

Editor.make().config((ctx) => {
    ctx.set(rootCtx, document.querySelector('#editor'));
});
\`\`\`

## \u7F16\u8F91\u5668\u9ED8\u8BA4\u503C\u7C7B\u578B\u7684\u8BBE\u5B9A

### Markdown

\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u7B26\u5408 Markdown \u8BED\u6CD5\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3A\u7F16\u8F91\u5668\u7684\u9ED8\u8BA4\u503C\u7C7B\u578B\u3002

\`\`\`typescript
import { defaultValueCtx } from '@milkdown/core';

const defaultValue = '# Hello milkdown';
Editor.make().config((ctx) => {
    ctx.set(defaultValueCtx, defaultValue);
});
\`\`\`

\u63A5\u7740\uFF0C\u7F16\u8F91\u5668\u5C06\u4F1A\u5BF9\u9ED8\u8BA4\u503C\u8FDB\u884C\u76F8\u5E94\u6E32\u67D3\u3002

### Dom \u8282\u70B9

\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 HTML \u4F5C\u4E3A\u7F16\u8F91\u5668\u7684\u9ED8\u8BA4\u503C\u7C7B\u578B\u3002

\u5047\u8BBE\u6211\u4EEC\u7F16\u5199\u4E86\u4E0B\u9762\u7684\u4E00\u6BB5 HTML \u4EE3\u7801\uFF1A

\`\`\`html
<div id="pre">
    <h1>Hello milkdown!</h1>
</div>
\`\`\`

\u7D27\u63A5\u7740\uFF0C\u6211\u4EEC\u9700\u8981\u660E\u786E\u9ED8\u8BA4\u503C\u7684\u7C7B\u578B\u4E3A HTML\uFF0C\u8FDB\u884C\u7F16\u8F91\u5668\u7684\u6E32\u67D3\u914D\u7F6E\uFF1A

\`\`\`typescript
import { defaultValueCtx } from '@milkdown/core';

const defaultValue = {
    type: 'html',
    dom: document.querySelector('#pre'),
};
Editor.make().config((ctx) => {
    ctx.set(defaultValueCtx, defaultValue);
});
\`\`\`

### JSON

\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 JSON \u5BF9\u8C61\u4F5C\u4E3A\u9ED8\u8BA4\u503C\u3002

\u8FD9\u4E2A JSON \u5BF9\u8C61\u53EF\u4EE5\u901A\u8FC7\u76D1\u542C\u5668 [listener-plugin](https://www.npmjs.com/package/@milkdown/plugin-listener) \u8FDB\u884C\u83B7\u53D6\uFF0C\u4F8B\u5982\uFF1A

\`\`\`typescript
import { listener, listenerCtx } from '@milkdown/plugin-listener';

let jsonOutput;

Editor.make()
    .config((ctx) => {
        ctx.get(listenerCtx).updated((ctx, doc, prevDoc) => {
            jsonOutput = doc.toJSON();
        });
    })
    .use(listener);
\`\`\`

\u63A5\u7740\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u83B7\u53D6\u5230\u7684 \`jsonOutput\` \u4F5C\u4E3A\u7F16\u8F91\u5668\u7684\u9ED8\u8BA4\u503C\u914D\u7F6E\uFF1A

\`\`\`typescript
import { defaultValueCtx } from '@milkdown/core';

const defaultValue = {
    type: 'json',
    value: jsonOutput,
};
Editor.make().config((ctx) => {
    ctx.set(defaultValueCtx, defaultValue);
});
\`\`\`

---

## \u6DFB\u52A0\u76D1\u542C\u5668

\u6B63\u5982\u4E0A\u534A\u90E8\u5206\u6240\u63D0\u5230\u7684\u90A3\u6837\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5728\u7F16\u8F91\u5668\u6DFB\u52A0\u76D1\u542C\u5668\uFF0C\u6765\u83B7\u53D6\u4F60\u6240\u9700\u8981\u7684\u503C\u3002

\u8FD9\u91CC\u76D1\u542C\u5668\u5206\u4E3A\u4EE5\u4E0B\u4E24\u79CD\uFF1A

### Markdown \u76D1\u542C\u5668

\u4F60\u53EF\u4EE5\u6DFB\u52A0 Markdown \u76D1\u542C\u5668\u6765\u83B7\u53D6\u4F60\u9700\u8981\u7684 markdown \u5B57\u7B26\u4E32\u7684\u8F93\u51FA\u3002

\u4F60\u53EF\u4EE5\u6DFB\u52A0\u4EFB\u610F\u591A\u4E2A\u76D1\u542C\u5668\uFF0C\u6240\u6709\u7684\u76D1\u542C\u5668\u5C06\u4F1A\u4E00\u6B21\u6539\u52A8\u4E2D\u88AB\u89E6\u53D1\u3002

\`\`\`typescript
import { listener, listenerCtx } from '@milkdown/plugin-listener';

let output = '';

Editor.make()
    .config((ctx) => {
        ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
            output = markdown;
        });
    })
    .use(listener);
\`\`\`

### Doc \u76D1\u542C\u5668

\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u76D1\u542C [raw prosemirror document node](https://prosemirror.net/docs/ref/#model.Node)\uFF0C\u6765\u8FDB\u884C\u529F\u80FD\u7684\u5B9E\u73B0\u3002

\`\`\`typescript
import { listener, listenerCtx } from '@milkdown/plugin-listener';

let jsonOutput;

Editor.make()
    .config((ctx) => {
        ctx.get(listenerCtx).updated((ctx, doc, prevDoc) => {
            jsonOutput = doc.toJSON();
        });
    })
    .use(listener);
\`\`\`

---

## \u53EA\u8BFB\u6A21\u5F0F

\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u5B9A \`editable\` \u5C5E\u6027\u6765\u8BBE\u7F6E\u7F16\u8F91\u5668\u662F\u5426\u53EA\u8BFB

\`\`\`typescript
import { editorViewOptionsCtx } from '@milkdown/core';

let readonly = false;

const editable = () => !readonly;

Editor.make().config((ctx) => {
    ctx.set(editorViewOptionsCtx, { editable });
});

// set to readonly after 5 secs.
setTimeout(() => {
    readonly = true;
}, 5000);
\`\`\`

---

## \u4F7F\u7528 Action

\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 Action \u6765\u83B7\u53D6\u7F16\u8F91\u5668\u8FD0\u884C\u65F6\u7684\u4E0A\u4E0B\u6587\u3002

\u4F8B\u5982\uFF0C\u901A\u8FC7 Action \u83B7\u53D6 Markdown \u5B57\u7B26\u4E32\uFF1A

\`\`\`typescript
import { Editor, editorViewCtx, serializerCtx } from '@milkdown/core';

async function playWithEditor() {
    const editor = await Editor.make().use(commonmark).create();

    const getMarkdown = () =>
        editor.action((ctx) => {
            const editorView = ctx.get(editorViewCtx);
            const serializer = ctx.get(serializerCtx);
            return serializer(editorView.state.doc);
        });

    // get markdown string:
    getMarkdown();
}
\`\`\`
`;export{n as default};
