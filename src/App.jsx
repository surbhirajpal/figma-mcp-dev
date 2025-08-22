import './App.css'
import { useState } from 'react';

const img = "http://localhost:3845/assets/8591b278f4176f8f3af4a841e397a844dba7bd51.svg";
const imgIcon = "http://localhost:3845/assets/79fb70262afbaa58be1fdb5c1b8ddc73aa131ef9.svg";

function IconButtonDanger({ icon = null }) {
  return (
    <div className="icon-button-danger">
      <div className="button-content">
        <div className="icon-container">
          {icon || (
            <div className="circle">
              <div className="icon">
                <div className="icon-image">
                  <img alt="" className="icon-img" src={img} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function X() {
  return (
    <div className="x-icon">
      <div className="x-icon-inner">
        <div className="x-icon-image">
          <img alt="" className="x-img" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

function TextStrong({ children }) {
  return <strong className="text-strong">{children}</strong>;
}

function Text({ children }) {
  return <span className="text">{children}</span>;
}

function ButtonDanger({ children, onPress, size = "small" }) {
  return (
    <button className={`button-danger button-${size}`} onClick={onPress}>
      {children}
    </button>
  );
}

function IconInfo({ size = "20" }) {
  return <div className={`icon-info size-${size}`}>{/* Icon content */}</div>;
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="notification-container">
      <div className="notification alert">
        <div className="notification-icon">
          <IconInfo size="20" />
        </div>
        <div className="notification-content">
          <TextStrong>Components are low in stock</TextStrong>
          <Text>
            Hurry! Stock is running low on our website for Figma components. Don't
            miss out on getting your hands on these popular items before they sell
            out. Shop now to secure your favorite Figma components before they're
            gone. Grab them while you still can!
          </Text>
          <ButtonDanger onPress={() => console.log('Browse clicked')} size="small">
            Browse components
          </ButtonDanger>
        </div>
        <button className="notification-dismiss" onClick={() => setIsVisible(false)}>
          <X />
        </button>
      </div>
    </div>
  );
}

export default App;
