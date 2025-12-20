import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="pt-40">
      <button
        onClick={handleGoBack}
        className="
      fixed top-24 left-6 z-[200]
      flex items-center gap-2
      bg-white text-[#134F5C]
      px-5 py-3
      rounded-xl
      text-[15px] font-semibold
      shadow-[0_2px_8px_rgba(19,79,92,0.15)]
      transition-all duration-300

      hover:-translate-x-1
      hover:bg-gray-50
      hover:shadow-[0_4px_12px_rgba(19,79,92,0.25)]
    "
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Назад</span>
      </button>
    </div>
  );
};

export default BackButton;
