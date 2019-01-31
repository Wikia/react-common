import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ButtonGroup from '../source/components/ButtonGroup';
import Button from '../source/components/Button';

const Wrapper = styled.div`
    border: 1px solid rgba(0, 0, 0, .2);
`;

const Header = styled.header`
    background: #f0f0f0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    display: flex;
    justify-content: flex-end;
    padding: 10px;
`;

const SmallButton = styled(Button)`
    font-size: 10px;
`;

const Example = styled.div`
    padding: 20px;
`;

const WhiteExample = styled(Example)`
    background-color: #fff;
`;

const BlackExample = styled(Example)`
    background-color: #000;
`;

const TransparentExample = styled(Example)`
    background-image:
        linear-gradient(45deg, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef),
        linear-gradient(45deg, #efefef 25%, transparent 25%, transparent 75%, #efefef 75%, #efefef);
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
`;

class StyleguideExampleWrapper extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        color: 'transparent',
    };

    setTransparentColor = () => this.setState({ color: 'transparent' })

    setWhiteColor = () => this.setState({ color: 'white' })

    setBlackColor = () => this.setState({ color: 'black' })

    renderButton(name, callback) {
        const { color } = this.state;

        return (
            <SmallButton className={color === name ? '' : 'wds-is-secondary'} onClick={callback}>
                {name}
            </SmallButton>
        );
    }

    renderExample() {
        const { color } = this.state;

        switch (color) {
            case 'white': return <WhiteExample>{this.props.children}</WhiteExample>;
            case 'black': return <BlackExample>{this.props.children}</BlackExample>;
            default:
                return <TransparentExample>{this.props.children}</TransparentExample>;
        }
    }

    render() {
        return (
            <Wrapper>
                <Header>
                    <ButtonGroup>
                        {this.renderButton('transparent', this.setTransparentColor)}
                        {this.renderButton('white', this.setWhiteColor)}
                        {this.renderButton('black', this.setBlackColor)}
                    </ButtonGroup>
                </Header>
                {this.renderExample()}
            </Wrapper>
        );
    }
}

export default StyleguideExampleWrapper;
