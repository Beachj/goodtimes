// @ts-ignore
import { RNPhotoEditor } from 'react-native-photo-editor'
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation';
declare let window: any;
import RNFetchBlob from 'rn-fetch-blob';
import { connect } from 'react-redux';
import { getBase64, setBase64 } from './../../reduxStore/global/global.store';
import { State as ReduxState } from './../../reduxStore/index';

interface Props{
    navigation: any;
    colors?: Array<string>;
    hiddenControls?: Array<string>;
    onCancel?:  () => void;
    onDone?:  () => void;
    path: string;
    stickers?: Array<string>;
    getBase64: any;
    setBase64: (base64:string) => void;
}
interface State{
    imageUrl: any;
    base64: string;
}

export class ImageEditor extends Component<Props, State> {

    constructor(props: Props){
        super(props);

    }

    componentDidLoad(){
        let imageUrl = this.props.navigation.getParam('imageUrl');
        RNPhotoEditor.Edit({
            path: imageUrl,
            onDone: () => {
                console.log('on done', imageUrl);
                
                RNFetchBlob.fs.readFile(imageUrl, 'base64').then( (base64) =>{
                    let r = this.props.setBase64(base64);
                    this.props.navigation.pop(2);
                });
                
            },
            onCancel: () => {
                console.log('on cancel')
            }
        });

    }


    render() {
        return (
            <View style={styles.container}>
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})


const mapStateToProps = (state: ReduxState) => ({
    getBase64: getBase64(state.global)
})

const mapDispatchToProps = {
    setBase64: setBase64
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ImageEditor))