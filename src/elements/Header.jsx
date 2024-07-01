const Header = () => {
  return (
    <>
      <div className="container mx-auto max-w-screen-xl grid grid-cols-2 h-[100vh]">
        <div className="flex justify-center flex-col">
          <h3 className="font-bold text-2xl">Welcome</h3>
          <h1 className="font-black text-5xl">
            Web untuk Tugas Routing ReactJS
          </h1>
          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptates, aspernatur eveniet fuga nobis voluptate, fugiat quas ea
            quibusdam, soluta unde sed voluptatum accusantium corrupti natus
            quaerat laborum. Nemo, voluptate ex!
          </p>
        </div>
        <div className="flex justify-center">
          <img
            className="w-[30rem] h-[30rem] my-auto"
            src="./computer.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
