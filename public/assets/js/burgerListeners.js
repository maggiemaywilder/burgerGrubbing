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

                fetch(`/api/burger/${id}`, {
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
                        console.log(`Burger ${id} could not be devoured.`);
                    }
                });
            });
        });
    };

    // button to add burger to list
    const makeBurgerBtn = document.getElementById('newBurger');

    if(makeBurgerBtn) {
        makeBurgerBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('submit button got clicked');

            const newBurger = {
                burgerName: document.getElementById('bg').value.trim(),
            };
            console.log(newBurger, 'listeners line55');
        // need POST request to create new burger
            fetch('/api/burger', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBurger),
            }).then(() => {
                document.getElementById('bg').value = '';
                console.log('Order up!');
                // location.reload();
            });
        });
    }

    const deleteBurgerBtns = document.querySelectorAll('.deleteBtn');

    if (deleteBtns) {
        deleteBurgerBtns.addEventListener('click', (e) => {
            const id = e.target.getAttribute('data-id');
            fetch(`/api/burger/${id}`, {
                method: 'DELETE',
            }).then((response) => {
                if (response.ok) {
                    console.log(`Burger ${id} has been deleted.`)
                    location.reload('/');
                } else {
                    console.log(`Burger ${id} could not be deleted.`)
                }
            })
        })
    };
    
});


