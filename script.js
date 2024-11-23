

  document.querySelector(".menu-toggle").click(function () {
    console.log("clicked")
    $(this).attr("data-open", (_, attr) => (attr == "true" ? "false" : "true"));
  });
  


  document.addEventListener('DOMContentLoaded', () => {
    const togglers = document.querySelectorAll('[data-toggle]');
    
      togglers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
           const selector = e.currentTarget.dataset.toggle
           const block = document.querySelector(`${selector}`);
          if (e.currentTarget.classList.contains('active')) {
            block.style.maxHeight = '';
          } else {
            block.style.maxHeight = block.scrollHeight + 'px';
          }
            
           e.currentTarget.classList.toggle('active')
        })
      })
    })