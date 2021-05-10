$(document).ready(function(){

    const jumbotron = $('#jumbotron');
    const pageHeading = $('#page-heading');
    const contentSection = $('#content');
    const form = $('form');
    const expandContractButton = $('#expand-button');
    const tasksContainer = $('#tasks-container');



    // ----------------------------------------------------------------
    // ANIMATING THE FORM EXPAND AND CONTRACT
    let expanded=true; 

    expandContractButton.on('click',function(){
        if(!expanded){
            //means form is closed and tasksContainer is in bigger view
           
            form.removeClass('contract');
            tasksContainer.removeClass('tasks-container-expand');

            form.addClass('expand');
            tasksContainer.addClass('tasks-container-contract');
            
            setTimeout(function(){
                form.css('height','45%');
                tasksContainer.css('height','42%');
            },580);

            expanded = true;

        }else{
            //this is the deafult view of FORM which is EXPANDED
            form.removeClass('expand');
            tasksContainer.removeClass('tasks-container-contract');

            form.addClass('contract');
            tasksContainer.addClass('tasks-container-expand');
            setTimeout(function(){
                form.css('height','0%');
                tasksContainer.css('height','95%');
               
            },580);

            expanded = false; 
        }
        
    });


























})