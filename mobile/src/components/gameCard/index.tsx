import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from 'react-native';

import { styles } from './styles';

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function gameCard({ data, ...res }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...res}>
      <ImageBackground 
        style={styles.cover}
        source={data.cover}
      />

    </TouchableOpacity>
  );
}