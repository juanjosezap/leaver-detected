<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-gray-900 p-4">
	<a href="/" class="text-white px-4 py-2">Home</a>
	<a href="/docs" class="text-white px-4 py-2">Documentation</a>
</nav>
{@render children()}
