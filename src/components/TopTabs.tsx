import * as React from 'react'
import { observer } from "mobx-react"
import { observable } from "mobx"
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop:hp('1%'), 
        height: 46,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(124, 148, 173, 1)',
        shadowColor: 'rgba(124, 148, 173, 0.05)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 1,
        display: 'flex', 
        flexDirection: 'row'
    }, 

    tab: {
        backgroundColor:'#98BDCF',
        borderBottomWidth: 0,
        borderColor: '#7C94AD',
        borderStyle: 'solid',
        height: '100%'
    }, 

    tabSelected: {
        borderBottomWidth: 2,
    },

    tabText: {
        color:'#fff',
        textAlign: 'center', 
        lineHeight: 35,
        fontSize: 14, 
        borderColor: '#7C94AD',
        borderStyle: 'solid',
       
    }
})



export class TopTabsState {
    @observable
    currentTab = 0;
}

export type TopTabsProps = {
    state: TopTabsState;
    content: Array<any>;
    textStyle?:any
}



@observer
export default class TopTabs extends React.Component<TopTabsProps> {

    getTabStyle(selected: boolean) {
        var selectedProps = selected? styles.tabSelected: null;
        var length = this.props.content.length || 1;

        var percent = 100 / length;
    
        return {...styles.tab, ...selectedProps, width: `${percent}%`}
    }
    

    renderTabContent() {
        var tabContent = this.props.content;
        let textstyle = { borderRightWidth:2};
        if(tabContent == null || tabContent.length == 0) {
            return null;
        }


        return tabContent.map((item, index) => {
           if(index == 2){
               textstyle=null
           }
            return (
                <TouchableOpacity style={this.getTabStyle(this.props.state.currentTab == index)} key={`TopTab${index}`}
                    onPress={()=>this.props.state.currentTab = index}>
                    <Text style={[styles.tabText,textstyle]}> {item} </Text>
                </TouchableOpacity>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderTabContent()}
            </View>
        )
    }
}


