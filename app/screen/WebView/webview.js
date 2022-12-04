import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export default function App(name) {
    return (
      <WebView
        source={{
          uri: 'https://www.google.com.br/search?q='+name
        }}
        style={{ marginTop: 20 }}
      />
    );
}

