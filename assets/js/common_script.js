$(document).ready(function(){

    let deleteButton = $('#delete-button');
    let checkboxses = $('.checkbox');
    let selectedArray=[];
    
    // ---------handling category colors----------
        let personalTasks =$("[data-category='Personal']");
        let workTasks =$("[data-category='Work']");
        let schoolTasks =$("[data-category='School']");
        let cleaningTasks =$("[data-category='Cleaning']");
        let otherTasks =$("[data-category='Other']");

        
        personalTasks.css('background-color','#F0E751');
        workTasks.css('background-color','#ED4224');
        schoolTasks.css('background-color','#E136F0');
        cleaningTasks.css('background-color','#454CF0');
        otherTasks.css('background-color','#41F064');



    //handling checkboxses for delete functionality
    checkboxses.on('click',function(){
        let checkbox = $(this);
        let dataId = checkbox.attr('unique_id');

        if (checkbox.prop('checked')){

            selectedArray.push(dataId);
            //style the description
            checkbox.next().children('.description').css('text-decoration','line-through');

        }else{

            for(let i in selectedArray){
                if( selectedArray[i] == dataId){
                    selectedArray.splice(i,1); 

                    //style the description
                    checkbox.next().children('.description').css('text-decoration','none');
                    break;
                }
            }
        }
    });


    //handling delete request
    deleteButton.on('click',function(){

        //this shall work only is some task is slected
        if(selectedArray.length > 0){

            $.ajax({
                method: 'post',
                url: '/delete-tasks',
                data:{
                    selectedArray
                },
                success:function(data){
                    console.log('redirecting to: ', data);
                    window.location.href = data;
                },
            });
        }
    
    });
});