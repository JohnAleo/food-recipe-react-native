import {Svg, Path, SvgProps} from 'react-native-svg';

export const HomeIcon = ({stroke, fill, ...props}: SvgProps) => {
  return (
    <>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <Path
          d="M20.4699 6.20541L20.4701 6.20551C21.1412 6.67532 21.706 7.38618 22.1023 8.14535C22.4987 8.90453 22.76 9.77604 22.76 10.5999V17.3799C22.76 20.3442 20.3542 22.7499 17.39 22.7499H6.60999C3.64367 22.7499 1.23999 20.332 1.23999 17.3699V10.4699C1.23999 9.6966 1.47816 8.86771 1.83713 8.13864C2.19627 7.40923 2.7083 6.71474 3.31855 6.23869C3.31861 6.23864 3.31866 6.2386 3.31872 6.23856L8.32856 2.32869L8.33062 2.32708L8.33062 2.32708C10.1003 0.955859 12.8707 0.887072 14.7099 2.17541L20.4699 6.20541ZM20.4699 6.20541L14.7103 2.1757L20.4699 6.20541Z"
          fill={'white'}
          stroke={stroke || '#797979'}
          strokeWidth="1.5"
        />
      </Svg>
    </>
  );
};