// More machine coding for practice modal , pagination and nested comments

// The below implementation is wrong
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="grid-container">
      <div class="grid-item grid-item-1"></div>
      <div class="grid-item grid-item-2"></div>
      <div class="grid-item grid-item-3"></div>
      <div class="grid-item grid-item-4"></div>
      <div class="grid-item grid-item-5"></div>
      <div class="grid-item grid-item-6"></div>
      <div class="grid-item grid-item-7"></div>
      <div class="grid-item grid-item-8"></div>
      <div class="grid-item grid-item-9"></div>
    </div>
    <script>
      const gridContainer = document.getElementsByClassName("grid-container");
      const gridItems = document.querySelectorAll(".grid-item");

      gridItems.forEach((item) => {
        item.addEventListener("click", mark);
      });

      function user_chance() {
        if (user1 == true) return user1;
        else return user2;
      }

      function switch_chances() {
        let chance;
        if (user1) {
          chance = user2;
        } else {
          chance = user1;
        }
      }

      function mark() {
        let user;

        if (user_chance == user1) user = user1;
        else user = user2;

        if (user == user1) {
          document.textContent == "X";
        } else {
          document.textContent == "O";
        }

        if (gridContainer.winningcombos == true) {
          let winner;
          winner = user;
        }
      }
    </script>
  </body>
</html>
