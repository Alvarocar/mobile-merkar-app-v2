import {useCallback, useState, useMemo, useEffect} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from '@src/styles/cards/productDetail.styles';
import {isUndefined, stubTrue} from 'lodash';

const ProductDetail = ({
  product,
  footer: Footer,
  footerProps = {},
  styleProduct = {},
  initialCount = 1,
  suscribe = stubTrue,
}) => {
  const [counter, setCounter] = useState(initialCount);
  const increment = useCallback(() => {
    setCounter(c => c + 1);
  }, [setCounter]);
  const decrement = useCallback(() => {
    setCounter(c => {
      if (c <= 1) return c;
      return c - 1;
    });
  }, [setCounter]);

  const totalPrice = useMemo(
    () => product.price * counter,
    [product.price, counter],
  );

  useEffect(() => {
    suscribe(counter);
  }, [counter]);

  return (
    <View style={[styles.product, styleProduct]}>
      <View style={styles.left}>
        <Text style={styles.title}> {product.name} </Text>
        <Image style={styles.image} source={{uri: product.imageUrl}} />
      </View>
      <View style={styles.right}>
        <Text style={styles.price}>{`Precio Total: $${totalPrice}`}</Text>
        <Text style={styles.description}> {product.description} </Text>
        <View style={styles.countSection}>
          <Pressable style={[styles.action, styles.minus]} onPress={decrement}>
            <Text style={styles.actionText}>-</Text>
          </Pressable>
          <Text style={styles.counter}>{counter}</Text>
          <Pressable style={[styles.action, styles.plus]} onPress={increment}>
            <Text style={styles.actionText}>+</Text>
          </Pressable>
        </View>
        <Text
          style={
            styles.description
          }>{`Precio Unitario: $${product.price}`}</Text>
        {!isUndefined(Footer) && (
          <Footer {...footerProps} product={product} quantity={counter} />
        )}
      </View>
    </View>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    currencyType: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  onPressMask: PropTypes.func,
};

export default ProductDetail;
