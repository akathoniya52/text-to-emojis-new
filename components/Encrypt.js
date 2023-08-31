const Encrypt = () => {
  async function onSubmitHandler(event) {
    event.preventDefault();
    let { text, pass } = event.target;

    try {
      await fetch("https://glamorous-jade-gown.cyclic.app/", {
        method: "POST",
        body: JSON.stringify({
          text: text.value,
          pass: pass.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          document.getElementById("e").innerHTML = json.emojis;
        });
    } catch (error) {
      document.getElementById("error").innerHTML = "Something wrong..!";
    }
  }

  return (
    <>
      <form
        // action="http://localhost:9000/"
        action="/"
        onSubmit={onSubmitHandler}
        className="grid grid-cols-1 rounded border p-3"
        method="post"
      >
        <span id="error" className="text-[red]"></span>
        <label htmlFor="text" className="text-xl">
          {" "}
          1. Enter text for encrypted emojis.{" "}
        </label>
        <input
          type="text"
          name="text"
          className="my-4 rounded p-2 text-black"
          placeholder="enter your message"
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
          required
        />
        <label htmlFor="pass" className="text-xl">
          {" "}
          2. Set a Password.{" "}
        </label>
        <input
          type="password"
          name="pass"
          className="my-4 rounded p-2 text-black"
          placeholder="e.g. 12345"
          required
          // value={pass}
          // onChange={(event) => setPass(event.target.value)}
        />
        <button type="submit" className="border p-3 text-white shadow-lg">
          Encrypt Text
        </button>
      </form>
      <div className=" m-[26px] text-white">
        <span id="e" className="border p-3"></span>
      </div>
    </>
  );
};

export default Encrypt;
