import DatePicker from 'vue2-datepicker-extended';
import nb from 'date-format-parse/lib/locale/nb';

const lang = {
  formatLocale: nb,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true,
};

DatePicker.locale('nb', lang);

export default lang;
