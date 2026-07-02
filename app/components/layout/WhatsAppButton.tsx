// app/components/WhatsAppButton.tsx
// Floating WhatsApp contact button — rendered once in the root layout so it
// appears on every page, fixed to the bottom-right corner.
//
// The phone number lives in NEXT_PUBLIC_WHATSAPP_NUMBER (see setup notes below).
// Must be digits only, with country code, no "+", no spaces, no dashes.
// Example: for +1 800 123 4567 → NEXT_PUBLIC_WHATSAPP_NUMBER=18001234567

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '923027189840';
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about OB/GYN billing services.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="wa-float-btn"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          zIndex: 1000,
          textDecoration: 'none',
        }}
      >
        <svg viewBox="0 0 32 32" width="32" height="32" fill="#FFFFFF" aria-hidden="true">
          <path d="M16.004 3C9.373 3 4 8.373 4 15.004c0 2.648.86 5.098 2.32 7.09L4.6 28.6l6.68-1.75a11.94 11.94 0 0 0 4.72.98h.004C22.635 27.83 28 22.457 28 15.826 28 9.195 22.635 3 16.004 3Zm0 21.86a9.86 9.86 0 0 1-5.026-1.376l-.36-.213-3.966 1.04 1.06-3.866-.234-.397A9.84 9.84 0 0 1 6.06 15.004C6.06 9.5 10.5 5.06 16.004 5.06c5.505 0 9.94 4.44 9.94 9.944 0 5.504-4.435 9.856-9.94 9.856Zm5.42-7.386c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.174.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.762-1.653-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.496.099-.198.05-.372-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.273.297-1.04 1.017-1.04 2.48s1.065 2.876 1.213 3.074c.15.198 2.096 3.2 5.08 4.49.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.174-1.412-.074-.124-.272-.198-.57-.347Z" />
        </svg>
      </a>

      <style>{`
        .wa-float-btn {
          animation: wa-pulse 2.4s infinite;
          transition: transform 0.2s ease;
        }
        .wa-float-btn:hover {
          transform: scale(1.08);
        }
        @keyframes wa-pulse {
          0%   { box-shadow: 0 4px 16px rgba(0,0,0,0.25), 0 0 0 0 rgba(37,211,102,0.55); }
          70%  { box-shadow: 0 4px 16px rgba(0,0,0,0.25), 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 16px rgba(0,0,0,0.25), 0 0 0 0 rgba(37,211,102,0); }
        }
        @media (max-width: 480px) {
          .wa-float-btn {
            bottom: 16px !important;
            right: 16px !important;
            width: 52px !important;
            height: 52px !important;
          }
        }
      `}</style>
    </>
  );
}
