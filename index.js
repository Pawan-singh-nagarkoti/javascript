const button = document.querySelector('button');
      const container = document.querySelector('.container');

      button.addEventListener('click', () => {
        const div = document.createElement('div');
        div.classList.add('container');
        div.style.display = 'flex';

        // first icon create=edit
        const iFirst = document.createElement('i');
        iFirst.classList.add('fas');
        iFirst.classList.add('fa-edit');

        // second icon create= delete
        const iSecond = document.createElement('i');
        iSecond.classList.add('fas');
        iSecond.classList.add('fa-trash-alt');

        div.appendChild(iFirst);
        div.appendChild(iSecond);

        const container1 = document.querySelector('.container1');
        container1.insertAdjacentElement('beforeend', div);

        // first icon click after that you will writesomething
        let firstTime = false;
        iFirst.addEventListener('click', () => {
          if (!firstTime) {
            const textarea = `<textarea></textarea>`;
            div.insertAdjacentHTML('afterbegin', textarea);
          }
          firstTime = true;
        });
        // second icon click, it will remove
        iSecond.addEventListener('click', () => {
          div.style.display = 'none';
        });
      });