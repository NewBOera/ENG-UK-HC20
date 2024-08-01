document.addEventListener('DOMContentLoaded', () => {
    const dates = document.getElementById('dates');
    const dateForm = document.getElementById('daterange2');
  
    const flatpickrConfig = {
      mode: "range",
      dateFormat: "Y-m-d",
      minDate: "today",
      onChange: (selectedDates) => {
        if (selectedDates.length === 2) {
          const [startDate, endDate] = selectedDates;
          const formattedRange = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
          dates.innerHTML = formattedRange;
          dateForm.value = formattedRange;
        }
      }
    };
  
    flatpickr("#daterange", flatpickrConfig);
    flatpickr("#daterange2", flatpickrConfig);
});
  