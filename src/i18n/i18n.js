import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {},
  },
  tw: {
    translation: {
      Timer: '計時器',
      History: '歷史紀錄',
      Template: '模板',
      Style: '樣式',
      Name: '名稱',
      Time: '時間',
      Save: '儲存',
      Start: '開始',
      Stop: '暫停',
      Resume: '繼續',
      Reset: '重置',
      Done: '計步',
      Insert: '新增',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'tw',
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
