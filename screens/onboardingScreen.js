import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React from 'react';
import { view, Button, Text, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';


<Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('./images/circle.png')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
    ...
  ]}
/>