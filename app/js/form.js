let todos = [];
const template = (todo) => `<li>${todo}</li>`;

    function updateList(state){
        // $('.todos').html('');
        todos.forEach(todo => {
            $('.todos').append($(template(todo)));
        });
    }

$(document).ready(function(){
    //Read todos from local storage , if present
    if(!!localStorage.getItem('todos'))
    {
        //Assign saved todos into app state
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    //Update list with app state
    updateList(todos);

    $('#form').on('submit',event => {
        event.preventDefault();
        const input = $('#label').val();
        
        //Add input item to app state
        todos.push(input)
        $('#secret').val(input.toUpperCase());
        $('#label').val('');
        //Update list with new item
        $('.todos').append($(template(input)));

        //Save app state to localstorage
        window.localStorage.setItem('todos',JSON.stringify(todos));
    });
});