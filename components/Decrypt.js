const Decrypt = () => {
  async function onSubmitHandler(event) {
    event.preventDefault();

    const { emojis, pass } = event.target;

    try {
      await fetch(
        `https://glamorous-jade-gown.cyclic.app/emoji?emojis=${emojis.value}&pass=${pass.value}`
      )
        .then((response) => response.json())
        .then((json) => {
          // console.log();
          let e = (document.getElementById("e").innerHTML = json.data[0].text);
        });
    } catch (error) {
      console.log("Error : ", error);
      let e = (document.getElementById("e").innerHTML = "Try again...!");
    }
  }

  return (
    <>
      <form
        action="/"
        onSubmit={onSubmitHandler}
        className="grid grid-cols-1 rounded border p-3"
      >
        <label htmlFor="text" className="text-xl">
          {" "}
          1. Please enter encrypted emojis.{" "}
        </label>
        <input
          type="text"
          name="emojis"
          className="my-4 rounded p-2 text-black"
          placeholder="enter encrypted emojis to text...!"
          required
        />
        <label htmlFor="pass" className="text-xl">
          {" "}
          2. Type a Password.{" "}
        </label>
        <input
          type="password"
          name="pass"
          className="my-4 rounded p-2 text-black"
          placeholder="e.g. 12345"
          required
        />
        <button className="border p-3 text-white shadow-lg">
          Decrypt Emojis
        </button>
      </form>
      <div className=" m-[26px] text-white">
        <span id="e" className="border p-3"></span>
      </div>
    </>
  );
};

export default Decrypt;
