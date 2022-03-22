import { createI18n, LocaleMessages, VueMessageType } from "vue-i18n";

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */

function loadLocaleMessages(): LocaleMessages<VueMessageType> {
  const locales = import.meta.globEager('./locales/*.json');
  
  const messages: LocaleMessages<VueMessageType> = {};
  for (const key in locales) {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      let k = locale as keyof Object;
      messages[k] = locales[key].default;
    }
  }
  return messages;
}

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});