import styled from 'styled-components'
import {colors} from '../config/commonStyles'

export default styled.button`${props => {
    const styles = {
        fontSize: '1em',
        margin: '1em',
        padding: '0.25em 1em',
        border: '2px solid '+ colors.primary,
        borderRadius: '3px',
        background: 'white',
        color: colors.primary,
    };
    if(props.red) {
        styles.background = colors.primary;
        styles.color = 'white'
    }
    if(props.naked) {
        styles.background = 'transparent';
        styles.color = 'white'
    }
    
    return styles;
    }}
    
`