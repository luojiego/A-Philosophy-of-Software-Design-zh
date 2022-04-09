import{_ as e,d as t}from"./app.70deb030.js";const o={},i=t('<h1 id="\u7B2C-12-\u7AE0-\u4E3A\u4EC0\u4E48\u5199\u8BC4\u8BBA\u5462-\u56DB\u4E2A\u7406\u7531" tabindex="-1"><a class="header-anchor" href="#\u7B2C-12-\u7AE0-\u4E3A\u4EC0\u4E48\u5199\u8BC4\u8BBA\u5462-\u56DB\u4E2A\u7406\u7531" aria-hidden="true">#</a> \u7B2C 12 \u7AE0 \u4E3A\u4EC0\u4E48\u5199\u8BC4\u8BBA\u5462\uFF1F\u56DB\u4E2A\u7406\u7531</h1><blockquote><p>Chapter 12 Why Write Comments? The Four Excuses</p></blockquote><p>In-code documentation plays a crucial role in software design. Comments are essential to help developers understand a system and work efficiently, but the role of comments goes beyond this. Documentation also plays an important role in abstraction; without comments, you can\u2019t hide complexity. Finally, the process of writing comments, if done correctly, will actually improve a system\u2019s design. Conversely, a good software design loses much of its value if it is poorly documented.</p><blockquote><p>\u4EE3\u7801\u5185\u6587\u6863\u5728\u8F6F\u4EF6\u8BBE\u8BA1\u4E2D\u8D77\u7740\u81F3\u5173\u91CD\u8981\u7684\u4F5C\u7528\u3002\u6CE8\u91CA\u5BF9\u4E8E\u5E2E\u52A9\u5F00\u53D1\u4EBA\u5458\u7406\u89E3\u7CFB\u7EDF\u548C\u6709\u6548\u5DE5\u4F5C\u81F3\u5173\u91CD\u8981\uFF0C\u4F46\u662F\u6CE8\u91CA\u7684\u4F5C\u7528\u4E0D\u6B62\u4E8E\u6B64\u3002\u6587\u6863\u5728\u62BD\u8C61\u4E2D\u4E5F\u8D77\u7740\u91CD\u8981\u4F5C\u7528\u3002\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u60A8\u5C31\u65E0\u6CD5\u9690\u85CF\u590D\u6742\u6027\u3002\u6700\u540E\uFF0C\u7F16\u5199\u6CE8\u91CA\u7684\u8FC7\u7A0B\uFF08\u5982\u679C\u6B63\u786E\u5B8C\u6210\uFF09\u5C06\u5B9E\u9645\u4E0A\u6539\u5584\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u3002\u76F8\u53CD\uFF0C\u5982\u679C\u6CA1\u6709\u5F88\u597D\u7684\u6587\u6863\u8BB0\u5F55\uFF0C\u90A3\u4E48\u597D\u7684\u8F6F\u4EF6\u8BBE\u8BA1\u4F1A\u5931\u53BB\u5F88\u591A\u4EF7\u503C\u3002</p></blockquote><p>Unfortunately, this view is not universally shared. A significant fraction of production code contains essentially no comments. Many developers think that comments are a waste of time; others see the value in comments, but somehow never get around to writing them. Fortunately, many development teams recognize the value of documentation, and it feels like the prevalence of these teams is gradually increasing. However, even in teams that encourage documentation, comments are often viewed as drudge work and many developers don\u2019t understand how to write them, so the resulting documentation is often mediocre. Inadequate documentation creates a huge and unnecessary drag on software development.</p><blockquote><p>\u4E0D\u5E78\u7684\u662F\uFF0C\u8FD9\u79CD\u89C2\u70B9\u5E76\u672A\u5F97\u5230\u666E\u904D\u8BA4\u540C\u3002\u751F\u4EA7\u4EE3\u7801\u7684\u5F88\u5927\u4E00\u90E8\u5206\u57FA\u672C\u4E0A\u4E0D\u5305\u542B\u4EFB\u4F55\u6CE8\u91CA\u3002\u8BB8\u591A\u5F00\u53D1\u4EBA\u5458\u8BA4\u4E3A\u8BC4\u8BBA\u662F\u6D6A\u8D39\u65F6\u95F4\u3002\u5176\u4ED6\u4EBA\u5219\u770B\u5230\u4E86\u6CE8\u91CA\u4E2D\u7684\u4EF7\u503C\uFF0C\u4F46\u4E0D\u77E5\u4F55\u6545\u4ECE\u4E0D\u52A8\u624B\u7F16\u5199\u5B83\u4EEC\u3002\u5E78\u8FD0\u7684\u662F\uFF0C\u8BB8\u591A\u5F00\u53D1\u56E2\u961F\u8BA4\u8BC6\u5230\u4E86\u6587\u6863\u7684\u4EF7\u503C\uFF0C\u5E76\u4E14\u611F\u89C9\u8FD9\u4E9B\u56E2\u961F\u7684\u666E\u53CA\u7387\u6B63\u5728\u9010\u6E10\u63D0\u9AD8\u3002\u4F46\u662F\uFF0C\u5373\u4F7F\u5728\u9F13\u52B1\u6587\u6863\u7684\u56E2\u961F\u4E2D\uFF0C\u6CE8\u91CA\u4E5F\u7ECF\u5E38\u88AB\u89C6\u4E3A\u7E41\u7410\u7684\u5DE5\u4F5C\uFF0C\u800C\u4E14\u8BB8\u591A\u5F00\u53D1\u4EBA\u5458\u4E5F\u4E0D\u4E86\u89E3\u5982\u4F55\u7F16\u5199\u6CE8\u91CA\uFF0C\u56E0\u6B64\u751F\u6210\u7684\u6587\u6863\u901A\u5E38\u662F\u5E73\u5EB8\u7684\u3002\u6587\u6863\u4E0D\u8DB3\u4F1A\u7ED9\u8F6F\u4EF6\u5F00\u53D1\u5E26\u6765\u5DE8\u5927\u4E14\u4E0D\u5FC5\u8981\u7684\u62D6\u7D2F\u3002</p></blockquote><p>In this chapter I will discuss the excuses developers use to avoid writing comments, and the reasons why comments really do matter. Chapter 13 will then describe how to write good comments and the next few chapters after that will discuss related issues such as choosing variable names and how to use documentation to improve a system\u2019s design. I hope these chapters will convince you of three things: good comments can make a big difference in the overall quality of software; it isn\u2019t hard to write good comments; and (this may be hard to believe) writing comments can actually be fun.</p><blockquote><p>\u5728\u672C\u7AE0\u4E2D\uFF0C\u6211\u5C06\u8BA8\u8BBA\u5F00\u53D1\u4EBA\u5458\u907F\u514D\u5199\u8BC4\u8BBA\u7684\u501F\u53E3\uFF0C\u4EE5\u53CA\u8BC4\u8BBA\u771F\u6B63\u91CD\u8981\u7684\u539F\u56E0\u3002\u7136\u540E\uFF0C\u7B2C 13 \u7AE0\u5C06\u63CF\u8FF0\u5982\u4F55\u7F16\u5199\u597D\u7684\u6CE8\u91CA\uFF0C\u5176\u540E\u7684\u51E0\u7AE0\u5C06\u8BA8\u8BBA\u76F8\u5173\u95EE\u9898\uFF0C\u4F8B\u5982\u9009\u62E9\u53D8\u91CF\u540D\u4EE5\u53CA\u5982\u4F55\u4F7F\u7528\u6587\u6863\u6765\u6539\u8FDB\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u3002\u6211\u5E0C\u671B\u8FD9\u4E9B\u7AE0\u8282\u80FD\u4F7F\u60A8\u76F8\u4FE1\u4E09\u4EF6\u4E8B\uFF1A\u597D\u7684\u8BC4\u8BBA\u53EF\u4EE5\u5BF9\u8F6F\u4EF6\u7684\u6574\u4F53\u8D28\u91CF\u4EA7\u751F\u5F88\u5927\u7684\u5F71\u54CD\uFF1B\u5199\u597D\u8BC4\u8BBA\u5E76\u4E0D\u96BE\uFF1B\u5E76\u4E14\uFF08\u53EF\u80FD\u5F88\u96BE\u76F8\u4FE1\uFF09\u5199\u8BC4\u8BBA\u5B9E\u9645\u4E0A\u5F88\u6709\u8DA3\u3002</p></blockquote><p>When developers don\u2019t write comments, they usually justify their behavior with one or more of the following excuses:</p><blockquote><p>\u5F53\u5F00\u53D1\u4EBA\u5458\u4E0D\u53D1\u8868\u8BC4\u8BBA\u65F6\uFF0C\u4ED6\u4EEC\u901A\u5E38\u4F1A\u4EE5\u4EE5\u4E0B\u4E00\u79CD\u6216\u591A\u79CD\u501F\u53E3\u4E3A\u81EA\u5DF1\u7684\u884C\u4E3A\u8FA9\u62A4\uFF1A</p></blockquote><ul><li>\u201CGood code is self-documenting.\u201D</li><li>\u201CI don\u2019t have time to write comments.\u201D</li><li>\u201CComments get out of date and become misleading.\u201D</li><li>\u201CThe comments I have seen are all worthless; why bother?\u201D In the sections below I will address each of these excuses in turn.</li></ul><hr><blockquote><ul><li>\u201C\u597D\u7684\u4EE3\u7801\u53EF\u4EE5\u81EA\u6211\u8BB0\u5F55\u3002\u201D</li><li>\u201C\u6211\u6CA1\u6709\u65F6\u95F4\u5199\u8BC4\u8BBA\u3002\u201D</li><li>\u201C\u8BC4\u8BBA\u8FC7\u65F6\uFF0C\u5E76\u4F1A\u4EA7\u751F\u8BEF\u5BFC\u3002\u201D</li><li>\u201C\u6211\u6240\u770B\u5230\u7684\u8BC4\u8BBA\u90FD\u662F\u6BEB\u65E0\u4EF7\u503C\u7684\uFF1B\u4F55\u5FC5\uFF1F\u201D \u5728\u4EE5\u4E0B\u5404\u8282\u4E2D\uFF0C\u6211\u5C06\u4F9D\u6B21\u8BA8\u8BBA\u8FD9\u4E9B\u501F\u53E3\u3002</li></ul></blockquote><h2 id="_12-1-good-code-is-self-documenting-\u597D\u7684\u4EE3\u7801\u53EF\u4EE5\u81EA\u6211\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#_12-1-good-code-is-self-documenting-\u597D\u7684\u4EE3\u7801\u53EF\u4EE5\u81EA\u6211\u8BB0\u5F55" aria-hidden="true">#</a> 12.1 Good code is self-documenting \u597D\u7684\u4EE3\u7801\u53EF\u4EE5\u81EA\u6211\u8BB0\u5F55</h2><p>Some people believe that if code is written well, it is so obvious that no comments are needed. This is a delicious myth, like a rumor that ice cream is good for your health: we\u2019d really like to believe it! Unfortunately, it\u2019s simply not true. To be sure, there are things you can do when writing code to reduce the need for comments, such as choosing good variable names (see Chapter 14). Nonetheless, there is still a significant amount of design information that can\u2019t be represented in code. For example, only a small part of a class\u2019s interface, such as the signatures of its methods, can be specified formally in the code. The informal aspects of an interface, such as a high-level description of what each method does or the meaning of its result, can only be described in comments. There are many other examples of things that can\u2019t be described in the code, such as the rationale for a particular design decision, or the conditions under which it makes sense to call a particular method.</p><blockquote><p>\u6709\u4EBA\u8BA4\u4E3A\uFF0C\u5982\u679C\u4EE3\u7801\u7F16\u5199\u5F97\u5F53\uFF0C\u90A3\u4E48\u663E\u800C\u6613\u89C1\uFF0C\u4E0D\u9700\u8981\u6CE8\u91CA\u3002\u8FD9\u662F\u4E00\u4E2A\u7F8E\u5473\u7684\u795E\u8BDD\uFF0C\u5C31\u50CF\u8C23\u8A00\u8BF4\u51B0\u6DC7\u6DCB\u5BF9\u60A8\u7684\u5065\u5EB7\u6709\u76CA\uFF1A\u6211\u4EEC\u771F\u7684\u5F88\u60F3\u76F8\u4FE1\uFF01\u4E0D\u5E78\u7684\u662F\uFF0C\u4E8B\u5B9E\u5E76\u975E\u5982\u6B64\u3002\u53EF\u4EE5\u80AF\u5B9A\u7684\u662F\uFF0C\u5728\u7F16\u5199\u4EE3\u7801\u65F6\u53EF\u4EE5\u505A\u4E00\u4E9B\u4E8B\u60C5\u6765\u51CF\u5C11\u5BF9\u6CE8\u91CA\u7684\u9700\u6C42\uFF0C\u4F8B\u5982\u9009\u62E9\u597D\u7684\u53D8\u91CF\u540D\uFF08\u8BF7\u53C2\u9605\u7B2C 14 \u7AE0\uFF09\u3002\u5C3D\u7BA1\u5982\u6B64\uFF0C\u4ECD\u6709\u5927\u91CF\u8BBE\u8BA1\u4FE1\u606F\u65E0\u6CD5\u7528\u4EE3\u7801\u8868\u793A\u3002\u4F8B\u5982\uFF0C\u53EA\u80FD\u5728\u4EE3\u7801\u4E2D\u6B63\u5F0F\u6307\u5B9A\u7C7B\u63A5\u53E3\u7684\u4E00\u5C0F\u90E8\u5206\uFF0C\u4F8B\u5982\u5176\u65B9\u6CD5\u7684\u7B7E\u540D\u3002\u754C\u9762\u7684\u975E\u6B63\u5F0F\u65B9\u9762\uFF0C\u4F8B\u5982\u5BF9\u6BCF\u79CD\u65B9\u6CD5\u7684\u4F5C\u7528\u6216\u5176\u7ED3\u679C\u542B\u4E49\u7684\u9AD8\u7EA7\u63CF\u8FF0\uFF0C\u53EA\u80FD\u5728\u6CE8\u91CA\u4E2D\u63CF\u8FF0\u3002</p></blockquote><p>Some developers argue that if others want to know what a method does, they should just read the code of the method: this will be more accurate than any comment. It\u2019s possible that a reader could deduce the abstract interface of the method by reading its code, but it would be time-consuming and painful. In addition, if you write code with the expectation that users will read method implementations, you will try to make each method as short as possible, so that it\u2019s easy to read. If the method does anything nontrivial, you will break it up into several smaller methods. This will result in a large number of shallow methods. Furthermore, it doesn\u2019t really make the code easier to read: in order to understand the behavior of the top-level method, readers will probably need to understand the behaviors of the nested methods. For large systems it isn\u2019t practical for users to read the code to learn the behavior.</p><blockquote><p>\u4E00\u4E9B\u5F00\u53D1\u4EBA\u5458\u8BA4\u4E3A\uFF0C\u5982\u679C\u5176\u4ED6\u4EBA\u60F3\u77E5\u9053\u67D0\u4E2A\u65B9\u6CD5\u7684\u4F5C\u7528\uFF0C\u90A3\u4E48\u4ED6\u4EEC\u5E94\u8BE5\u53EA\u9605\u8BFB\u8BE5\u65B9\u6CD5\u7684\u4EE3\u7801\uFF1A\u8FD9\u5C06\u6BD4\u4EFB\u4F55\u6CE8\u91CA\u90FD\u66F4\u51C6\u786E\u3002\u8BFB\u8005\u53EF\u80FD\u4F1A\u901A\u8FC7\u9605\u8BFB\u5176\u4EE3\u7801\u6765\u63A8\u65AD\u8BE5\u65B9\u6CD5\u7684\u62BD\u8C61\u63A5\u53E3\uFF0C\u4F46\u8FD9\u65E2\u8D39\u65F6\u53C8\u75DB\u82E6\u3002\u53E6\u5916\uFF0C\u5982\u679C\u5728\u7F16\u5199\u4EE3\u7801\u65F6\u671F\u671B\u7528\u6237\u4F1A\u9605\u8BFB\u65B9\u6CD5\u5B9E\u73B0\uFF0C\u5219\u5C06\u5C1D\u8BD5\u4F7F\u6BCF\u4E2A\u65B9\u6CD5\u5C3D\u53EF\u80FD\u77ED\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB\u3002\u5982\u679C\u8BE5\u65B9\u6CD5\u6267\u884C\u4E86\u4E00\u4E9B\u91CD\u8981\u64CD\u4F5C\uFF0C\u5219\u5C06\u5176\u5206\u89E3\u4E3A\u51E0\u4E2A\u8F83\u5C0F\u7684\u65B9\u6CD5\u3002\u8FD9\u5C06\u5BFC\u81F4\u5927\u91CF\u6D45\u5C42\u65B9\u6CD5\u3002\u6B64\u5916\uFF0C\u5B83\u5E76\u6CA1\u6709\u771F\u6B63\u4F7F\u4EE3\u7801\u66F4\u6613\u4E8E\u9605\u8BFB\uFF1A\u4E3A\u4E86\u7406\u89E3\u9876\u5C42\u65B9\u6CD5\u7684\u884C\u4E3A\uFF0C\u8BFB\u8005\u53EF\u80FD\u9700\u8981\u4E86\u89E3\u5D4C\u5957\u65B9\u6CD5\u7684\u884C\u4E3A\u3002</p></blockquote><p>Moreover, comments are fundamental to abstractions. Recall from Chapter 4 that the goal of abstractions is to hide complexity: an abstraction is a simplified view of an entity, which preserves essential information but omits details that can safely be ignored. If users must read the code of a method in order to use it, then there is no abstraction: all of the complexity of the method is exposed. Without comments, the only abstraction of a method is its declaration, which specifies its name and the names and types of its arguments and results. The declaration is missing too much essential information to provide a useful abstraction by itself. For example, a method to extract a substring might have two arguments, start and end, indicating the range of characters to extract. From the declaration alone, it isn\u2019t possible to tell whether the extracted substring will include the character indicated by end, or what happens if start &gt; end. Comments allow us to capture the additional information that callers need, thereby completing the simplified view while hiding implementation details. It\u2019s also important that comments are written in a human language such as English; this makes them less precise than code, but it provides more expressive power, so we can create simple, intuitive descriptions. If you want to use abstractions to hide complexity, comments are essential.</p><blockquote><p>\u6B64\u5916\uFF0C\u6CE8\u91CA\u662F\u62BD\u8C61\u7684\u57FA\u7840\u3002\u56DE\u987E\u7B2C\u56DB\u7AE0\uFF0C\u62BD\u8C61\u7684\u76EE\u7684\u662F\u9690\u85CF\u590D\u6742\u6027\uFF1A\u62BD\u8C61\u662F\u5B9E\u4F53\u7684\u7B80\u5316\u89C6\u56FE\uFF0C\u8BE5\u5B9E\u4F53\u4FDD\u7559\u5FC5\u8981\u7684\u4FE1\u606F\uFF0C\u4F46\u5FFD\u7565\u4E86\u53EF\u4EE5\u5B89\u5168\u5FFD\u7565\u7684\u7EC6\u8282\u3002\u5982\u679C\u7528\u6237\u5FC5\u987B\u9605\u8BFB\u65B9\u6CD5\u7684\u4EE3\u7801\u624D\u80FD\u4F7F\u7528\u5B83\uFF0C\u5219\u6CA1\u6709\u4EFB\u4F55\u62BD\u8C61\uFF1A\u65B9\u6CD5\u7684\u6240\u6709\u590D\u6742\u6027\u90FD\u5C06\u66B4\u9732\u51FA\u6765\u3002\u6CA1\u6709\u6CE8\u91CA\uFF0C\u65B9\u6CD5\u7684\u552F\u4E00\u62BD\u8C61\u5C31\u662F\u5176\u58F0\u660E\uFF0C\u8BE5\u58F0\u660E\u6307\u5B9A\u5176\u540D\u79F0\u4EE5\u53CA\u5176\u53C2\u6570\u548C\u7ED3\u679C\u7684\u540D\u79F0\u548C\u7C7B\u578B\u3002\u8BE5\u58F0\u660E\u7F3A\u5C11\u592A\u591A\u57FA\u672C\u4FE1\u606F\uFF0C\u65E0\u6CD5\u5355\u72EC\u63D0\u4F9B\u6709\u7528\u7684\u62BD\u8C61\u3002\u4F8B\u5982\uFF0C\u63D0\u53D6\u5B50\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5\u53EF\u80FD\u6709\u4E24\u4E2A\u53C2\u6570\uFF0C\u5F00\u59CB\u548C\u7ED3\u675F\uFF0C\u8868\u793A\u8981\u63D0\u53D6\u7684\u5B57\u7B26\u8303\u56F4\u3002\u4EC5\u51ED\u5BA3\u8A00\uFF0C\u65E0\u6CD5\u786E\u5B9A\u63D0\u53D6\u7684\u5B50\u5B57\u7B26\u4E32\u662F\u5426\u5C06\u5305\u542B end \u6307\u793A\u7684\u5B57\u7B26\uFF0C\u6216\u8005\u5982\u679C start&gt; end \u4F1A\u53D1\u751F\u4EC0\u4E48\u3002\u6CE8\u91CA\u4F7F\u6211\u4EEC\u80FD\u591F\u6355\u83B7\u8C03\u7528\u8005\u6240\u9700\u7684\u5176\u4ED6\u4FE1\u606F\uFF0C\u4ECE\u800C\u5728\u9690\u85CF\u5B9E\u73B0\u7EC6\u8282\u7684\u540C\u65F6\u5B8C\u6210\u7B80\u5316\u7684\u89C6\u56FE\u3002\u7528\u4EBA\u7C7B\u8BED\u8A00\uFF08\u4F8B\u5982\u82F1\u8BED\uFF09\u5199\u8BC4\u8BBA\u4E5F\u5F88\u91CD\u8981\uFF1B\u8FD9\u4F7F\u5B83\u4EEC\u4E0D\u5982\u4EE3\u7801\u7CBE\u786E\uFF0C\u4F46\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u8868\u8FBE\u80FD\u529B\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u7B80\u5355\u76F4\u89C2\u7684\u63CF\u8FF0\u3002\u5982\u679C\u8981\u4F7F\u7528\u62BD\u8C61\u6765\u9690\u85CF\u590D\u6742\u6027\uFF0C\u5219\u6CE8\u91CA\u5FC5\u4E0D\u53EF\u5C11\u3002\u7528\u4EBA\u7C7B\u8BED\u8A00\uFF08\u4F8B\u5982\u82F1\u8BED\uFF09\u5199\u8BC4\u8BBA\u4E5F\u5F88\u91CD\u8981\uFF1B\u8FD9\u4F7F\u5B83\u4EEC\u4E0D\u5982\u4EE3\u7801\u7CBE\u786E\uFF0C\u4F46\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u8868\u8FBE\u80FD\u529B\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u7B80\u5355\u76F4\u89C2\u7684\u63CF\u8FF0\u3002\u5982\u679C\u8981\u4F7F\u7528\u62BD\u8C61\u6765\u9690\u85CF\u590D\u6742\u6027\uFF0C\u5219\u6CE8\u91CA\u5FC5\u4E0D\u53EF\u5C11\u3002\u7528\u4EBA\u7C7B\u8BED\u8A00\uFF08\u4F8B\u5982\u82F1\u8BED\uFF09\u5199\u8BC4\u8BBA\u4E5F\u5F88\u91CD\u8981\uFF1B\u8FD9\u4F7F\u5B83\u4EEC\u4E0D\u5982\u4EE3\u7801\u7CBE\u786E\uFF0C\u4F46\u63D0\u4F9B\u4E86\u66F4\u591A\u7684\u8868\u8FBE\u80FD\u529B\uFF0C\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u7B80\u5355\u76F4\u89C2\u7684\u63CF\u8FF0\u3002\u5982\u679C\u8981\u4F7F\u7528\u62BD\u8C61\u6765\u9690\u85CF\u590D\u6742\u6027\uFF0C\u5219\u6CE8\u91CA\u5FC5\u4E0D\u53EF\u5C11\u3002</p></blockquote><h2 id="_12-2-i-don-t-have-time-to-write-comments-\u6211\u6CA1\u6709\u65F6\u95F4\u5199\u8BC4\u8BBA" tabindex="-1"><a class="header-anchor" href="#_12-2-i-don-t-have-time-to-write-comments-\u6211\u6CA1\u6709\u65F6\u95F4\u5199\u8BC4\u8BBA" aria-hidden="true">#</a> 12.2 I don\u2019t have time to write comments \u6211\u6CA1\u6709\u65F6\u95F4\u5199\u8BC4\u8BBA</h2><p>It\u2019s tempting to prioritize comments lower than other development tasks. Given a choice between adding a new feature and documenting an existing feature, it seems logical to choose the new feature. However, software projects are almost always under time pressure, and there will always be things that seem higher priority than writing comments. Thus, if you allow documentation to be de-prioritized, you\u2019ll end up with no documentation.</p><blockquote><p>\u4F18\u5148\u8003\u8651\u4F4E\u4E8E\u5176\u4ED6\u5F00\u53D1\u4EFB\u52A1\u7684\u6CE8\u91CA\u662F\u5F88\u8BF1\u4EBA\u7684\u3002\u5728\u6DFB\u52A0\u65B0\u529F\u80FD\u548C\u8BB0\u5F55\u73B0\u6709\u529F\u80FD\u4E4B\u95F4\u505A\u51FA\u9009\u62E9\u4E4B\u540E\uFF0C\u9009\u62E9\u65B0\u529F\u80FD\u4F3C\u4E4E\u5408\u4E4E\u903B\u8F91\u3002\u4F46\u662F\uFF0C\u8F6F\u4EF6\u9879\u76EE\u51E0\u4E4E\u603B\u662F\u5904\u4E8E\u65F6\u95F4\u538B\u529B\u4E4B\u4E0B\uFF0C\u5E76\u4E14\u603B\u4F1A\u6709\u6BD4\u7F16\u5199\u6CE8\u91CA\u4F18\u5148\u7EA7\u66F4\u9AD8\u7684\u4E8B\u60C5\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u60A8\u5141\u8BB8\u53D6\u6D88\u5BF9\u6587\u6863\u7684\u4F18\u5148\u7EA7\uFF0C\u5219\u6700\u7EC8\u5C06\u6CA1\u6709\u6587\u6863\u3002</p></blockquote><p>The counter-argument to this excuse is the investment mindset discussed on page 15. If you want a clean software structure, which will allow you to work efficiently over the long-term, then you must take some extra time up front in order to create that structure. Good comments make a huge difference in the maintainability of software, so the effort spent on them will pay for itself quickly. Furthermore, writing comments needn\u2019t take a lot of time. Ask yourself how much of your development time you spend typing in code (as opposed to designing, compiling, testing, etc.), assuming you don\u2019t include any comments; I doubt that the answer is more than 10%. Now suppose that you spend as much time typing comments as typing code; this should be a safe upper bound. With these assumptions, writing good comments won\u2019t add more than about 10% to your development time. The benefits of having good documentation will quickly offset this cost.</p><blockquote><p>\u4E0E\u8BE5\u501F\u53E3\u76F8\u53CD\u7684\u662F\u7B2C 15 \u9875\u4E0A\u8BA8\u8BBA\u7684\u6295\u8D44\u601D\u8DEF\u3002\u5982\u679C\u60A8\u60F3\u8981\u4E00\u4E2A\u5E72\u51C0\u7684\u8F6F\u4EF6\u7ED3\u6784\uFF0C\u53EF\u4EE5\u957F\u671F\u6709\u6548\u5730\u5DE5\u4F5C\uFF0C\u90A3\u4E48\u60A8\u5FC5\u987B\u82B1\u4E00\u4E9B\u989D\u5916\u7684\u65F6\u95F4\u624D\u80FD\u521B\u5EFA\u8BE5\u7ED3\u6784\u3002\u597D\u7684\u8BC4\u8BBA\u5BF9\u8F6F\u4EF6\u7684\u53EF\u7EF4\u62A4\u6027\u6709\u5F88\u5927\u7684\u5F71\u54CD\uFF0C\u56E0\u6B64\u82B1\u8D39\u5728\u5B83\u4EEC\u4E0A\u9762\u7684\u7CBE\u529B\u5C06\u5F88\u5FEB\u6536\u56DE\u6210\u672C\u3002\u6B64\u5916\uFF0C\u64B0\u5199\u8BC4\u8BBA\u4E0D\u9700\u8981\u82B1\u8D39\u5F88\u591A\u65F6\u95F4\u3002\u8BE2\u95EE\u81EA\u5DF1\uFF0C\u5047\u8BBE\u60A8\u4E0D\u5305\u542B\u4EFB\u4F55\u6CE8\u91CA\uFF0C\u90A3\u4E48\u60A8\u82B1\u8D39\u4E86\u591A\u5C11\u5F00\u53D1\u65F6\u95F4\u6765\u952E\u5165\u4EE3\u7801\uFF08\u4E0E\u8BBE\u8BA1\uFF0C\u7F16\u8BD1\uFF0C\u6D4B\u8BD5\u7B49\u76F8\u5BF9\uFF09\u3002\u6211\u6000\u7591\u7B54\u6848\u662F\u5426\u8D85\u8FC7 10\uFF05\u3002\u73B0\u5728\u5047\u8BBE\u60A8\u82B1\u5728\u8F93\u5165\u6CE8\u91CA\u4E0A\u7684\u65F6\u95F4\u4E0E\u8F93\u5165\u4EE3\u7801\u6240\u82B1\u8D39\u7684\u65F6\u95F4\u4E00\u6837\u591A\u3002\u8FD9\u5E94\u8BE5\u662F\u4E00\u4E2A\u5B89\u5168\u7684\u4E0A\u9650\u3002\u57FA\u4E8E\u8FD9\u4E9B\u5047\u8BBE\uFF0C\u64B0\u5199\u597D\u7684\u8BC4\u8BBA\u4E0D\u4F1A\u589E\u52A0\u60A8\u7684\u5F00\u53D1\u65F6\u95F4\u7EA6 10\uFF05\u3002\u62E5\u6709\u826F\u597D\u6587\u6863\u7684\u597D\u5904\u5C06\u8FC5\u901F\u62B5\u6D88\u8FD9\u4E00\u6210\u672C\u3002</p></blockquote><p>Furthermore, many of the most important comments are those related to abstractions, such as the top-level documentation for classes and methods. Chapter 15 will argue that these comments should be written as part of the design process, and that the act of writing the documentation serves as an important design tool that improves the overall design. These comments pay for themselves immediately.</p><blockquote><p>\u6B64\u5916\uFF0C\u8BB8\u591A\u6700\u91CD\u8981\u7684\u6CE8\u91CA\u662F\u4E0E\u62BD\u8C61\u6709\u5173\u7684\u6CE8\u91CA\uFF0C\u4F8B\u5982\u7C7B\u548C\u65B9\u6CD5\u7684\u9876\u7EA7\u6587\u6863\u3002\u7B2C 15 \u7AE0\u8BA4\u4E3A\uFF0C\u8FD9\u4E9B\u6CE8\u91CA\u5E94\u4F5C\u4E3A\u8BBE\u8BA1\u8FC7\u7A0B\u7684\u4E00\u90E8\u5206\u7F16\u5199\uFF0C\u5E76\u4E14\u7F16\u5199\u6587\u6863\u7684\u884C\u4E3A\u662F\u6539\u5584\u6574\u4F53\u8BBE\u8BA1\u7684\u91CD\u8981\u8BBE\u8BA1\u5DE5\u5177\u3002\u8FD9\u4E9B\u8BC4\u8BBA\u7ACB\u5373\u4ED8\u8BF8\u884C\u52A8\u3002</p></blockquote><h2 id="_12-3-comments-get-out-of-date-and-become-misleading-\u8BC4\u8BBA\u8FC7\u65F6\u5E76\u4EA7\u751F\u8BEF\u5BFC" tabindex="-1"><a class="header-anchor" href="#_12-3-comments-get-out-of-date-and-become-misleading-\u8BC4\u8BBA\u8FC7\u65F6\u5E76\u4EA7\u751F\u8BEF\u5BFC" aria-hidden="true">#</a> 12.3 Comments get out of date and become misleading \u8BC4\u8BBA\u8FC7\u65F6\u5E76\u4EA7\u751F\u8BEF\u5BFC</h2><p>Comments do sometimes get out of date, but this need not be a major problem in practice. Keeping documentation up-to-date does not require an enormous effort. Large changes to the documentation are only required if there have been large changes to the code, and the code changes will take more time than the documentation changes. Chapter 16 discusses how to organize documentation so that it is as easy as possible to keep it updated after code modifications (the key ideas are to avoid duplicated documentation and keep the documentation close to the corresponding code). Code reviews provide a great mechanism for detecting and fixing stale comments.</p><blockquote><p>\u6CE8\u91CA\u6709\u65F6\u786E\u5B9E\u4F1A\u8FC7\u65F6\uFF0C\u4F46\u8FD9\u5B9E\u9645\u4E0A\u5E76\u4E0D\u662F\u4E3B\u8981\u95EE\u9898\u3002\u4F7F\u6587\u6863\u4FDD\u6301\u6700\u65B0\u72B6\u6001\u5E76\u4E0D\u9700\u8981\u4ED8\u51FA\u5DE8\u5927\u7684\u52AA\u529B\u3002\u4EC5\u5F53\u5BF9\u4EE3\u7801\u8FDB\u884C\u4E86\u8F83\u5927\u7684\u66F4\u6539\u65F6\u624D\u9700\u8981\u5BF9\u6587\u6863\u8FDB\u884C\u5927\u7684\u66F4\u6539\uFF0C\u5E76\u4E14\u4EE3\u7801\u66F4\u6539\u5C06\u6BD4\u6587\u6863\u7684\u66F4\u6539\u82B1\u8D39\u66F4\u591A\u7684\u65F6\u95F4\u3002\u7B2C 16 \u7AE0\u8BA8\u8BBA\u4E86\u5982\u4F55\u7EC4\u7EC7\u6587\u6863\uFF0C\u4EE5\u4FBF\u5728\u4FEE\u6539\u4EE3\u7801\u540E\u5C3D\u53EF\u80FD\u5BB9\u6613\u5730\u5BF9\u5176\u8FDB\u884C\u66F4\u65B0\uFF08\u4E3B\u8981\u601D\u60F3\u662F\u907F\u514D\u91CD\u590D\u7684\u6587\u6863\u5E76\u4F7F\u6587\u6863\u4E0E\u76F8\u5E94\u7684\u4EE3\u7801\u4FDD\u6301\u4E00\u81F4\uFF09\u3002\u4EE3\u7801\u5BA1\u67E5\u63D0\u4F9B\u4E86\u4E00\u79CD\u68C0\u6D4B\u548C\u4FEE\u590D\u9648\u65E7\u6CE8\u91CA\u7684\u5F3A\u5927\u673A\u5236\u3002</p></blockquote><h2 id="_12-4-all-the-comments-i-have-seen-are-worthless-\u6211\u6240\u770B\u5230\u7684\u6240\u6709\u8BC4\u8BBA\u90FD\u662F\u6BEB\u65E0\u4EF7\u503C\u7684" tabindex="-1"><a class="header-anchor" href="#_12-4-all-the-comments-i-have-seen-are-worthless-\u6211\u6240\u770B\u5230\u7684\u6240\u6709\u8BC4\u8BBA\u90FD\u662F\u6BEB\u65E0\u4EF7\u503C\u7684" aria-hidden="true">#</a> 12.4 All the comments I have seen are worthless \u6211\u6240\u770B\u5230\u7684\u6240\u6709\u8BC4\u8BBA\u90FD\u662F\u6BEB\u65E0\u4EF7\u503C\u7684</h2><p>Of the four excuses, this is probably the one with the most merit. Every software developer has seen comments that provide no useful information, and most existing documentation is so-so at best. Fortunately, this problem is solvable; writing solid documentation is not hard, once you know how. The next chapters will lay out a framework for how to write good documentation and maintain it over time.</p><blockquote><p>\u5728\u8FD9\u56DB\u4E2A\u501F\u53E3\u4E2D\uFF0C\u8FD9\u53EF\u80FD\u662F\u6700\u6709\u4EF7\u503C\u7684\u501F\u53E3\u3002\u6BCF\u4E2A\u8F6F\u4EF6\u5F00\u53D1\u4EBA\u5458\u90FD\u770B\u5230\u6CA1\u6709\u63D0\u4F9B\u6709\u7528\u4FE1\u606F\u7684\u6CE8\u91CA\uFF0C\u5E76\u4E14\u5927\u591A\u6570\u73B0\u6709\u6587\u6863\u5145\u5176\u91CF\u90FD\u662F\u8FD9\u6837\u3002\u5E78\u8FD0\u7684\u662F\uFF0C\u8FD9\u4E2A\u95EE\u9898\u662F\u53EF\u4EE5\u89E3\u51B3\u7684\u3002\u4E00\u65E6\u77E5\u9053\u4E86\u5982\u4F55\u7F16\u5199\u53EF\u9760\u7684\u6587\u6863\u5E76\u4E0D\u96BE\u3002\u4E0B\u4E00\u7AE0\u5C06\u4E3A\u5982\u4F55\u7F16\u5199\u826F\u597D\u7684\u6587\u6863\u5E76\u968F\u65F6\u95F4\u8FDB\u884C\u7EF4\u62A4\u63D0\u4F9B\u4E00\u4E2A\u6846\u67B6\u3002</p></blockquote><h2 id="_12-5-benefits-of-well-written-comments" tabindex="-1"><a class="header-anchor" href="#_12-5-benefits-of-well-written-comments" aria-hidden="true">#</a> 12.5 Benefits of well-written comments</h2><p>Now that I have discussed (and, hopefully, debunked) the arguments against writing comments, let\u2019s consider the benefits that you will get from good comments. The overall idea behind comments is to capture information that was in the mind of the designer but couldn\u2019t be represented in the code. This information ranges from low-level details, such as a hardware quirk that motivates a particularly tricky piece of code, up to high-level concepts such as the rationale for a class. When other developers come along later to make modifications, the comments will allow them to work more quickly and accurately. Without documentation, future developers will have to rederive or guess at the developer\u2019s original knowledge; this will take additional time, and there is a risk of bugs if the new developer misunderstands the original designer\u2019s intentions. Comments are valuable even when the original designer is the one making the changes: if it has been more than a few weeks since you last worked in a piece of code, you will have forgotten many of the details of the original design.</p><blockquote><p>\u65E2\u7136\u6211\u5DF2\u7ECF\u8BA8\u8BBA\u4E86\uFF08\u5E76\u5E0C\u671B\u63ED\u7A7F\u4E86\u8FD9\u4E9B\uFF09\u53CD\u5BF9\u64B0\u5199\u8BC4\u8BBA\u7684\u8BBA\u70B9\uFF0C\u8BA9\u6211\u4EEC\u8003\u8651\u4E00\u4E0B\u4ECE\u826F\u597D\u8BC4\u8BBA\u4E2D\u5C06\u83B7\u5F97\u7684\u597D\u5904\u3002\u6CE8\u91CA\u80CC\u540E\u7684\u603B\u4F53\u601D\u60F3\u662F\u6355\u83B7\u8BBE\u8BA1\u8005\u6240\u60F3\u4F46\u4E0D\u80FD\u5728\u4EE3\u7801\u4E2D\u8868\u793A\u7684\u4FE1\u606F\u3002\u8FD9\u4E9B\u4FE1\u606F\u4ECE\u4F4E\u7EA7\u8BE6\u7EC6\u4FE1\u606F\uFF08\u4F8B\u5982\uFF0C\u6FC0\u53D1\u7279\u6B8A\u4EE3\u7801\u7684\u786C\u4EF6\u602A\u7656\uFF09\u5230\u9AD8\u7EA7\u6982\u5FF5\uFF08\u4F8B\u5982\uFF0C\u7C7B\u7684\u57FA\u672C\u539F\u7406\uFF09\u3002\u5F53\u5176\u4ED6\u5F00\u53D1\u4EBA\u5458\u7A0D\u540E\u8FDB\u884C\u4FEE\u6539\u65F6\uFF0C\u8FD9\u4E9B\u6CE8\u91CA\u5C06\u4F7F\u4ED6\u4EEC\u80FD\u591F\u66F4\u5FEB\uFF0C\u66F4\u51C6\u786E\u5730\u5DE5\u4F5C\u3002\u6CA1\u6709\u6587\u6863\uFF0C\u672A\u6765\u7684\u5F00\u53D1\u4EBA\u5458\u5C06\u4E0D\u5F97\u4E0D\u91CD\u65B0\u7F16\u5199\u6216\u731C\u6D4B\u5F00\u53D1\u4EBA\u5458\u7684\u539F\u59CB\u77E5\u8BC6\u3002\u8FD9\u5C06\u82B1\u8D39\u989D\u5916\u7684\u65F6\u95F4\uFF0C\u5E76\u4E14\u5982\u679C\u65B0\u5F00\u53D1\u8005\u8BEF\u89E3\u4E86\u539F\u59CB\u8BBE\u8BA1\u8005\u7684\u610F\u56FE\uFF0C\u5219\u5B58\u5728\u9519\u8BEF\u7684\u98CE\u9669\u3002</p></blockquote><p>Chapter 2 described three ways in which complexity manifests itself in software systems:</p><blockquote><p>\u7B2C 2 \u7AE0\u4ECB\u7ECD\u4E86\u5728\u8F6F\u4EF6\u7CFB\u7EDF\u4E2D\u8868\u73B0\u51FA\u590D\u6742\u6027\u7684\u4E09\u79CD\u65B9\u5F0F\uFF1A</p></blockquote><ul><li>Change amplification: a seemingly simple change requires code modifications in many places.</li><li>Cognitive load: in order to make a change, the developer must accumulate a large amount of information.</li><li>Unknown unknowns: it is unclear what code needs to be modified, or what information must be considered in order to make those modifications.</li></ul><hr><blockquote><ul><li>\u53D8\u66F4\u653E\u5927\uFF1A\u770B\u4F3C\u7B80\u5355\u7684\u53D8\u66F4\u9700\u8981\u5728\u8BB8\u591A\u5730\u65B9\u8FDB\u884C\u4EE3\u7801\u4FEE\u6539\u3002</li><li>\u8BA4\u77E5\u8D1F\u8377\uFF1A\u4E3A\u4E86\u8FDB\u884C\u66F4\u6539\uFF0C\u5F00\u53D1\u4EBA\u5458\u5FC5\u987B\u79EF\u7D2F\u5927\u91CF\u4FE1\u606F\u3002</li><li>\u672A\u77E5\u672A\u77E5\u6570\uFF1A\u5C1A\u4E0D\u6E05\u695A\u9700\u8981\u4FEE\u6539\u54EA\u4E9B\u4EE3\u7801\uFF0C\u6216\u5FC5\u987B\u8003\u8651\u54EA\u4E9B\u4FE1\u606F\u624D\u80FD\u8FDB\u884C\u8FD9\u4E9B\u4FEE\u6539\u3002</li></ul></blockquote><p>Good documentation helps with the last two of these issues. Documentation can reduce cognitive load by providing developers with the information they need to make changes and by making it easy for developers to ignore information that is irrelevant. Without adequate documentation, developers may have to read large amounts of code to reconstruct what was in the designer\u2019s mind. Documentation can also reduce the unknown unknowns by clarifying the structure of the system, so that it is clear what information and code is relevant for any given change.</p><blockquote><p>\u597D\u7684\u6587\u6863\u53EF\u4EE5\u5E2E\u52A9\u89E3\u51B3\u6700\u540E\u4E24\u4E2A\u95EE\u9898\u3002\u901A\u8FC7\u4E3A\u5F00\u53D1\u4EBA\u5458\u63D0\u4F9B\u4ED6\u4EEC\u8FDB\u884C\u66F4\u6539\u6240\u9700\u7684\u4FE1\u606F\uFF0C\u5E76\u4F7F\u5F00\u53D1\u4EBA\u5458\u5BB9\u6613\u5FFD\u7565\u4E0D\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u6587\u6863\u53EF\u4EE5\u51CF\u8F7B\u8BA4\u77E5\u8D1F\u62C5\u3002\u6CA1\u6709\u8DB3\u591F\u7684\u6587\u6863\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u80FD\u5FC5\u987B\u9605\u8BFB\u5927\u91CF\u4EE3\u7801\u624D\u80FD\u91CD\u6784\u8BBE\u8BA1\u4EBA\u5458\u7684\u60F3\u6CD5\u3002\u6587\u6863\u8FD8\u53EF\u4EE5\u901A\u8FC7\u9610\u660E\u7CFB\u7EDF\u7684\u7ED3\u6784\u6765\u51CF\u5C11\u672A\u77E5\u7684\u672A\u77E5\u6570\uFF0C\u4ECE\u800C\u53EF\u4EE5\u6E05\u695A\u5730\u4E86\u89E3\u4E0E\u4EFB\u4F55\u7ED9\u5B9A\u66F4\u6539\u76F8\u5173\u7684\u4FE1\u606F\u548C\u4EE3\u7801\u3002</p></blockquote><p>Chapter 2 pointed out that the primary causes of complexity are dependencies and obscurity. Good documentation can clarify dependencies, and it fills in gaps to eliminate obscurity.</p><blockquote><p>\u7B2C 2 \u7AE0\u6307\u51FA\uFF0C\u5BFC\u81F4\u590D\u6742\u6027\u7684\u4E3B\u8981\u539F\u56E0\u662F\u4F9D\u8D56\u6027\u548C\u6A21\u7CCA\u6027\u3002\u597D\u7684\u6587\u6863\u53EF\u4EE5\u9610\u660E\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5E76\u4E14\u53EF\u4EE5\u586B\u8865\u7A7A\u767D\u4EE5\u6D88\u9664\u6A21\u7CCA\u6027\u3002</p></blockquote><p>The next few chapters will show you how to write good documentation. They will also discuss how to integrate documentation-writing into the design process so that it improves the design of your software.</p><blockquote><p>\u63A5\u4E0B\u6765\u7684\u51E0\u7AE0\u5C06\u5411\u60A8\u5C55\u793A\u5982\u4F55\u7F16\u5199\u597D\u7684\u6587\u6863\u3002\u4ED6\u4EEC\u8FD8\u5C06\u8BA8\u8BBA\u5982\u4F55\u5C06\u6587\u6863\u7F16\u5199\u96C6\u6210\u5230\u8BBE\u8BA1\u8FC7\u7A0B\u4E2D\uFF0C\u4ECE\u800C\u6539\u5584\u8F6F\u4EF6\u8BBE\u8BA1\u3002</p></blockquote>',47);function a(n,s){return i}var l=e(o,[["render",a],["__file","ch12.html.vue"]]);export{l as default};