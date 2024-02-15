$(document).ready(function() {
  console.log("Document is ready");

  $("#btnGetFacts").click(function() {
    
    let userName = $("#userName").val();

 
    let coolFacts = getCoolNameFacts(userName);

    // Display the facts
    $("#nameFacts").html(coolFacts);
  });
});

function getCoolNameFacts(name) {
  console.log("In my function");

  // Count the letters in the user's name
  const letterCount = name.replace(/\s/g, "").length;
  

  
  // Customize the fact based on the letter count
  let fact;
  if (letterCount === 0) {
    fact = "Your name is mysterious!";
  } else if (letterCount < 5) {
    fact = `The fact is your name is short (${letterCount} letters).`;
    
  } else if (letterCount < 10) {
    fact = `<br><h3>Your name is average (${letterCount} letters).</h3>`;
    fact += `<br><h2>Your name is average (${letterCount} letters). wooow</h2>`;
    fact += `<br><h1>Your name is average (${letterCount} letters). I'm gitting crazy</h1>`;
  } else {
    fact = `Your name is quite long (${letterCount} letters).`;
  }

  return fact;
}
