import * as React from 'react'
import { StyleSheet, ScrollView } from 'react-native';
import autobind from 'autobind-decorator';


export type ContentBlockProps = {
    hidden?: boolean, 
    style?: any, 
    children?: any,
    scrollPosition?: ContentBlockScrollPosition
}

export class ContentBlockScrollPosition {
    position: number
}

export default class ContentBlock extends React.Component<ContentBlockProps> {

    scrollView = null;

    @autobind
    handleScroll(ev) {
        var scroll = ev.nativeEvent.contentOffset.y; 


        if(this.props.scrollPosition) {
            this.props.scrollPosition.position = scroll;
        }
    }

    @autobind
    scrollRef(scrollView) {
        
        this.scrollView = scrollView;
    }

    @autobind
    scrollFunc() {
        if(this.scrollView == null || this.props.scrollPosition == null) {
            return;
        }
        this.scrollView.scrollTo({x: 0, y: this.props.scrollPosition.position, animated: false})
    }

    componentDidMount() {
        setTimeout(this.scrollFunc, 10);
    }


    render() {
        var dyn: any = {};
        if(this.props.hidden) {
            dyn.display = 'none';
        }

        return (
            <ScrollView onScroll={this.handleScroll} style={{...contentStyle.contentBlock, ...this.props.style, ...dyn}} 
                ref={this.scrollRef}>
                {this.props.children}
            </ScrollView>
        )
    }
}


const contentStyle = StyleSheet.create({
    contentBlock: {
        flexGrow: 1,
        paddingTop: 2,
    }
})