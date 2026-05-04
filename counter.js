
       {/* // This // This function increases the counter by 1 */}
  function increment() 
  {
      // Get the input element
      let input = document.getElementById('counter').value;

      // Convert value to number and add 1
      input++

      input = parseInt(input);
      let finalval=input
      console.log(finalval);
      document.getElementById('counter').value = finalval;


     // Update the input value
     //   input.value = currentValue;
    }

function decrement() 
  {
    let input = document.getElementById('counter').value;
     // Convert value to number and add 1
    input--
    if (input < 0) {
      input = 0; // Ensure it doesn't go below 0
    }

    input = parseInt(input);
    let finalval=input
    console.log(finalval);
    document.getElementById('counter').value = finalval;
  }

function reset()
 {
  document.getElementById('counter').value = 0;
 }