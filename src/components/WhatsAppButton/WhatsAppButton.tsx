import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "918551016775";

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-16
        w-16
        items-center
        justify-center

        rounded-full
        bg-green-500
        text-white

        text-3xl

        shadow-lg
        transition-all
        duration-300

        hover:scale-110
        hover:bg-green-600

        md:bottom-6
        md:right-6
       
        "
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;