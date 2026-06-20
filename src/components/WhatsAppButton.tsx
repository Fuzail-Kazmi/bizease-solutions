import Link from "next/link";

const WHATSAPP_NUMBER = "923350388841";
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about your services.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.39.703 4.612 1.916 6.487L4 29l7.717-1.886A11.93 11.93 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.6a9.55 9.55 0 0 1-4.87-1.34l-.349-.207-3.65.892.973-3.557-.227-.366A9.55 9.55 0 1 1 25.6 15c0 5.302-4.298 9.6-9.599 9.6zm5.264-7.182c-.288-.144-1.703-.84-1.967-.936-.264-.096-.456-.144-.648.144-.192.288-.744.936-.912 1.128-.168.192-.336.216-.624.072-.288-.144-1.215-.448-2.314-1.428-.856-.763-1.434-1.706-1.602-1.994-.168-.288-.018-.444.15-.588.144-.144.336-.372.504-.558.168-.186.224-.318.336-.53.112-.214.056-.4-.038-.558-.094-.158-.622-1.5-.852-2.064-.226-.55-.456-.476-.626-.484-.16-.008-.342-.01-.526-.01-.184 0-.482.069-.738.345-.255.276-.978.96-.978 2.34 0 1.38 1.003 2.715 1.143 2.902.14.187 1.913 2.92 4.64 3.978 2.726 1.057 2.726.704 3.218.66.492-.044 1.6-.654 1.825-1.286.225-.633.225-1.176.158-1.286-.066-.11-.245-.176-.533-.32z" />
      </svg>
    </Link>
  );
}