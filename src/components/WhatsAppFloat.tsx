const WHATSAPP_E164 = "94767080299";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_E164}`;

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="gc-whatsapp-float"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <i className="bi bi-whatsapp" aria-hidden />
    </a>
  );
}
