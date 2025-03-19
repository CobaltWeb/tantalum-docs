# Languages

This module allows you to manage multiple languages.

## Adding language

### Define language in Directus

1. Navigate to **Content > Configuration > Languages**.
2. Create new item and fill required fields.
3. Save item.

### Add language in Nuxt

:::info
Without adding support in Nuxt you won't be able to see changes done in Directus
:::

1. Open **nuxt.config.ts**
2. In `i18n.locales` add new entry in array
    ```ts
    {
      code: "[language-code]",
      files: ["[language-code].json", "cmsTranslations.ts"],
      isCatchallLocale: "[language-code]" === process.env.NUXT_DEFAULT_LOCALE_CODE,
      name: "[language-name]",
    }
    ```
3. In `/i18n/locales` add new file `[language-code].json`. This file will be merged with translations from CMS.
4. That's it :tada:.

## Editing language

As you've already saw you cannot edit language as this can cause some unexpected errors. If you've made typo, remove wrong language and create new one.

## Remove language

### Remove language in Directus

1. Navigate to **Content > Configuration > Languages**.
2. Open language you wish to delete.
3. Click trash icon.

:::danger
  This will remove all your content that was setup for this language. This action can't be undone.
:::

### Remove language in Nuxt

1. Open **nuxt.config.ts**.
2. In `i18n.locales` remove entry with language that you would like to remove.
3. In `/i18n/locales` remove file with your language.
4. That's it :tada:.