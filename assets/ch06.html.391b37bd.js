import{_ as e,d as t}from"./app.141bd868.js";const a={},s=t(`<h1 id="\u7B2C-6-\u7AE0-\u901A\u7528\u6A21\u5757\u66F4\u6DF1\u5165" tabindex="-1"><a class="header-anchor" href="#\u7B2C-6-\u7AE0-\u901A\u7528\u6A21\u5757\u66F4\u6DF1\u5165" aria-hidden="true">#</a> \u7B2C 6 \u7AE0 \u901A\u7528\u6A21\u5757\u66F4\u6DF1\u5165</h1><blockquote><p>Chapter 6 General-Purpose Modules are Deeper</p></blockquote><blockquote><p>One of the most common decisions that you will face when designing a new module is whether to implement it in a general-purpose or special-purpose fashion. Some might argue that you should take a general-purpose approach, in which you implement a mechanism that can be used to address a broad range of problems, not just the ones that are important today. In this case, the new mechanism may find unanticipated uses in the future, thereby saving time. The general-purpose approach seems consistent with the investment mindset discussed in Chapter 3, where you spend a bit more time up front to save time later on.</p></blockquote><p>\u8BBE\u8BA1\u65B0\u6A21\u5757\u65F6\uFF0C\u60A8\u5C06\u9762\u4E34\u7684\u6700\u666E\u904D\u7684\u51B3\u5B9A\u4E4B\u4E00\u5C31\u662F\u662F\u4EE5\u901A\u7528\u8FD8\u662F\u4E13\u7528\u65B9\u5F0F\u5B9E\u73B0\u5B83\u3002\u6709\u4EBA\u53EF\u80FD\u4F1A\u4E89\u8FA9\u8BF4\uFF0C\u60A8\u5E94\u8BE5\u91C7\u7528\u901A\u7528\u65B9\u6CD5\uFF0C\u5728\u8FD9\u79CD\u65B9\u6CD5\u4E2D\uFF0C\u60A8\u5C06\u5B9E\u73B0\u4E00\u79CD\u53EF\u7528\u4E8E\u89E3\u51B3\u5E7F\u6CDB\u95EE\u9898\u7684\u673A\u5236\uFF0C\u800C\u4E0D\u4EC5\u662F\u5F53\u4ECA\u91CD\u8981\u7684\u95EE\u9898\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u65B0\u673A\u5236\u53EF\u80FD\u4F1A\u5728\u5C06\u6765\u53D1\u73B0\u610F\u5916\u7528\u9014\uFF0C\u4ECE\u800C\u8282\u7701\u65F6\u95F4\u3002\u901A\u7528\u65B9\u6CD5\u4F3C\u4E4E\u4E0E\u7B2C 3 \u7AE0\u4E2D\u8BA8\u8BBA\u7684\u6295\u8D44\u601D\u8DEF\u4E00\u81F4\uFF0C\u5728\u8FD9\u91CC\u60A8\u82B1\u4E86\u66F4\u591A\u65F6\u95F4\u5728\u524D\u9762\uFF0C\u4EE5\u8282\u7701\u4EE5\u540E\u7684\u65F6\u95F4\u3002</p><blockquote><p>On the other hand, we know that it\u2019s hard to predict the future needs of a software system, so a general-purpose solution might include facilities that are never actually needed. Furthermore, if you implement something that is too general-purpose, it might not do a good job of solving the particular problem you have today. As a result, some might argue that it\u2019s better to focus on today\u2019s needs, building just what you know you need, and specializing it for the way you plan to use it today. If you take the special-purpose approach and discover additional uses later, you can always refactor it to make it general-purpose. The special-purpose approach seems consistent with an incremental approach to software development.</p></blockquote><p>\u53E6\u4E00\u65B9\u9762\uFF0C\u6211\u4EEC\u77E5\u9053\u5F88\u96BE\u9884\u6D4B\u8F6F\u4EF6\u7CFB\u7EDF\u7684\u672A\u6765\u9700\u6C42\uFF0C\u56E0\u6B64\u901A\u7528\u89E3\u51B3\u65B9\u6848\u53EF\u80FD\u5305\u542B\u4ECE\u672A\u771F\u6B63\u9700\u8981\u7684\u529F\u80FD\u3002\u6B64\u5916\uFF0C\u5982\u679C\u60A8\u5B9E\u73B0\u7684\u4E1C\u897F\u8FC7\u4E8E\u901A\u7528\uFF0C\u90A3\u4E48\u53EF\u80FD\u65E0\u6CD5\u5F88\u597D\u5730\u89E3\u51B3\u60A8\u4ECA\u5929\u9047\u5230\u7684\u7279\u5B9A\u95EE\u9898\u3002\u7ED3\u679C\uFF0C\u6709\u4E9B\u4EBA\u53EF\u80FD\u4F1A\u4E89\u8FA9\u8BF4\uFF0C\u6700\u597D\u53EA\u5173\u6CE8\u5F53\u4ECA\u7684\u9700\u6C42\uFF0C\u6784\u5EFA\u60A8\u6240\u77E5\u9053\u7684\u9700\u6C42\uFF0C\u5E76\u9488\u5BF9\u60A8\u4ECA\u5929\u6253\u7B97\u4F7F\u7528\u7684\u65B9\u5F0F\u8FDB\u884C\u4E13\u95E8\u5316\u5904\u7406\u3002\u5982\u679C\u60A8\u91C7\u7528\u7279\u6B8A\u7528\u9014\u7684\u65B9\u6CD5\u5E76\u5728\u4EE5\u540E\u53D1\u73B0\u66F4\u591A\u7528\u9014\uFF0C\u5219\u59CB\u7EC8\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u91CD\u6784\u4EE5\u4F7F\u5176\u901A\u7528\u3002\u4E13\u7528\u65B9\u6CD5\u4F3C\u4E4E\u4E0E\u8F6F\u4EF6\u5F00\u53D1\u7684\u589E\u91CF\u65B9\u6CD5\u4E00\u81F4\u3002</p><h2 id="_6-1-make-classes-somewhat-general-purpose-\u4F7F\u7C7B\u53D8\u5F97\u901A\u7528" tabindex="-1"><a class="header-anchor" href="#_6-1-make-classes-somewhat-general-purpose-\u4F7F\u7C7B\u53D8\u5F97\u901A\u7528" aria-hidden="true">#</a> 6.1 Make classes somewhat general-purpose \u4F7F\u7C7B\u53D8\u5F97\u901A\u7528</h2><blockquote><p>In my experience, the sweet spot is to implement new modules in a somewhat general-purpose fashion. The phrase \u201Csomewhat general-purpose\u201D means that the module\u2019s functionality should reflect your current needs, but its interface should not. Instead, the interface should be general enough to support multiple uses. The interface should be easy to use for today\u2019s needs without being tied specifically to them. The word \u201Csomewhat\u201D is important: don\u2019t get carried away and build something so general-purpose that it is difficult to use for your current needs.</p></blockquote><p>\u4EE5\u6211\u7684\u7ECF\u9A8C\uFF0C\u6700\u6709\u6548\u7684\u65B9\u6CD5\u662F\u4EE5\u67D0\u79CD\u901A\u7528\u7684\u65B9\u5F0F\u5B9E\u73B0\u65B0\u6A21\u5757\u3002\u77ED\u8BED\u201C\u6709\u70B9\u901A\u7528\u201D\u8868\u793A\u8BE5\u6A21\u5757\u7684\u529F\u80FD\u5E94\u53CD\u6620\u60A8\u5F53\u524D\u7684\u9700\u6C42\uFF0C\u4F46\u5176\u63A5\u53E3\u5219\u4E0D\u5E94\u3002\u76F8\u53CD\uFF0C\u8BE5\u63A5\u53E3\u5E94\u8BE5\u8DB3\u591F\u901A\u7528\u4EE5\u652F\u6301\u591A\u79CD\u7528\u9014\u3002\u8BE5\u754C\u9762\u5E94\u6613\u4E8E\u4F7F\u7528\uFF0C\u4EE5\u6EE1\u8DB3\u5F53\u4ECA\u7684\u9700\u6C42\uFF0C\u800C\u4E0D\u5FC5\u4E13\u95E8\u4E0E\u5B83\u4EEC\u8054\u7CFB\u5728\u4E00\u8D77\u3002\u201C\u6709\u70B9\u201D\u8FD9\u4E2A\u8BCD\u5F88\u91CD\u8981\uFF1A\u4E0D\u8981\u88AB\u5E26\u8D70\u5E76\u5EFA\u9020\u901A\u7528\u7684\u4E1C\u897F\uFF0C\u4EE5\u81F4\u4E8E\u5F88\u96BE\u6EE1\u8DB3\u5F53\u524D\u7684\u9700\u6C42\u3002</p><blockquote><p>The most important (and perhaps surprising) benefit of the general-purpose approach is that it results in simpler and deeper interfaces than a special-purpose approach. The general-purpose approach can also save you time in the future, if you reuse the class for other purposes. However, even if the module is only used for its original purpose, the general-purpose approach is still better because of its simplicity.</p></blockquote><p>\u901A\u7528\u65B9\u6CD5\u6700\u91CD\u8981\u7684\uFF08\u4E5F\u8BB8\u662F\u4EE4\u4EBA\u60CA\u8BB6\u7684\uFF09\u597D\u5904\u662F\uFF0C\u4E0E\u4E13\u7528\u65B9\u6CD5\u76F8\u6BD4\uFF0C\u5B83\u5BFC\u81F4\u66F4\u7B80\u5355\uFF0C\u66F4\u6DF1\u5165\u7684\u754C\u9762\u3002\u5982\u679C\u60A8\u5C06\u8BE5\u7C7B\u7528\u4E8E\u5176\u4ED6\u76EE\u7684\uFF0C\u5219\u901A\u7528\u65B9\u6CD5\u8FD8\u53EF\u4EE5\u8282\u7701\u5C06\u6765\u7684\u65F6\u95F4\u3002\u4F46\u662F\uFF0C\u5373\u4F7F\u8BE5\u6A21\u5757\u4EC5\u7528\u4E8E\u5176\u539F\u59CB\u7528\u9014\uFF0C\u7531\u4E8E\u5176\u7B80\u5355\u6027\uFF0C\u901A\u7528\u65B9\u6CD5\u4ECD\u7136\u66F4\u597D\u3002</p><h2 id="_6-2-example-storing-text-for-an-editor-\u793A\u4F8B-\u4E3A\u7F16\u8F91\u5668\u5B58\u50A8\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#_6-2-example-storing-text-for-an-editor-\u793A\u4F8B-\u4E3A\u7F16\u8F91\u5668\u5B58\u50A8\u6587\u672C" aria-hidden="true">#</a> 6.2 Example: storing text for an editor \u793A\u4F8B\uFF1A\u4E3A\u7F16\u8F91\u5668\u5B58\u50A8\u6587\u672C</h2><blockquote><p>Let\u2019s consider an example from a software design class in which students were asked to build simple GUI text editors. The editors had to display a file and allow users to point, click, and type to edit the file. The editors had to support multiple simultaneous views of the same file in different windows; they also had to support multi-level undo and redo for modifications to the file.</p></blockquote><p>\u8BA9\u6211\u4EEC\u8003\u8651\u4E00\u4E2A\u8F6F\u4EF6\u8BBE\u8BA1\u8BFE\u7A0B\u7684\u793A\u4F8B\uFF0C\u5176\u4E2D\u8981\u6C42\u5B66\u751F\u6784\u5EFA\u7B80\u5355\u7684 GUI \u6587\u672C\u7F16\u8F91\u5668\u3002\u7F16\u8F91\u5668\u5FC5\u987B\u663E\u793A\u4E00\u4E2A\u6587\u4EF6\uFF0C\u5E76\u5141\u8BB8\u7528\u6237\u6307\u5411\uFF0C\u5355\u51FB\u5E76\u952E\u5165\u4EE5\u7F16\u8F91\u8BE5\u6587\u4EF6\u3002\u7F16\u8F91\u8005\u5FC5\u987B\u5728\u4E0D\u540C\u7684\u7A97\u53E3\u4E2D\u652F\u6301\u540C\u4E00\u6587\u4EF6\u7684\u591A\u4E2A\u540C\u65F6\u89C6\u56FE\u3002\u4ED6\u4EEC\u8FD8\u5FC5\u987B\u652F\u6301\u591A\u7EA7\u64A4\u6D88\u548C\u91CD\u505A\u4EE5\u4FEE\u6539\u6587\u4EF6\u3002</p><blockquote><p>Each of the student projects included a class that managed the underlying text of the file. The text classes typically provided methods for loading a file into memory, reading and modifying the text of the file, and writing the modified text back to a file.</p></blockquote><p>\u6BCF\u4E2A\u5B66\u751F\u9879\u76EE\u90FD\u5305\u62EC\u4E00\u4E2A\u7BA1\u7406\u6587\u4EF6\u7684\u57FA\u7840\u6587\u672C\u7684\u7C7B\u3002\u6587\u672C\u7C7B\u901A\u5E38\u63D0\u4F9B\u4EE5\u4E0B\u65B9\u6CD5\uFF1A\u5C06\u6587\u4EF6\u52A0\u8F7D\u5230\u5185\u5B58\uFF0C\u8BFB\u53D6\u548C\u4FEE\u6539\u6587\u4EF6\u7684\u6587\u672C\u4EE5\u53CA\u5C06\u4FEE\u6539\u540E\u7684\u6587\u672C\u5199\u56DE\u5230\u6587\u4EF6\u3002</p><blockquote><p>Many of the student teams implemented special-purpose APIs for the text class. They knew that the class was going to be used in an interactive editor, so they thought about the features that the editor had to provide and tailored the API of the text class to those specific features. For example, if a user of the editor typed the backspace key, the editor deleted the character immediately to the left of the cursor; if the user typed the delete key, the editor deleted the character immediately to the right of the cursor. Knowing this, some of the teams created one method in the text class to support each of these specific features:</p></blockquote><p>\u8BB8\u591A\u5B66\u751F\u56E2\u961F\u4E3A\u6587\u672C\u8BFE\u5B9E\u73B0\u4E86\u4E13\u7528\u7684 API\u3002\u4ED6\u4EEC\u77E5\u9053\u8BE5\u7C7B\u5C06\u5728\u4EA4\u4E92\u5F0F\u7F16\u8F91\u5668\u4E2D\u4F7F\u7528\uFF0C\u56E0\u6B64\u4ED6\u4EEC\u8003\u8651\u4E86\u7F16\u8F91\u5668\u5FC5\u987B\u63D0\u4F9B\u7684\u529F\u80FD\uFF0C\u5E76\u9488\u5BF9\u8FD9\u4E9B\u7279\u5B9A\u529F\u80FD\u5B9A\u5236\u4E86\u6587\u672C\u7C7B\u7684 API\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u7F16\u8F91\u8005\u7684\u7528\u6237\u952E\u5165\u4E86\u9000\u683C\u952E\uFF0C\u5219\u7F16\u8F91\u8005\u4F1A\u7ACB\u5373\u5220\u9664\u5149\u6807\u5DE6\u4FA7\u7684\u5B57\u7B26\uFF1B\u5982\u679C\u7528\u6237\u952E\u5165\u5220\u9664\u952E\uFF0C\u5219\u7F16\u8F91\u5668\u7ACB\u5373\u5220\u9664\u5149\u6807\u53F3\u4FA7\u7684\u5B57\u7B26\u3002\u77E5\u9053\u8FD9\u4E00\u70B9\u540E\uFF0C\u4E00\u4E9B\u56E2\u961F\u5728\u6587\u672C\u7C7B\u4E2D\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B9\u6CD5\u6765\u652F\u6301\u4EE5\u4E0B\u6BCF\u4E2A\u7279\u5B9A\u529F\u80FD\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">backspace</span><span class="token punctuation">(</span><span class="token class-name">Cursor</span> cursor<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Cursor</span> cursor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>Each of these methods takes the cursor position as its argument; a special type Cursor represents this position. The editor also had to support a selection that could be copied or deleted. The students handled this by defining a Selection class and passing an object of this class to the text class during deletions:</p></blockquote><p>\u8FD9\u4E9B\u65B9\u6CD5\u4E2D\u7684\u6BCF\u4E00\u4E2A\u90FD\u4EE5\u5149\u6807\u4F4D\u7F6E\u4F5C\u4E3A\u53C2\u6570\u3002\u7279\u6B8A\u7C7B\u578B\u7684\u5149\u6807\u8868\u793A\u6B64\u4F4D\u7F6E\u3002\u7F16\u8F91\u5668\u8FD8\u5FC5\u987B\u652F\u6301\u53EF\u4EE5\u590D\u5236\u6216\u5220\u9664\u7684\u9009\u62E9\u3002\u5B66\u751F\u901A\u8FC7\u5B9A\u4E49\u9009\u62E9\u7C7B\u5E76\u5728\u5220\u9664\u8FC7\u7A0B\u4E2D\u5C06\u8BE5\u7C7B\u7684\u5BF9\u8C61\u4F20\u9012\u7ED9\u6587\u672C\u7C7B\u6765\u89E3\u51B3\u6B64\u95EE\u9898\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">deleteSelection</span><span class="token punctuation">(</span><span class="token class-name">Selection</span> selection<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>The students probably thought that it would be easier to implement the user interface if the methods of the text class corresponded to the features visible to users. In reality, however, this specialization provided little benefit for the user interface code, and it created a high cognitive load for developers working on either the user interface or the text class. The text class ended up with a large number of shallow methods, each of which was only suitable for one user interface operation. Many of the methods, such as delete, were only invoked in a single place. As a result, a developer working on the user interface had to learn about a large number of methods for the text class.</p></blockquote><p>\u5B66\u751F\u4EEC\u53EF\u80FD\u8BA4\u4E3A\uFF0C\u5982\u679C\u6587\u672C\u7C7B\u7684\u65B9\u6CD5\u4E0E\u7528\u6237\u53EF\u89C1\u7684\u529F\u80FD\u76F8\u5BF9\u5E94\uFF0C\u5219\u5C06\u66F4\u6613\u4E8E\u5B9E\u73B0\u7528\u6237\u754C\u9762\u3002\u4F46\u662F\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u8FD9\u79CD\u4E13\u4E1A\u5316\u5BF9\u7528\u6237\u754C\u9762\u4EE3\u7801\u51E0\u4E4E\u6CA1\u6709\u597D\u5904\uFF0C\u5E76\u4E14\u4E3A\u4F7F\u7528\u7528\u6237\u754C\u9762\u6216\u6587\u672C\u7C7B\u7684\u5F00\u53D1\u4EBA\u5458\u5E26\u6765\u4E86\u5F88\u9AD8\u7684\u8BA4\u77E5\u8D1F\u62C5\u3002\u6587\u672C\u7C7B\u4EE5\u5927\u91CF\u6D45\u5C42\u65B9\u6CD5\u7ED3\u675F\uFF0C\u6BCF\u79CD\u6D45\u5C42\u65B9\u6CD5\u4EC5\u9002\u7528\u4E8E\u4E00\u4E2A\u7528\u6237\u754C\u9762\u64CD\u4F5C\u3002\u8BB8\u591A\u65B9\u6CD5\uFF08\u4F8B\u5982 delete\uFF09\u4EC5\u5728\u5355\u4E2A\u4F4D\u7F6E\u8C03\u7528\u3002\u7ED3\u679C\uFF0C\u5728\u7528\u6237\u754C\u9762\u4E0A\u5DE5\u4F5C\u7684\u5F00\u53D1\u4EBA\u5458\u5FC5\u987B\u5B66\u4E60\u5927\u91CF\u6709\u5173\u6587\u672C\u7C7B\u7684\u65B9\u6CD5\u3002</p><blockquote><p>This approach created information leakage between the user interface and the text class. Abstractions related to the user interface, such as the selection or the backspace key, were reflected in the text class; this increased the cognitive load for developers working on the text class. Each new user interface operation required a new method to be defined in the text class, so a developer working on the user interface was likely to end up working on the text class as well. One of the goals in class design is to allow each class to be developed independently, but the specialized approach tied the user interface and text classes together.</p></blockquote><p>\u8FD9\u79CD\u65B9\u6CD5\u5728\u7528\u6237\u754C\u9762\u548C\u6587\u672C\u7C7B\u4E4B\u95F4\u9020\u6210\u4E86\u4FE1\u606F\u6CC4\u6F0F\u3002\u4E0E\u7528\u6237\u754C\u9762\u6709\u5173\u7684\u62BD\u8C61\uFF08\u4F8B\u5982\u9009\u62E9\u6216\u9000\u683C\u952E\uFF09\u53CD\u6620\u5728\u6587\u672C\u7C7B\u4E2D\uFF1B\u8FD9\u589E\u52A0\u4E86\u4ECE\u4E8B\u6587\u672C\u8BFE\u7684\u5F00\u53D1\u4EBA\u5458\u7684\u8BA4\u77E5\u8D1F\u62C5\u3002\u6BCF\u4E2A\u65B0\u7684\u7528\u6237\u754C\u9762\u64CD\u4F5C\u90FD\u9700\u8981\u5728\u6587\u672C\u7C7B\u4E2D\u5B9A\u4E49\u4E00\u4E2A\u65B0\u65B9\u6CD5\uFF0C\u56E0\u6B64\u4F7F\u7528\u8BE5\u7528\u6237\u754C\u9762\u7684\u5F00\u53D1\u4EBA\u5458\u4E5F\u53EF\u80FD\u6700\u7EC8\u4E5F\u8981\u4F7F\u7528\u8BE5\u6587\u672C\u7C7B\u3002\u7C7B\u8BBE\u8BA1\u7684\u76EE\u6807\u4E4B\u4E00\u662F\u5141\u8BB8\u6BCF\u4E2A\u7C7B\u72EC\u7ACB\u5F00\u53D1\uFF0C\u4F46\u662F\u4E13\u7528\u65B9\u6CD5\u5C06\u7528\u6237\u754C\u9762\u548C\u6587\u672C\u7C7B\u8054\u7CFB\u5728\u4E00\u8D77\u3002</p><h2 id="_6-3-a-more-general-purpose-api-\u66F4\u901A\u7528\u7684-api" tabindex="-1"><a class="header-anchor" href="#_6-3-a-more-general-purpose-api-\u66F4\u901A\u7528\u7684-api" aria-hidden="true">#</a> 6.3 A more general-purpose API \u66F4\u901A\u7528\u7684 API</h2><blockquote><p>A better approach is to make the text class more generic. Its API should be defined only in terms of basic text features, without reflecting the higher-level operations that will be implemented with it. For example, only two methods are needed for modifying text:</p></blockquote><p>\u66F4\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u6587\u672C\u7C7B\u66F4\u901A\u7528\u3002\u4EC5\u5E94\u6839\u636E\u57FA\u672C\u6587\u672C\u529F\u80FD\u5B9A\u4E49\u5176 API\uFF0C\u800C\u4E0D\u5E94\u53CD\u6620\u5C06\u7528\u5176\u5B9E\u73B0\u7684\u66F4\u9AD8\u7EA7\u522B\u7684\u64CD\u4F5C\u3002\u4F8B\u5982\uFF0C\u53EA\u9700\u4E24\u79CD\u65B9\u6CD5\u5373\u53EF\u4FEE\u6539\u6587\u672C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token class-name">Position</span> position<span class="token punctuation">,</span> <span class="token class-name">String</span> newText<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Position</span> start<span class="token punctuation">,</span> <span class="token class-name">Position</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>The first method inserts an arbitrary string at an arbitrary position within the text, and the second method deletes all of the characters at positions greater than or equal to start but less than end. This API also uses a more generic type Position instead of Cursor, which reflects a specific user interface. The text class should also provide general-purpose facilities for manipulating positions within the text, such as the following:</p></blockquote><p>\u7B2C\u4E00\u79CD\u65B9\u6CD5\u5728\u6587\u672C\u5185\u7684\u4EFB\u610F\u4F4D\u7F6E\u63D2\u5165\u4EFB\u610F\u5B57\u7B26\u4E32\uFF0C\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u5220\u9664\u5927\u4E8E\u6216\u7B49\u4E8E\u5F00\u59CB\u4F46\u5C0F\u4E8E\u7ED3\u675F\u7684\u4F4D\u7F6E\u5904\u7684\u6240\u6709\u5B57\u7B26\u3002\u6B64 API \u8FD8\u4F7F\u7528\u4E86\u66F4\u901A\u7528\u7684 Position \u7C7B\u578B\u6765\u4EE3\u66FF Cursor\uFF0C\u5B83\u53CD\u6620\u4E86\u7279\u5B9A\u7684\u7528\u6237\u754C\u9762\u3002\u6587\u672C\u7C7B\u8FD8\u5E94\u8BE5\u63D0\u4F9B\u7528\u4E8E\u64CD\u7EB5\u6587\u672C\u4E2D\u4F4D\u7F6E\u7684\u901A\u7528\u5DE5\u5177\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Position</span> <span class="token function">changePosition</span><span class="token punctuation">(</span><span class="token class-name">Position</span> position<span class="token punctuation">,</span> <span class="token keyword">int</span> numChars<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>This method returns a new position that is a given number of characters away from a given position. If the numChars argument is positive, the new position is later in the file than position; if numChars is negative, the new position is before position. The method automatically skips to the next or previous line when necessary. With these methods, the delete key can be implemented with the following code (assuming the cursor variable holds the current cursor position):</p></blockquote><p>\u6B64\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u4F4D\u7F6E\uFF0C\u8BE5\u4F4D\u7F6E\u4E0E\u7ED9\u5B9A\u4F4D\u7F6E\u76F8\u8DDD\u7ED9\u5B9A\u5B57\u7B26\u6570\u3002\u5982\u679C numChars \u53C2\u6570\u4E3A\u6B63\uFF0C\u5219\u65B0\u4F4D\u7F6E\u5728\u6587\u4EF6\u4E2D\u6BD4\u4F4D\u7F6E\u665A\uFF1B\u5982\u679C numChars \u4E3A\u8D1F\uFF0C\u5219\u65B0\u4F4D\u7F6E\u5728\u4F4D\u7F6E\u4E4B\u524D\u3002\u5FC5\u8981\u65F6\uFF0C\u8BE5\u65B9\u6CD5\u4F1A\u81EA\u52A8\u8DF3\u5230\u4E0B\u4E00\u884C\u6216\u4E0A\u4E00\u884C\u3002\u4F7F\u7528\u8FD9\u4E9B\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4EE3\u7801\u6765\u5B9E\u73B0\u5220\u9664\u952E\uFF08\u5047\u5B9A cursor \u53D8\u91CF\u4FDD\u7559\u5F53\u524D\u5149\u6807\u7684\u4F4D\u7F6E\uFF09\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>text<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> text<span class="token punctuation">.</span><span class="token function">changePosition</span><span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>Similarly, the backspace key can be implemented as follows:</p></blockquote><p>\u540C\u6837\uFF0C\u53EF\u4EE5\u6309\u4EE5\u4E0B\u65B9\u5F0F\u5B9E\u73B0\u9000\u683C\u952E\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>text<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>text<span class="token punctuation">.</span><span class="token function">changePosition</span><span class="token punctuation">(</span>cursor<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cursor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>With the general-purpose text API, the code to implement user interface functions such as delete and backspace is a bit longer than with the original approach using a specialized text API. However, the new code is more obvious than the old code. A developer working in the user interface module probably cares about which characters are deleted by the backspace key. With the new code, this is obvious. With the old code, the developer had to go to the text class and read the documentation and/or code of the backspace method to verify the behavior. Furthermore, the general-purpose approach has less code overall than the specialized approach, since it replaces a large number of special-purpose methods in the text class with a smaller number of general-purpose ones.</p></blockquote><p>\u4F7F\u7528\u901A\u7528\u6587\u672C API\uFF0C\u5B9E\u73B0\u7528\u6237\u754C\u9762\u529F\u80FD\uFF08\u5982\u5220\u9664\u548C\u9000\u683C\uFF09\u7684\u4EE3\u7801\u6BD4\u4F7F\u7528\u4E13\u7528\u6587\u672C API \u7684\u539F\u59CB\u65B9\u6CD5\u8981\u957F\u4E00\u4E9B\u3002\u4F46\u662F\uFF0C\u65B0\u4EE3\u7801\u6BD4\u65E7\u4EE3\u7801\u66F4\u660E\u663E\u3002\u5728\u7528\u6237\u754C\u9762\u6A21\u5757\u4E2D\u5DE5\u4F5C\u7684\u5F00\u53D1\u4EBA\u5458\u53EF\u80FD\u4F1A\u5173\u5FC3\u7531 Backspace \u952E\u5220\u9664\u54EA\u4E9B\u5B57\u7B26\u3002\u4F7F\u7528\u65B0\u4EE3\u7801\uFF0C\u8FD9\u662F\u663E\u800C\u6613\u89C1\u7684\u3002\u4F7F\u7528\u65E7\u4EE3\u7801\uFF0C\u5F00\u53D1\u4EBA\u5458\u5FC5\u987B\u8F6C\u5230\u6587\u672C\u7C7B\u5E76\u9605\u8BFB\u9000\u683C\u65B9\u6CD5\u7684\u6587\u6863\u548C/\u6216\u4EE3\u7801\u4EE5\u9A8C\u8BC1\u884C\u4E3A\u3002\u6B64\u5916\uFF0C\u901A\u7528\u65B9\u6CD5\u603B\u4F53\u4E0A\u6BD4\u4E13\u7528\u65B9\u6CD5\u5177\u6709\u66F4\u5C11\u7684\u4EE3\u7801\uFF0C\u56E0\u4E3A\u5B83\u7528\u8F83\u5C11\u6570\u91CF\u7684\u901A\u7528\u65B9\u6CD5\u4EE3\u66FF\u4E86\u6587\u672C\u7C7B\u4E2D\u7684\u5927\u91CF\u4E13\u7528\u65B9\u6CD5\u3002</p><blockquote><p>A text class implemented with the general-purpose interface could potentially be used for other purposes besides an interactive editor. As one example, suppose you were building an application that modified a specified file by replacing all occurrences of a particular string with another string. Methods from the specialized text class, such as backspace and delete, would have little value for this application. However, the general-purpose text class would already have most of the functionality needed for the new application. All that is missing is a method to search for the next occurrence of a given string, such as this:</p></blockquote><p>\u4F7F\u7528\u901A\u7528\u63A5\u53E3\u5B9E\u73B0\u7684\u6587\u672C\u7C7B\u9664\u4EA4\u4E92\u5F0F\u7F16\u8F91\u5668\u5916\uFF0C\u8FD8\u53EF\u4EE5\u7528\u4E8E\u5176\u4ED6\u76EE\u7684\u3002\u4F5C\u4E3A\u4E00\u4E2A\u793A\u4F8B\uFF0C\u5047\u8BBE\u60A8\u6B63\u5728\u6784\u5EFA\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\uFF0C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u901A\u8FC7\u5C06\u6240\u6709\u51FA\u73B0\u7684\u7279\u5B9A\u5B57\u7B26\u4E32\u66FF\u6362\u4E3A\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u6765\u4FEE\u6539\u6307\u5B9A\u6587\u4EF6\u3002\u4E13\u7528\u6587\u672C\u7C7B\u4E2D\u7684\u65B9\u6CD5\uFF08\u4F8B\u5982\uFF0C\u9000\u683C\u952E\u548C Delete\uFF09\u5BF9\u4E8E\u6B64\u5E94\u7528\u7A0B\u5E8F\u51E0\u4E4E\u6CA1\u6709\u4EF7\u503C\u3002\u4F46\u662F\uFF0C\u901A\u7528\u6587\u672C\u7C7B\u5DF2\u7ECF\u5177\u6709\u65B0\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u5927\u591A\u6570\u529F\u80FD\u3002\u7F3A\u5C11\u7684\u53EA\u662F\u4E00\u79CD\u641C\u7D22\u7ED9\u5B9A\u5B57\u7B26\u4E32\u7684\u4E0B\u4E00\u4E2A\u5339\u914D\u9879\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Position</span> <span class="token function">findNext</span><span class="token punctuation">(</span><span class="token class-name">Position</span> start<span class="token punctuation">,</span> <span class="token class-name">String</span> string<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>Of course, an interactive text editor is likely to have a mechanism for searching and replacing, in which case the text class would already include this method.</p></blockquote><p>\u5F53\u7136\uFF0C\u4EA4\u4E92\u5F0F\u6587\u672C\u7F16\u8F91\u5668\u53EF\u80FD\u5177\u6709\u641C\u7D22\u548C\u66FF\u6362\u7684\u673A\u5236\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6587\u672C\u7C7B\u5C06\u5DF2\u7ECF\u5305\u542B\u6B64\u65B9\u6CD5\u3002</p><h2 id="_6-4-generality-leads-to-better-information-hiding-\u901A\u7528\u6027\u53EF\u4EE5\u66F4\u597D\u5730\u9690\u85CF\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_6-4-generality-leads-to-better-information-hiding-\u901A\u7528\u6027\u53EF\u4EE5\u66F4\u597D\u5730\u9690\u85CF\u4FE1\u606F" aria-hidden="true">#</a> 6.4 Generality leads to better information hiding \u901A\u7528\u6027\u53EF\u4EE5\u66F4\u597D\u5730\u9690\u85CF\u4FE1\u606F</h2><blockquote><p>The general-purpose approach provides a cleaner separation between the text and user interface classes, which results in better information hiding. The text class need not be aware of specifics of the user interface, such as how the backspace key is handled; these details are now encapsulated in the user interface class. New user interface features can be added without creating new supporting functions in the text class. The general-purpose interface also reduces cognitive load: a developer working on the user interface only needs to learn a few simple methods, which can be reused for a variety of purposes.</p></blockquote><p>\u901A\u7528\u65B9\u6CD5\u5728\u6587\u672C\u548C\u7528\u6237\u754C\u9762\u7C7B\u4E4B\u95F4\u63D0\u4F9B\u4E86\u66F4\u6E05\u6670\u7684\u5206\u9694\uFF0C\u4ECE\u800C\u53EF\u4EE5\u66F4\u597D\u5730\u9690\u85CF\u4FE1\u606F\u3002\u6587\u672C\u7C7B\u4E0D\u9700\u8981\u77E5\u9053\u7528\u6237\u754C\u9762\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4F8B\u5982\u5982\u4F55\u5904\u7406\u9000\u683C\u952E\u3002\u8FD9\u4E9B\u7EC6\u8282\u73B0\u5728\u5C01\u88C5\u5728\u7528\u6237\u754C\u9762\u7C7B\u4E2D\u3002\u53EF\u4EE5\u6DFB\u52A0\u65B0\u7684\u7528\u6237\u754C\u9762\u529F\u80FD\uFF0C\u800C\u65E0\u9700\u5728\u6587\u672C\u7C7B\u4E2D\u521B\u5EFA\u65B0\u7684\u652F\u6301\u529F\u80FD\u3002\u901A\u7528\u754C\u9762\u8FD8\u51CF\u8F7B\u4E86\u8BA4\u77E5\u8D1F\u62C5\uFF1A\u4F7F\u7528\u7528\u6237\u754C\u9762\u7684\u5F00\u53D1\u4EBA\u5458\u53EA\u9700\u8981\u5B66\u4E60\u4E00\u4E9B\u7B80\u5355\u7684\u65B9\u6CD5\uFF0C\u5C31\u53EF\u4EE5\u5C06\u5176\u91CD\u590D\u7528\u4E8E\u5404\u79CD\u76EE\u7684\u3002</p><blockquote><p>The backspace method in the original version of the text class was a false abstraction. It purported to hide information about which characters are deleted, but the user interface module really needs to know this; user interface developers are likely to read the code of the backspace method in order to confirm its precise behavior. Putting the method in the text class just makes it harder for user interface developers to get the information they need. One of the most important elements of software design is determining who needs to know what, and when. When the details are important, it is better to make them explicit and as obvious as possible, such as the revised implementation of the backspace operation. Hiding this information behind an interface just creates obscurity.</p></blockquote><p>\u6587\u672C\u7C7B\u539F\u59CB\u7248\u672C\u4E2D\u7684 backspace \u65B9\u6CD5\u662F\u9519\u8BEF\u7684\u62BD\u8C61\u3002\u5B83\u65E8\u5728\u9690\u85CF\u6709\u5173\u5220\u9664\u54EA\u4E9B\u5B57\u7B26\u7684\u4FE1\u606F\uFF0C\u4F46\u662F\u7528\u6237\u754C\u9762\u6A21\u5757\u786E\u5B9E\u9700\u8981\u77E5\u9053\u8FD9\u4E00\u70B9\u3002\u7528\u6237\u754C\u9762\u5F00\u53D1\u4EBA\u5458\u53EF\u80FD\u4F1A\u9605\u8BFB\u9000\u683C\u65B9\u6CD5\u7684\u4EE3\u7801\uFF0C\u4EE5\u786E\u8BA4\u5176\u7CBE\u786E\u7684\u884C\u4E3A\u3002\u5C06\u65B9\u6CD5\u653E\u5728\u6587\u672C\u7C7B\u4E2D\u53EA\u4F1A\u4F7F\u7528\u6237\u754C\u9762\u5F00\u53D1\u4EBA\u5458\u66F4\u96BE\u83B7\u5F97\u6240\u9700\u7684\u4FE1\u606F\u3002\u8F6F\u4EF6\u8BBE\u8BA1\u6700\u91CD\u8981\u7684\u5143\u7D20\u4E4B\u4E00\u5C31\u662F\u786E\u5B9A\u8C01\u9700\u8981\u77E5\u9053\u4EC0\u4E48\u4EE5\u53CA\u4F55\u65F6\u77E5\u9053\u3002\u5F53\u7EC6\u8282\u5F88\u91CD\u8981\u65F6\uFF0C\u6700\u597D\u4F7F\u5B83\u4EEC\u660E\u786E\u4E14\u5C3D\u53EF\u80FD\u660E\u663E\uFF0C\u4F8B\u5982\u4FEE\u8BA2\u7684 Backspace \u64CD\u4F5C\u5B9E\u73B0\u3002\u5C06\u8FD9\u4E9B\u4FE1\u606F\u9690\u85CF\u5728\u754C\u9762\u540E\u9762\u53EA\u4F1A\u4EA7\u751F\u6666\u6DA9\u611F\u3002</p><h2 id="_6-5-questions-to-ask-yourself-\u95EE\u81EA\u5DF1\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_6-5-questions-to-ask-yourself-\u95EE\u81EA\u5DF1\u7684\u95EE\u9898" aria-hidden="true">#</a> 6.5 Questions to ask yourself \u95EE\u81EA\u5DF1\u7684\u95EE\u9898</h2><blockquote><p>It is easier to recognize a clean general-purpose class design than it is to create one. Here are some questions you can ask yourself, which will help you to find the right balance between general-purpose and special-purpose for an interface.</p></blockquote><p>\u8BC6\u522B\u5E72\u51C0\u7684\u901A\u7528\u7C7B\u8BBE\u8BA1\u8981\u6BD4\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u3002\u60A8\u53EF\u4EE5\u95EE\u81EA\u5DF1\u4E00\u4E9B\u95EE\u9898\uFF0C\u8FD9\u5C06\u5E2E\u52A9\u60A8\u5728\u63A5\u53E3\u7684\u901A\u7528\u548C\u4E13\u7528\u4E4B\u95F4\u627E\u5230\u9002\u5F53\u7684\u5E73\u8861\u3002</p><blockquote><p>What is the simplest interface that will cover all my current needs? If you reduce the number of methods in an API without reducing its overall capabilities, then you are probably creating more general-purpose methods. The special-purpose text API had at least three methods for deleting text: backspace, delete, and deleteSelection. The more general-purpose API had only one method for deleting text, which served all three purposes. Reducing the number of methods makes sense only as long as the API for each individual method stays simple; if you have to introduce lots of additional arguments in order to reduce the number of methods, then you may not really be simplifying things.</p></blockquote><p>\u6EE1\u8DB3\u6211\u5F53\u524D\u6240\u6709\u9700\u6C42\u7684\u6700\u7B80\u5355\u7684\u754C\u9762\u662F\u4EC0\u4E48\uFF1F\u5982\u679C\u51CF\u5C11 API \u4E2D\u7684\u65B9\u6CD5\u6570\u91CF\u800C\u4E0D\u964D\u4F4E\u5176\u6574\u4F53\u529F\u80FD\uFF0C\u5219\u53EF\u80FD\u6B63\u5728\u521B\u5EFA\u66F4\u591A\u901A\u7528\u7684\u65B9\u6CD5\u3002\u4E13\u7528\u6587\u672C API \u81F3\u5C11\u5177\u6709\u4E09\u79CD\u5220\u9664\u6587\u672C\u7684\u65B9\u6CD5\uFF1A\u9000\u683C\uFF0C\u5220\u9664\u548C deleteSelection\u3002\u901A\u7528\u6027\u66F4\u5F3A\u7684 API \u53EA\u6709\u4E00\u79CD\u5220\u9664\u6587\u672C\u7684\u65B9\u6CD5\uFF0C\u53EF\u540C\u65F6\u6EE1\u8DB3\u6240\u6709\u4E09\u4E2A\u76EE\u7684\u3002\u4EC5\u5728\u6BCF\u79CD\u65B9\u6CD5\u7684 API \u4FDD\u6301\u7B80\u5355\u7684\u524D\u63D0\u4E0B\uFF0C\u51CF\u5C11\u65B9\u6CD5\u7684\u6570\u91CF\u624D\u6709\u610F\u4E49\u3002\u5982\u679C\u60A8\u5FC5\u987B\u5F15\u5165\u8BB8\u591A\u5176\u4ED6\u53C2\u6570\u4EE5\u51CF\u5C11\u65B9\u6CD5\u6570\u91CF\uFF0C\u90A3\u4E48\u60A8\u53EF\u80FD\u5E76\u6CA1\u6709\u771F\u6B63\u7B80\u5316\u4E8B\u60C5\u3002</p><blockquote><p>In how many situations will this method be used? If a method is designed for one particular use, such as the backspace method, that is a red flag that it may be too special-purpose. See if you can replace several special-purpose methods with a single general-purpose method.</p></blockquote><p>\u5728\u591A\u5C11\u60C5\u51B5\u4E0B\u4F1A\u4F7F\u7528\u6B64\u65B9\u6CD5\uFF1F\u5982\u679C\u4E00\u79CD\u65B9\u6CD5\u662F\u4E3A\u7279\u5B9A\u7528\u9014\u800C\u8BBE\u8BA1\u7684\uFF0C\u4F8B\u5982\u9000\u683C\u65B9\u6CD5\uFF0C\u90A3\u662F\u4E00\u4E2A\u5371\u9669\u4FE1\u53F7\uFF0C\u5B83\u53EF\u80FD\u592A\u7279\u6B8A\u4E86\u3002\u770B\u770B\u662F\u5426\u53EF\u4EE5\u7528\u4E00\u4E2A\u901A\u7528\u65B9\u6CD5\u66FF\u6362\u51E0\u79CD\u4E13\u7528\u65B9\u6CD5\u3002</p><blockquote><p>Is this API easy to use for my current needs? This question can help you to determine when you have gone too far in making an API simple and general-purpose. If you have to write a lot of additional code to use a class for your current purpose, that\u2019s a red flag that the interface doesn\u2019t provide the right functionality. For example, one approach for the text class would be to design it around single-character operations: insert inserts a single character and delete deletes a single character. This API is both simple and general-purpose. However, it would not be particularly easy to use for a text editor: higher-level code would contain lots of loops to insert or delete ranges of characters. The single-character approach would also be inefficient for large operations. Thus it\u2019s better for the text class to have built-in support for operations on ranges of characters.</p></blockquote><p>\u8FD9\u4E2A API \u662F\u5426\u6613\u4E8E\u4F7F\u7528\u4EE5\u6EE1\u8DB3\u6211\u5F53\u524D\u7684\u9700\u6C42\uFF1F\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u5E2E\u52A9\u60A8\u786E\u5B9A\u4F55\u65F6\u4F7F API \u53D8\u5F97\u7B80\u5355\u800C\u901A\u7528\u3002\u5982\u679C\u60A8\u5FC5\u987B\u7F16\u5199\u8BB8\u591A\u5176\u4ED6\u4EE3\u7801\u624D\u80FD\u5C06\u7C7B\u7528\u4E8E\u5F53\u524D\u7528\u9014\uFF0C\u90A3\u4E48\u8FD9\u662F\u4E00\u4E2A\u5371\u9669\u4FE1\u53F7\uFF0C\u5373\u8BE5\u63A5\u53E3\u672A\u63D0\u4F9B\u6B63\u786E\u7684\u529F\u80FD\u3002\u4F8B\u5982\uFF0C\u9488\u5BF9\u6587\u672C\u7C7B\u7684\u4E00\u79CD\u65B9\u6CD5\u662F\u56F4\u7ED5\u5355\u5B57\u7B26\u64CD\u4F5C\u8FDB\u884C\u8BBE\u8BA1\uFF1Ainsert \u63D2\u5165\u5355\u4E2A\u5B57\u7B26\uFF0C\u800C delete \u5220\u9664\u5355\u4E2A\u5B57\u7B26\u3002\u8BE5 API \u65E2\u7B80\u5355\u53C8\u901A\u7528\u3002\u4F46\u662F\uFF0C\u5BF9\u4E8E\u6587\u672C\u7F16\u8F91\u5668\u6765\u8BF4\u5E76\u4E0D\u662F\u7279\u522B\u5BB9\u6613\u4F7F\u7528\uFF1A\u66F4\u9AD8\u7EA7\u522B\u7684\u4EE3\u7801\u5C06\u5305\u542B\u8BB8\u591A\u5FAA\u73AF\uFF0C\u7528\u4E8E\u63D2\u5165\u6216\u5220\u9664\u5B57\u7B26\u8303\u56F4\u3002\u5355\u5B57\u7B26\u65B9\u6CD5\u5BF9\u4E8E\u5927\u578B\u64CD\u4F5C\u4E5F\u5C06\u662F\u4F4E\u6548\u7684\u3002</p><h2 id="_6-6-conclusion-\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#_6-6-conclusion-\u7ED3\u8BBA" aria-hidden="true">#</a> 6.6 Conclusion \u7ED3\u8BBA</h2><blockquote><p>General-purpose interfaces have many advantages over special-purpose ones. They tend to be simpler, with fewer methods that are deeper. They also provide a cleaner separation between classes, whereas special-purpose interfaces tend to leak information between classes. Making your modules somewhat general-purpose is one of the best ways to reduce overall system complexity.</p></blockquote><p>\u901A\u7528\u63A5\u53E3\u6BD4\u4E13\u7528\u63A5\u53E3\u5177\u6709\u8BB8\u591A\u4F18\u70B9\u3002\u5B83\u4EEC\u5F80\u5F80\u66F4\u7B80\u5355\uFF0C\u4F7F\u7528\u7684\u65B9\u6CD5\u66F4\u5C11\u3002\u5B83\u4EEC\u8FD8\u63D0\u4F9B\u4E86\u7C7B\u4E4B\u95F4\u7684\u66F4\u6E05\u6670\u7684\u5206\u9694\uFF0C\u800C\u4E13\u7528\u63A5\u53E3\u5219\u503E\u5411\u4E8E\u5728\u7C7B\u4E4B\u95F4\u6CC4\u6F0F\u4FE1\u606F\u3002\u4F7F\u6A21\u5757\u5177\u6709\u67D0\u79CD\u901A\u7528\u6027\u662F\u964D\u4F4E\u6574\u4F53\u7CFB\u7EDF\u590D\u6742\u6027\u7684\u6700\u4F73\u65B9\u6CD5\u4E4B\u4E00\u3002</p>`,63);function n(o,i){return s}var p=e(a,[["render",n],["__file","ch06.html.vue"]]);export{p as default};
