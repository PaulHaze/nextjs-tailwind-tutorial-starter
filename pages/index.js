import Head from 'next/head';
import { MainLayout } from '../layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <div className="h-[100vh]  flex items-center justify-center">
        <div className="flex flex-col justify-center w-6/12 p-5 bg-white rounded-lg shadow-2xl">
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
