document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const basicPrice = document.getElementById('basicPrice');
    const proPrice = document.getElementById('proPrice');
    const premiumPrice = document.getElementById('premiumPrice');
  
    toggleSwitch.addEventListener('change', function () {
      if (toggleSwitch.checked) {
        basicPrice.innerText = '$90.00';
        proPrice.innerText = '$180.00';
        premiumPrice.innerText = '$270.00';
      } else {
        basicPrice.innerText = '$10.00';
        proPrice.innerText = '$20.00';
        premiumPrice.innerText = '$30.00';
      }
    });
  });
  