$(document).ready(function(){

    const jumbotron = $('#jumbotron');
    const pageHeading = $('#page-heading');
    const contentSection = $('section');



    // --------------------------------------------------------------
    // ANIMATING THE HEADING

    setTimeout(animatePageHeading,1000);

    function animatePageHeading(){
        pageHeading.css('display','block');
        pageHeading.addClass('animate-heading');
        //the heading animation takes 2 seconds

        setTimeout(function(){

            //this rolls up the contentSection
            contentSection.css('display','block');
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




























})