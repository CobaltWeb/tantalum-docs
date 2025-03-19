# Translations

This module allows you to manage translations directly inside Directus.

## Adding translations

1. Navigate to **Settings > Data Model > `configuration_translations_translations`**.
2. (Optional) If you wish to add new group (Visual only) create new **Detail Group** field.
3. Create new Input field type String with key being translation key.
:::info
  On the Frontend your keys will be changed to JSON structure. Each `_` will be changed to `.` so that key `errorPageTranslations_404_title` will be accessible via `errorPageTranslations.404.title`.
:::
4. Navigate to **Content > Configuration > Translations**
5. Find your key and add translation. Remember to add it to every language.
6. Clear translations cache using flows on right side.
5. That's it :tada:.

## Editing translations

1. Navigate to **Content > Configuration > Translations**
2. Find key that you would like to edit
3. Edit text
4. Clear translations cache using flows on right side.
5. That's it :tada:.

## Remove translations

1. Navigate to **Settings > Data Model > `configuration_translations_translations`**.
2. Remove key that you no longer need.
3. (Optional) Remove empty **Detail Group**
4. Clear translations cache using flows on right side.
5. That's it :tada:.