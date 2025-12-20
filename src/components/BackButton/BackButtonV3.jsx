import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={handleGoBack}
      className="
    fixed top-24 left-6 z-[200]
    flex items-center gap-2
    text-[#134F5C]
    text-sm font-medium
    px-4 py-2
    rounded-full
    border border-[#134F5C]/20
    transition-all duration-200

    hover:bg-[#134F5C]/5
    hover:border-[#134F5C]/40
  "
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="hidden sm:inline">Назад</span>
    </button>
  );
};

export default BackButton;
