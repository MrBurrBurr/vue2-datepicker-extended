import DatePicker from 'vue2-datepicker-extended';
import de from 'date-format-parse/lib/locale/de';

const lang = {
  formatLocale: de,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('de', lang);

export default lang;
