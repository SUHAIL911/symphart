$(document).ready(function(){
    $('.delete-article').on('click', (e)=> {
        if ( e.target.className === 'btn btn-danger delete-article' ){
            if(confirm('Are you sure to delete the selected article ??')) {
                const id = e.target.getAttribute('data-id');
                fetch(`/article/delete/${id}`, {
                    method:"DELETE"
                }).then(res => window.location.reload() )
            }
        }
    });

    $('.edit-article').on('click', (e)=> {
        if ( e.target.className === 'btn btn-info edit-article' ){
            
            const id = e.target.getAttribute('data-id');
            fetch(`/article/edit/${id}`).then(res => window.location.reload() )
            
        }
    })
})