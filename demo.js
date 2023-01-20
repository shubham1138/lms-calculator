
            function updatedisp(){

      
                // disp.currans=value;
                //our previous element is goint to be prev one in html display
                //and our current element is going to be current operand in html display
                htmlcurrans.innerHTML = currans;
                htmlprevans.innerHTML = prevans;    
            
        }

        function calculate(prevans,currans,operator){
            
            // console.log(operator);
            console.log("prevans:",prevans);
            console.log("operator:",operator);
            console.log("currans:",currans);
            console.log();

            // if any of the value is null then dont perform the calculate function
            if(!prevans || !currans || !operator){
                return;
            }

            currans = parseFloat(currans);
            prevans = parseFloat(prevans);

                    ans = currans + prevans;
                    console.log("ans:",ans);
                 
                    this.prevans = ans.toString();
                    this.currans = undefined;   
                    this.currans = "";   
                    updatedisp();

            // currans = currans.toString();
            // prevans = currans;
            // currans = "";
     

            
        }

        function clearall(){
            // updatedisp("");
            currans = "";
            prevans = "";

            // we cannot assign values to const so we use this for this instance 
            this.operator=undefined;
            updatedisp();
        }

     

        function append(number){
            // console.log("form append function currans: ",currans);
            currans = currans.toString() + number.toString();
           // console.log("type of currans:",typeof(currans));
         

        }

        function prfoperator(operator){
           //console.log(operator)
           // disp.value+=operator;
          //  console.log("prevans",prevans);
            //console.log("currans:",currans);
            if(prevans== ""){
                prevans = currans;
                currans = "";
                // htmlprevans.innerHTML = currans;
                // htmlcurrans.innerHTML = "";
                
            }
            else{
                   
                  calculate(prevans,currans,operator);
             }
        }

        function removelast(){

            // to remove the last character from string
            currans = currans.slice(0,-1);
            updatedisp();
        }



    var ans = 0;
    var prevans = "";
    var currans = "";

    const htmlprevans = document.querySelector("[data-htmlprevans]");
    const htmlcurrans = document.querySelector("[data-htmlcurrans]");
    console.log(htmlcurrans);
    const disp = document.querySelector("#display");
    const number = document.querySelectorAll("[data-number]");
    const operator= document.querySelectorAll("[data-operator]");
    const clear = document.querySelector("[data-clear]");
    const remove_last = document.querySelector("[data-delete]");
    const mode = document.querySelectorAll("[data-mode]");
    const eql = document.querySelector("[data-equal]");
    // console.log(eql);

    disp.value= 0;  

// syntax for adding event listener
// elements.forEach((item) => {
//     item.addEventListener('click', clickEvent)
// });

// console.log(disp);
// console.log(number);
// console.log(operator);
// console.log(clear);
// console.log(remove_last);
// console.log(mode);


// document.getElementById("myBtn").addEventListener("click", function() {
//     myFunction(p1, p2);
//   });


    number.forEach((item) => {

        item.addEventListener('click',function(){
            append(item.innerHTML); 
            updatedisp();
        });
    });

    clear.addEventListener('click',clearall);


    operator.forEach((item)=>{
        item.addEventListener('click',function(){
            prfoperator(item.innerHTML);
        });
    });

    eql.addEventListener('click',()=>{
        calculate(prevans,currans,operator);
    });

    remove_last.addEventListener('click',removelast);











    