import { useState } from "react";
import { Link } from "react-router-dom";
import registerbg from "../assets/registerbg.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
  };

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-medium">E-Shop</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Đăng ký! 👋</h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Nhập Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Nhập tên"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Nhập lại mật khẩu
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Nhập lại mật khẩu"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Đăng ký
          </button>
          <p className="mt-6 text-center text-sm">
            Đã có tài khoản?&nbsp;
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              Đăng nhập
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex-col justify-center items-center">
          <img
            src={registerbg}
            alt="login bg"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
