const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
  const height= parseInt(document.querySelector("#height").value);
  const weight=parseInt(document.querySelector("#weight").value);
  const results = (document.querySelector( "#results" ) );
  const feedback = (document.querySelector("#feedback"));
  if(height==="" || height<0 ||  isNaN(height)){
     results.innerHTML=`Please  give a valid height ${height}`;
  } else if(weight==="" || weight<0 ||  isNaN(weight)){
     results.innerHTML=`Please  give a valid weight ${weight}`;
  }else{
    const BMI = (weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>Your BMI is ${BMI}</span>`
      if(BMI>24.9){
        feedback.innerHTML=`<span>Your BMI is Higher</span>`;
      }else if(BMI>=18.5 && BMI<=24.9){
        feedback.innerHTML=`<span>Your BMI is Normal</span>`;
      } else if(BMI<18.6){
        feedback.innerHTML=`<span>Your BMI is Lower</span>`;
      }
      else {
        feedback.innerHTML = `<span>Your BMI is Good</span>`;
     }
    }
      
});
