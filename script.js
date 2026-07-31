
    function switchPage(pageId) {
      document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
      document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));

      const page = document.getElementById(pageId) || document.getElementById('home');
      page.classList.add('active');

      const link = document.getElementById('nav-' + pageId);
      if(link) link.classList.add('active');

      document.getElementById('mobileDrawer').classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleDrawer() {
      document.getElementById('mobileDrawer').classList.toggle('open');
    }

    function toggleFaq(el) {
      el.classList.toggle('active');
    }

    let calcState = { issue: 'drain', prop: 'house', urgency: 'standard' };
    function setCalc(key, val, el) {
      calcState[key] = val;
      el.parentElement.querySelectorAll('.calc-pill').forEach(pill => pill.classList.remove('active'));
      el.classList.add('active');

      let price = 149;
      if(calcState.issue === 'heater') price = 289;
      if(calcState.issue === 'leak') price = 199;
      if(calcState.issue === 'burst') price = 349;

      if(calcState.prop === 'commercial') price *= 1.35;
      if(calcState.urgency === 'sameday') price += 50;
      if(calcState.urgency === 'emergency') price += 99;

      document.getElementById('calcTotal').innerText = Math.round(price);
    }

    function openBookingModal(serviceName = 'Plumbing Service Dispatch') {
      document.getElementById('modalServiceType').value = serviceName;
      document.getElementById('bookingModal').classList.add('active');
    }

    function closeBookingModal() {
      document.getElementById('bookingModal').classList.remove('active');
    }

    function handleModalSubmit(e) {
      e.preventDefault();
      alert('Your emergency dispatch request has been logged! A technician is being assigned right now.');
      closeBookingModal();
    }

    function handleForm(e) {
      e.preventDefault();
      alert('Thank you! Your service request has been received by our service desk.');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    document.querySelectorAll('.reveal').forEach(item => observer.observe(item));