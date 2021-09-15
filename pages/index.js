import { MainLayout } from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen pt-10 bg-gradient-to-br from-gray-100 to-coolgray-300 px-5">
        <div className="flex flex-col items-center p-5 bg-white rounded-lg shadow-2xl ">
          <h1 className="p-5 font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-violet-800">
            Im your new Tailwind Project
          </h1>
          <p className="text-[#504e63] text-center">
            Delete this and make something great
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
