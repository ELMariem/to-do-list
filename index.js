   const todo = document.querySelector("button");
    const form = document.querySelector("form.element2");
    const outputTable = document.getElementById("outputID");

    if (todo && form && outputTable) {

        todo.addEventListener("click", function (event) {
            event.preventDefault();
            const day = document.getElementById("Name");
            const doo = document.getElementById("Content");

            if (day && doo ) {
                const newEvent = document.createElement("div");
                newEvent.innerHTML = `<span>${day.value} : ${doo.value}</spSan> 
                                      <button class="bi bi-trash3">🗑️</button>`;

                outputTable.appendChild(newEvent);

                newEvent.querySelector(".bi").addEventListener("click", function () {
                    newEvent.remove();
                });

                day.value = "";
                doo.value = "";
            } 
        });
    } ;

