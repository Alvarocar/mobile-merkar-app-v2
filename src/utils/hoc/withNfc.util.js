import {_borderRadius, _colors} from '@src/styles/_global.styles';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Pressable, Text, Modal, View, Image, StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '@src/styles/hoc/_withNfc.style';
import nfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';
import {getMessageTag} from '../nfc.util';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {GET_PRODUCT_BY_ID} from '@src/slice/product.reducer';

async function validateNFC() {
  nfcManager.isSupported();
}

export default WrappedComponent => {
  const WithNfc = ({getProductDetail, ...rest}) => {
    const [show, setShow] = useState(false);
    const isSupported = useRef(false);
    const isEnabledNfc = useRef(false);

    useEffect(() => {
      async function start() {
        isSupported.current = await nfcManager.isSupported();
        if (!isSupported.current) return;
        await nfcManager.start();
      }
      start();
    }, []);

    const startNfc = useCallback(async () => {
      isEnabledNfc.current = await nfcManager.isEnabled();
      if (!isEnabledNfc.current) return;
      try {
        setShow(true);
        await nfcManager.requestTechnology(NfcTech.Ndef);
        const tag = await nfcManager.ndefHandler.getNdefMessage();
        const [productId] = getMessageTag(tag);
        getProductDetail(productId);
      } catch (e) {
        console.info(e);
      } finally {
        shutdown();
      }
    }, [setShow, isEnabledNfc, shutdown]);

    const shutdown = useCallback(async () => {
      setShow(false);
      await nfcManager.cancelTechnologyRequest();
    }, [setShow]);
    return (
      <>
        <WrappedComponent {...rest} />
        <Pressable style={styles.action} onPress={startNfc}>
          <MaterialIcon style={styles.icon} name="cellphone-nfc" />
        </Pressable>
        <Modal
          animationType="slide"
          visible={show}
          onRequestClose={shutdown}
          transparent={true}>
          <Pressable onPress={shutdown} style={styles.modalMask} />
          <View style={styles.modal}>
            <View style={styles.modalImageSection}>
              <Image
                style={styles.modalImage}
                source={require('@src/assets/LogoNFC.png')}
              />
            </View>
            {isEnabledNfc.current ? (
              <View style={styles.modalTitleSection}>
                <Text style={styles.modalTitle}>Escaneando...</Text>
              </View>
            ) : (
              <View style={styles.modalTitleNotEnabledSection}>
                <Text style={styles.modalTitle}>NFC esta deshabilitado</Text>
              </View>
            )}
          </View>
        </Modal>
      </>
    );
  };

  WithNfc.propTypes = {
    getProductDetail: Proptypes.func.isRequired,
  };

  const mapDispatchToProps = dispatch => ({
    getProductDetail: id => dispatch(GET_PRODUCT_BY_ID(id)),
  });

  return connect(null, mapDispatchToProps)(WithNfc);
};
