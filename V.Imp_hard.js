// Q) Find the output

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="btn1">Predict the future</button>
    <button id="btn2">Bonus question</button>

    <script>
      function listner1() {
        setTimeout(() => console.log("#! Hello from timeout 1"), 0);
        Promise.resolve().then(() => console.log("#! Hello from promise 1"));
        const promise = Promise.resolve();
        setTimeout(() => console.log("#1 Hello from timeout 2"), 0);
        console.log("#1 Hello from main thread");
        setTimeout(
          () => promise.then(() => console.log("#1 Hello from promise 2")),
          0
        );
      }

      function listner2() {
        setTimeout(() => console.log("#! Hello from timeout 1"), 0);
        Promise.resolve().then(() => console.log("#! Hello from promise 1"));
        const promise = Promise.resolve();
        setTimeout(() => console.log("#1 Hello from timeout 2"), 0);
        console.log("#1 Hello from main thread");
        setTimeout(
          () => promise.then(() => console.log("#1 Hello from promise 2")),
          0
        );
      }

      const btn = document.getElementById("btn1");
      btn.addEventListener("click", listner1, false);
      btn.addEventListener("click", listner2, false);
    </script>
  </body>
</html>
