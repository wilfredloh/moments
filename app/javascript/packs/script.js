console.log("script.js ready!");

window.onload = () => {

    $(function () {
    $('[data-toggle="popover"]').popover()
    })
    
    $('.popover-dismiss').popover({
    trigger: 'focus'
    })

    $(function() {
    // Sidebar toggle behavior
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar, #content').toggleClass('active');
        });
    });
      

    

  
};