import { useState, useEffect } from 'react';
import { FaUniversalAccess, FaAdjust, FaPlus, FaFont, FaMinus } from 'react-icons/fa';

export default function AccessibilityToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    document.documentElement.style.filter = isHighContrast
      ? 'invert(1) hue-rotate(180deg)'
      : 'none';
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [isHighContrast, fontSize]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 9999,
      }}
    >
      {/* Main floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
            backgroundColor: '#b91c1c', // red-700
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        aria-label="Toggle accessibility menu"
      >
        <FaUniversalAccess size={28} />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          style={{
            marginTop: '0.75rem',
            backgroundColor: 'rgba(0,0,0,0.9)',
            color: 'white',
            backdropFilter: 'blur(4px)',
            padding: '1rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            width: '200px',
            height: '200px',
          }}
        >
          <button
            onClick={() => setIsHighContrast(!isHighContrast)}
            style={menuButtonStyle}
          >
            <FaAdjust /> <span>Toggle Contrast</span>
          </button>
          <button
            onClick={() => setFontSize(fontSize + 10)}
            style={menuButtonStyle}
          >
            <FaPlus /> <span>Increase Text</span>
          </button>
          <button
            onClick={() => setFontSize(fontSize - 10)}
            style={menuButtonStyle}
          >
            <FaMinus /> <span>Decrease Text</span>
          </button>
          <button
            onClick={() => setFontSize(100)}
            style={menuButtonStyle}
          >
            <FaFont /> <span>Reset Text</span>
          </button>
        </div>
      )}
    </div>
  );
}

const menuButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.5rem',
  width: '100%',
  background: 'transparent',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  textAlign: 'left',
  fontSize: '14px',
};
