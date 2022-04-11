import React from 'react'
import styled from 'styled-components'
import ViewToggler from 'lx-view-toggler'

import TextInput from 'lx-text-input'
import Button from 'lx-button'
import RoundButton from 'lx-button-round'

const FormBuilder = (props) => {
    const {
        controls,
        showHeader = false,
        onCloseMenu,
        onControlAction = () => {}
    } = props

    //Functions
    const controlSelector = (control) => {
        const type = control.type
        const name = control.name
        const validations = control.validations
        const incrementControlValidator = (control && control.incrementControlValidator) || 0

        let placeholder;
        let label;
        switch(type) {
            case 'TEXT_INPUT':
                placeholder = (control && control.placeholder)
                return(
                    <TextInput 
                        placeholder={placeholder} 
                        onBlur={(value) => onControlAction(name, value)}
                        validations={validations}
                        incrementControlValidator={incrementControlValidator}>
                    </TextInput>)
            case 'PASSWORD':
                placeholder = (control && control.placeholder)
                return(
                    <TextInput 
                        placeholder={placeholder} 
                        onBlur={(value) => onControlAction(name, value)}
                        validations={validations}
                        incrementControlValidator={incrementControlValidator}>
                    </TextInput>)
            case 'BUTTON_1':
                label = (control && control.label)
                let config = {
                    buttonStyle: 'PRIMARY'
                }
                return(<Button onClick={() => onControlAction(name)} config={config}>{label}</Button>)
            case 'BUTTON_2':
                label = (control && control.label)
                return(<Button onClick={() => onControlAction(name)}>{label}</Button>)
            default:
                return null
        }
    }

    return(
        <Container>
            <ViewToggler topContent={
                    showHeader ?
                    <div>
                        <RoundButton onClick={onCloseMenu}></RoundButton>
                    </div>
                    :null
                }
                bottomContent={
                    controls.map((control, index) => {
                        return(
                            <div key={index}>
                                {
                                    controlSelector(control)
                                }
                            </div>
                        )
                    })
                }>
            </ViewToggler>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: +1;
`

export default FormBuilder