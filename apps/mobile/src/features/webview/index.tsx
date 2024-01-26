import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import Config from 'config';
import { encryption } from '@utils';
import config from '../../config';

const WebComponent = () => {
  const [storedData, setStoredData] = useState<string>();

  useEffect(() => {
    RNSecureStorage.multiGet(['username', 'password', 'country', 'lang'])
      .then((res) => {
        const decipheredPass = encryption.decipher(res.password, config.ENCRYPTION_KEY);
        setStoredData(JSON.stringify({...res, password: decipheredPass}));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const js = `
      mobile = new Object();
      mobile.getLoginDetails = function () {
        window.receiveLoginDetails(${storedData});
      };
      true;
  `;
  if (storedData) {
    return (
      <WebView
        allowsInlineMediaPlayback={true}
        domStorageEnabled
        javaScriptEnabledAndroid={true}
        javaScriptEnabled
        automaticallyAdjustContentInsets
        source={{ uri: Config.WEB_APP_URL }}
        scrollEnabled
        mixedContentMode={'always'}
        setJavaScriptEnabled
        originWhitelist={['*']}
        mediaPlaybackRequiresUserAction={false}
        // ref={webView}
        startInLoadingState
        // onError={handleError}
        injectedJavaScript={js}
        onMessage={() => {}}
      />
    );
  }
  return <ActivityIndicator />;
};

export default WebComponent;
