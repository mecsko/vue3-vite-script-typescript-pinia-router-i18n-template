<script setup lang="ts">
	import { computed } from "vue";
	import { useI18n } from "vue-i18n";

	const { t, locale } = useI18n({ useScope: "global" });

	const changeLocale = () => {
		// console.log(locale.value);

		locale.value = locale.value === "hu" ? "en" : "hu";
	};

	const currentLocale = computed(() => {
		return locale.value === "hu" ? "Magyar" : "English";
	});
</script>

<template>
	<nav>
		<router-link to="/">{{ t("app.home") }}</router-link>
		|
		<router-link to="/about">{{ t("app.about") }}</router-link>
		<a href="#" class="locale" @click.prevent="changeLocale">{{ currentLocale }}</a>
	</nav>
	<router-view />
</template>
