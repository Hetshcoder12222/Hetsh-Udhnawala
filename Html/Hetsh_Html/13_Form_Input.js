const age_select = document.getElementById('dropdown_of_age');

for (let i = 1; i <= 1000; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  age_select.appendChild(option);
}
const option = document.createElement('option');
option.value = "1000+";
option.textContent = "1000+";
age_select.appendChild(option);