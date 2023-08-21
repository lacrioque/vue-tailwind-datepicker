const fs = require('fs-extra');
const dayjsLocale = './node_modules/dayjs/esm/locale';
const dayjsLocaleList = require('./node_modules/dayjs/locale.json');
const useLocalesList = require('./localesList.json');
const localeSrc = './src/locale';

async function main() {
  await fs.remove(localeSrc);
  await fs.mkdirp(localeSrc);
  const allLocales = dayjsLocaleList.map(({key}) => key);
  const useLocales = useLocalesList.filter((key) => allLocales.includes(key));
  const locales = useLocales.length > 0 ? useLocales : allLocales;
  for (const locale of locales) {
    // await fs.copySync(
    //   `${dayjsLocale}/${locale}.js`,
    //   path.join(__dirname, `./src/locale/${locale}.js`)
    // );
    await fs.readFile(
      `${dayjsLocale}/${locale}.js`, 'utf8', function(err, data) {
      if (err){ console.log(err); throw err;}
      const result = data.replace(/..\/index/g, 'dayjs');

      fs.writeFile(`${localeSrc}/${locale}.js`, result, 'utf8', function(err) {
        if (err) return console.log(err);
      });
    });
  }
}

main().then().catch(err => {
  console.error(err);
});