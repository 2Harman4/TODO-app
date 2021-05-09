$(document).ready(function(){

    const jumbotron = $('#jumbotron');
    const pageHeading = $('#page-heading');
    const contentSection = $('#content');
    const form = $('form');
    const expandContractButton = $('#expand-button');
    const tasksContainer = $('#tasks-container');


    // --------------------------------------------------------------
    // ANIMATING THE HEADING & CONTENT SECTION

    setTimeout(animatePageHeading,1000);

    function animatePageHeading(){
        pageHeading.css('display','block');
        pageHeading.addClass('animate-heading');
        //the heading animation takes 2 seconds

        setTimeout(function(){

            //this rolls up the contentSection
            contentSection.css('display','flex');
            contentSection.addClass('animate-section');

            //shifting and scaling down the page heading font size
            pageHeading.addClass('animate-scale-and-shift');
            pageHeading.css({
                'font-size': 'var(--page-heading-font-size-final)',
                'letter-spacing': 'var(--page-heading-letter-spacing-final)',
                'left': '30vw'
            })
        },2500);
    }
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
                tasksContainer.css('height','45%');
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