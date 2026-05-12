import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const SignUn = () => {
  return (
    <View>
      <Text>sign-Un</Text>
      <Link href="/(auth)/sign-up">Sign in</Link>
    </View>
  )
}

export default SignUn