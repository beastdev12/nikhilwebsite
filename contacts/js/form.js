const form = document.getElementById('dataForm');

        const apiUrl = `https://nikhilweapi.vercel.app`

        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          const formData = new FormData(form);
          const response = await fetch(`${apiUrl}/form`, {
            method: 'POST',
            body: formData,
          });
          if (response.ok) {
            alert('Message submitted successfully');
          } else {
            alert('Error submitting form');
          }
        });
