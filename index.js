
// Create a main function for all of your code. Keep asking the user to press 1, 2, or 3 until they press 'q' to quit.

// - If they press 1, alert "Challenge goes here".
// - If they press 2, alert "2".
// - If they press 3, alert "Hello World
//
function userMenu()
{
var userQuit = "q";

   while ("q")
   {
        var userInput = parseInt(prompt(" Press 1, 2, or 3        . Press 'q' to quit"));


        if (userInput !== userQuit )
        {
            if ( userInput === 1)
            {
                alert("Challenge goes here")
            }

            else if (userInput === 2)
            {
              alert("2")
            }

            else if (userInput === 3)
            {
                alert("Hello World!")
            }
        }



    }

}
userMenu();