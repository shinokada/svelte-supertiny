<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3, removeHyphensAndCapitalize } from 'runes-webkit';
  import { Svelte } from '$lib'

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Svelte Supertiny v1: Props</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />


<H2>Size</H2>
<p>To change the size of an icon, use the <code>size</code> prop and specify the desired size. For example:</p>

<CodeWrapper class='flex gap-4'>
  <Svelte size="40" />
  <Svelte size="50" />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/size.md'] as string} />

