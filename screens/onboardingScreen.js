import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React from 'react';
import { view, Button, Text, Image, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';


<Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/img/slider1.png')} />,
      title: 'Enabling Collaboration',
      subtitle: 'We connect local shoppers to online buyers',
    },
      {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/img/slider2.png')} />,
      title: 'Peer Up',
      subtitle: 'Going home? Ready to help? Drop Orders Get Compensated',
    },
      {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/img/slider3.png')} />,
      title: 'Enabling Collaboration',
      subtitle: 'Busy at home? Need groceries quickly? Want low service fees 0% Mark-up as well? Just make a list',
    },
  ]}
/>