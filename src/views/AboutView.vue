<script setup lang="ts">
	import { useMainStore } from "../stores/main";
	import { storeToRefs } from "pinia";
	import { useI18n } from "vue-i18n";

	const { t } = useI18n();

	const main = useMainStore();
	const { counter, doubleCount } = storeToRefs(main);
	const { addOne, reset } = main;
</script>

<template>
	<div class="about">
		<h1>{{ t("about.title") }}</h1>
		<p>{{ t("about.counter") }}: {{ counter }}</p>
		<p>{{ t("about.double") }}: {{ doubleCount }}</p>
		<div>
			<button class="counter" type="button" @click="addOne">
				{{ t("about.btn.add") }}
			</button>
			<button class="counter" type="button" @click="reset">
				{{ t("about.btn.reset") }}
			</button>
		</div>
	</div>
</template>
