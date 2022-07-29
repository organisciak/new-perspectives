<script context="module">
	import { browser, dev } from '$app/env';
import Header from '$lib/header/Header.svelte';
import { listen, not_equal } from 'svelte/internal';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About New Perspectives" />
</svelte:head>

<div class="content">
	<h1>New Perspectives</h1>

	<p>New Perspectives is a Deck of Strategies for Exploring the World Around You.</p>
	<p>
		It was written in collaboration with GPT-3, a large language model.
	<a href="https://arxiv.org/abs/2005.14165">Language models are few-shot learners</a>, which
	refers to their ability to pick up a task with a few examples. While 'task' often refers a 
	common natural language processing challenge, it also means that it can continue <em>anything</em>
	that you've started. Here, I gave it a personal list of strategies to break out of routine,
	and it suggested more tips in line with mine - some of which were adopted, adapted, and used for more
	suggestions.</p>

	<p>The favicon is a lightly-edited generation from <a href="https://openai.com/dall-e-2/">DALL-E 2</a>,
		because why not?</p>

	<p><img src="logo.png" style="width:100%" alt="A round logo of a rainbow in front of a sun." /></p>

</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
