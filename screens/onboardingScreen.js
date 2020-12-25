import React from 'react';
import { view, Button, Text, Image, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';


const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);



<Onboarding
   SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
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

export default onboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});