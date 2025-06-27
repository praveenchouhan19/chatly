import dp from '../assets/dp.webp'
export default function Profile() {
  return (
    <div className="w-full h-[100vh] bg-slate-200 flex flex-col justify-center items-center">
      <div className="w-[200px] h-[200px] bg-white rounded-full border-4 border-[#20c7ff] shadow-gray-400 shadow-lg overflow-hidden">
        <img src={dp} alt="dp" className="h-[200px] w-[200px] object-cover" />

      </div>
      <form>
        {/* Your form fields here */}
      </form>
    </div>
  );
}
