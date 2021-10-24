/* <!--COMP229-F2021-SB-P-ASSIGNMENT2 - Sindhu Binil, ID# 301150331 17-10-2021-->  */
"use strict";
/* custom js goes here */
// IIFE - Immediately Invoked Function Expression (AKA an anonymous self-executing function)
(function () {
    function Start() {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>{
                if(!confirm("Are you sure?")) 
                {
                    event.preventDefault();
                    window.location.assign('/business-contact-list');
                }
            });
        }
    }
    
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map

