// // Event listeners and buttons
// no listeners until DOM loaded
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }

    // need devour buttons
    const devourBtns = document.querySelectorAll('.devourBtn');
    // need buttons w/ class devourBtn to populate with burgers devoured=false in handlebars file

    // set up listeners for buttons created in handlebars by #each
    if (devourBtns) {
        devourBtns.forEach((button) => {
            button.addEventListener('click', (e) => {
                // need id (primary key) from table?
                const id = e.target.getAttribute('data-id');
                // do I need a variable to target the devoured state?

                const devourIt = {
                    devoured: true,
                }

                fetch(`/api/cats/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(devourIt),
                }) .then((response) => {
                    // if response is ok, reload page with burger switched to devoured side
                    if (response.ok) {
                        console.log(`Burger ${id} has been devoured.`);
                        location.reload('/');
                    } else {
                        alert('Something went wrong!')
                    }
                });
            });
        });
    };

    // button to add burger to list
    const makeBurgerBtn = document.getElementById('makeBurger');

    if(makeBurgerBtn) {
        makeBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();

            const newBurger = {
                burger_name: document.getElementById('bg').value.trim(),
                // don't need devoured because default = false
            };
        
        // need POST request to create new burger
            fetch('api/burgers', {
                method: 'POST',
                header: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                // empty form
                document.getElementById('bg').value = '';
                console.log('Order up!');
                location.reload();
            });
        });
    }

});


