var btn = document.getElementById('submit')
var new_btn = document.getElementById('final')
var total_expense = 0;
var total_income = 0;

function expense_manager(){
    //Program for calculation of save and expense
    event.preventDefault()
    var query = document.getElementById('query').value
    var amount = document.getElementById("amount").value
    
    
    
    var name = document.getElementById('fname').value
    var desc = document.getElementById('desc').value
    
    if (query == "Income"){
    var div1 = document.getElementById('output_Income')
    var name = document.getElementById('fname').value
    var h2 = document.createElement('h2')
    var h22 = document.createElement('h2')
    h2.style.color = "green"
    h2.style.fontSize = '20px'
    h2.style.fontWeight="bold"
    h2.style.backgroundColor ="lightgrey"
    h22.style.color = "green"
    h22.style.fontSize = '20px'
    h22.style.fontWeight="bold"
    h22.style.backgroundColor ="lightgrey"
    total_income += Number(amount)
    h2.innerHTML = "Hi"+" "+name+" "+"Your income via "+desc+" "+"is"+" "+ amount
    h22.innerHTML = "Total Income ==>" + total_income
    div1.append(h2,h22)
     
    }

    else if(query == "Expense"){
        //If user chooses expense
    var div2 = document.getElementById('output_expense')
    var h2 = document.createElement('h2')
    var h22 = document.createElement('h2')
    h2.style.color = "brown"
    h2.style.fontSize = '20px'
    h2.style.fontWeight="bold"
    h2.style.backgroundColor ="lightgrey"
    h22.style.color = "brown"
    h22.style.fontSize = '20px'
    h22.style.fontWeight="bold"
    h22.style.backgroundColor ="lightgrey"
    total_expense += Number(amount)
    h2.innerHTML ="your expense for"+" "+desc+ "==>" +amount
    h22.innerHTML ="Total Expense" +"==>"+total_expense
    div2.append(h2,h22)

    }

    
    
    document.getElementById("desc").value= ""
    document.getElementById("amount").value= ""
    
                
}
function final_sum(){
    //To give the final output
    event.preventDefault()
   function expense_manager(){
    //retaining and fetching values from expense manager
    event.preventDefault()
       total_expense
       total_income
   }
   if(Number(total_income-total_expense)>total_expense && total_income> total_income/2 ){
       alert("GOOD JOB")
       var doc = document.getElementById("first_half")
       var h1 = document.getElementById("result")
       h1.style.color = "Green"
       h1.innerHTML = "GOOD JOB! You are saving Nicely!"
       doc.setAttribute('id','final_image')
       
       
   }
   else if(Number(total_income-total_expense)<total_expense){
       //When Expense is more or saving is too less
       alert("TRY TO SAVE MORE")
       var doc = document.getElementById("first_half")
       doc.setAttribute('id','expense_image')
       var h1 = document.getElementById("result")
       h1.style.color = "RED"
       h1.innerHTML = "You need to SAVE!"
       
       
   }

}
btn.addEventListener('click',expense_manager)
new_btn.addEventListener('click',final_sum)