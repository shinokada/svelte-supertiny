<script lang="ts">
  import { HighlightCompo, Code, H1, H2, H3 } from 'runes-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Props - Svelte Supertiny v1</H1>

<H2>Prop</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Size</H2>

<p>
  To change the size of an icon, use the <Code>size</Code> prop and specify the desired size. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size.md'] as string} />

<p>
  If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by
  including the desired classes in the <Code>class</Code> prop. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size-2.md'] as string} />

<H2>CSS framework</H2>

<p>
  You can apply CSS framework color and other attributes directly to the icon component or its
  parent tag using the <Code>class</Code> prop.
</p>

<H3>Tailwind CSS</H3>

<HighlightCompo codeLang="ts" code={modules['./md/tailwind-css.md'] as string} />

<H3>Bootstrap</H3>

<HighlightCompo codeLang="ts" code={modules['./md/bootstrap.md'] as string} />

<H2>aria-label</H2>

<p>
  All icons have aria-label. For example <Code>Svelte</Code> has <Code>aria-label="svelte"</Code>.
  Use <Code>ariaLabel</Code> prop to modify the <Code>aria-label</Code> value.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y.md'] as string} />

<H2>Events</H2>

<p>Use <Code>withEvents</Code> prop to use the following events:</p>

<HighlightCompo codeLang="ts" code={modules['./md/events.md'] as string} />

<HighlightCompo codeLang="ts" code={modules['./md/events-2.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />
