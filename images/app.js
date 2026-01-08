document.addEventListener('DOMContentLoaded', () => {
  const rack = document.getElementById('rack');
  const devices = document.querySelectorAll('.device');
  
  devices.forEach(device => {
    device.addEventListener('dragstart', (e) => {
      // Store device ID for later use in drop event
      e.dataTransfer.setData('deviceId', e.target.id);
    });
  });
  
  rack.addEventListener('dragover', (e) => {
    e.preventDefault();
  });
  
  rack.addEventListener('drop', (e) => {
    e.preventDefault();
    
    const deviceId = e.dataTransfer.getData('deviceId');
    const deviceElement = document.getElementById(deviceId);
    
    // Create a placeholder element in the rack to visually represent the device
    const devicePlaceholder = document.createElement('div');
    devicePlaceholder.classList.add('device-placeholder');
    devicePlaceholder.innerHTML = deviceElement.innerHTML;  // Copy device name
    
    // Add the device placeholder to the rack
    rack.appendChild(devicePlaceholder);
  });
});
