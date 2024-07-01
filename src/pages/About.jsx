import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <div className="">
        <Navbar />
        <div className="container mx-auto mt-5">
          <h1 className="font-black text-3xl mb-2">React Router</h1>
          <p className="mb-3">
            React Router adalah pustaka standar untuk mengelola routing dalam
            aplikasi React. Routing adalah proses menentukan bagaimana aplikasi
            merespons permintaan ke URL tertentu. Dengan React Router,
            pengembang dapat membuat navigasi antara komponen dalam aplikasi
            single-page tanpa perlu memuat ulang halaman. Ini memberikan
            pengalaman pengguna yang lebih mulus dan cepat. React Router
            memungkinkan pembuatan rute dinamis dan nested routing, di mana rute
            dapat diatur dalam struktur hierarki untuk menangani berbagai
            skenario navigasi kompleks.
          </p>
          <p>
            Selain itu, React Router menyediakan berbagai fitur canggih seperti
            parameter URL, redirection, dan programmatic navigation. Parameter
            URL memungkinkan rute menerima variabel yang bisa digunakan untuk
            menampilkan konten yang berbeda berdasarkan input tersebut.
            Redirection berguna untuk mengarahkan pengguna ke halaman yang
            berbeda berdasarkan logika tertentu, seperti setelah form submission
            atau autentikasi. Dengan programmatic navigation, pengembang bisa
            mengontrol navigasi menggunakan kode, memungkinkan interaksi yang
            lebih dinamis berdasarkan tindakan pengguna atau keadaan aplikasi.
            Dengan semua fitur ini, React Router mempermudah pembuatan aplikasi
            React yang lebih intuitif dan responsif.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
