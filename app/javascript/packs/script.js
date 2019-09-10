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
      
    $('#myInput').on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#createContainerId div").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('#myInput').on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".indexCardWrap").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

    

  
};