import DatePicker from 'vue2-datepicker-extended';
import lt from 'date-format-parse/lib/locale/lt';

const lang = {
  formatLocale: lt,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('lt', lang);

export default lang;
