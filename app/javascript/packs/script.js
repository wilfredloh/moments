console.log("Loading script");

window.onload = () => {

    $(function () {
        $('[data-toggle="popover"]').popover()
      })
    $('.popover-dismiss').popover({
        trigger: 'focus'
    })

    

  
};