import React from 'react';
import lottie from 'lottie-web';

class LottieControl extends React.Component {

    componentDidMount() {
        //call the loadAnimation to start the animation
        lottie.loadAnimation({
            container: this.animBox,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: this.props.animationData
        });
    }

    render() {
        return (
            <div style={{
                width: this.props.width ? this.props.width :
                    "100%", margin: '0 auto'
            }} ref={ref => this.animBox = ref}></div>
        );
    }
}

export default LottieControl;