import { ConnectEmbed, ConnectWallet, darkTheme, useShowConnectEmbed } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import ConnectedPage from "../components/connected";

const customTheme = darkTheme({
  
    colors: { accentButtonBg: "#642598" },
  
  
})

const Home: NextPage = () => {
  const showConnectEmbed = useShowConnectEmbed();

  const openNewWindow = () => {
    window.open("https://www.sycoticsociety.com", "_blank", "noopener noreferrer");
  };

  return (
    <div>
      {showConnectEmbed ? (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div
            style={{
              width: '50%',
              height: '100vh',
              background: `url('/images/template-preview.png')`,
              backgroundColor: 'black',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer', // Add cursor pointer
            }}
           
            onClick={openNewWindow} // Attach onClick event
            ></div>
            <div
              style={{
                width: '50%',
                height: '100vh',
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '-25px', // Raise the container by 40px
              }}
            >
             <h2 style={{ marginBottom: '28px', display: 'flex' }}></h2>
              <ConnectEmbed 
                theme={darkTheme({
                  colors: { accentButtonBg: "#642598" },
                })}
              
              />
            </div>
          </div>
        ) : (
          <div>
            <ConnectedPage />
          </div>
        )}
      </div>
    );
  };
  
  export default Home;
