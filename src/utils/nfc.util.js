import {TagEvent, Ndef} from 'react-native-nfc-manager';

/**
 *
 * @param {TagEvent} tag
 */
export const getMessageTag = tag =>
  tag.ndefMessage
    .filter(v => v.tnf == 1)
    .map(v => Ndef.text.decodePayload(v.payload));
