import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React from 'react';
import { view, Button, Text, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';


<Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/img/slider 1.png')} />,
      title: 'Enabling Collaboration',
      subtitle: 'We connect local shoppers to online buyers',
    },
    ...
  ]}
/>