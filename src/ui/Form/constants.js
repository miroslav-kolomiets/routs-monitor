const selectOptions = [
  {value: 'Last 30 minutes', label: 'Last 30 minutes'},
  {value: 'Today', label: 'Today'},
  {value: 'Yesterday', label: 'Yesterday'},
  {value: 'Last week', label: 'Last week'},
];

const datepickerSettings = {
  timeInputLabel: 'Time:',
  dateFormat: 'yyyy-MM-dd hh:mm',
  dropdownMode: 'select',
  dateHelp: 'YYYY-MM-DD HH:MM',
  maxDate: new Date (),
};

export {selectOptions, datepickerSettings};
