document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');
    const dropdownSection = document.getElementById('dropdown-section');
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
    const guestsLabel = document.getElementById('guestsLabel');
    const guestsForm = document.getElementById('guestsForm');
    const roomsForm = document.getElementById('roomsForm');
    let guests = 0;
    let rooms = 0;
  
    const updateLabel = () => {
      guestsLabel.innerHTML = `${guests} ${guests > 1 ? 'Guests' : 'Guest'} & ${rooms} ${rooms > 1 ? 'Rooms' : 'Room'}`;
      roomsForm.value = rooms;
      guestsForm.value = guests;
    };
  
    toggleButton.addEventListener('click', () => {
      if (dropdownSection.classList.contains('hidden')) {
        dropdownSection.classList.remove('hidden', 'slide-up');
        dropdownSection.classList.add('slide-down');
      } else {
        dropdownSection.classList.remove('slide-down');
        dropdownSection.classList.add('slide-up');
        setTimeout(() => {
          dropdownSection.classList.add('hidden');
        }, 500);
      }
    });
  
    incrementButtons.forEach(button => {
      button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        if (input.id === 'guests') {
          guests = parseInt(input.value) + 1;
        } else {
          rooms = parseInt(input.value) + 1;
        }
        input.value = input.id === 'guests' ? guests : rooms;
        updateLabel();
      });
    });
  
    decrementButtons.forEach(button => {
      button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        if (parseInt(input.value) > 1) {
          input.value = parseInt(input.value) - 1;
          if (input.id === 'guests') {
            guests = parseInt(input.value);
          } else {
            rooms = parseInt(input.value);
          }
          updateLabel();
        }
      });
    });
  });
  