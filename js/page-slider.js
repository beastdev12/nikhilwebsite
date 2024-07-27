document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.page-content');
    const home = documment.querySelector('nav-home');
    const about = documment.querySelector('nav-about');
    const contact = documment.querySelector('nav-contact');

    function CheckDeviceWidth() {
        let DeviceWidth = window.innerWidth;
        if (DeviceWidth < 767) {
            return true
        }
        else {
            return false
        }
    }
  });