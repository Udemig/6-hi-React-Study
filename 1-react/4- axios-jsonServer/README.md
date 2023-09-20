# Http İstekleri

- get > veri çekme isteği
- `axios.get("url")`

- post > veri gönderme isteği
- - `axios.post("url", data)`

- put > veri güncelleme isteği
- - `axios.put("url/id", data)`

- delete > veri silme isteği
- `axios.delete("url/id")`

# Koşullu zincirleme (conditional chaining)

- todos && todos.map(()=>())

- todos?.map(()=>())

# Post isteği

- fetch:
- - fetch('http://localhost:3060/todos', {
    method: 'POST', //istek türü
    headers: {
    'Content-Type': 'application/json', //veri tipi tanımlama
    },
    body: JSON.stringify(newTodo),
    });

- axios
- - axios.post('/todos', newTodo);

# State te tutalan diznin bir elmanını güncelleme

- 1.Yol:
-     const clone = [...todos];

      const index = clone.findIndex((i) => i.id === updated.id);

      // eğerki elemanı dizide bulamdaıysa return et
      if (index === -1) return;

      clone[index] = updated;

      setTodos(clone);

- 2. YOL:
     const filtred = todos.map((item) =>
     item.id === updated.id ? updated : item
     );

     setTodos(filtred);
